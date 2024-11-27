import React, { useState } from "react";
import { Button } from "@/components/base/Button";
import { Input } from "@/components/base/Input";
import Tabs, { TabItemsType } from "@/components/base/Tabs";

const tabItems: TabItemsType[] = [
  {
    title: "Edit Profile",
    slug: "profile",
  },
  {
    title: "Preferences",
    slug: "preferences",
  },
  {
    title: "Security",
    slug: "security",
  },
];

export default function Dashboard() {
  const [activeTab, setActiveTab] = useState<TabItemsType>(tabItems[0]);

  return (
    <>
      <div className="p-4 w-full max-w-xl space-y-4">
        <Tabs
          tabItems={tabItems}
          value={activeTab}
          onTabChange={setActiveTab}
        />
        <Button>Hello World</Button>
        <Input type="date" />
      </div>
    </>
  );
}
