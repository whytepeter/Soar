import UserAvatar from "@/assets/img/avatar.png";
import Avatar from "@/components/base/Avatar";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

export default function Users() {
  return (
    <div className="border">
      <Carousel>
        <CarouselContent>
          {Array.from({ length: 5 }).map((_, index) => (
            <CarouselItem
              key={index}
              className="pl-1 md:basis-1/2 lg:basis-1/3"
            >
              <div className="flex flex-col  items-center w-fit gap-1">
                <Avatar className="w-16 h-16" img={UserAvatar} />
                <div className="flex flex-col items-center w-fit">
                  <h4 className="text-dark text-sm md:text-base">
                    Livia Bator
                  </h4>
                  <span className="text-dark-200 text-xs sm:text-sm">CEO</span>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselNext />
        <CarouselPrevious />
      </Carousel>
    </div>
  );
}
