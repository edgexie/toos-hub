import { Braces } from 'lucide-react';
import { useMemo, useState } from 'react';
import yaml from 'js-yaml';
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

const sampleYaml = `name: tools-hub
enabled: true
items:
  - id: 1
    label: 颜色转换
  - id: 2
    label: 时间戳转换
dependencies:
  react: "^19.0.0"
  vite: "^8.0.0"
`;

const sampleJson = `{
  "name": "tools-hub",
  "enabled": true,
  "items": [
    { "id": 1, "label": "颜色转换" },
    { "id": 2, "label": "时间戳转换" }
  ],
  "dependencies": {
    "react": "^19.0.0",
    "vite": "^8.0.0"
  }
}`;

type YamlResult = {
  error: string;
  formatted: string;
  compactJson: string;
};

type JsonToYamlResult = {
  error: string;
  yaml: string;
};

function formatYaml(input: string): YamlResult {
  if (!input.trim()) return { error: '', formatted: '', compactJson: '' };
  try {
    const parsed = yaml.load(input);
    const formatted = yaml.dump(parsed, {
      indent: 2,
      lineWidth: -1,
      noRefs: true,
    });
    const compactJson = JSON.stringify(parsed, null, 2);
    return { error: '', formatted, compactJson };
  } catch (error) {
    return {
      error: error instanceof Error ? error.message : 'YAML 解析失败',
      formatted: '',
      compactJson: '',
    };
  }
}

function jsonToYaml(input: string): JsonToYamlResult {
  if (!input.trim()) return { error: '', yaml: '' };
  try {
    const parsed = JSON.parse(input);
    const yamlOutput = yaml.dump(parsed, {
      indent: 2,
      lineWidth: -1,
      noRefs: true,
    });
    return { error: '', yaml: yamlOutput };
  } catch (error) {
    return {
      error: error instanceof Error ? error.message : 'JSON 解析失败',
      yaml: '',
    };
  }
}

export function YamlFormatterPage() {
  const [yamlInput, setYamlInput] = useState(sampleYaml);
  const [jsonInput, setJsonInput] = useState(sampleJson);

  const yamlResult = useMemo(() => formatYaml(yamlInput), [yamlInput]);
  const jsonResult = useMemo(() => jsonToYaml(jsonInput), [jsonInput]);

  return (
    <ToolPage
      icon={<Braces size={28} />}
      kicker="YAML / JSON"
      title="YAML 格式化 / JSON 互转"
    >
      <Tabs defaultValue="yaml">
        <TabsList className="mb-6">
          <TabsTrigger value="yaml">YAML 格式化</TabsTrigger>
          <TabsTrigger value="json">JSON 转 YAML</TabsTrigger>
        </TabsList>

        <TabsContent value="yaml">
          <section className="grid gap-6 lg:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle>输入</CardTitle>
                <CardDescription>
                  粘贴 YAML，自动校验并生成格式化结果和对应 JSON。
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Textarea
                  className="min-h-80 font-mono"
                  value={yamlInput}
                  onChange={(event) => setYamlInput(event.target.value)}
                />
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>结果</CardTitle>
                <CardDescription>
                  {yamlResult.error
                    ? 'YAML 有错误'
                    : '可复制格式化后的 YAML 和对应的 JSON'}
                </CardDescription>
              </CardHeader>
              <CardContent className="grid gap-4">
                {yamlResult.error ? (
                  <p className="rounded-lg border border-destructive/30 bg-destructive/10 p-3 text-sm text-destructive">
                    {yamlResult.error}
                  </p>
                ) : null}
                <Textarea
                  className="min-h-80 font-mono"
                  readOnly
                  value={yamlResult.error ? '' : yamlResult.formatted}
                />
                <div className="grid gap-3 sm:grid-cols-2">
                  <CopyRow
                    label="格式化 YAML"
                    value={yamlResult.formatted || '-'}
                  />
                  <CopyRow
                    label="对应 JSON"
                    value={yamlResult.compactJson || '-'}
                  />
                </div>
              </CardContent>
            </Card>
          </section>
        </TabsContent>

        <TabsContent value="json">
          <section className="grid gap-6 lg:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle>输入</CardTitle>
                <CardDescription>
                  粘贴 JSON，自动转换为 YAML 格式。
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Textarea
                  className="min-h-80 font-mono"
                  value={jsonInput}
                  onChange={(event) => setJsonInput(event.target.value)}
                />
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>结果</CardTitle>
                <CardDescription>
                  {jsonResult.error ? 'JSON 有错误' : '可复制转换后的 YAML'}
                </CardDescription>
              </CardHeader>
              <CardContent className="grid gap-4">
                {jsonResult.error ? (
                  <p className="rounded-lg border border-destructive/30 bg-destructive/10 p-3 text-sm text-destructive">
                    {jsonResult.error}
                  </p>
                ) : null}
                <Textarea
                  className="min-h-80 font-mono"
                  readOnly
                  value={jsonResult.error ? '' : jsonResult.yaml}
                />
                <CopyRow label="转换结果 YAML" value={jsonResult.yaml || '-'} />
              </CardContent>
            </Card>
          </section>
        </TabsContent>
      </Tabs>
    </ToolPage>
  );
}
