import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
} from "@/components/ui/carousel";

import Beneficiary from "./Beneficiary";
import Show from "@/components/base/Show";
import BeneficiaryLoading from "./BeneficiaryLoading";

import { useState } from "react";
import { UserDetails } from "@/types";
import { useAppDispatch, useAppSelector } from "@/hooks";
import { useQuery } from "@/hooks/useQuery";
import { getBeneficiary } from "@/lib/api/transaction";
import { setTransactionState } from "@/store/slices/transactionSlice";

export default function ListBeneficiary() {
  const dispatch = useAppDispatch();

  const beneficiaries = useAppSelector(
    (state) => state.transaction.beneficiaries
  );

  const [selected, setSelected] = useState<UserDetails | null>(null);

  const { loading } = useQuery<UserDetails[]>(getBeneficiary, [], {
    onSuccess: (data) => {
      dispatch(setTransactionState({ beneficiaries: data }));
    },
  });

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
          <Carousel className="w-full  ">
            <CarouselContent className="pl-2  ">
              {beneficiaries?.map((benf) => (
                <CarouselItem
                  key={benf.id}
                  className="pl-2 basis-1/3 md:basis-1/4 lg:basis-1/3 "
                >
                  <Beneficiary
                    onClick={() => setSelected(benf)}
                    selected={selected?.id == benf.id}
                    beneficiary={benf}
                  />
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselNext className="!absolute border-none shadow-md h-12 w-12 !top-1/2 !-translate-y-1/2 right-0 " />
          </Carousel>
        </Show.Else>
      </Show>
    </div>
  );
}
