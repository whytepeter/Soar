import Card from "@/components/base/Card";
import Tabs, { TabItemsType } from "@/components/base/Tabs";
import { useUser } from "@/hooks/useUser";
import { useEffect } from "react";

import { useNavigate, Outlet } from "react-router-dom";

const tabItems: TabItemsType[] = [
  { title: "Profile", slug: "profile" },
  { title: "Security", slug: "security" },
  { title: "Preferences", slug: "preferences" },
];

export default function Settings() {
  const navigate = useNavigate();
  const { fetchUser } = useUser();

  const currentPath = location.pathname.split("/").pop(); // Get the last segment of the URL
  const activeTab = tabItems.some((tab) => tab.slug === currentPath)
    ? currentPath
    : tabItems[0].slug;

  const handleTabChange = (newTab: TabItemsType) => {
    navigate(`/settings/${newTab.slug}`);
  };

  useEffect(() => {
    fetchUser();
  }, []);

  return (
    <Card className="space-y-4">
      <Tabs
        tabItems={tabItems}
        value={activeTab ?? "profile"}
        onTabChange={handleTabChange}
        className="justify-evenly md:justify-start"
      />

      <Outlet />
    </Card>
  );
}
