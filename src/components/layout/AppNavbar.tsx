import { useAppDispatch } from "@/hooks";
import { toggleSidebar } from "@/store/slices/configSlice";
import { cn } from "@/lib/utils";
import { useLocation, useNavigate } from "react-router-dom";
import { ROUTES } from "@/router/type";
import { useCallback } from "react";

import Hamburger from "@/assets/icon/hamburger.svg";
import Setting from "@/assets/icon/settings-2.svg";
import Notification from "@/assets/icon/notification.svg";
import UserProfile from "@/assets/img/avatar.png";

import Heading from "@/components/typography/Heading";
import { Button } from "@/components/base/Button";
import Search from "@/components/base/Search";
import Avatar from "@/components/base/Avatar";

interface Props {
  className?: string;
}

export default function AppNavbar({ className }: Props) {
  const dispatch = useAppDispatch();
  const location = useLocation();
  const navigate = useNavigate();

  const basePath = location.pathname.split("/")[1]; // Takes the first part of the URL

  // Map the base path to the corresponding route
  const currentPage = Object.keys(ROUTES).find((key) =>
    ROUTES[key as keyof typeof ROUTES].includes(basePath)
  );

  const navbarClass = cn(
    "sticky bg-white border-b border-outline left-0 top-0 w-full z-30 bg-white  p-4 md:px-6 flex gap-4 items-center justify-between",
    className
  );

  const handleSearch = useCallback((value: string) => {
    //handle search logic here
    console.log(value);
  }, []);

  return (
    <nav className={navbarClass}>
      <Button
        size="icon"
        variant="ghost"
        onClick={() => dispatch(toggleSidebar())}
        className="flex md:hidden"
      >
        <img src={Hamburger} alt="Menu" />
      </Button>
      <Heading>{currentPage}</Heading>

      <div className="flex items-center gap-4 ">
        <div className="hidden md:flex items-center gap-4 ">
          <Search onSearch={handleSearch} />

          <Avatar onClick={() => navigate(ROUTES.Settings)}>
            <img
              className="w-[1.2rem]"
              src={Setting}
              alt="Settings"
              loading="lazy"
            />
          </Avatar>
          <Avatar>
            <img className="w-[1.2rem]" src={Notification} alt="notification" />
          </Avatar>
        </div>

        <Avatar img={UserProfile}></Avatar>
      </div>
    </nav>
  );
}
