import React from "react";

const CommunityTabContentArea = ({ tabsConfig, activeTab }) => {
  const active = tabsConfig.find((tab) => tab.value === activeTab);

  if (!active) return null;

  const ContentComponent = active.ContentComponent;
  const dataProps = active.data || {};

  return (
    <div className="mt-10">
      <ContentComponent {...dataProps} />
    </div>
  );
};

export default CommunityTabContentArea;
