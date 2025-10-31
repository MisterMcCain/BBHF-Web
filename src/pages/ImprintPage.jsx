import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';

const ImprintPage = () => {
  const pageVariants = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
    exit: { opacity: 0, y: -20, transition: { duration: 0.3, ease: "easeIn" } }
  };

  const sectionVariants = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
  };

  return (
    <motion.div
      className="min-h-screen bg-gradient-to-br from-slate-900 to-slate-950 text-slate-200 py-16 px-4 sm:px-6 lg:px-8"
      initial="initial"
      animate="animate"
      exit="exit"
      variants={pageVariants}
    >
      <Helmet>
        <title>Impressum - Busbahnhof</title>
        <meta name="description" content="Impressum und rechtliche Informationen von Busbahnhof.fun und Cloudium Hosting." />
      </Helmet>
      <div className="max-w-4xl mx-auto bg-slate-800/70 backdrop-blur-lg rounded-xl shadow-2xl p-8 md:p-12 border border-slate-700">
        <motion.h1 
          className="text-4xl md:text-5xl font-extrabold text-center mb-10 bg-clip-text text-transparent bg-gradient-to-r from-primary to-vibrantPurple-DEFAULT"
          variants={sectionVariants}
        >
          Impressum
        </motion.h1>

        <motion.section className="mb-8" variants={sectionVariants}>
          <h2 className="text-2xl font-bold text-slate-100 mb-4">Angaben gemäß § 5 TMG und Art. 5 der EU-Richtlinie 2000/31/EG (E-Commerce-Richtlinie)</h2>
          <p className="mb-2">
            <strong className="text-primary">Cloudium Hosting (Sayac Service)</strong><br />
            Inhaber: <strong className="text-primary">Jürgen Zeriouh</strong><br />
            NL-7511BR Enschede<br />
            Land: Niederlande
          </p>
          <p className="mb-2">
            E-Mail: <a href="mailto:info@mistermccain.com" className="text-blue-400 hover:text-blue-300 underline">info@mistermccain.com</a><br />
            Telefon: +31616790762
          </p>
          <p className="mb-2">
            Umsatzsteuer-Identifikationsnummer gemäß § 27a UStG / Art. 214 MwStSystRL: <strong className="text-primary">NL003758179B71</strong>
          </p>
        </motion.section>

        <motion.section className="mb-8" variants={sectionVariants}>
          <h2 className="text-2xl font-bold text-slate-100 mb-4">Verantwortlich für den Inhalt nach § 18 Abs. 2 MStV:</h2>
          <p>
            <strong className="text-primary">Jürgen Zeriouh</strong>
          </p>
        </motion.section>

        <motion.section className="mb-8" variants={sectionVariants}>
          <h2 className="text-2xl font-bold text-slate-100 mb-4">Haftungsausschluss</h2>
          <h3 className="text-xl font-bold text-slate-100 mb-2">Haftung für Inhalte</h3>
          <p className="mb-4">
            Als Diensteanbieter mit Sitz in der Europäischen Union sind wir gemäß den geltenden gesetzlichen Bestimmungen für eigene Inhalte auf dieser Website verantwortlich. Nach §§ 8 bis 10 TMG sind wir jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde Informationen zu überwachen oder nach Hinweisen auf rechtswidrige Tätigkeiten zu suchen. Verpflichtungen zur Entfernung oder Sperrung der Nutzung von Informationen nach den allgemeinen Gesetzen bleiben hiervon unberührt. Eine entsprechende Haftung ist jedoch erst ab dem Zeitpunkt der Kenntnis einer konkreten Rechtsverletzung möglich. Bei Bekanntwerden von entsprechenden Rechtsverletzungen entfernen wir diese Inhalte umgehend.
          </p>
          <h3 className="text-xl font-bold text-slate-100 mb-2">Haftung für Links</h3>
          <p>
            Unsere Website enthält Links zu externen Webseiten Dritter. Auf deren Inhalte haben wir keinen Einfluss, weshalb wir für diese fremden Inhalte keine Gewähr übernehmen können. Zum Zeitpunkt der Verlinkung waren keine rechtswidrigen Inhalte erkennbar. Eine permanente inhaltliche Kontrolle der verlinkten Seiten ist ohne konkrete Anhaltspunkte einer Rechtsverletzung nicht zumutbar. Bei Bekanntwerden von Rechtsverletzungen entfernen wir derartige Links umgehend.
          </p>
        </motion.section>

        <motion.section variants={sectionVariants}>
          <h2 className="text-2xl font-bold text-slate-100 mb-4">Kontaktstelle gemäß Art. 11 DSA (Digital Services Act)</h2>
          <p className="mb-2">
            Elektronische Kontaktstelle für Behörden und Nutzer gemäß Art. 11 DSA:<br />
            E-Mail: <a href="mailto:info@mistermccain.com" className="text-blue-400 hover:text-blue-300 underline">info@mistermccain.com</a><br />
            Verfügbare Sprachen: Deutsch, Englisch
          </p>
        </motion.section>
      </div>
    </motion.div>
  );
};

export default ImprintPage;