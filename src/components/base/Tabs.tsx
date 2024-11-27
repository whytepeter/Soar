import { cn, moveCenter } from "@/lib/utils";
import React, { ReactNode } from "react";

export interface TabsType {
  tabItems: TabItemsType[];
  value: TabItemsType;
  key?: keyof TabItemsType;
  className?: string;
  onTabChange: (item: TabItemsType) => void;
}

export default function Tabs({
  tabItems = [],
  value,
  key = "slug",
  className,
  onTabChange,
}: TabsType) {
  const renderItems = (item: TabItemsType): ReactNode => {
    const isActive = value[key] === item[key];
    return <TabItems key={item[key]} item={item} isActive={isActive} />;
  };

  const handleTabClick = (
    e: React.MouseEvent<HTMLDivElement, MouseEvent>,
    item: TabItemsType
  ) => {
    moveCenter(e);
    onTabChange(item);
  };

  const tabStyle = cn(
    "flex overflow-x-auto no-scrollbar items-center justify-evenly text-secondary-500 font-light text-sm",
    className
  );

  return (
    <div role="tablist" className={tabStyle}>
      {tabItems?.map((item) => (
        <div
          onClick={(e) => handleTabClick(e, item)}
          role="tab"
          key={item[key]}
          aria-selected={value[key] === item[key]}
          className="flex-1 relative overflow-hidden"
        >
          {renderItems(item)}
        </div>
      ))}
    </div>
  );
}

export interface TabItemsType {
  title: string;
  slug: string;
}

export function TabItems({
  item,
  isActive,
}: {
  item: TabItemsType;
  isActive: boolean;
}) {
  return (
    <>
      <div
        className={cn(
          " border-b border-outline w-full font-medium whitespace-nowrap text-sm  flex items-center justify-center px-6 py-4 cursor-pointer hover:bg-background transition duration-300",
          isActive ? " bg-white  text-primary rounded-none " : "text-dark-200"
        )}
      >
        {item?.title}
      </div>
      {isActive && (
        <div className="absolute -bottom-0.5 w-full h-[5px] bg-primary rounded-t-xl"></div>
      )}
    </>
  );
}
