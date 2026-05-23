import { Binary } from "lucide-react";
import { useMemo, useState } from "react";
import { ToolPage } from "@/components/layout/tool-page";
import { CopyRow } from "@/components/shared/copy-row";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import { decodeBase64, encodeBase64 } from "@/utils/encoding";

export function Base64CodecPage() {
  const [input, setInput] = useState("Hello，工具集");
  const encoded = useMemo(() => encodeBase64(input), [input]);
  const decoded = useMemo(() => {
    try {
      return { value: decodeBase64(input.trim()), error: "" };
    } catch {
      return { value: "", error: "Base64 解码失败，请检查输入内容。" };
    }
  }, [input]);

  return (
    <ToolPage icon={<Binary size={28} />} kicker="Base64 Codec" title="Base64 编解码">
      <section className="grid gap-6 lg:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>输入</CardTitle>
            <CardDescription>支持 UTF-8 文本编码，也可以粘贴 Base64 解码。</CardDescription>
          </CardHeader>
          <CardContent>
            <Textarea className="min-h-64 font-mono" value={input} onChange={(event) => setInput(event.target.value)} />
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>结果</CardTitle>
            <CardDescription>编码和解码结果会同时生成。</CardDescription>
          </CardHeader>
          <CardContent className="grid gap-3">
            {decoded.error ? <p className="text-sm text-destructive">{decoded.error}</p> : null}
            <CopyRow label="Base64 编码" value={encoded} />
            <CopyRow label="Base64 解码" value={decoded.value || "-"} />
          </CardContent>
        </Card>
      </section>
    </ToolPage>
  );
}
