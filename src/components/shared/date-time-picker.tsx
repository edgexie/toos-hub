import { zhCN } from "date-fns/locale/zh-CN";
import { CalendarIcon } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { formatDateInput, toTimeValue } from "@/utils/date";

export function DateTimePicker({ value, onChange }: { value: Date; onChange: (date: Date) => void }) {
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
        <Input
          aria-label="选择时间"
          type="time"
          step="1"
          value={toTimeValue(value)}
          onChange={(event) => updateTime(event.target.value)}
        />
      </div>
    </div>
  );
}
