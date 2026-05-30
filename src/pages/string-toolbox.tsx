import { CaseSensitive, Copy } from 'lucide-react';
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
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

const sampleText = `helloWorld
some-example_text
  extra spaces  
duplicate
duplicate
apple
banana
apple`;

type Transforms = Record<string, (text: string) => string>;

const transforms: Transforms = {
  toUpper: (t) => t.toUpperCase(),
  toLower: (t) => t.toLowerCase(),
  toCamel: (t) =>
    t
      .replace(/[-_\s]+(.)?/g, (_, c: string) => (c ? c.toUpperCase() : ''))
      .replace(/^[A-Z]/, (c) => c.toLowerCase()),
  toKebab: (t) =>
    t
      .replace(/([a-z])([A-Z])/g, '$1-$2')
      .replace(/[\s_]+/g, '-')
      .toLowerCase(),
  toSnake: (t) =>
    t
      .replace(/([a-z])([A-Z])/g, '$1_$2')
      .replace(/[\s-]+/g, '_')
      .toLowerCase(),
  toPascal: (t) =>
    t
      .replace(/[-_\s]+(.)?/g, (_, c: string) => (c ? c.toUpperCase() : ''))
      .replace(/^[a-z]/, (c) => c.toUpperCase()),
  trim: (t) => t.trim(),
  removeEmptyLines: (t) =>
    t
      .split('\n')
      .filter((line) => line.trim() !== '')
      .join('\n'),
  dedupeLines: (t) => {
    const seen = new Set<string>();
    return t
      .split('\n')
      .filter((line) => {
        if (seen.has(line)) return false;
        seen.add(line);
        return true;
      })
      .join('\n');
  },
  sortLines: (t) => t.split('\n').sort().join('\n'),
};

const labelMap: Record<string, string> = {
  toUpper: '全大写',
  toLower: '全小写',
  toCamel: '驼峰 camelCase',
  toKebab: '短横线 kebab-case',
  toSnake: '下划线 snake_case',
  toPascal: '帕斯卡 PascalCase',
  trim: '去除首尾空格',
  removeEmptyLines: '去除空行',
  dedupeLines: '去除重复行',
  sortLines: '行排序 A→Z',
};

type StatResult = {
  chars: number;
  words: number;
  lines: number;
  bytes: number;
};

function computeStats(text: string): StatResult {
  const lines = text === '' ? 0 : text.split('\n').length;
  const chars = text.length;
  const words = text.trim() === '' ? 0 : text.trim().split(/\s+/).length;
  const bytes = new TextEncoder().encode(text).length;
  return { chars, words, lines, bytes };
}

export function StringToolboxPage() {
  const [input, setInput] = useState(sampleText);
  const stats = useMemo(() => computeStats(input), [input]);

  return (
    <ToolPage
      icon={<CaseSensitive size={28} />}
      kicker="String Toolbox"
      title="字符串工具箱"
    >
      <section className="grid gap-6 lg:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>输入</CardTitle>
            <CardDescription>粘贴文本，下方选择转换操作。</CardDescription>
          </CardHeader>
          <CardContent>
            <Textarea
              className="min-h-64 font-mono"
              value={input}
              onChange={(event) => setInput(event.target.value)}
            />
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>统计</CardTitle>
            <CardDescription>字符数、词数、行数、字节数</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
              {[
                { label: '字符数', value: stats.chars },
                { label: '词数', value: stats.words },
                { label: '行数', value: stats.lines },
                { label: '字节数', value: stats.bytes },
              ].map((s) => (
                <div
                  key={s.label}
                  className="rounded-lg border bg-muted/35 p-3 text-center"
                >
                  <div className="text-2xl font-bold">
                    {s.value.toLocaleString()}
                  </div>
                  <div className="text-xs text-muted-foreground">{s.label}</div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </section>

      <Card>
        <CardHeader>
          <CardTitle>转换操作</CardTitle>
          <CardDescription>点击操作按钮，查看转换结果并可复制</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {Object.entries(transforms).map(([key, fn]) => {
              const result = fn(input);
              return (
                <div
                  key={key}
                  className="grid gap-2 rounded-lg border bg-muted/25 p-4"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-semibold">
                      {labelMap[key] ?? key}
                    </span>
                  </div>
                  <Textarea
                    className="min-h-20 font-mono text-sm"
                    readOnly
                    value={result}
                  />
                  <CopyRow label={labelMap[key] ?? key} value={result} />
                </div>
              );
            })}
          </div>
        </CardContent>
      </Card>
    </ToolPage>
  );
}
