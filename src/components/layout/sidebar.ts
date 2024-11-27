import { MenuItemsType } from "../base/MenuItem";

import homeIcon from "@/assets/icon/home.svg";
import homeActiveIcon from "@/assets/icon/home-active.svg";

import settingsIcon from "@/assets/icon/settings.svg";
import settingsActiveIcon from "@/assets/icon/settings-active.svg";
import { ROUTES } from "@/types/route";

export const SIDEBAR_ITEMS: MenuItemsType[] = [
  {
    name: "Dashboard",
    slug: "dashboard",
    icon: homeIcon,
    active: homeActiveIcon,
    to: ROUTES.Dashboard,
  },
  {
    name: "Settings",
    slug: "settings",
    icon: settingsIcon,
    active: settingsActiveIcon,
    to: ROUTES.Settings,
    redirect: `${ROUTES.Settings}/profile`,
  },
];
