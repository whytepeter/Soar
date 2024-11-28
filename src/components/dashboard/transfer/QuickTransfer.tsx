import Card from "@/components/base/Card";
import Heading from "@/components/typography/Heading";
import { cn } from "@/lib/utils";

interface Props {
  className?: string;
}

export default function QuickTransfer({ className }: Props) {
  return (
    <div className={cn("space-y-4", className)}>
      <Heading>Quick Transfer</Heading>
      <Card>transfer</Card>
    </div>
  );
}
