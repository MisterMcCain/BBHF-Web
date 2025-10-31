import React from "react";
import { motion } from "framer-motion";
import { BookOpen } from "lucide-react";

const communityRules = [
  { 
    id: 1, 
    title: "§1 ᕁ 📚 ALLGEMEINES", 
    description: `Die Moderatoren & andere Teammitglieder haben das letzte Wort! 
    Du darfst nur mit einem Account auf dem Server sein, um unsere Statistiken und Gewinne nicht zu verfälschen! 
    Veröffentlichen von privaten Daten ist verboten, um die Rechte der Person zu wahren. 
    Sensible Themen (Politik, Drogen, ö.ä) sind untersagt, da diese oft Ursachen für Streitigkeiten darstellen! 
    Nur weil eine Handlung nicht explizit im Regelwerk erwähnt wird, bedeutet das nicht, dass sie automatisch erlaubt ist! 
    Verkaufs- & Handelsangebote werden bei uns als Scam-Versuch eingestuft und ist daher untersagt! 
    Werbung ist nur in dazugehörigen Textkanälen gestattet, um unötige Nachrichten zu vermeiden! 
    DM Werbung an unsere Mitglieder ist streng verboten und kann zum Bann führen! 
    Der Zugang zu unserer Community und unserem Discord-Server ist generell erst ab 14 Jahren gestattet.`
  },
  { 
    id: 2, 
    title: "§2 ᕁ 🗯️ VERHALTEN IN TEXT-& SPRACHKANÄLEN", 
    description: `Behandle alle Mitglieder respektvoll. Wir tolerieren keine Streitigkeiten oder andere toxische Inhalte! 
    NSFW-Inhalte können verstörend auf Mitglieder wirken und sind daher auf dem gesamten Netzwerk (Minecraft/Discord) verboten!
    Störende Geräusche sind untersagt, um das Wohlbefinden von Mitgliedern nicht zu beeinträchtigen! 
    Werbung ist nur in dazugehörigen Textkanälen gestattet, um unötige Nachrichten zu vermeiden! 
    Spam jeglicher Art ist nicht erwünscht, da es stört, wenn man sich z.B. unterhält! 
    Unterhaltungen sollten auf Deutsch oder notfalls auf Englisch geführt werden, damit jeder User alles versteht! 
    Wir bitten alle Mitglieder, neutrale oder standardsprachliche Formen zu verwenden. 
    Das bewusste Gendern ist hier nicht erlaubt!`
  },
  {
    id: 3,
    title: "§3 ᕁ 📜 Discord Richtlinien",
    description: `Auf diesem Server gelten vor allem uneingeschränkt die offiziellen 
    <a href="https://discord.com/terms" target="_blank" rel="noopener noreferrer" class="text-sky-400 hover:text-sky-300 underline">
    Discord Nutzungsbedingungen (Terms of Service)</a> sowie die 
    <a href="https://discord.com/guidelines" target="_blank" rel="noopener noreferrer" class="text-sky-400 hover:text-sky-300 underline">
    Community-Richtlinien</a>. 
    Mit der Nutzung dieses Servers erklärst du dich damit einverstanden, beide Regelwerke einzuhalten. 
    Verstöße gegen diese Bestimmungen können zum Ausschluss vom Server und ggf. zur Meldung an Discord führen.`
  },
  {
    id: 4,
    title: "§4 ᕁ 👤 Profil- & Bio-Regel",
    description: `Das Profil jedes Members (inkl. Profilbild, Banner, Benutzername und Bio) muss unseren Community-Regeln 
    sowie den offiziellen 
    <a href="https://discord.com/terms" target="_blank" rel="noopener noreferrer" class="text-sky-400 hover:text-sky-300 underline">
    Discord Nutzungsbedingungen (ToS)</a> und 
    <a href="https://discord.com/guidelines" target="_blank" rel="noopener noreferrer" class="text-sky-400 hover:text-sky-300 underline">
    Richtlinien</a> entsprechen. Verbotene, verstörende, beleidigende oder unangemessene Inhalte sind nicht erlaubt. 
    Verstöße können zum Ausschluss (Bann) aus der Community führen.`
  },
  {
    id: 5,
    title: "§5 ᕁ ♀ Schutz aller Mitglieder",
    description: `(1) Jegliche Form von respektlosem, diskriminierendem oder unangemessenem Verhalten 
    gegenüber Mitgliedern ist untersagt. Dies umfasst insbesondere sexistische, anzügliche, beleidigende 
    oder entwürdigende Bemerkungen sowie unerwünschte Nachrichten mit sexuellem oder flirty Inhalt. 
    (2) Minderjährige Mitglieder genießen besonderen Schutz. Sexualisierte oder manipulativ wirkende 
    Handlungen oder Mitteilungen gegenüber Minderjährigen führen zum sofortigen und dauerhaften Ausschluss 
    und können den zuständigen Behörden gemeldet werden.
    (3) Verstöße gegen diese Regeln werden ohne Vorwarnung sanktioniert und können den Ausschluss 
    aus der Community nach sich ziehen.`
  },
  {
    id: 6,
    title: "",
    description: `<span class="text-sm text-slate-400 italic">Mit der Teilnahme an unserem Discord erklärst du dich mit diesem Regelwerk einverstanden!</span>`
  }
];

const CommunityRulesTab = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="text-slate-300 space-y-8"
    >
      {/* Überschrift */}
      <div className="text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gradient-animated mb-4">
          📜 Community-Regelwerk
        </h2>
        <p className="text-lg text-slate-400 max-w-3xl mx-auto">
          Bitte lies dir dieses Regelwerk aufmerksam durch. Mit der Teilnahme erklärst du dich damit einverstanden.
        </p>
      </div>

      {/* Jede Regel in einer stilvollen Box */}
      <div className="space-y-6 max-w-4xl mx-auto">
        {communityRules.map((rule, index) => (
          <motion.div
            key={rule.id}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="bg-slate-900/50 border border-slate-700 rounded-xl p-6 md:p-8 shadow-lg hover:shadow-xl transition-all duration-300"
          >
            {rule.title && (
              <h3 className="text-xl md:text-2xl font-semibold text-sky-400 mb-3 flex items-center gap-2">
                <BookOpen className="h-5 w-5 text-sky-400" />
                {rule.title}
              </h3>
            )}

            <p
              className="text-slate-300 leading-relaxed whitespace-pre-line"
              dangerouslySetInnerHTML={{
                __html: rule.description.replace(/\n/g, " "),
              }}
            />
          </motion.div>
        ))}
      </div>

      <div className="text-center text-slate-500 text-sm font-mono mt-10">
        Letzte Aktualisierung: 19. Oktober 2025
      </div>
    </motion.div>
  );
};

export default CommunityRulesTab;
