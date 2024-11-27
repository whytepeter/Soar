import { useAppDispatch } from "@/hooks";
import { cn } from "@/lib/utils";
import { toggleSidebar } from "@/store/slices/configSlice";
import React from "react";
import { ROUTES } from "@/routes";

import Heading from "../typography/Heading";
import { useLocation } from "react-router-dom";

interface Props {
  className?: string;
}
export default function AppNavbar({ className }: Props) {
  const dispatch = useAppDispatch();
  const location = useLocation();

  const basePath = location.pathname.split("/")[1]; // Takes the first part of the URL

  // Map the base path to the corresponding route
  const currentPage = Object.keys(ROUTES).find((key) =>
    ROUTES[key as keyof typeof ROUTES].includes(basePath)
  );

  const navbarClass = cn(
    "sticky bg-white border-b border-outline left-0 top-0 w-full z-30 bg-white  p-4 md:px-6 flex gap-4 items-center justify-between",
    className
  );

  return (
    <nav className={navbarClass}>
      <Heading>{currentPage}</Heading>
    </nav>
  );
}
