import { Fingerprint } from "lucide-react";
import { useEffect, useState } from "react";
import { ToolPage } from "@/components/layout/tool-page";
import { CopyRow } from "@/components/shared/copy-row";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import { bytesToHex, digestAlgorithms } from "@/utils/hash";

export function HashGeneratorPage() {
  const [input, setInput] = useState("tools-hub");
  const [hashes, setHashes] = useState<Record<(typeof digestAlgorithms)[number], string>>({
    "SHA-1": "",
    "SHA-256": "",
    "SHA-384": "",
    "SHA-512": "",
  });

  useEffect(() => {
    let cancelled = false;
    const run = async () => {
      const bytes = new TextEncoder().encode(input);
      const entries = await Promise.all(
        digestAlgorithms.map(async (algorithm) => {
          const digest = await crypto.subtle.digest(algorithm, bytes);
          return [algorithm, bytesToHex(digest)] as const;
        }),
      );
      if (!cancelled) {
        setHashes(Object.fromEntries(entries) as Record<(typeof digestAlgorithms)[number], string>);
      }
    };
    void run();
    return () => {
      cancelled = true;
    };
  }, [input]);

  return (
    <ToolPage icon={<Fingerprint size={28} />} kicker="Hash Generator" title="Hash 生成器">
      <section className="grid gap-6 lg:grid-cols-[minmax(0,1fr)_420px]">
        <Card>
          <CardHeader>
            <CardTitle>输入</CardTitle>
            <CardDescription>基于浏览器 Web Crypto API 生成文本摘要。</CardDescription>
          </CardHeader>
          <CardContent>
            <Textarea className="min-h-72 font-mono" value={input} onChange={(event) => setInput(event.target.value)} />
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>结果</CardTitle>
            <CardDescription>常用 SHA 摘要。</CardDescription>
          </CardHeader>
          <CardContent className="grid gap-3">
            {digestAlgorithms.map((algorithm) => (
              <CopyRow key={algorithm} label={algorithm} value={hashes[algorithm] || "-"} />
            ))}
          </CardContent>
        </Card>
      </section>
    </ToolPage>
  );
}
