import { useAppDispatch } from "@/hooks";
import { toggleSidebar } from "@/store/slices/configSlice";
import { cn } from "@/lib/utils";
import React from "react";
import Heading from "../typography/Heading";

interface Props {
  className?: string;
}
export default function AppNavbar({ className }: Props) {
  const dispatch = useAppDispatch();

  const navbarClass = cn(
    "sticky bg-white border-b border-outline left-0 top-0 w-full z-30 bg-white  p-4 flex gap-4 items-center justify-between",
    className
  );

  return (
    <nav className={navbarClass}>
      <Heading>Overview</Heading>
    </nav>
  );
}
