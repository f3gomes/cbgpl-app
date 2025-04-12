import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function phoneMask(value: string) {
  return value
    .replace(/\D+/g, "")
    .replace(/(\d{2})(\d)/, "($1) $2")
    .replace(/(\d{4})(\d)/, "$1-$2")
    .replace(/(\d{4})-(\d)(\d{4})/, "$1$2-$3")
    .replace(/(-\d{4})\d+?$/, "$1");
}

export function subText(text: string, limit: number) {
  if (text.length <= limit) return text;

  const indexBefore = text.lastIndexOf(" ", limit);
  const nextSpace = text.indexOf(" ", limit);

  if (indexBefore !== -1) {
    return text.substring(0, indexBefore);
  } else if (nextSpace !== -1) {
    return text.substring(0, nextSpace);
  }

  return text.substring(0, limit);
}
