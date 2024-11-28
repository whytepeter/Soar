import Heading from "@/components/typography/Heading";
import CreditCard from "./CreditCard";
import { cn } from "@/lib/utils";

interface Props {
  className?: string;
}

export default function ListCreditCards({ className }: Props) {
  return (
    <div className={cn("space-y-4", className)}>
      <Heading>My Cards</Heading>
      <CreditCard />
    </div>
  );
}
