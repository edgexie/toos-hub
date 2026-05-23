import { Paintbrush } from "lucide-react";
import { useState } from "react";
import { ToolPage } from "@/components/layout/tool-page";
import { CopyRow } from "@/components/shared/copy-row";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export function GradientGeneratorPage() {
  const [colorA, setColorA] = useState("#2D6CDF");
  const [colorB, setColorB] = useState("#14B8A6");
  const [angle, setAngle] = useState(135);
  const css = `linear-gradient(${angle}deg, ${colorA}, ${colorB})`;

  return (
    <ToolPage icon={<Paintbrush size={28} />} kicker="Gradient Generator" title="Gradient 生成器">
      <section className="grid gap-6 lg:grid-cols-[minmax(0,1fr)_380px]">
        <Card>
          <CardHeader>
            <CardTitle>预览</CardTitle>
            <CardDescription>调整颜色和角度，生成 CSS 渐变。</CardDescription>
          </CardHeader>
          <CardContent className="grid gap-5">
            <div className="h-72 rounded-lg border" style={{ background: css }} />
            <CopyRow label="CSS" value={css} />
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>控制</CardTitle>
            <CardDescription>当前先支持线性渐变，后续可以加多色 stop。</CardDescription>
          </CardHeader>
          <CardContent className="grid gap-4">
            <div className="grid gap-2">
              <Label htmlFor="gradient-a">起始颜色</Label>
              <Input id="gradient-a" type="color" value={colorA} onChange={(event) => setColorA(event.target.value)} />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="gradient-b">结束颜色</Label>
              <Input id="gradient-b" type="color" value={colorB} onChange={(event) => setColorB(event.target.value)} />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="gradient-angle">角度</Label>
              <Input id="gradient-angle" type="number" min={0} max={360} value={angle} onChange={(event) => setAngle(Number(event.target.value))} />
            </div>
          </CardContent>
        </Card>
      </section>
    </ToolPage>
  );
}
