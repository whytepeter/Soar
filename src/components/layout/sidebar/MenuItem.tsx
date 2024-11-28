import { useAppDispatch } from "@/hooks";
import { toggleSidebar } from "@/store/slices/configSlice";
import { cn } from "@/lib/utils";
import { Link, useLocation } from "react-router-dom";
import { useIsMobile } from "@/hooks/use-mobile";

export interface MenuItemsType {
  name: string;
  slug: string;
  icon: string;
  active: string;
  to: string;
  redirect?: string;
}

interface Props {
  item: MenuItemsType;
  collapse?: boolean;
}

export default function MenuItem({ collapse, item }: Props) {
  const dispatch = useAppDispatch();
  const isMobile = useIsMobile();

  const { icon, active, name, to, redirect } = item;
  const location = useLocation();

  const isActive =
    to === "/"
      ? location.pathname === to // Strict match for Dashboard
      : location.pathname.startsWith(to); // Match all subroutes for others

  const closeMobileSidebar = () => {
    if (isMobile) dispatch(toggleSidebar());
  };

  return (
    <Link
      to={redirect || to}
      onClick={closeMobileSidebar}
      className={cn(
        " relative flex items-center gap-4  px-6 py-2 text-sm  duration-500",
        isActive ? "text-primary" : "text-dark-100"
      )}
    >
      {isActive && (
        <div className="absolute z-10 left-0 top-1/2 -translate-y-1/2 w-1 h-full rounded-r-md bg-primary"></div>
      )}

      <span className={cn("flex-shrink-0", collapse && "mx-auto")}>
        <img className="w-5" src={isActive ? active : icon} />
      </span>

      {!collapse && <span>{name}</span>}
    </Link>
  );
}
