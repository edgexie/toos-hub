import { Braces } from 'lucide-react';
import { useMemo, useState } from 'react';
import { ToolPage } from '@/components/layout/tool-page';
import { CopyRow } from '@/components/shared/copy-row';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';

const sampleJson = `{
  "name": "tools-hub",
  "version": "1.0.0",
  "enabled": true,
  "count": 42,
  "tags": ["react", "vite", "typescript"],
  "author": {
    "name": "edgex",
    "email": "edgex@example.com"
  },
  "items": [
    { "id": 1, "label": "颜色转换", "active": true },
    { "id": 2, "label": "JSON 格式化", "active": false }
  ]
}`;

function inferTypeName(key: string): string {
  return key
    .replace(/(^|_)([a-z])/g, (_, __, c: string) => c.toUpperCase())
    .replace(/^[a-z]/, (c) => c.toUpperCase());
}

function generateTypeScript(
  value: unknown,
  typeName = 'Root',
  indent = 0,
): string {
  const pad = '  '.repeat(indent);

  if (value === null) return 'null';
  if (value === undefined) return 'undefined';

  if (Array.isArray(value)) {
    if (value.length === 0) return 'unknown[]';
    const itemTypes = [
      ...new Set(value.map((v) => generateTypeScript(v, '', indent))),
    ];
    if (itemTypes.length === 1) return `${itemTypes[0]}[]`;
    return `(${itemTypes.join(' | ')})[]`;
  }

  if (typeof value === 'object') {
    const entries = Object.entries(value as Record<string, unknown>);
    if (entries.length === 0) return 'Record<string, unknown>';

    const lines = entries.map(([key, val]) => {
      const tsType = generateTypeScript(val, '', indent + 1);
      const optional = val === null || val === undefined ? '?' : '';
      return `${pad}  ${key}${optional}: ${tsType};`;
    });

    if (!typeName) return `{\n${lines.join('\n')}\n${pad}}`;
    return [`interface ${typeName} {`, ...lines, `${pad}}`].join('\n');
  }

  return typeof value;
}

type ParseResult = { error: string; parsed: unknown };

function safeParse(input: string): ParseResult {
  if (!input.trim()) return { error: '', parsed: null };
  try {
    return { error: '', parsed: JSON.parse(input) };
  } catch (error) {
    return {
      error: error instanceof Error ? error.message : 'JSON 解析失败',
      parsed: null,
    };
  }
}

export function JsonToTsPage() {
  const [input, setInput] = useState(sampleJson);
  const [typeName, setTypeName] = useState('Root');

  const result = useMemo(() => {
    const { error, parsed } = safeParse(input);
    if (error || parsed === null) return { error, ts: '' };
    const ts = generateTypeScript(parsed, typeName || 'Root');
    return { error: '', ts };
  }, [input, typeName]);

  return (
    <ToolPage
      icon={<Braces size={28} />}
      kicker="JSON → TypeScript"
      title="JSON 转 TypeScript"
    >
      <section className="grid gap-6 lg:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>输入 JSON</CardTitle>
            <CardDescription>
              粘贴 JSON 示例，自动生成 TypeScript interface / type。
            </CardDescription>
          </CardHeader>
          <CardContent className="grid gap-4">
            <Textarea
              className="min-h-80 font-mono"
              value={input}
              onChange={(event) => setInput(event.target.value)}
            />
            <div className="flex items-center gap-3">
              <label
                className="text-sm font-medium whitespace-nowrap"
                htmlFor="ts-type-name"
              >
                根类型名
              </label>
              <input
                id="ts-type-name"
                className="flex h-10 w-48 rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                value={typeName}
                onChange={(e) => setTypeName(e.target.value)}
              />
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>TypeScript 类型</CardTitle>
            <CardDescription>
              {result.error
                ? 'JSON 有错误'
                : '可复制生成的 TypeScript 类型定义'}
            </CardDescription>
          </CardHeader>
          <CardContent className="grid gap-4">
            {result.error ? (
              <p className="rounded-lg border border-destructive/30 bg-destructive/10 p-3 text-sm text-destructive">
                {result.error}
              </p>
            ) : null}
            <Textarea
              className="min-h-80 font-mono"
              readOnly
              value={result.error ? '' : result.ts}
            />
            <CopyRow label="TypeScript 类型" value={result.ts || '-'} />
          </CardContent>
        </Card>
      </section>
    </ToolPage>
  );
}
