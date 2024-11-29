import UserAvatar from "@/assets/img/avatar.png";
import Avatar from "@/components/base/Avatar";

import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { useSwiper } from "swiper/react";

export default function Users() {
  const swiper = useSwiper();
  return (
    <div className="border">
      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        slidesPerView={3}
      >
        {[1, 2, 3, 4, 5, 6]?.map((index) => (
          <SwiperSlide key={index}>
            <div className="flex flex-col  items-center w-fit gap-1">
              <Avatar className="w-16 h-16" img={UserAvatar} />
              <div className="flex flex-col items-center w-fit">
                <h4 className="text-dark text-sm md:text-base">Livia Bator</h4>
                <span className="text-dark-200 text-xs sm:text-sm">CEO</span>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
