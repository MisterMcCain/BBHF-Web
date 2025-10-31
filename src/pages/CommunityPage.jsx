'use client';

import React, { useState } from 'react';
import { Tabs } from '@/components/ui/tabs';

// Navigation + Wrapper
import CommunityTabsNavigation from '@/components/community/CommunityTabsNavigation';
import CommunityTabContentArea from '@/components/community/CommunityTabContentArea';

// Inhalte der Tabs
import CommunityOverviewTab from '@/components/community/CommunityOverviewTab';
import CommunityNewsTab from '@/components/community/CommunityNewsTab';
import CommunityEventsTab from '@/components/community/CommunityEventsTab';
import CommunityMinecraftTab from '@/components/community/CommunityMinecraftTab';
import CommunityMembersTab from '@/components/community/CommunityMembersTab';
import CommunityRulesTab from '@/components/community/CommunityRulesTab';
import CommunityBanAppealTab from '@/components/community/CommunityBanAppealTab';

// Icons
import {
  Info,
  Newspaper,
  Gamepad2,
  Hammer,
  Users,
  BookOpen,
  FileWarning,
} from 'lucide-react';

// 🔹 Daten
import { teamMembersData, communityRules } from '@/lib/communityData';

export default function CommunityPage() {
  const [activeTab, setActiveTab] = useState('overview');

  // 🔹 Tabs-Konfiguration
  const tabsConfig = [
    { value: 'overview',  label: 'Übersicht',   Icon: Info,        ContentComponent: CommunityOverviewTab },
    { value: 'news',      label: 'News',        Icon: Newspaper,   ContentComponent: CommunityNewsTab },
    { value: 'events',    label: 'Events',      Icon: Gamepad2,    ContentComponent: CommunityEventsTab },
    { value: 'minecraft', label: 'Minecraft',   Icon: Hammer,      ContentComponent: CommunityMinecraftTab },
    { value: 'team',      label: 'Team',        Icon: Users,       ContentComponent: CommunityMembersTab, data: { teamMembers: teamMembersData } },
    { value: 'rules',     label: 'Regeln',      Icon: BookOpen,    ContentComponent: CommunityRulesTab, data: { rules: communityRules } },
    { value: 'banappeal', label: 'Ban-Appeal',  Icon: FileWarning, ContentComponent: CommunityBanAppealTab },
  ];

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 pt-36 md:pt-40 pb-20">
      <div className="container mx-auto px-4">
        <Tabs
          value={activeTab}
          onValueChange={setActiveTab}
          defaultValue="overview"
          className="w-full"
        >
          {/* 🔹 Tabs-Navigation */}
          <div className="mb-12">
            <CommunityTabsNavigation
              tabsConfig={tabsConfig}
              activeTab={activeTab}
              onTabChange={setActiveTab}
            />
          </div>

          {/* 🔹 Tab-Inhalte */}
          <CommunityTabContentArea tabsConfig={tabsConfig} activeTab={activeTab} />
        </Tabs>
      </div>
    </div>
  );
}
