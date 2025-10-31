import React from 'react';
import { motion } from 'framer-motion';
import { FileText } from 'lucide-react';

const TermsAndConditionsPage = () => {
  const renderParagraphs = (textBlock) => {
    return textBlock.split('\n\n').map((paragraph, index) => (
      <React.Fragment key={index}>
        {paragraph.split('\n').map((line, lineIndex) => {
          if (line.startsWith('§')) {
            return <h2 key={lineIndex} className="text-xl font-semibold mt-6 mb-3 text-sky-400">{line}</h2>;
          }
          if (line.startsWith('Kontakt & Support') || line.startsWith('Cloudium Hosting - Ihr zuverlässiger Hosting-Partner!')) {
            return <p key={lineIndex} className="font-semibold mt-6 mb-2">{line}</p>;
          }
          if (line.startsWith('E-Mail:')) {
            const emailPrefix = 'E-Mail: ';
            const emailAddress = line.substring(emailPrefix.length);
            return (
              <p key={lineIndex} className="mb-1">
                {emailPrefix}
                <a href={`mailto:${emailAddress}`} className="text-sky-400 hover:underline">
                  {emailAddress}
                </a>
              </p>
            );
          }
          return <p key={lineIndex} className="mb-2 leading-relaxed">{line}</p>;
        })}
      </React.Fragment>
    ));
  };

  const termsText = `§ 1 Allgemeines
Diese Allgemeinen Geschäftsbedingungen (AGB) regeln die vertraglichen Beziehungen zwischen Cloudium Hosting, vertreten durch den Inhaber Jürgen Zeriouh, und seinen Kunden. Mit der Bestellung und Nutzung unserer Dienstleistungen akzeptiert der Kunde diese AGB in ihrer jeweils gültigen Fassung.

Abweichende Bedingungen des Kunden werden nur anerkannt, wenn Cloudium Hosting diesen ausdrücklich schriftlich zugestimmt hat. Es gilt niederländisches Recht unter Ausschluss des UN-Kaufrechts.

§ 2 Leistungsbeschreibung
Cloudium Hosting bietet KVM-basierte virtuelle Server sowie dedizierte Server auf Prepaid-Basis an. Die bereitgestellten Ressourcen umfassen Rechenleistung, Speicherplatz und Netzwerkanbindung, abhängig vom gewählten Tarif.

Die aktuelle Leistungsbeschreibung sowie die technischen Spezifikationen der einzelnen Tarife sind jederzeit auf unserer Website cloudium.host einsehbar.

§ 3 Vertragsabschluss & Zahlung
Ein Vertrag kommt zustande, sobald der Kunde eine Bestellung abschließt und Cloudium Hosting diese durch Bereitstellung der Leistung bestätigt.

Die Bezahlung erfolgt ausschließlich im Voraus (Prepaid).

Das Guthaben kann für zukünftige Bestellungen genutzt werden, eine Rückerstattung ungenutzter Beträge ist ausgeschlossen.

Derzeit akzeptierte Zahlungsmethode ist PayPal.

§ 4 Altersvoraussetzungen und Einverständniserklärungen
Die Nutzung der Dienste von Cloudium Hosting ist grundsätzlich ab einem Mindestalter von 16 Jahren gestattet.

Personen im Alter zwischen 16 und 18 Jahren dürfen unsere Dienste nur in Anspruch nehmen, wenn das Einverständnis der Eltern bzw. Erziehungsberechtigten vorliegt. Auf Verlangen ist ein geeigneter Nachweis (z. B. schriftliche Zustimmung) vorzulegen.

Personen unter 16 Jahren können unsere Dienste ausschließlich mit ausdrücklicher Zustimmung der Eltern bzw. Erziehungsberechtigten nutzen. Auch hier behalten wir uns vor, die Vorlage eines Nachweises zu verlangen.

Da unser Hosting auf Prepaid-Basis erfolgt, ist für den Vertragsabschluss stets eine vorherige Zahlung erforderlich. Eine nachträgliche Belastung oder Zahlungspflicht besteht nicht.

Cloudium Hosting behält sich vor, bei Zweifeln an der Volljährigkeit oder an der Einverständniserklärung der Erziehungsberechtigten, die Bereitstellung der Dienste bis zur Klärung auszusetzen oder abzulehnen.

§ 5 Verfügbarkeit & Wartung
Cloudium Hosting gewährleistet eine 99,8 % Verfügbarkeit der bereitgestellten Dienste im Jahresdurchschnitt.

Geplante Wartungsarbeiten werden dem Kunden, soweit möglich, frühzeitig mitgeteilt.

Cloudium Hosting haftet nicht für Störungen oder Ausfälle, die außerhalb unseres Einflussbereichs liegen, wie z. B. durch höhere Gewalt oder Netzwerkausfälle bei Drittanbietern.

§ 6 Pflichten des Kunden
Der Kunde ist verpflichtet:

Seine Zugangsdaten sicher aufzubewahren und nicht an Dritte weiterzugeben.

Die Server nicht für rechtswidrige Zwecke zu nutzen oder Inhalte zu speichern, die gegen geltendes Recht oder die Rechte Dritter verstoßen.

Sicherzustellen, dass seine Anwendungen keine anderen Server oder Netzwerke beeinträchtigen.

Eigenverantwortlich Backups seiner Daten anzufertigen.

Verstöße gegen diese Pflichten können zur sofortigen Sperrung der Dienste führen.

§ 7 Laufzeit & Kündigung
Da unsere Dienste auf Prepaid-Basis bereitgestellt werden, gibt es keine Mindestvertragslaufzeit.

Läuft das Guthaben des Kunden aus, wird die Leistung automatisch eingestellt.

Verstöße gegen die AGB oder geltendes Recht berechtigen Cloudium Hosting zur sofortigen fristlosen Kündigung des Vertragsverhältnisses.

§ 8 Haftung
Cloudium Hosting haftet nur für Schäden, die vorsätzlich oder grob fahrlässig verursacht wurden.

Eine Haftung für Datenverluste, entgangenen Gewinn oder indirekte Schäden wird ausdrücklich ausgeschlossen.

Der Kunde ist für die Sicherheit und Integrität seiner Daten selbst verantwortlich.

§ 9 Widerrufsrecht
Da alle unsere Hosting-Dienste auf Prepaid-Basis angeboten werden und die Server unmittelbar nach der Zahlung bereitgestellt werden, verzichtet der Kunde mit der Zahlung automatisch auf sein gesetzliches Widerrufsrecht.

§ 10 Gerichtsstand
Für alle Streitigkeiten aus oder im Zusammenhang mit diesen AGB gilt niederländisches Recht. Das zuständige Gericht ist stets der Standort des gemieteten Servers.

Kontakt & Support
Für Fragen oder Supportanfragen stehen wir jederzeit zur Verfügung:
E-Mail: support@cloudium.host

Cloudium Hosting - Ihr zuverlässiger Hosting-Partner!`;

  return (
    <div className="pt-28 pb-16 bg-gradient-to-br from-slate-900 via-slate-800 to-gray-900 text-white min-h-screen">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-sky-500/10 mb-6 border border-sky-500/30">
            <FileText className="h-8 w-8 text-sky-400" />
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-4 bg-clip-text text-transparent bg-gradient-to-r from-sky-400 via-cyan-300 to-blue-400 pb-2">
            Allgemeine Geschäftsbedingungen
          </h1>
          <p className="text-lg text-slate-400">Cloudium Hosting</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="bg-slate-800/60 p-6 md:p-10 rounded-xl shadow-2xl border border-slate-700 max-w-4xl mx-auto text-slate-300"
        >
          {renderParagraphs(termsText)}
        </motion.div>
      </div>
    </div>
  );
};

export default TermsAndConditionsPage;