import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
} from "@/components/ui/carousel";

import Beneficiary from "./Beneficiary";
import { useTransaction } from "@/hooks/useTransaction";
import Show from "@/components/base/Show";
import BeneficiaryLoading from "./BeneficiaryLoading";
import { useEffect } from "react";

export default function ListBeneficiary() {
  const { beneficiaries, loading, fetchBeneficiaries } = useTransaction();

  useEffect(() => {
    fetchBeneficiaries();
  }, []);

  return (
    <div className="relative ">
      <Show>
        <Show.When isTrue={loading && !beneficiaries?.length}>
          <div className="flex items-center gap-6">
            {Array.from({ length: 3 }).map((_, index) => (
              <BeneficiaryLoading key={index} />
            ))}
          </div>
        </Show.When>
        <Show.Else>
          <Carousel className="w-full xl:max-w-md ">
            <CarouselContent className="pl-2  ">
              {beneficiaries?.map((benf, index) => (
                <CarouselItem
                  key={index}
                  className="pl-2 basis-1/3 md:basis-1/4 xl:basis-1/3 "
                >
                  <Beneficiary {...benf} />
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselNext className="!absolute border-none shadow-md h-10 w-10 !top-1/2 !-translate-y-1/2 !right-0" />
          </Carousel>
        </Show.Else>
      </Show>
    </div>
  );
}
