import { Clock3, Palette } from "lucide-react";

export const tools = [
  {
    id: "color-converter",
    path: "/color-converter",
    title: "颜色转换",
    summary: "HEX、RGB、HSL、HSV、CMYK 互转，并实时预览颜色。",
    status: "已可用",
    icon: Palette,
  },
  {
    id: "timestamp-converter",
    path: "/timestamp-converter",
    title: "时间戳转换",
    summary: "秒、毫秒时间戳与本地时间、UTC、ISO 时间互转。",
    status: "已可用",
    icon: Clock3,
  },
] as const;
