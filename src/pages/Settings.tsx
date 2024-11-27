import Card from "@/components/base/Card";
import Tabs, { TabItemsType } from "@/components/base/Tabs";
import EditProfile from "@/components/settings/EditProfile";
import Preferences from "@/components/settings/Preferences";
import Security from "@/components/settings/Security";

import { useParams, useNavigate } from "react-router-dom";

enum TabSlug {
  PROFILE = "profile",
  PREFERENCES = "preferences",
  SECURITY = "security",
}

// Tab items configuration
const tabItems: TabItemsType[] = [
  { title: "Edit Profile", slug: TabSlug.PROFILE },
  { title: "Preferences", slug: TabSlug.PREFERENCES },
  { title: "Security", slug: TabSlug.SECURITY },
];

export default function Settings() {
  const navigate = useNavigate();
  const { tab } = useParams<{ tab: string }>();

  // Render the appropriate component based on the current tab
  const renderTabContent = (currentTab: string | undefined) => {
    switch (currentTab) {
      case TabSlug.PROFILE:
        return <EditProfile />;
      case TabSlug.PREFERENCES:
        return <Preferences />;
      case TabSlug.SECURITY:
        return <Security />;
      default:
        return <EditProfile />; // Default to 'Edit Profile'
    }
  };

  // Handle tab changes
  const handleTabChange = (newTab: TabItemsType) => {
    navigate(`/settings/${newTab.slug}`);
  };

  return (
    <Card>
      <Tabs
        tabItems={tabItems}
        value={tab || TabSlug.PROFILE}
        onTabChange={handleTabChange}
      />
      {/* Tab Content */}
      {renderTabContent(tab)}
    </Card>
  );
}
