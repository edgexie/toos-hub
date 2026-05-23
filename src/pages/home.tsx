import { ArrowRight, Search, Wrench } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router";
import { AnimatedGradientText } from "@/components/ui/animated-gradient-text";
import { AnimatedGridPattern } from "@/components/ui/animated-grid-pattern";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { TextAnimate } from "@/components/ui/text-animate";
import { toolCategories, tools } from "@/tools/registry";

export function HomePage() {
  const [query, setQuery] = useState("");
  const normalizedQuery = query.trim().toLowerCase();
  const filteredTools = tools.filter((tool) =>
    normalizedQuery ? `${tool.title} ${tool.summary}`.toLowerCase().includes(normalizedQuery) : true,
  );
  const groupedTools = toolCategories
    .filter((category) => category.id !== "all")
    .map((category) => ({
      ...category,
      tools: filteredTools.filter((tool) => tool.category === category.id),
    }))
    .filter((group) => group.tools.length > 0);

  return (
    <main className="relative min-h-svh overflow-hidden">
      <AnimatedGridPattern
        width={34}
        height={34}
        numSquares={84}
        maxOpacity={0.34}
        duration={1.8}
        repeatDelay={0.35}
        className="inset-x-0 inset-y-[-16%] h-[132%] skew-y-6 text-primary/55 [mask-image:radial-gradient(860px_circle_at_center,white,transparent)]"
      />
      <div className="pointer-events-none absolute inset-x-0 top-0 h-64 bg-linear-to-b from-primary/10 to-transparent" />

      <div className="relative mx-auto w-[min(1120px,calc(100%-32px))] py-10">
        <section className="grid gap-5 border-b pb-8">
          <div className="w-fit rounded-full border bg-background/80 px-4 py-1.5 shadow-sm backdrop-blur">
            <AnimatedGradientText colorFrom="#0f766e" colorTo="#2563eb" className="text-sm font-semibold">
              Tools Hub
            </AnimatedGradientText>
          </div>
          <div className="flex items-center gap-4">
            <div className="text-primary">
              <Wrench size={30} />
            </div>
            <TextAnimate as="h1" animation="blurInUp" by="word" once className="text-4xl font-bold tracking-normal sm:text-6xl">
              常用工具集
            </TextAnimate>
          </div>
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

        <section className="grid gap-8 pt-7" aria-label="工具入口">
          {groupedTools.map((group) => (
            <div className="grid gap-3" key={group.id}>
              <div className="flex items-center gap-3">
                <h2 className="text-xl font-semibold">{group.label}</h2>
                <Badge variant="outline">{group.tools.length}</Badge>
              </div>
              <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                {group.tools.map((tool) => {
                  const Icon = tool.icon;
                  return (
                    <Card
                      key={tool.id}
                      className="group border-primary/10 bg-card/95 shadow-md shadow-primary/5 backdrop-blur-md transition hover:-translate-y-0.5 hover:border-primary/25 hover:shadow-xl hover:shadow-primary/10"
                    >
                      <Link to={tool.path} className="block text-left">
                        <CardHeader className="relative grid grid-cols-[auto_1fr_auto] items-center gap-4 overflow-hidden">
                          <div className="pointer-events-none absolute inset-x-8 -top-12 h-24 rounded-full bg-primary/10 blur-2xl transition-opacity group-hover:opacity-100" />
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
              </div>
            </div>
          ))}
          {filteredTools.length === 0 ? (
            <Card>
              <CardContent className="grid gap-2 py-10 text-center">
                <CardTitle>没有找到匹配的工具</CardTitle>
                <CardDescription>换一个关键词试试，比如 JSON、URL、颜色或时间戳。</CardDescription>
              </CardContent>
            </Card>
          ) : null}
        </section>
      </div>
    </main>
  );
}
