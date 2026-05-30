import { FileCode } from 'lucide-react';
import { useMemo, useState } from 'react';
import { XMLParser, XMLBuilder } from 'fast-xml-parser';
import { ToolPage } from '@/components/layout/tool-page';
import { CopyRow } from '@/components/shared/copy-row';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Textarea } from '@/components/ui/textarea';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

const sampleXml = `<?xml version="1.0" encoding="UTF-8"?>
<root>
  <person name="Alice" age="30">
    <email>alice@example.com</email>
    <skills>
      <skill>TypeScript</skill>
      <skill>React</skill>
    </skills>
  </person>
</root>`;

const parser = new XMLParser({
  ignoreAttributes: false,
  attributeNamePrefix: '@_',
});
const builder = new XMLBuilder({
  format: true,
  ignoreAttributes: false,
  attributeNamePrefix: '@_',
  suppressEmptyNode: true,
});
const compactBuilder = new XMLBuilder({
  format: false,
  ignoreAttributes: false,
  attributeNamePrefix: '@_',
  suppressEmptyNode: true,
});

type XmlResult = {
  error: string;
  formatted: string;
  compact: string;
  json: string;
};

function formatXml(input: string): XmlResult {
  if (!input.trim()) return { error: '', formatted: '', compact: '', json: '' };
  try {
    const parsed = parser.parse(input);
    const formatted = builder.build(parsed);
    const compact = compactBuilder.build(parsed);
    const json = JSON.stringify(parsed, null, 2);
    return { error: '', formatted, compact, json };
  } catch (error) {
    return {
      error: error instanceof Error ? error.message : 'XML 解析失败',
      formatted: '',
      compact: '',
      json: '',
    };
  }
}

export function XmlFormatterPage() {
  const [input, setInput] = useState(sampleXml);
  const result = useMemo(() => formatXml(input), [input]);

  return (
    <ToolPage
      icon={<FileCode size={28} />}
      kicker="XML Formatter"
      title="XML 格式化"
    >
      <section className="grid gap-6">
        <Card>
          <CardHeader>
            <CardTitle>输入 XML</CardTitle>
            <CardDescription>
              粘贴 XML，自动校验并生成格式化、压缩结果和对应 JSON。
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Textarea
              className="min-h-52 font-mono"
              value={input}
              onChange={(event) => setInput(event.target.value)}
            />
          </CardContent>
        </Card>

        {result.error ? (
          <p className="rounded-lg border border-destructive/30 bg-destructive/10 p-3 text-sm text-destructive">
            {result.error}
          </p>
        ) : result.formatted ? (
          <Tabs defaultValue="formatted">
            <TabsList className="mb-4">
              <TabsTrigger value="formatted">格式化 XML</TabsTrigger>
              <TabsTrigger value="compact">压缩 XML</TabsTrigger>
              <TabsTrigger value="json">XML → JSON</TabsTrigger>
            </TabsList>
            <TabsContent value="formatted">
              <Card>
                <CardContent className="pt-6 grid gap-4">
                  <Textarea
                    className="min-h-64 font-mono"
                    readOnly
                    value={result.formatted}
                  />
                  <CopyRow label="格式化 XML" value={result.formatted} />
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="compact">
              <Card>
                <CardContent className="pt-6 grid gap-4">
                  <Textarea
                    className="min-h-32 font-mono"
                    readOnly
                    value={result.compact}
                  />
                  <CopyRow label="压缩 XML" value={result.compact} />
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="json">
              <Card>
                <CardContent className="pt-6 grid gap-4">
                  <Textarea
                    className="min-h-64 font-mono"
                    readOnly
                    value={result.json}
                  />
                  <CopyRow label="对应 JSON" value={result.json} />
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        ) : null}
      </section>
    </ToolPage>
  );
}
