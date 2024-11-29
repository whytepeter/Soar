import { Transaction } from "@/types";
import Avatar from "../base/Avatar";

import PaypalIcon from "@/assets/icon/paypal-m.svg";
import CardIcon from "@/assets/icon/card-m.svg";
import TransferIcon from "@/assets/icon/cash-m.svg";
import { cn, formatCurrency, formatDate } from "@/lib/utils";

const METHODS = {
  PAYPAL: PaypalIcon,
  CARD: CardIcon,
  TRANSFER: TransferIcon,
} as const;

export default function TransactionCard({
  description,
  createdAt,
  method,
  type,
  amount,
}: Transaction) {
  const methodIcon = METHODS[method] || METHODS.TRANSFER;

  return (
    <div className="px-4 py-2 flex items-center gap-4">
      <Avatar className="w-14 h-14" img={methodIcon}></Avatar>
      <div className="flex-1 flex flex-col">
        <span className="line-clamp-2 text-dark ">Deposit from card </span>
        <span className="text-dark-200 text-sm">
          {formatDate(new Date(), "DD MMMM YYYY")}
        </span>
      </div>
      <div className={cn(type === "CREDIT" ? "text-success" : "text-error")}>
        <span>{type === "CREDIT" ? "+" : "-"}</span>
        {formatCurrency(850)}
      </div>
    </div>
  );
}
