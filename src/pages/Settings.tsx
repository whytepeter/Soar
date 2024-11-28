import Card from "@/components/base/Card";
import Tabs, { TabItemsType } from "@/components/base/Tabs";

import { useNavigate, Outlet } from "react-router-dom";

const tabItems: TabItemsType[] = [
  { title: "Profile", slug: "profile" },
  { title: "Security", slug: "security" },
  { title: "Preferences", slug: "preferences" },
];

export default function Settings() {
  const navigate = useNavigate();

  const currentPath = location.pathname.split("/").pop(); // Get the last segment of the URL
  const activeTab = tabItems.some((tab) => tab.slug === currentPath)
    ? currentPath
    : tabItems[0].slug;

  // Handle tab changes
  const handleTabChange = (newTab: TabItemsType) => {
    navigate(`/settings/${newTab.slug}`);
  };

  return (
    <Card>
      <Tabs
        tabItems={tabItems}
        value={activeTab ?? "profile"}
        onTabChange={handleTabChange}
      />
      <Outlet />
    </Card>
  );
}
