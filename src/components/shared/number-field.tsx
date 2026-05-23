import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export function NumberField({
  label,
  max,
  min = 0,
  onChange,
  value,
}: {
  label: string;
  max: number;
  min?: number;
  onChange: (value: number) => void;
  value: number;
}) {
  return (
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
}
