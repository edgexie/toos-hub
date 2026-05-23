import { Clock3, RefreshCw } from "lucide-react";
import { useEffect, useMemo, useState } from "react";
import { ToolPage } from "@/components/layout/tool-page";
import { CopyRow } from "@/components/shared/copy-row";
import { DateTimePicker } from "@/components/shared/date-time-picker";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { formatDateTime, parseTimestamp } from "@/utils/date";

export function TimestampConverterPage() {
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
    <ToolPage icon={<Clock3 size={28} />} kicker="Timestamp Converter" title="时间戳转换">
      <section className="grid items-start gap-6 lg:grid-cols-[minmax(0,1fr)_360px]">
        <div className="grid gap-6">
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
    </ToolPage>
  );
}
