import React from "react";
import { Mail } from "lucide-react";
import NewsCardTemplate from "./NewsCardTemplate";

const KummerkastenBox = () => (
  <NewsCardTemplate
    icon={Mail}
    title="💌 Neu: Anonymer Kummerkasten auf unserem Discord"
    subtitle="Ein sicherer Ort für alle Gedanken, Sorgen und Gefühle 💙"
  >
    <p>
      Jeder kann frei schreiben, was ihn oder sie belastet – absolut anonym und 100 % vertraulich.  
      Niemand sieht, wer die Nachricht geschrieben hat, nicht einmal der Owner!
    </p>

    <p>
      💭 Es geht darum, Gedanken loszulassen und sich zu entlasten – besonders, wenn man niemanden hat, dem man sich anvertrauen kann.
    </p>

    <p className="italic text-sky-300">
      „Lass deinen Gedanken freien Lauf und schreibe dir alles von der Seele.“
    </p>
  </NewsCardTemplate>
);

export default KummerkastenBox;
