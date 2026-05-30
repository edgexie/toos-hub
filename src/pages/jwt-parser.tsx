import { Clock3, Copy } from 'lucide-react';
import { useMemo, useState } from 'react';
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
import { Button } from '@/components/ui/button';

const sampleJwt =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyLCJleHAiOjE3MTYyMzkwMjJ9.abc123def456';

function base64UrlDecode(value: string): string {
  try {
    const base64 = value.replace(/-/g, '+').replace(/_/g, '/');
    return decodeURIComponent(
      atob(base64)
        .split('')
        .map((c) => '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2))
        .join(''),
    );
  } catch {
    return '';
  }
}

function formatTimestamp(seconds: number): string {
  if (!seconds) return '-';
  const date = new Date(seconds * 1000);
  return date.toLocaleString('zh-CN');
}

type JwtResult = {
  header: string;
  payload: string;
  signature: string;
  headerParsed: Record<string, unknown> | null;
  payloadParsed: Record<string, unknown> | null;
  error: string;
};

function parseJwt(input: string): JwtResult {
  const trimmed = input.trim();
  if (!trimmed)
    return {
      header: '',
      payload: '',
      signature: '',
      headerParsed: null,
      payloadParsed: null,
      error: '',
    };

  const parts = trimmed.split('.');
  if (parts.length !== 3) {
    return {
      header: '',
      payload: '',
      signature: '',
      headerParsed: null,
      payloadParsed: null,
      error: 'JWT 格式不正确，应包含 3 个以 . 分隔的段',
    };
  }

  const headerDecoded = base64UrlDecode(parts[0]);
  const payloadDecoded = base64UrlDecode(parts[1]);

  let headerParsed: Record<string, unknown> | null = null;
  let payloadParsed: Record<string, unknown> | null = null;

  try {
    headerParsed = JSON.parse(headerDecoded);
  } catch {
    return {
      header: '',
      payload: '',
      signature: '',
      headerParsed: null,
      payloadParsed: null,
      error: 'Header 解析失败，不是有效的 Base64URL 编码 JSON',
    };
  }

  try {
    payloadParsed = JSON.parse(payloadDecoded);
  } catch {
    return {
      header: '',
      payload: '',
      signature: '',
      headerParsed: null,
      payloadParsed: null,
      error: 'Payload 解析失败，不是有效的 Base64URL 编码 JSON',
    };
  }

  return {
    header: headerDecoded,
    payload: payloadDecoded,
    signature: parts[2],
    headerParsed,
    payloadParsed,
    error: '',
  };
}

export function JwtParserPage() {
  const [input, setInput] = useState(sampleJwt);
  const result = useMemo(() => parseJwt(input), [input]);

  const timeFields = result.payloadParsed
    ? (Object.entries(result.payloadParsed)
        .filter(([key]) => ['iat', 'exp', 'nbf', 'auth_time'].includes(key))
        .map(([key, value]) => ({
          key,
          label:
            {
              iat: '签发时间 (iat)',
              exp: '过期时间 (exp)',
              nbf: '生效时间 (nbf)',
              auth_time: '认证时间 (auth_time)',
            }[key] ?? key,
          timestamp: typeof value === 'number' ? value : null,
        })) as { key: string; label: string; timestamp: number | null }[])
    : [];

  return (
    <ToolPage
      icon={<Clock3 size={28} />}
      kicker="JWT Parser"
      title="JWT 解析器"
    >
      <section className="grid gap-6">
        <Card>
          <CardHeader>
            <CardTitle>输入 JWT</CardTitle>
            <CardDescription>
              粘贴 JWT Token，自动解析 Header、Payload、时间字段（不校验签名）。
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Textarea
              className="min-h-28 font-mono"
              value={input}
              onChange={(event) => setInput(event.target.value)}
            />
          </CardContent>
        </Card>

        {result.error ? (
          <p className="rounded-lg border border-destructive/30 bg-destructive/10 p-3 text-sm text-destructive">
            {result.error}
          </p>
        ) : result.payloadParsed ? (
          <>
            <Card>
              <CardHeader>
                <CardTitle>时间字段</CardTitle>
                <CardDescription>将 Unix 时间戳转为可读时间</CardDescription>
              </CardHeader>
              <CardContent>
                {timeFields.length > 0 ? (
                  <div className="grid gap-3 sm:grid-cols-2">
                    {timeFields.map((f) => (
                      <CopyRow
                        key={f.key}
                        label={f.label}
                        value={f.timestamp ? formatTimestamp(f.timestamp) : '-'}
                      />
                    ))}
                  </div>
                ) : (
                  <p className="text-sm text-muted-foreground">
                    未检测到 iat / exp / nbf 等时间字段
                  </p>
                )}
              </CardContent>
            </Card>

            <section className="grid gap-6 lg:grid-cols-2">
              <Card>
                <CardHeader>
                  <CardTitle>Header</CardTitle>
                  <CardDescription>算法与令牌类型</CardDescription>
                </CardHeader>
                <CardContent className="grid gap-4">
                  <Textarea
                    className="min-h-32 font-mono"
                    readOnly
                    value={JSON.stringify(result.headerParsed, null, 2)}
                  />
                  <CopyRow
                    label="Header JSON"
                    value={JSON.stringify(result.headerParsed, null, 2)}
                  />
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Payload</CardTitle>
                  <CardDescription>JWT 声明内容</CardDescription>
                </CardHeader>
                <CardContent className="grid gap-4">
                  <Textarea
                    className="min-h-48 font-mono"
                    readOnly
                    value={JSON.stringify(result.payloadParsed, null, 2)}
                  />
                  <CopyRow
                    label="Payload JSON"
                    value={JSON.stringify(result.payloadParsed, null, 2)}
                  />
                </CardContent>
              </Card>
            </section>

            <Card>
              <CardHeader>
                <CardTitle>签名</CardTitle>
              </CardHeader>
              <CardContent>
                <code className="block break-all rounded-lg bg-muted p-3 text-sm font-mono">
                  {result.signature}
                </code>
              </CardContent>
            </Card>
          </>
        ) : null}
      </section>
    </ToolPage>
  );
}
