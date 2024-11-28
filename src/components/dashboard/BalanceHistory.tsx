import Heading from "../typography/Heading";
import Card from "../base/Card";
import { cn } from "@/lib/utils";

interface Props {
  className?: string;
}

export default function BalanceHistory({ className }: Props) {
  return (
    <div className={cn("space-y-4", className)}>
      <Heading>Balance History</Heading>
      <Card>balance</Card>
    </div>
  );
}
