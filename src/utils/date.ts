export const pad = (value: number) => String(value).padStart(2, "0");

export const toTimeValue = (date: Date) =>
  `${pad(date.getHours())}:${pad(date.getMinutes())}:${pad(date.getSeconds())}`;

export const formatDateInput = (date: Date) =>
  `${date.getFullYear()}-${pad(date.getMonth() + 1)}-${pad(date.getDate())} ${toTimeValue(date)}`;

export const formatDateTime = (date: Date) =>
  new Intl.DateTimeFormat("zh-CN", {
    dateStyle: "medium",
    timeStyle: "medium",
  }).format(date);

export const parseTimestamp = (value: string) => {
  const trimmed = value.trim();
  if (!/^-?\d+$/.test(trimmed)) {
    return null;
  }

  const numberValue = Number(trimmed);
  if (!Number.isSafeInteger(numberValue)) {
    return null;
  }

  return trimmed.length <= 10 ? numberValue * 1000 : numberValue;
};
