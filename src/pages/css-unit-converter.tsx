import { Ruler } from "lucide-react";
import { useState } from "react";
import { ToolPage } from "@/components/layout/tool-page";
import { CopyRow } from "@/components/shared/copy-row";
import { NumberField } from "@/components/shared/number-field";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export function CssUnitConverterPage() {
  const [px, setPx] = useState(16);
  const [rootSize, setRootSize] = useState(16);
  const [viewportWidth, setViewportWidth] = useState(1440);
  const [viewportHeight, setViewportHeight] = useState(900);
  const rem = px / rootSize;
  const vw = (px / viewportWidth) * 100;
  const vh = (px / viewportHeight) * 100;

  return (
    <ToolPage icon={<Ruler size={28} />} kicker="CSS Unit Converter" title="CSS 单位换算">
      <section className="grid gap-6 lg:grid-cols-[minmax(0,1fr)_380px]">
        <Card>
          <CardHeader>
            <CardTitle>参数</CardTitle>
            <CardDescription>输入 px 值，并设置根字号和视口尺寸。</CardDescription>
          </CardHeader>
          <CardContent className="grid gap-4 sm:grid-cols-2">
            <NumberField label="PX" min={0} max={100000} value={px} onChange={setPx} />
            <NumberField label="Root Font Size" min={1} max={200} value={rootSize} onChange={setRootSize} />
            <NumberField label="Viewport Width" min={1} max={10000} value={viewportWidth} onChange={setViewportWidth} />
            <NumberField label="Viewport Height" min={1} max={10000} value={viewportHeight} onChange={setViewportHeight} />
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>换算结果</CardTitle>
            <CardDescription>常用 CSS 单位输出。</CardDescription>
          </CardHeader>
          <CardContent className="grid gap-3">
            <CopyRow label="px" value={`${px}px`} />
            <CopyRow label="rem" value={`${rem.toFixed(4)}rem`} />
            <CopyRow label="em" value={`${rem.toFixed(4)}em`} />
            <CopyRow label="vw" value={`${vw.toFixed(4)}vw`} />
            <CopyRow label="vh" value={`${vh.toFixed(4)}vh`} />
          </CardContent>
        </Card>
      </section>
    </ToolPage>
  );
}
