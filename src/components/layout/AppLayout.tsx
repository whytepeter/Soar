import React, { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "@/hooks";
import { useBreakpoint } from "@/hooks/useBreakpoint";
import { setSidebarState } from "@/store/slices/configSlice";

import AppNavbar from "./AppNavbar";
import AppSidebar from "./AppSidebar";

interface Props {
  children: React.ReactNode;
}

export default function AppLayout({ children }: Props) {
  const dispatch = useAppDispatch();

  const sidebarCollapsed = useAppSelector(
    (state) => state.config.sidebarCollapsed
  );
  const { lg: isMedium } = useBreakpoint();

  useEffect(() => {
    dispatch(setSidebarState(isMedium));
  }, [isMedium]);

  return (
    <>
      <main
        className={`${
          sidebarCollapsed ? "collapsed" : ""
        } admin-layout bg-background z-30 transition-all ease-in-out duration-200 min-h-screen relative`}
      >
        <AppSidebar />
        <div className="relative min-h-screen">
          <AppNavbar />
          <div className="w-full p-4 sm:px-8 sm:py-6">{children}</div>
        </div>
      </main>
    </>
  );
}
