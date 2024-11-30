import Avatar from "@/components/base/Avatar";

import { initials } from "@/lib/utils";
import { UserDetails } from "@/types";

export default function Beneficiary({ full_name, jobTitle, pfp }: UserDetails) {
  return (
    <div className="flex flex-col  rounded-xl items-center mx-auto gap-1">
      <Avatar className="w-16 h-16">
        {pfp ? (
          <img
            src={pfp}
            className="w-full h-full object-cover"
            alt={full_name}
          />
        ) : (
          <span className="font-semibold text-lg">{initials(full_name)}</span>
        )}
      </Avatar>

      <div className="flex flex-col items-center w-fit">
        <h4 className="text-dark text-sm md:text-base">{full_name}</h4>
        <span className="text-dark-200 text-xs sm:text-sm">{jobTitle}</span>
      </div>
    </div>
  );
}
