import {
  ArrowRight,
  Binary,
  Braces,
  CalendarIcon,
  Check,
  Clipboard,
  Clock3,
  Home,
  LinkIcon,
  Palette,
  Paintbrush,
  RefreshCw,
  Ruler,
  Search,
  Wrench,
} from "lucide-react";
import { zhCN } from "date-fns/locale/zh-CN";
import { useEffect, useMemo, useState } from "react";
import { Link, Navigate, Route, Routes } from "react-router";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Separator } from "@/components/ui/separator";
import { Textarea } from "@/components/ui/textarea";
import { tools } from "@/tools/registry";
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

type NumberFieldProps = {
  label: string;
  max: number;
  min?: number;
  onChange: (value: number) => void;
  value: number;
};

const pad = (value: number) => String(value).padStart(2, "0");

const toTimeValue = (date: Date) => `${pad(date.getHours())}:${pad(date.getMinutes())}:${pad(date.getSeconds())}`;

const formatDateInput = (date: Date) =>
  `${date.getFullYear()}-${pad(date.getMonth() + 1)}-${pad(date.getDate())} ${toTimeValue(date)}`;

const formatDateTime = (date: Date) =>
  new Intl.DateTimeFormat("zh-CN", {
    dateStyle: "medium",
    timeStyle: "medium",
  }).format(date);

const parseTimestamp = (value: string) => {
  const trimmed = value.trim();
  if (!/^-?\d+$/.test(trimmed)) {
    return null;
  }

  const numberValue = Number(trimmed);
  if (!Number.isSafeInteger(numberValue)) {
    return null;
  }

  return trimmed.length <= 10 ? numberValue * 1000 : numberValue;
};

const encodeBase64 = (value: string) => {
  const bytes = new TextEncoder().encode(value);
  let binary = "";
  bytes.forEach((byte) => {
    binary += String.fromCharCode(byte);
  });
  return btoa(binary);
};

const decodeBase64 = (value: string) => {
  const binary = atob(value);
  const bytes = Uint8Array.from(binary, (char) => char.charCodeAt(0));
  return new TextDecoder().decode(bytes);
};

function ToolPage({
  children,
  icon,
  kicker,
  title,
}: {
  children: React.ReactNode;
  icon: React.ReactNode;
  kicker: string;
  title: string;
}) {
  return (
    <main className="mx-auto w-[min(1120px,calc(100%-32px))] py-9">
      <BackHomeButton />
      <div className="grid gap-6">
        <PageHeader icon={icon} kicker={kicker} title={title} />
        {children}
      </div>
    </main>
  );
}

const NumberField = ({ label, max, min = 0, onChange, value }: NumberFieldProps) => (
  <div className="grid gap-2">
    <Label htmlFor={label}>{label}</Label>
    <Input
      id={label}
      max={max}
      min={min}
      type="number"
      value={value}
      onChange={(event) => onChange(Number(event.target.value))}
    />
  </div>
);

function CopyRow({ label, value }: { label: string; value: string }) {
  const [copied, setCopied] = useState(false);

  const copy = async () => {
    await navigator.clipboard.writeText(value);
    setCopied(true);
    window.setTimeout(() => setCopied(false), 1200);
  };

  return (
    <div className="grid grid-cols-[minmax(0,1fr)_auto] items-center gap-3 rounded-lg border bg-muted/35 p-3">
      <div className="grid min-w-0 gap-1">
        <span className="text-xs font-semibold text-muted-foreground">{label}</span>
        <strong className="break-words text-sm">{value}</strong>
      </div>
      <Button variant="outline" size="icon" type="button" onClick={copy} aria-label={`复制 ${label}`}>
        {copied ? <Check /> : <Clipboard />}
      </Button>
    </div>
  );
}

function DateTimePicker({ value, onChange }: { value: Date; onChange: (date: Date) => void }) {
  const [open, setOpen] = useState(false);

  const updateDate = (date?: Date) => {
    if (!date) {
      return;
    }

    const next = new Date(date);
    next.setHours(value.getHours(), value.getMinutes(), value.getSeconds(), 0);
    onChange(next);
  };

  const updateTime = (time: string) => {
    const [hours = "0", minutes = "0", seconds = "0"] = time.split(":");
    const next = new Date(value);
    next.setHours(Number(hours), Number(minutes), Number(seconds), 0);
    onChange(next);
  };

  return (
    <div className="grid gap-2">
      <Label>本地日期时间</Label>
      <div className="grid gap-2 sm:grid-cols-[1fr_150px]">
        <Popover open={open} onOpenChange={setOpen}>
          <PopoverTrigger asChild>
            <Button variant="outline" type="button" className="h-10 justify-start text-left font-normal">
              <CalendarIcon />
              {formatDateInput(value)}
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-auto p-0" align="start" side="bottom" avoidCollisions={false}>
            <Calendar mode="single" selected={value} onSelect={updateDate} locale={zhCN} />
          </PopoverContent>
        </Popover>
        <Input aria-label="选择时间" type="time" step="1" value={toTimeValue(value)} onChange={(event) => updateTime(event.target.value)} />
      </div>
    </div>
  );
}

function PageHeader({
  icon,
  kicker,
  title,
}: {
  icon: React.ReactNode;
  kicker: string;
  title: string;
}) {
  return (
    <div className="flex items-center gap-4">
      <div className="text-primary">{icon}</div>
      <div>
        <p className="text-xs font-semibold uppercase text-muted-foreground">{kicker}</p>
        <h1 className="text-4xl font-bold tracking-normal sm:text-6xl">{title}</h1>
      </div>
    </div>
  );
}

function HomeView() {
  const [query, setQuery] = useState("");
  const normalizedQuery = query.trim().toLowerCase();
  const filteredTools = normalizedQuery
    ? tools.filter((tool) => `${tool.title} ${tool.summary}`.toLowerCase().includes(normalizedQuery))
    : tools;

  return (
    <main className="mx-auto w-[min(1120px,calc(100%-32px))] py-10">
      <section className="grid gap-5 border-b pb-8">
        <PageHeader icon={<Wrench size={30} />} kicker="Tools Hub" title="常用工具集" />
        <p className="max-w-2xl text-base leading-8 text-muted-foreground">
          把高频小工具集中到一个干净的入口里。先从颜色转换和时间戳转换开始，后续可以继续添加编码、文本、图片等工具。
        </p>
        <div className="relative max-w-xl">
          <Search className="pointer-events-none absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" />
          <Input
            aria-label="搜索工具"
            className="pl-9"
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="搜索工具，例如 JSON、颜色、Base64"
          />
        </div>
      </section>

      <section className="grid grid-cols-1 gap-4 pt-7 md:grid-cols-2" aria-label="工具入口">
        {filteredTools.map((tool) => {
          const Icon = tool.icon;
          return (
            <Card
              key={tool.id}
              className="transition hover:-translate-y-0.5 hover:shadow-lg"
            >
              <Link to={tool.path} className="block text-left">
                <CardHeader className="grid grid-cols-[auto_1fr_auto] items-center gap-4">
                <div className="grid size-12 place-items-center rounded-lg bg-primary/10 text-primary">
                  <Icon size={24} />
                </div>
                <div>
                  <div className="mb-2 flex flex-wrap items-center gap-2">
                    <CardTitle className="text-lg">{tool.title}</CardTitle>
                    <Badge variant="secondary">{tool.status}</Badge>
                  </div>
                  <CardDescription>{tool.summary}</CardDescription>
                </div>
                <ArrowRight className="text-muted-foreground" size={20} />
                </CardHeader>
              </Link>
            </Card>
          );
        })}
        {filteredTools.length === 0 ? (
          <Card className="md:col-span-2">
            <CardContent className="grid gap-2 py-10 text-center">
              <CardTitle>没有找到匹配的工具</CardTitle>
              <CardDescription>换一个关键词试试，比如 JSON、URL、颜色或时间戳。</CardDescription>
            </CardContent>
          </Card>
        ) : null}
      </section>
    </main>
  );
}

function BackHomeButton() {
  return (
    <Button variant="outline" asChild className="mb-6">
      <Link to="/">
        <Home />
        返回入口
      </Link>
    </Button>
  );
}

function ColorConverter() {
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

function TimestampConverter() {
  const [now, setNow] = useState(() => Date.now());
  const [timestampInput, setTimestampInput] = useState(() => String(Date.now()));
  const [selectedDate, setSelectedDate] = useState(() => new Date());

  useEffect(() => {
    const timer = window.setInterval(() => setNow(Date.now()), 1000);
    return () => window.clearInterval(timer);
  }, []);

  const parsedTimestamp = useMemo(() => parseTimestamp(timestampInput), [timestampInput]);
  const convertedDate = parsedTimestamp === null ? null : new Date(parsedTimestamp);

  const useCurrentTime = () => {
    const current = new Date();
    setNow(current.getTime());
    setTimestampInput(String(current.getTime()));
    setSelectedDate(current);
  };

  const applyTimestampInput = (value: string) => {
    setTimestampInput(value);
    const nextTimestamp = parseTimestamp(value);
    if (nextTimestamp !== null) {
      setSelectedDate(new Date(nextTimestamp));
    }
  };

  const applyDateInput = (date: Date) => {
    setSelectedDate(date);
    setTimestampInput(String(date.getTime()));
  };

  return (
    <main className="mx-auto w-[min(1120px,calc(100%-32px))] py-9">
      <BackHomeButton />

      <section className="grid items-start gap-6 lg:grid-cols-[minmax(0,1fr)_360px]">
        <div className="grid gap-6">
          <PageHeader icon={<Clock3 size={28} />} kicker="Timestamp Converter" title="时间戳转换" />

          <Card>
            <CardContent className="grid gap-6 pt-6">
              <Card className="bg-muted/45">
                <CardHeader className="grid gap-4 sm:grid-cols-[1fr_auto] sm:items-center">
                  <div>
                    <CardDescription>当前时间戳</CardDescription>
                    <CardTitle className="mt-1 text-3xl">{Math.floor(now / 1000)}</CardTitle>
                    <p className="mt-1 font-mono text-sm text-muted-foreground">{now}</p>
                  </div>
                  <Button variant="outline" type="button" onClick={useCurrentTime}>
                    <RefreshCw />
                    使用当前时间
                  </Button>
                </CardHeader>
              </Card>

              <div className="grid gap-2">
                <Label htmlFor="timestamp">时间戳（秒 / 毫秒）</Label>
                <Input
                  id="timestamp"
                  inputMode="numeric"
                  value={timestampInput}
                  onChange={(event) => applyTimestampInput(event.target.value)}
                  placeholder="秒级或毫秒级，例如 1716451200 / 1716451200000"
                />
                {parsedTimestamp === null ? <p className="text-sm text-destructive">请输入秒级或毫秒级整数时间戳</p> : null}
              </div>

              <DateTimePicker value={selectedDate} onChange={applyDateInput} />

              <div className="grid gap-3 sm:grid-cols-2">
                <CopyRow label="秒级时间戳" value={String(Math.floor(selectedDate.getTime() / 1000))} />
                <CopyRow label="毫秒时间戳" value={String(selectedDate.getTime())} />
              </div>
            </CardContent>
          </Card>
        </div>

        <Card className="overflow-hidden lg:sticky lg:top-5">
          <CardHeader className="bg-primary text-primary-foreground">
            <CardDescription className="text-primary-foreground/75">转换结果</CardDescription>
            <CardTitle className="break-words text-2xl">{convertedDate ? formatDateTime(convertedDate) : "无效时间戳"}</CardTitle>
          </CardHeader>
          <CardContent className="grid gap-3 pt-4">
            <CopyRow label="本地时间" value={convertedDate ? formatDateTime(convertedDate) : "-"} />
            <CopyRow label="ISO 8601" value={convertedDate ? convertedDate.toISOString() : "-"} />
            <CopyRow label="UTC" value={convertedDate ? convertedDate.toUTCString() : "-"} />
            <CopyRow label="秒级时间戳" value={convertedDate ? String(Math.floor(convertedDate.getTime() / 1000)) : "-"} />
            <CopyRow label="毫秒时间戳" value={convertedDate ? String(convertedDate.getTime()) : "-"} />
          </CardContent>
        </Card>
      </section>
    </main>
  );
}

function JsonFormatter() {
  const [input, setInput] = useState('{"name":"tools-hub","enabled":true,"items":[1,2,3]}');
  const [indent, setIndent] = useState(2);

  const result = useMemo(() => {
    try {
      const parsed = JSON.parse(input);
      return {
        error: "",
        formatted: JSON.stringify(parsed, null, indent),
        compact: JSON.stringify(parsed),
      };
    } catch (error) {
      return {
        error: error instanceof Error ? error.message : "JSON 解析失败",
        formatted: "",
        compact: "",
      };
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

function UrlCodec() {
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

function Base64Codec() {
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

function CssUnitConverter() {
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

function GradientGenerator() {
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

export function App() {
  return (
    <Routes>
      <Route path="/" element={<HomeView />} />
      <Route path="/color-converter" element={<ColorConverter />} />
      <Route path="/timestamp-converter" element={<TimestampConverter />} />
      <Route path="/json-formatter" element={<JsonFormatter />} />
      <Route path="/url-codec" element={<UrlCodec />} />
      <Route path="/base64-codec" element={<Base64Codec />} />
      <Route path="/css-unit-converter" element={<CssUnitConverter />} />
      <Route path="/gradient-generator" element={<GradientGenerator />} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}
