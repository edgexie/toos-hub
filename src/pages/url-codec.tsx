import { LinkIcon } from "lucide-react";
import { useMemo, useState } from "react";
import { ToolPage } from "@/components/layout/tool-page";
import { CopyRow } from "@/components/shared/copy-row";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";

export function UrlCodecPage() {
  const [input, setInput] = useState("https://example.com/search?q=hello world&lang=zh-CN");
  const encoded = useMemo(() => encodeURIComponent(input), [input]);
  const decoded = useMemo(() => {
    try {
      return { value: decodeURIComponent(input), error: "" };
    } catch {
      return { value: "", error: "URL 解码失败，请检查 % 编码是否完整。" };
    }
  }, [input]);
  const queryRows = useMemo(() => {
    try {
      const url = input.includes("://") ? new URL(input) : new URL(input, "https://example.com");
      return Array.from(url.searchParams.entries());
    } catch {
      return [];
    }
  }, [input]);

  return (
    <ToolPage icon={<LinkIcon size={28} />} kicker="URL Codec" title="URL 编解码">
      <section className="grid gap-6 lg:grid-cols-[minmax(0,1fr)_380px]">
        <Card>
          <CardHeader>
            <CardTitle>输入</CardTitle>
            <CardDescription>支持 URL、URL 片段和 Query 字符串。</CardDescription>
          </CardHeader>
          <CardContent className="grid gap-4">
            <Textarea className="min-h-48 font-mono" value={input} onChange={(event) => setInput(event.target.value)} />
            {decoded.error ? <p className="text-sm text-destructive">{decoded.error}</p> : null}
            <CopyRow label="encodeURIComponent" value={encoded} />
            <CopyRow label="decodeURIComponent" value={decoded.value || "-"} />
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Query 参数</CardTitle>
            <CardDescription>从输入中解析出的参数。</CardDescription>
          </CardHeader>
          <CardContent className="grid gap-3">
            {queryRows.length === 0 ? <p className="text-sm text-muted-foreground">没有解析到 Query 参数。</p> : null}
            {queryRows.map(([key, value], index) => (
              <div key={`${key}-${index}`} className="grid gap-1 rounded-lg border bg-muted/35 p-3">
                <span className="text-xs font-semibold text-muted-foreground">{key}</span>
                <strong className="break-words text-sm">{value}</strong>
              </div>
            ))}
          </CardContent>
        </Card>
      </section>
    </ToolPage>
  );
}
