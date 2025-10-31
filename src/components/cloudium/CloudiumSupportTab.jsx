import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { AlertCircle, Send, MessageSquare, Shield } from 'lucide-react';
import { useToast } from '@/components/ui/use-toast';
import { CLOUDIUM_SUPPORT_WEBHOOK_URL, DISCORD_SERVER_INVITE_URL } from '@/config/appConfig';

const SupportContactForm = ({ webhookUrl }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.subject || !formData.message) {
      toast({
        title: 'Fehlende Eingaben',
        description: 'Bitte fülle alle Felder aus.',
        variant: 'destructive',
      });
      return;
    }

    setIsSubmitting(true);

    const payload = {
      embeds: [
        {
          title: `Neue Support-Anfrage: ${formData.subject}`,
          color: 0xfbbf24,
          fields: [
            { name: 'Name', value: formData.name, inline: true },
            { name: 'E-Mail', value: formData.email, inline: true },
            { name: 'Betreff', value: formData.subject, inline: false },
            { name: 'Nachricht', value: formData.message, inline: false },
          ],
          footer: { text: 'Cloudium Support-Anfrage' },
          timestamp: new Date().toISOString(),
        },
      ],
    };

    try {
      const res = await fetch(webhookUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });

      if (res.ok) {
        toast({
          title: 'Anfrage gesendet!',
          description: 'Wir melden uns so schnell wie möglich.',
          variant: 'success',
        });
        setFormData({ name: '', email: '', subject: '', message: '' });
      } else {
        toast({
          title: 'Fehler beim Senden',
          description: `Status: ${res.status}`,
          variant: 'destructive',
        });
      }
    } catch (err) {
      toast({
        title: 'Netzwerkfehler',
        description: 'Verbindung fehlgeschlagen. Bitte prüfe dein Internet.',
        variant: 'destructive',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <motion.form
      onSubmit={handleSubmit}
      className="space-y-6 bg-slate-800/70 p-8 rounded-xl border border-slate-700 shadow-xl"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.2 }}
    >
      <div>
        <Label htmlFor="name" className="text-slate-300">
          Dein Name
        </Label>
        <Input
          id="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Max Mustermann"
          className="bg-slate-700 border-slate-600 text-white placeholder-slate-500"
        />
      </div>
      <div>
        <Label htmlFor="email" className="text-slate-300">
          Deine E-Mail Adresse
        </Label>
        <Input
          id="email"
          type="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="max.mustermann@beispiel.de"
          className="bg-slate-700 border-slate-600 text-white placeholder-slate-500"
        />
      </div>
      <div>
        <Label htmlFor="subject" className="text-slate-300">
          Betreff
        </Label>
        <Input
          id="subject"
          value={formData.subject}
          onChange={handleChange}
          placeholder="Frage zu Paket ES3"
          className="bg-slate-700 border-slate-600 text-white placeholder-slate-500"
        />
      </div>
      <div>
        <Label htmlFor="message" className="text-slate-300">
          Deine Nachricht
        </Label>
        <Textarea
          id="message"
          value={formData.message}
          onChange={handleChange}
          rows={5}
          placeholder="Beschreibe dein Anliegen..."
          className="bg-slate-700 border-slate-600 text-white placeholder-slate-500"
        />
      </div>

      <div className="!mt-4">
        <div className="flex items-start space-x-3 bg-slate-900/50 p-3 rounded-md border border-slate-600/80">
          <Shield className="h-5 w-5 text-yellow-400 flex-shrink-0 mt-0.5" />
          <p className="text-xs text-slate-400">
            Zum Schutz vor Missbrauch werden technische Daten wie z. B. deine IP-Adresse erfasst.
          </p>
        </div>
      </div>

      <Button
        type="submit"
        disabled={isSubmitting}
        className="w-full bg-gradient-to-r from-sky-500 to-blue-600 hover:from-sky-400 hover:to-blue-500 text-white font-semibold py-3"
      >
        {isSubmitting ? (
          <>
            <AlertCircle className="animate-spin mr-2 h-5 w-5" /> Sende...
          </>
        ) : (
          <>
            <Send className="mr-2 h-5 w-5" /> Anfrage absenden
          </>
        )}
      </Button>
    </motion.form>
  );
};

const SupportFAQ = () => {
  const faqs = [
    {
      question: 'Wie schnell wird mein Server bereitgestellt?',
      answer:
        'In der Regel innerhalb weniger Minuten nach Bestätigung deiner Anfrage. Bei Custom Servern dauert es etwas länger.',
    },
    {
      question: 'Welche Zahlungsmethoden werden akzeptiert?',
      answer:
        'Aktuell läuft die Abwicklung über Discord. Zukünftig planen wir PayPal und Kreditkarte.',
    },
    {
      question: 'Kann ich mein Paket später upgraden?',
      answer:
        'Ja, ein Upgrade deines Pakets ist jederzeit möglich. Kontaktiere uns einfach über das Formular.',
    },
    {
      question: 'Bietet ihr DDoS-Schutz an?',
      answer:
        'Ja, alle unsere Server sind standardmäßig mit leistungsfähigem DDoS-Schutz ausgestattet.',
    },
  ];

  return (
    <motion.div className="space-y-6" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
      {faqs.map((faq, i) => (
        <div
          key={i}
          className="bg-slate-800/50 p-6 rounded-lg border border-slate-700"
        >
          <h4 className="text-lg font-semibold text-sky-400 mb-2">{faq.question}</h4>
          <p className="text-slate-400 text-sm">{faq.answer}</p>
        </div>
      ))}
    </motion.div>
  );
};

const CloudiumSupportTab = () => {
  return (
    <div className="max-w-5xl mx-auto">
      {/* Scroll-Anker außerhalb des Grids */}
      <div id="support-form-anchor" className="-mt-12 pt-12" aria-hidden="true" />

      <motion.div
        className="text-center max-w-3xl mx-auto mb-12"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <h2 className="text-4xl font-bold tracking-tight mb-4 text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-orange-400 to-yellow-400">
          Cloudium Support-Center
        </h2>
        <p className="text-lg text-slate-300">
          Wir sind hier, um dir zu helfen! Finde Antworten oder kontaktiere uns direkt.
        </p>
      </motion.div>

      {/* Formular + FAQ nebeneinander */}
      <div className="grid md:grid-cols-2 gap-12 items-start">
        <SupportContactForm webhookUrl={CLOUDIUM_SUPPORT_WEBHOOK_URL} />
        <SupportFAQ />
      </div>

      {/* Discord Bereich */}
      <motion.div
        className="mt-16 text-center bg-slate-800/70 p-8 rounded-xl border border-slate-700 shadow-xl"
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
      >
        <h3 className="text-2xl font-semibold text-sky-400 mb-4">
          Direkter Draht zur Community
        </h3>
        <p className="text-slate-300 mb-6">
          Du hast eine schnelle Frage? Tritt unserem Discord-Server bei!
        </p>
        <Button
          asChild
          size="lg"
          className="bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-400 hover:to-purple-500 text-white font-semibold py-3 px-8"
        >
          <a href={DISCORD_SERVER_INVITE_URL} target="_blank" rel="noopener noreferrer">
            <MessageSquare className="mr-2 h-5 w-5" /> Discord Server beitreten
          </a>
        </Button>
      </motion.div>
    </div>
  );
};

export default CloudiumSupportTab;
