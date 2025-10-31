import React from "react";
import { Gamepad2 } from "lucide-react";
import NewsCardTemplate from "./NewsCardTemplate";

const PluginNewsBox = () => (
  <NewsCardTemplate
    icon={Gamepad2}
    title="🧩 Neues Plugin: Tom & Jerry Minigame"
    subtitle="Ein neues Abenteuer auf unserem Minecraft-Server – mit Spaß, Spannung und Lachanfällen!"
  >
    <p>
      🐱 <strong>Tom & Jerry Minigame</strong> ist jetzt live! Eine Katze jagt viele Mäuse – mit zufälligen Rollen, Countdown und einem spannenden Ende!
    </p>

    <p>
      ✨ Perfekt für gemeinsame Spielabende auf dem Busbahnhof – Chaos garantiert!
    </p>

    <p>
      💡 <em>Basiert auf der Idee von Builder <strong>Flixses</strong> – exklusiv für den Busbahnhof entwickelt!</em>
    </p>

    <p className="text-slate-400 text-sm">
      #BusbahnhofFun #Minecraft #TomAndJerry #McOpi #Flixses
    </p>
  </NewsCardTemplate>
);

export default PluginNewsBox;
