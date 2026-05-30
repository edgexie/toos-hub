import { Clock3 } from 'lucide-react';
import { useMemo, useState } from 'react';
import { CronExpressionParser } from 'cron-parser';
import { ToolPage } from '@/components/layout/tool-page';
import { CopyRow } from '@/components/shared/copy-row';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

const fieldDescriptions: Record<string, string> = {
  second: '秒 (0-59)',
  minute: '分 (0-59)',
  hour: '时 (0-23)',
  dayOfMonth: '日 (1-31)',
  month: '月 (1-12)',
  dayOfWeek: '星期 (0-7，0 和 7 均表示周日)',
};

const sampleCron = '0 9 * * 1-5';

export function CronParserPage() {
  const [input, setInput] = useState(sampleCron);
  const [count, setCount] = useState(5);

  const result = useMemo(() => {
    if (!input.trim())
      return {
        error: '',
        fields: null as Record<string, string> | null,
        nextDates: [] as string[],
      };

    try {
      const interval = CronExpressionParser.parse(input.trim());
      const raw = interval.fields;
      const fields: Record<string, string> = {
        second: String(raw.second?.options?.rawValue ?? ''),
        minute: String(raw.minute?.options?.rawValue ?? ''),
        hour: String(raw.hour?.options?.rawValue ?? ''),
        dayOfMonth: String(raw.dayOfMonth?.options?.rawValue ?? ''),
        month: String(raw.month?.options?.rawValue ?? ''),
        dayOfWeek: String(raw.dayOfWeek?.options?.rawValue ?? ''),
      };

      const nextDates: string[] = [];
      for (let i = 0; i < count; i++) {
        nextDates.push(interval.next().toLocaleString('zh-CN'));
      }

      return { error: '', fields, nextDates };
    } catch (error) {
      return {
        error: error instanceof Error ? error.message : 'Cron 表达式解析失败',
        fields: null,
        nextDates: [],
      };
    }
  }, [input, count]);

  return (
    <ToolPage
      icon={<Clock3 size={28} />}
      kicker="Cron Parser"
      title="Cron 表达式解析"
    >
      <section className="grid gap-6">
        <Card>
          <CardHeader>
            <CardTitle>输入 Cron 表达式</CardTitle>
            <CardDescription>
              输入标准 5 段或 6 段 Cron 表达式，解析各字段含义并预览执行时间。
            </CardDescription>
          </CardHeader>
          <CardContent className="grid gap-4 sm:grid-cols-[1fr_auto]">
            <Input
              className="font-mono"
              placeholder="例如：0 9 * * 1-5"
              value={input}
              onChange={(event) => setInput(event.target.value)}
            />
            <div className="grid gap-2 sm:w-48">
              <Label htmlFor="cron-count">预览次数</Label>
              <Input
                id="cron-count"
                type="number"
                min={1}
                max={20}
                value={count}
                onChange={(event) => setCount(Number(event.target.value))}
              />
            </div>
          </CardContent>
        </Card>

        {result.error ? (
          <p className="rounded-lg border border-destructive/30 bg-destructive/10 p-3 text-sm text-destructive">
            {result.error}
          </p>
        ) : result.fields ? (
          <>
            <Card>
              <CardHeader>
                <CardTitle>字段解析</CardTitle>
                <CardDescription>各字段含义与取值范围</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid gap-2 sm:grid-cols-2 lg:grid-cols-3">
                  {Object.entries(fieldDescriptions).map(([key, desc]) => (
                    <div
                      key={key}
                      className="flex items-center justify-between rounded-lg border bg-muted/35 p-3"
                    >
                      <span className="text-sm text-muted-foreground">
                        {desc}
                      </span>
                      <code className="text-sm font-bold">
                        {result.fields?.[key] ?? '-'}
                      </code>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>最近 {count} 次执行时间</CardTitle>
                <CardDescription>基于当前时间推算</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid gap-2">
                  {result.nextDates.map((date, i) => (
                    <div
                      key={i}
                      className="flex items-center gap-3 rounded-lg border bg-muted/35 p-3"
                    >
                      <span className="flex h-7 w-7 items-center justify-center rounded-full bg-primary/10 text-xs font-bold text-primary">
                        {i + 1}
                      </span>
                      <code className="text-sm font-medium">{date}</code>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </>
        ) : null}
      </section>
    </ToolPage>
  );
}
