import { Eye } from 'lucide-react';
import { useMemo, useState } from 'react';
import { marked } from 'marked';
import { ToolPage } from '@/components/layout/tool-page';
import { CopyRow } from '@/components/shared/copy-row';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Textarea } from '@/components/ui/textarea';

const sampleMd = `# Tools Hub

## 简介

Tools Hub 是一个**开发者工具集合**，纯前端实现。

### 已支持

- 颜色转换
- JSON 格式化
- \`代码块\` 示例

> 引用块：简单好用

| 工具 | 状态 |
|------|------|
| 颜色转换 | ✅ |
| YAML/JSON | ✅ |
`;

marked.setOptions({ gfm: true, breaks: true });

export function MarkdownPreviewPage() {
  const [input, setInput] = useState(sampleMd);

  const html = useMemo(() => {
    try {
      return marked.parse(input) as string;
    } catch {
      return "<p class='text-destructive'>Markdown 解析失败</p>";
    }
  }, [input]);

  return (
    <ToolPage
      icon={<Eye size={28} />}
      kicker="Markdown Preview"
      title="Markdown 预览"
    >
      <section className="grid gap-6 lg:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Markdown 源码</CardTitle>
            <CardDescription>
              粘贴或编辑 Markdown，右侧实时预览。
            </CardDescription>
          </CardHeader>
          <CardContent className="grid gap-4">
            <Textarea
              className="min-h-[500px] font-mono"
              value={input}
              onChange={(event) => setInput(event.target.value)}
            />
            <div className="grid gap-3 sm:grid-cols-2">
              <CopyRow label="Markdown 源码" value={input || '-'} />
              <CopyRow label="渲染后 HTML" value={html || '-'} />
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>预览</CardTitle>
            <CardDescription>实时渲染 Markdown</CardDescription>
          </CardHeader>
          <CardContent>
            <div
              className="prose prose-sm dark:prose-invert max-w-none min-h-[500px] rounded-lg border bg-background p-4 [&_table]:w-full [&_table]:border-collapse [&_td]:border [&_td]:px-2 [&_td]:py-1 [&_th]:border [&_th]:px-2 [&_th]:py-1 [&_th]:bg-muted"
              dangerouslySetInnerHTML={{ __html: html }}
            />
          </CardContent>
        </Card>
      </section>
    </ToolPage>
  );
}
