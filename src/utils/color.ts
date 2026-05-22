export type RGB = {
  r: number;
  g: number;
  b: number;
};

export type HSL = {
  h: number;
  s: number;
  l: number;
};

export type HSV = {
  h: number;
  s: number;
  v: number;
};

export type CMYK = {
  c: number;
  m: number;
  y: number;
  k: number;
};

export type ColorValues = {
  hex: string;
  rgb: RGB;
  hsl: HSL;
  hsv: HSV;
  cmyk: CMYK;
};

const clamp = (value: number, min: number, max: number) => Math.min(max, Math.max(min, value));
const round = (value: number) => Math.round(value);
const roundPercent = (value: number) => Math.round(value * 10) / 10;

export const normalizeHex = (input: string): string | null => {
  const value = input.trim().replace(/^#/, "");

  if (/^[0-9a-fA-F]{3}$/.test(value)) {
    return `#${value
      .split("")
      .map((char) => `${char}${char}`)
      .join("")
      .toUpperCase()}`;
  }

  if (/^[0-9a-fA-F]{6}$/.test(value)) {
    return `#${value.toUpperCase()}`;
  }

  return null;
};

export const hexToRgb = (hex: string): RGB | null => {
  const normalized = normalizeHex(hex);
  if (!normalized) {
    return null;
  }

  const value = normalized.slice(1);
  return {
    r: Number.parseInt(value.slice(0, 2), 16),
    g: Number.parseInt(value.slice(2, 4), 16),
    b: Number.parseInt(value.slice(4, 6), 16),
  };
};

export const rgbToHex = ({ r, g, b }: RGB) =>
  `#${[r, g, b]
    .map((value) => clamp(round(value), 0, 255).toString(16).padStart(2, "0"))
    .join("")
    .toUpperCase()}`;

export const rgbToHsl = ({ r, g, b }: RGB): HSL => {
  const red = r / 255;
  const green = g / 255;
  const blue = b / 255;
  const max = Math.max(red, green, blue);
  const min = Math.min(red, green, blue);
  const delta = max - min;
  const lightness = (max + min) / 2;

  if (delta === 0) {
    return { h: 0, s: 0, l: roundPercent(lightness * 100) };
  }

  const saturation = delta / (1 - Math.abs(2 * lightness - 1));
  let hue = 0;

  if (max === red) {
    hue = ((green - blue) / delta) % 6;
  } else if (max === green) {
    hue = (blue - red) / delta + 2;
  } else {
    hue = (red - green) / delta + 4;
  }

  return {
    h: round((hue * 60 + 360) % 360),
    s: roundPercent(saturation * 100),
    l: roundPercent(lightness * 100),
  };
};

export const hslToRgb = ({ h, s, l }: HSL): RGB => {
  const hue = ((h % 360) + 360) % 360;
  const saturation = clamp(s, 0, 100) / 100;
  const lightness = clamp(l, 0, 100) / 100;
  const chroma = (1 - Math.abs(2 * lightness - 1)) * saturation;
  const x = chroma * (1 - Math.abs(((hue / 60) % 2) - 1));
  const match = lightness - chroma / 2;
  let red = 0;
  let green = 0;
  let blue = 0;

  if (hue < 60) {
    red = chroma;
    green = x;
  } else if (hue < 120) {
    red = x;
    green = chroma;
  } else if (hue < 180) {
    green = chroma;
    blue = x;
  } else if (hue < 240) {
    green = x;
    blue = chroma;
  } else if (hue < 300) {
    red = x;
    blue = chroma;
  } else {
    red = chroma;
    blue = x;
  }

  return {
    r: round((red + match) * 255),
    g: round((green + match) * 255),
    b: round((blue + match) * 255),
  };
};

export const rgbToHsv = ({ r, g, b }: RGB): HSV => {
  const red = r / 255;
  const green = g / 255;
  const blue = b / 255;
  const max = Math.max(red, green, blue);
  const min = Math.min(red, green, blue);
  const delta = max - min;
  let hue = 0;

  if (delta !== 0) {
    if (max === red) {
      hue = ((green - blue) / delta) % 6;
    } else if (max === green) {
      hue = (blue - red) / delta + 2;
    } else {
      hue = (red - green) / delta + 4;
    }
  }

  return {
    h: round((hue * 60 + 360) % 360),
    s: max === 0 ? 0 : roundPercent((delta / max) * 100),
    v: roundPercent(max * 100),
  };
};

export const hsvToRgb = ({ h, s, v }: HSV): RGB => {
  const hue = ((h % 360) + 360) % 360;
  const saturation = clamp(s, 0, 100) / 100;
  const value = clamp(v, 0, 100) / 100;
  const chroma = value * saturation;
  const x = chroma * (1 - Math.abs(((hue / 60) % 2) - 1));
  const match = value - chroma;
  let red = 0;
  let green = 0;
  let blue = 0;

  if (hue < 60) {
    red = chroma;
    green = x;
  } else if (hue < 120) {
    red = x;
    green = chroma;
  } else if (hue < 180) {
    green = chroma;
    blue = x;
  } else if (hue < 240) {
    green = x;
    blue = chroma;
  } else if (hue < 300) {
    red = x;
    blue = chroma;
  } else {
    red = chroma;
    blue = x;
  }

  return {
    r: round((red + match) * 255),
    g: round((green + match) * 255),
    b: round((blue + match) * 255),
  };
};

export const rgbToCmyk = ({ r, g, b }: RGB): CMYK => {
  const red = r / 255;
  const green = g / 255;
  const blue = b / 255;
  const black = 1 - Math.max(red, green, blue);

  if (black === 1) {
    return { c: 0, m: 0, y: 0, k: 100 };
  }

  return {
    c: roundPercent(((1 - red - black) / (1 - black)) * 100),
    m: roundPercent(((1 - green - black) / (1 - black)) * 100),
    y: roundPercent(((1 - blue - black) / (1 - black)) * 100),
    k: roundPercent(black * 100),
  };
};

export const cmykToRgb = ({ c, m, y, k }: CMYK): RGB => {
  const cyan = clamp(c, 0, 100) / 100;
  const magenta = clamp(m, 0, 100) / 100;
  const yellow = clamp(y, 0, 100) / 100;
  const black = clamp(k, 0, 100) / 100;

  return {
    r: round(255 * (1 - cyan) * (1 - black)),
    g: round(255 * (1 - magenta) * (1 - black)),
    b: round(255 * (1 - yellow) * (1 - black)),
  };
};

export const fromRgb = (rgb: RGB): ColorValues => {
  const cleanRgb = {
    r: clamp(round(rgb.r), 0, 255),
    g: clamp(round(rgb.g), 0, 255),
    b: clamp(round(rgb.b), 0, 255),
  };

  return {
    hex: rgbToHex(cleanRgb),
    rgb: cleanRgb,
    hsl: rgbToHsl(cleanRgb),
    hsv: rgbToHsv(cleanRgb),
    cmyk: rgbToCmyk(cleanRgb),
  };
};

export const formatRgb = ({ r, g, b }: RGB) => `rgb(${r}, ${g}, ${b})`;
export const formatHsl = ({ h, s, l }: HSL) => `hsl(${h}, ${s}%, ${l}%)`;
export const formatHsv = ({ h, s, v }: HSV) => `hsv(${h}, ${s}%, ${v}%)`;
export const formatCmyk = ({ c, m, y, k }: CMYK) => `cmyk(${c}%, ${m}%, ${y}%, ${k}%)`;
