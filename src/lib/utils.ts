import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

const bdtFormatter = new Intl.NumberFormat("bn-BD", {
  minimumFractionDigits: 2,
  maximumFractionDigits: 2,
});

export function formatCurrency(amount: number) {
  return `৳ ${bdtFormatter.format(amount)}`;
}
