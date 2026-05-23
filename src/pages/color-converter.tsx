import { Palette } from "lucide-react";
import { useMemo, useState } from "react";
import { PageHeader } from "@/components/layout/page-header";
import { BackHomeButton } from "@/components/layout/back-home-button";
import { CopyRow } from "@/components/shared/copy-row";
import { NumberField } from "@/components/shared/number-field";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import {
  type CMYK,
  type HSL,
  type HSV,
  type RGB,
  cmykToRgb,
  formatCmyk,
  formatHsl,
  formatHsv,
  formatRgb,
  fromRgb,
  hexToRgb,
  hslToRgb,
  hsvToRgb,
  normalizeHex,
} from "@/utils/color";

export function ColorConverterPage() {
  const [rgb, setRgb] = useState<RGB>({ r: 45, g: 108, b: 223 });
  const [hexInput, setHexInput] = useState("#2D6CDF");
  const values = useMemo(() => fromRgb(rgb), [rgb]);
  const hexError = hexInput.trim().length > 0 && !normalizeHex(hexInput);

  const updateRgb = (next: RGB) => {
    const nextValues = fromRgb(next);
    setRgb(nextValues.rgb);
    setHexInput(nextValues.hex);
  };

  const updateHex = (value: string) => {
    setHexInput(value);
    const nextRgb = hexToRgb(value);
    if (nextRgb) {
      setRgb(nextRgb);
    }
  };

  const updateHsl = (next: Partial<HSL>) => updateRgb(hslToRgb({ ...values.hsl, ...next }));
  const updateHsv = (next: Partial<HSV>) => updateRgb(hsvToRgb({ ...values.hsv, ...next }));
  const updateCmyk = (next: Partial<CMYK>) => updateRgb(cmykToRgb({ ...values.cmyk, ...next }));

  return (
    <main className="mx-auto w-[min(1120px,calc(100%-32px))] py-9">
      <BackHomeButton />
      <section className="grid items-start gap-6 lg:grid-cols-[minmax(0,1fr)_360px]">
        <div className="grid gap-6">
          <PageHeader icon={<Palette size={28} />} kicker="Color Converter" title="颜色转换" />
          <Card>
            <CardContent className="grid gap-6 pt-6">
              <div className="grid gap-2">
                <Label htmlFor="hex">HEX</Label>
                <Input id="hex" value={hexInput} onChange={(event) => updateHex(event.target.value)} placeholder="#2D6CDF" />
                {hexError ? <p className="text-sm text-destructive">请输入 3 位或 6 位 HEX，例如 #09F 或 #0099FF</p> : null}
              </div>
              <div className="grid gap-3">
                <h2 className="text-base font-semibold">RGB</h2>
                <div className="grid gap-3 sm:grid-cols-3">
                  <NumberField label="R" max={255} value={values.rgb.r} onChange={(r) => updateRgb({ ...values.rgb, r })} />
                  <NumberField label="G" max={255} value={values.rgb.g} onChange={(g) => updateRgb({ ...values.rgb, g })} />
                  <NumberField label="B" max={255} value={values.rgb.b} onChange={(b) => updateRgb({ ...values.rgb, b })} />
                </div>
              </div>
              <Separator />
              <div className="grid gap-3">
                <h2 className="text-base font-semibold">HSL</h2>
                <div className="grid gap-3 sm:grid-cols-3">
                  <NumberField label="H" max={359} value={values.hsl.h} onChange={(h) => updateHsl({ h })} />
                  <NumberField label="S" max={100} value={values.hsl.s} onChange={(s) => updateHsl({ s })} />
                  <NumberField label="L" max={100} value={values.hsl.l} onChange={(l) => updateHsl({ l })} />
                </div>
              </div>
              <Separator />
              <div className="grid gap-3">
                <h2 className="text-base font-semibold">HSV</h2>
                <div className="grid gap-3 sm:grid-cols-3">
                  <NumberField label="H" max={359} value={values.hsv.h} onChange={(h) => updateHsv({ h })} />
                  <NumberField label="S" max={100} value={values.hsv.s} onChange={(s) => updateHsv({ s })} />
                  <NumberField label="V" max={100} value={values.hsv.v} onChange={(v) => updateHsv({ v })} />
                </div>
              </div>
              <Separator />
              <div className="grid gap-3">
                <h2 className="text-base font-semibold">CMYK</h2>
                <div className="grid gap-3 sm:grid-cols-4">
                  <NumberField label="C" max={100} value={values.cmyk.c} onChange={(c) => updateCmyk({ c })} />
                  <NumberField label="M" max={100} value={values.cmyk.m} onChange={(m) => updateCmyk({ m })} />
                  <NumberField label="Y" max={100} value={values.cmyk.y} onChange={(y) => updateCmyk({ y })} />
                  <NumberField label="K" max={100} value={values.cmyk.k} onChange={(k) => updateCmyk({ k })} />
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
        <Card className="overflow-hidden lg:sticky lg:top-5">
          <div className="relative grid min-h-56 place-items-end justify-start p-5" style={{ background: values.hex }}>
            <Input
              aria-label="选择颜色"
              type="color"
              value={values.hex}
              onChange={(event) => updateHex(event.target.value)}
              className="absolute inset-0 h-full w-full cursor-pointer opacity-0"
            />
            <Badge className="relative border-white/30 bg-black/35 text-white backdrop-blur">选择颜色</Badge>
          </div>
          <CardContent className="grid gap-3 pt-4">
            <CopyRow label="HEX" value={values.hex} />
            <CopyRow label="RGB" value={formatRgb(values.rgb)} />
            <CopyRow label="HSL" value={formatHsl(values.hsl)} />
            <CopyRow label="HSV" value={formatHsv(values.hsv)} />
            <CopyRow label="CMYK" value={formatCmyk(values.cmyk)} />
          </CardContent>
        </Card>
      </section>
    </main>
  );
}
