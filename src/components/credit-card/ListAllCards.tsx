import { useUser } from "@/hooks/useUser";

import { useEffect } from "react";
import CreditCard from "./CreditCard";
import Show from "../base/Show";
import CardLoading from "./CardLoading";

export default function ListAllCards() {
  const { cards, fetchUserCards, loading } = useUser();

  useEffect(() => {
    fetchUserCards();
  }, []);
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-x-6">
      <Show>
        <Show.When isTrue={loading && !cards?.length}>
          <CardLoading />
          <CardLoading />
          <CardLoading />
        </Show.When>
        <Show.Else>
          {cards?.map((card, index) => (
            <CreditCard key={index} {...card} />
          ))}
        </Show.Else>
      </Show>
    </div>
  );
}
