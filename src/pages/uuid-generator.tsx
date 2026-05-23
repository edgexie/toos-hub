import { KeyRound, RefreshCw } from "lucide-react";
import { useState } from "react";
import { ToolPage } from "@/components/layout/tool-page";
import { CopyRow } from "@/components/shared/copy-row";
import { NumberField } from "@/components/shared/number-field";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";

export function UuidGeneratorPage() {
  const [count, setCount] = useState(5);
  const [uppercase, setUppercase] = useState(false);
  const [uuids, setUuids] = useState(() => Array.from({ length: 5 }, () => crypto.randomUUID()));

  const generate = () => {
    const safeCount = Math.min(100, Math.max(1, Math.round(count)));
    setCount(safeCount);
    setUuids(Array.from({ length: safeCount }, () => crypto.randomUUID()));
  };

  const output = uuids.map((uuid) => (uppercase ? uuid.toUpperCase() : uuid)).join("\n");

  return (
    <ToolPage icon={<KeyRound size={28} />} kicker="UUID Generator" title="UUID 生成器">
      <section className="grid gap-6 lg:grid-cols-[minmax(0,1fr)_380px]">
        <Card>
          <CardHeader>
            <CardTitle>生成结果</CardTitle>
            <CardDescription>批量生成 UUID v4。</CardDescription>
          </CardHeader>
          <CardContent className="grid gap-4">
            <Textarea className="min-h-80 font-mono" readOnly value={output} />
            <CopyRow label="全部 UUID" value={output} />
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>控制</CardTitle>
            <CardDescription>最多一次生成 100 个。</CardDescription>
          </CardHeader>
          <CardContent className="grid gap-4">
            <NumberField label="数量" min={1} max={100} value={count} onChange={setCount} />
            <Button variant={uppercase ? "default" : "outline"} type="button" onClick={() => setUppercase((value) => !value)}>
              {uppercase ? "大写输出" : "小写输出"}
            </Button>
            <Button type="button" onClick={generate}>
              <RefreshCw />
              重新生成
            </Button>
          </CardContent>
        </Card>
      </section>
    </ToolPage>
  );
}
