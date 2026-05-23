import { Braces } from "lucide-react";
import { useMemo, useState } from "react";
import { ToolPage } from "@/components/layout/tool-page";
import { CopyRow } from "@/components/shared/copy-row";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

export function JsonFormatterPage() {
  const [input, setInput] = useState('{"name":"tools-hub","enabled":true,"items":[1,2,3]}');
  const [indent, setIndent] = useState(2);

  const result = useMemo(() => {
    try {
      const parsed = JSON.parse(input);
      return { error: "", formatted: JSON.stringify(parsed, null, indent), compact: JSON.stringify(parsed) };
    } catch (error) {
      return { error: error instanceof Error ? error.message : "JSON 解析失败", formatted: "", compact: "" };
    }
  }, [indent, input]);

  return (
    <ToolPage icon={<Braces size={28} />} kicker="JSON Formatter" title="JSON 格式化">
      <section className="grid gap-6 lg:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>输入</CardTitle>
            <CardDescription>粘贴 JSON，自动校验并生成格式化结果。</CardDescription>
          </CardHeader>
          <CardContent className="grid gap-4">
            <Textarea className="min-h-80 font-mono" value={input} onChange={(event) => setInput(event.target.value)} />
            <div className="grid gap-2 sm:w-48">
              <Label htmlFor="json-indent">缩进空格</Label>
              <Input id="json-indent" type="number" min={0} max={8} value={indent} onChange={(event) => setIndent(Number(event.target.value))} />
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>结果</CardTitle>
            <CardDescription>{result.error ? "JSON 有错误" : "可复制格式化或压缩后的 JSON"}</CardDescription>
          </CardHeader>
          <CardContent className="grid gap-4">
            {result.error ? <p className="rounded-lg border border-destructive/30 bg-destructive/10 p-3 text-sm text-destructive">{result.error}</p> : null}
            <Textarea className="min-h-80 font-mono" readOnly value={result.error ? "" : result.formatted} />
            <div className="grid gap-3 sm:grid-cols-2">
              <CopyRow label="格式化 JSON" value={result.formatted || "-"} />
              <CopyRow label="压缩 JSON" value={result.compact || "-"} />
            </div>
          </CardContent>
        </Card>
      </section>
    </ToolPage>
  );
}
