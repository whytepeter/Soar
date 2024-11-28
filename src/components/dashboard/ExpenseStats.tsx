import Heading from "../typography/Heading";
import Card from "../base/Card";
import { cn } from "@/lib/utils";

interface Props {
  className?: string;
}

export default function ExpenseStats({ className }: Props) {
  return (
    <div className={cn("space-y-4", className)}>
      <Heading>Expense Statistics</Heading>
      <Card>Expense</Card>
    </div>
  );
}
