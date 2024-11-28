import Heading from "../typography/Heading";
import Card from "../base/Card";
import { cn } from "@/lib/utils";

interface Props {
  className?: string;
}

export default function Activity({ className }: Props) {
  return (
    <div className={cn("space-y-4", className)}>
      <Heading>Weekly Activity</Heading>
      <Card>Activities</Card>
    </div>
  );
}
