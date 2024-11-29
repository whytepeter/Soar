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

interface Props {
  className?: string;
}

export default function ListCreditCards({ className }: Props) {
  const { cards, fetchUserCards, loading } = useUser();

  console.log("cards", cards);

  useEffect(() => {
    fetchUserCards();
  }, []);

  return (
    <div className={cn("space-y-4", className)}>
      <Heading>My Cards</Heading>
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
    </div>
  );
}
