import { GEORGIAN_MONTHS } from "./data/months";

export const formatDate = (dateStr: string, showTime = true) => {
  const date = new Date(dateStr);
  const month = GEORGIAN_MONTHS[date.getMonth()];
  const day = date.getDate();

  if (!showTime) return `${day} ${month}`;

  const hours = String(date.getHours()).padStart(2, "0");
  const minutes = String(date.getMinutes()).padStart(2, "0");

  return `${day} ${month}, ${hours}:${minutes}`;
};
