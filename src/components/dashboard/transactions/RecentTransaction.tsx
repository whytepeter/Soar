import Card from "@/components/base/Card";
import Heading from "@/components/typography/Heading";
import { cn } from "@/lib/utils";

interface Props {
  className?: string;
}

export default function RecentTransaction({ className }: Props) {
  return (
    <div className={cn("space-y-4", className)}>
      <Heading>Recent Transaction</Heading>
      <Card>List Cards</Card>
    </div>
  );
}
