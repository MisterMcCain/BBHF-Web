import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck } from 'lucide-react';
const PrivacyPolicyPage = () => {
  const renderParagraphs = textBlock => {
    return textBlock.split('\n\n').map((paragraph, index) => <React.Fragment key={index}>
        {paragraph.split('\n').map((line, lineIndex) => {
        let processedLine = line;
        // Replace email with a clickable mailto link
        if (processedLine.includes('info@mistermccain.com')) {
          processedLine = processedLine.replace(/info@mistermccain\.com/g, '<a href="mailto:info@mistermccain.com" class="text-sky-400 hover:text-sky-300 underline">info@mistermccain.com</a>');
        }
        return <p key={lineIndex} className={line.startsWith('1. Verantwortlicher') || line.startsWith('2. Welche Daten erheben wir?') || line.startsWith('3. Zweck und Rechtsgrundlage') || line.startsWith('4. Cookies') || line.startsWith('5. Rechte der Betroffenen') || line.startsWith('6. Kontakt zum Datenschutz') ? 'font-semibold mt-4 mb-2' : 'mb-1'} dangerouslySetInnerHTML={{
          __html: processedLine
        }}></p>;
      })}
      </React.Fragment>);
  };
  const privacyText = `Datenschutzerklärung für busbahnhof.fun / Cloudium Hosting
Wir nehmen den Schutz Ihrer persönlichen Daten sehr ernst. Nachfolgend informieren wir Sie darüber, welche personenbezogenen Daten wir erheben, verarbeiten und speichern, wenn Sie unsere Website und unsere Hosting-Dienste nutzen.

1. Verantwortlicher
Verantwortlich für die Datenverarbeitung im Sinne der DSGVO ist:

Jürgen Zeriouh (Inhaber)
E-Mail: info@mistermccain.com

2. Welche Daten erheben wir?
Wir erheben und speichern im Rahmen unserer Dienste folgende personenbezogene Daten:

Technische Daten: z. B. IP-Adresse, Browsertyp, Betriebssystem, Zugriffszeitpunkt

Nutzungsdaten: z. B. Seitenaufrufe, Klickverhalten, bevorzugte Angebote

Bestelldaten (Cloudium Hosting): z. B. Benutzername, E-Mail-Adresse, Discord-ID, Serverwahl, Zahlungsinformationen

Kommunikationsdaten: z. B. Anfragen über das Kontaktformular, Support-Anfragen per E-Mail oder Discord

3. Zweck und Rechtsgrundlage
Die Datenverarbeitung erfolgt zu folgenden Zwecken:

Bereitstellung und Abwicklung unserer Hosting-Angebote (Cloudium Hosting)

Kundenverwaltung und Support

Systemstabilität und Sicherheit

Kommunikation mit Ihnen

Rechtsgrundlage:

Art. 6 Abs. 1 lit. b DSGVO (Vertragserfüllung)

Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse – z. B. Serverbetrieb, Betrugsprävention)

4. Cookies
Unsere Website verwendet Cookies, um bestimmte Funktionen bereitzustellen (z. B. Login, Session-Verwaltung).
Sie können Cookies über Ihre Browsereinstellungen einschränken oder deaktivieren – dies kann jedoch die Funktionalität der Website beeinträchtigen.

5. Rechte der Betroffenen
Sie haben gemäß DSGVO folgende Rechte:

Auskunft über Ihre gespeicherten personenbezogenen Daten

Berichtigung unrichtiger oder unvollständiger Daten

Löschung Ihrer Daten, sofern keine gesetzliche Aufbewahrungspflicht besteht

Widerspruch gegen bestimmte Verarbeitungen

Datenübertragbarkeit auf Wunsch (Art. 20 DSGVO)

6. Kontakt zum Datenschutz
Bei Fragen zum Datenschutz oder zur Ausübung Ihrer Rechte wenden Sie sich bitte an:

E-Mail: info@mistermccain.com

Stand: Juli 2025`;
  return <div className="pt-28 pb-16 bg-gradient-to-br from-slate-900 via-slate-800 to-gray-900 text-white min-h-screen">
      <div className="container mx-auto px-4">
        <motion.div initial={{
        opacity: 0,
        y: -20
      }} animate={{
        opacity: 1,
        y: 0
      }} transition={{
        duration: 0.5
      }} className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-sky-500/10 mb-6 border border-sky-500/30">
            <ShieldCheck className="h-8 w-8 text-sky-400" />
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-4 bg-clip-text text-transparent bg-gradient-to-r from-sky-400 via-cyan-300 to-blue-400">
            Datenschutzerklärung
          </h1>
        </motion.div>

        <motion.div initial={{
        opacity: 0,
        y: 20
      }} animate={{
        opacity: 1,
        y: 0
      }} transition={{
        duration: 0.5,
        delay: 0.2
      }} className="bg-slate-800/60 p-6 md:p-10 rounded-xl shadow-2xl border border-slate-700 prose-sm sm:prose-base max-w-4xl mx-auto text-slate-300">
          {renderParagraphs(privacyText)}
        </motion.div>
      </div>
    </div>;
};
export default PrivacyPolicyPage;