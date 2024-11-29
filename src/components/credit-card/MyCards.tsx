import Heading from "@/components/typography/Heading";
import CreditCard from "./CreditCard";
import { cn } from "@/lib/utils";

import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

import { useUser } from "@/hooks/useUser";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { ROUTES } from "@/router/type";
import CardLoading from "./CardLoading";
import Show from "../base/Show";

interface Props {
  className?: string;
}

export default function ListCreditCards({ className }: Props) {
  const { cards, fetchUserCards, loading } = useUser();

  useEffect(() => {
    fetchUserCards();
  }, []);

  return (
    <div className={cn("space-y-4", className)}>
      <div className="flex items-center justify-between">
        <Heading>My Cards</Heading>
        <Link className="text-dark-300 font-medium" to={ROUTES.CreditCard}>
          See all
        </Link>
      </div>

      <Show>
        <Show.When isTrue={loading && !cards?.length}>
          <div className="w-full flex items-center gap-6 overflow-x-auto no-scrollbar">
            <CardLoading />
            <CardLoading />
          </div>
        </Show.When>
        <Show.Else>
          <Swiper
            modules={[Navigation, Pagination, Scrollbar, A11y]}
            spaceBetween={20}
            slidesPerView={1.2}
            breakpoints={{
              640: {
                slidesPerView: 1.2,
              },
              768: {
                slidesPerView: 1.5,
              },
              1024: {
                slidesPerView: 2,
              },
            }}
          >
            {cards?.map((card, index) => (
              <SwiperSlide key={index}>
                <CreditCard {...card} />
              </SwiperSlide>
            ))}
          </Swiper>
        </Show.Else>
      </Show>
    </div>
  );
}
