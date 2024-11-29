import { clsx, type ClassValue } from "clsx";
import moment from "moment";
import toast from "react-hot-toast";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const formatNumber = (num: number) => {
  if (isNaN(num)) return num;
  return +num.toLocaleString();
};

export const formatCurrency = (amount: number) => {
  if (isNaN(amount) || amount === 0) {
    return "$0.00";
  }
  return amount.toLocaleString("en-US", {
    style: "currency",
    currency: "USD",
  });
};

export const formatDate = (
  arg: Date | string | any,
  style = "Do MMM, YYYY",
  pastTime = false
): string => {
  if (!arg) return "N/A";
  let date = arg as Date;

  if (!pastTime) return moment(date).format(style);

  return moment(date).fromNow();
};

export const validateEmail = (email: string) => {
  if (email) {
    return email.match(
      /^(?=.{1,254}$)(?=.{1,64}@)[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+)*@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/
    );
  }
};

export const moveCenter = <T>(
  e: MouseEvent | React.MouseEvent<T, MouseEvent> | null,
  el?: T
): void => {
  const element = (e?.target as HTMLElement) || el;
  if (!element) return;

  if ("scrollIntoView" in element) {
    (element as HTMLElement).scrollIntoView({
      behavior: "smooth",
      block: "center",
      inline: "center",
    });
  }
};

export const copyText = async (text: string, message: string = "Copied") => {
  await navigator.clipboard.writeText(text);
  toast(message);
};

export const initials = (name?: string): string => {
  if (!name) return "--";

  // Split the name into parts
  const parts = name.trim().split(/\s+/);

  // Get the first letter of the first and second parts
  const firstInitial = parts[0]?.charAt(0).toUpperCase() || "";
  const secondInitial = parts[1]?.charAt(0).toUpperCase() || "";

  return `${firstInitial}${secondInitial}`;
};

export const generateUniqueId = (length: number = 10): string => {
  return Math.random()
    .toString(36)
    .substring(2, length + 2);
};
