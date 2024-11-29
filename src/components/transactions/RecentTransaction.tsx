import Card from "@/components/base/Card";
import Heading from "@/components/typography/Heading";
import { cn } from "@/lib/utils";
import TransactionCard from "./TransactionCard";
import { TransactionLoading } from "./TransactionLoading";
import { useTransaction } from "@/hooks/useTransaction";
import { useEffect } from "react";
import Show from "../base/Show";

interface Props {
  className?: string;
}

export default function RecentTransaction({ className }: Props) {
  const { transactions, loading, fetchTransaction } = useTransaction();

  useEffect(() => {
    fetchTransaction();
  }, []);

  return (
    <div className={cn("space-y-4", className)}>
      <Heading>Recent Transaction</Heading>
      <Card className="overflow-auto min-h-[250px] max-h-[400px] md:max-h-[250px] no-scrollbar">
        <Show>
          <Show.When isTrue={loading && !transactions?.length}>
            <TransactionLoading />
            <TransactionLoading />
            <TransactionLoading />
          </Show.When>
          <Show.Else>
            {transactions?.map((tranx) => (
              <TransactionCard key={tranx.id} {...tranx} />
            ))}
          </Show.Else>
        </Show>
      </Card>
    </div>
  );
}
