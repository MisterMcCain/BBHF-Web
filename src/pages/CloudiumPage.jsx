import React, { useState, useEffect } from "react";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import CloudiumOverviewTab from "@/components/cloudium/CloudiumOverviewTab";
import CloudiumPlansTab from "@/components/cloudium/CloudiumPlansTab";
import CloudiumSupportTab from "@/components/cloudium/CloudiumSupportTab";
import CustomServerModal from "@/components/cloudium/CustomServerModal";
import ManagedGameHostingModal from "@/components/cloudium/ManagedGameHostingModal";
import PlanOrderModal from "@/components/cloudium/PlanOrderModal";
import GameSelector from "@/components/GameSelector";
import { HelpCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { hostingPlans } from "@/config/cloudiumConfig";

const CloudiumPage = () => {
  const [activeTab, setActiveTab] = useState("overview");
  const [showCustomModal, setShowCustomModal] = useState(false);
  const [customServerData, setCustomServerData] = useState(null);
  const [showManagedModal, setShowManagedModal] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState(null);
  const [showOrderModal, setShowOrderModal] = useState(false);

  // 🎮 Öffnet CustomServerModal bei Spielauswahl
  useEffect(() => {
    const handleOpenCustomServerModal = (event) => {
      setCustomServerData(event.detail);
      setShowCustomModal(true);
    };
    window.addEventListener("openCustomServerModal", handleOpenCustomServerModal);
    return () =>
      window.removeEventListener("openCustomServerModal", handleOpenCustomServerModal);
  }, []);

  const handleTabChange = (value) => {
    setActiveTab(value);
    setTimeout(() => window.scrollTo({ top: 0, behavior: "smooth" }), 150);
  };

  const supportedGames = [
    { name: "Minecraft", icon: "🧱" },
    { name: "Valheim", icon: "⚔️" },
    { name: "ARK: Survival Evolved", icon: "🦖" },
    { name: "Rust", icon: "🏚️" },
    { name: "Counter-Strike 2", icon: "🔫" },
    { name: "Palworld", icon: "🐾" },
    { name: "Satisfactory", icon: "🏭" },
    { name: "Terraria", icon: "⛏️" },
    { name: "Garry’s Mod", icon: "🎈" },
  ];

  return (
    <div className="container mx-auto py-10 px-4">
      <Tabs value={activeTab} onValueChange={handleTabChange} className="w-full">
        {/* 🧭 Navigation */}
        <TabsList className="flex justify-center mb-10 bg-slate-800/60 border border-slate-700/60 rounded-xl p-1">
          <TabsTrigger value="overview">Übersicht</TabsTrigger>
          <TabsTrigger value="plans">Pakete</TabsTrigger>
          <TabsTrigger value="support">Support</TabsTrigger>
        </TabsList>

        {/* 🟢 Übersicht */}
        <TabsContent value="overview">
          <CloudiumOverviewTab setActiveTab={setActiveTab} supportedGames={supportedGames} />

          <div className="mt-16">
            <h3 className="text-3xl font-bold text-center mb-8 text-sky-400">
              Unterstützte Spiele & empfohlene Server
            </h3>
            <GameSelector />
          </div>

          {/* 💬 Support Info Box */}
          <div className="mt-20 text-center p-8 bg-slate-800/50 rounded-xl border border-slate-700">
            <HelpCircle className="h-12 w-12 text-sky-400 mx-auto mb-4" />
            <h3 className="text-2xl font-semibold mb-3 text-sky-400">
              Fragen oder individuelle Wünsche?
            </h3>
            <p className="text-slate-300 mb-6 max-w-2xl mx-auto">
              Unser Support-Team hilft dir gerne weiter. Kontaktiere uns für eine persönliche
              Beratung oder spezielle Serverkonfigurationen.
            </p>
            <Button
              onClick={() => {
                setActiveTab("support");
                setTimeout(() => window.scrollTo({ top: 0, behavior: "smooth" }), 200);
              }}
              variant="outline"
              className="border-sky-500 text-sky-500 hover:bg-sky-500 hover:text-white transition-colors px-6 py-2"
            >
              Support kontaktieren
            </Button>
          </div>
        </TabsContent>

        {/* 💻 Pakete */}
        <TabsContent value="plans">
          <CloudiumPlansTab
            hostingPlans={hostingPlans}
            onPlanSelect={(plan) => {
              setSelectedPlan(plan);
              setShowOrderModal(true);
            }}
            onManagedGameHostingSelect={() => setShowManagedModal(true)}
            onCustomServerSelect={() => setShowCustomModal(true)}
            setActiveTab={setActiveTab}
          />
        </TabsContent>

        {/* 🛠️ Support */}
        <TabsContent value="support">
          <CloudiumSupportTab />
        </TabsContent>
      </Tabs>

      {/* 🔷 Modals */}
      {showOrderModal && selectedPlan && (
        <PlanOrderModal
          isOpen={showOrderModal}
          onClose={() => setShowOrderModal(false)}
          selectedPlan={selectedPlan}
          className="relative"
        />
      )}

      {showCustomModal && (
        <CustomServerModal
          isOpen={showCustomModal}
          onClose={() => setShowCustomModal(false)}
          preselectedGame={customServerData?.spiel}
          preselectedPlan={customServerData?.plan}
          className="relative"
        />
      )}

      {showManagedModal && (
        <ManagedGameHostingModal
          isOpen={showManagedModal}
          onOpenChange={setShowManagedModal}
          onSubmit={(data) => {
            console.log("Managed Hosting Anfrage:", data);
            setShowManagedModal(false);
          }}
          supportedGames={supportedGames}
          className="relative"
        />
      )}
    </div>
  );
};

export default CloudiumPage;
