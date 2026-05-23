import { Check, Clipboard } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";

export function CopyRow({ label, value }: { label: string; value: string }) {
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
