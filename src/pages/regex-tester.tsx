import { Regex } from "lucide-react";
import { useMemo, useState } from "react";
import { ToolPage } from "@/components/layout/tool-page";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

export function RegexTesterPage() {
  const [pattern, setPattern] = useState("\\b\\w+@\\w+\\.\\w+\\b");
  const [flags, setFlags] = useState("gi");
  const [text, setText] = useState("Contact hello@example.com or support@test.dev for help.");

  const result = useMemo(() => {
    try {
      const safeFlags = flags.includes("g") ? flags : `${flags}g`;
      const regex = new RegExp(pattern, safeFlags);
      return { error: "", matches: Array.from(text.matchAll(regex)) };
    } catch (error) {
      return { error: error instanceof Error ? error.message : "正则表达式无效", matches: [] as RegExpMatchArray[] };
    }
  }, [flags, pattern, text]);

  return (
    <ToolPage icon={<Regex size={28} />} kicker="Regex Tester" title="Regex 测试器">
      <section className="grid gap-6 lg:grid-cols-[minmax(0,1fr)_380px]">
        <Card>
          <CardHeader>
            <CardTitle>表达式</CardTitle>
            <CardDescription>输入 pattern、flags 和测试文本。</CardDescription>
          </CardHeader>
          <CardContent className="grid gap-4">
            <div className="grid gap-2">
              <Label htmlFor="regex-pattern">Pattern</Label>
              <Input id="regex-pattern" value={pattern} onChange={(event) => setPattern(event.target.value)} />
            </div>
            <div className="grid gap-2 sm:w-48">
              <Label htmlFor="regex-flags">Flags</Label>
              <Input id="regex-flags" value={flags} onChange={(event) => setFlags(event.target.value)} placeholder="gim" />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="regex-text">测试文本</Label>
              <Textarea id="regex-text" className="min-h-72 font-mono" value={text} onChange={(event) => setText(event.target.value)} />
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>匹配结果</CardTitle>
            <CardDescription>{result.error ? "表达式有错误" : `共 ${result.matches.length} 个匹配`}</CardDescription>
          </CardHeader>
          <CardContent className="grid gap-3">
            {result.error ? <p className="rounded-lg border border-destructive/30 bg-destructive/10 p-3 text-sm text-destructive">{result.error}</p> : null}
            {!result.error && result.matches.length === 0 ? <p className="text-sm text-muted-foreground">没有匹配结果。</p> : null}
            {result.matches.map((match, index) => (
              <div key={`${match.index}-${index}`} className="grid gap-2 rounded-lg border bg-muted/35 p-3">
                <div className="flex items-center justify-between gap-3">
                  <span className="text-xs font-semibold text-muted-foreground">#{index + 1} at {match.index}</span>
                  <Badge variant="outline">{match[0].length} chars</Badge>
                </div>
                <strong className="break-words font-mono text-sm">{match[0]}</strong>
                {match.length > 1 ? <p className="break-words text-xs text-muted-foreground">捕获组：{match.slice(1).join(" / ")}</p> : null}
              </div>
            ))}
          </CardContent>
        </Card>
      </section>
    </ToolPage>
  );
}
