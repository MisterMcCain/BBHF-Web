import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';
import { useToast } from '@/components/ui/use-toast';
import { Send, Loader2, Shield } from 'lucide-react';
import { Checkbox } from '@/components/ui/checkbox';

const PartnershipForm = () => {
  const [formData, setFormData] = useState({
    serverName: '',
    serverLink: '',
    projectDescription: '',
    partnershipReason: '',
    contactPerson: '',
    hasConfirmed: false,
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const validate = () => {
    const newErrors = {};
    if (!formData.serverName.trim()) newErrors.serverName = 'Servername ist erforderlich.';
    if (!formData.serverLink.trim()) {
      newErrors.serverLink = 'Server-Link ist erforderlich.';
    } else {
      try {
        const url = new URL(formData.serverLink);
        if (url.protocol !== 'http:' && url.protocol !== 'https:') {
          newErrors.serverLink = 'Bitte gib einen gültigen Discord-Einladungslink oder Server-Link ein (http/https).';
        }
      } catch (_) {
        newErrors.serverLink = 'Bitte gib einen gültigen Link ein.';
      }
    }
    if (!formData.projectDescription.trim()) newErrors.projectDescription = 'Beschreibung des Projekts ist erforderlich.';
    else if (formData.projectDescription.trim().length < 50) newErrors.projectDescription = 'Die Beschreibung sollte mindestens 50 Zeichen lang sein.';
    if (!formData.partnershipReason.trim()) newErrors.partnershipReason = 'Grund für Partnerschaft ist erforderlich.';
    else if (formData.partnershipReason.trim().length < 30) newErrors.partnershipReason = 'Der Grund sollte mindestens 30 Zeichen lang sein.';
    if (!formData.contactPerson.trim()) newErrors.contactPerson = 'Ansprechpartner (Discord-Tag) ist erforderlich.';
    else if (!/^.{2,32}#\d{4}$/.test(formData.contactPerson.trim()) && !/^@?[a-z0-9_\\.]{2,32}$/.test(formData.contactPerson.trim())) {
        newErrors.contactPerson = 'Bitte gib einen gültigen Discord-Tag (z.B. DeinName#1234) oder Benutzernamen (z.B. @deinname oder dein.name) ein.';
    }
    if (!formData.hasConfirmed) {
      newErrors.hasConfirmed = 'Du musst die Voraussetzungen und Bedingungen bestätigen.';
    }


    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({ ...prev, [name]: type === 'checkbox' ? checked : value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) {
      toast({
        variant: 'destructive',
        title: '❌ Fehler im Formular',
        description: 'Bitte überprüfe deine Eingaben und bestätige die Bedingungen.',
      });
      return;
    }

    setIsSubmitting(true);

    const email = 'discord@busbahnhof.fun';
    const subject = `Partnerschaftsanfrage: ${formData.serverName}`;
    const body = `
Neue Partnerschaftsanfrage erhalten:

Servername:
${formData.serverName}

Server-Link:
${formData.serverLink}

Beschreibung des Projekts:
${formData.projectDescription}

Warum eine Partnerschaft?:
${formData.partnershipReason}

Ansprechpartner (Discord):
${formData.contactPerson}

Bedingungen akzeptiert: Ja
    `;

    const mailtoLink = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body.trim())}`;

    try {
      window.location.href = mailtoLink;
      
      setTimeout(() => {
        toast({
          variant: 'default',
          title: '✅ E-Mail-Programm geöffnet!',
          description: 'Bitte sende die vorbereitete E-Mail ab, um deine Bewerbung abzuschließen.',
          className: "bg-green-600 text-white border-green-700"
        });
        setFormData({
          serverName: '',
          serverLink: '',
          projectDescription: '',
          partnershipReason: '',
          contactPerson: '',
          hasConfirmed: false,
        });
        setErrors({});
        setIsSubmitting(false);
      }, 1000);

    } catch (error) {
      console.error('Mailto link error:', error);
      toast({
        variant: 'destructive',
        title: '❌ Fehler',
        description: 'Dein E-Mail-Programm konnte nicht geöffnet werden. Bitte kontaktiere uns direkt.',
      });
      setIsSubmitting(false);
    }
  };
  
  const inputFieldVariants = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.4 }
  };

  return (
    <motion.form
      onSubmit={handleSubmit}
      className="bg-[#1e1e2f] p-6 sm:p-8 md:p-10 rounded-xl shadow-2xl w-full max-w-2xl mx-auto border border-slate-700"
      variants={{
        initial: { opacity: 0, scale: 0.95 },
        animate: { opacity: 1, scale: 1, transition: { duration: 0.5, ease: "easeOut" } }
      }}
      initial="initial"
      animate="animate"
    >
      <h2 className="text-2xl sm:text-3xl font-bold text-center mb-8 text-white">
        Partnerschaftsantrag stellen
      </h2>

      <div className="space-y-6">
        <motion.div variants={inputFieldVariants}>
          <Label htmlFor="serverName" className="text-white text-sm font-medium">Servername</Label>
          <Input
            id="serverName"
            name="serverName"
            value={formData.serverName}
            onChange={handleChange}
            placeholder="Name deines Servers / Projekts"
            className={`mt-1 bg-slate-700/50 border-slate-600 placeholder:text-slate-400 text-white focus:ring-[#FFD700] focus:border-[#FFD700] ${errors.serverName ? 'border-red-500 focus:ring-red-500' : ''}`}
          />
          {errors.serverName && <p className="text-xs text-red-400 mt-1">{errors.serverName}</p>}
        </motion.div>

        <motion.div variants={inputFieldVariants} transition={{delay:0.05}}>
          <Label htmlFor="serverLink" className="text-white text-sm font-medium">Server-Link (Discord)</Label>
          <Input
            id="serverLink"
            name="serverLink"
            type="url"
            value={formData.serverLink}
            onChange={handleChange}
            placeholder="z.B. https://discord.gg/deinserver"
            className={`mt-1 bg-slate-700/50 border-slate-600 placeholder:text-slate-400 text-white focus:ring-[#FFD700] focus:border-[#FFD700] ${errors.serverLink ? 'border-red-500 focus:ring-red-500' : ''}`}
          />
          {errors.serverLink && <p className="text-xs text-red-400 mt-1">{errors.serverLink}</p>}
        </motion.div>

        <motion.div variants={inputFieldVariants} transition={{delay:0.1}}>
          <Label htmlFor="projectDescription" className="text-white text-sm font-medium">Beschreibung des Projekts</Label>
          <Textarea
            id="projectDescription"
            name="projectDescription"
            value={formData.projectDescription}
            onChange={handleChange}
            placeholder="Was macht deinen Server / dein Projekt besonders? (mind. 50 Zeichen)"
            rows={4}
            className={`mt-1 bg-slate-700/50 border-slate-600 placeholder:text-slate-400 text-white focus:ring-[#FFD700] focus:border-[#FFD700] ${errors.projectDescription ? 'border-red-500 focus:ring-red-500' : ''}`}
          />
          {errors.projectDescription && <p className="text-xs text-red-400 mt-1">{errors.projectDescription}</p>}
        </motion.div>

        <motion.div variants={inputFieldVariants} transition={{delay:0.15}}>
          <Label htmlFor="partnershipReason" className="text-white text-sm font-medium">Warum eine Partnerschaft?</Label>
          <Textarea
            id="partnershipReason"
            name="partnershipReason"
            value={formData.partnershipReason}
            onChange={handleChange}
            placeholder="Was erwartest du dir von einer Partnerschaft mit uns? (mind. 30 Zeichen)"
            rows={3}
            className={`mt-1 bg-slate-700/50 border-slate-600 placeholder:text-slate-400 text-white focus:ring-[#FFD700] focus:border-[#FFD700] ${errors.partnershipReason ? 'border-red-500 focus:ring-red-500' : ''}`}
          />
          {errors.partnershipReason && <p className="text-xs text-red-400 mt-1">{errors.partnershipReason}</p>}
        </motion.div>

        <motion.div variants={inputFieldVariants} transition={{delay:0.2}}>
          <Label htmlFor="contactPerson" className="text-white text-sm font-medium">Ansprechpartner (Discord-Tag / Benutzername)</Label>
          <Input
            id="contactPerson"
            name="contactPerson"
            value={formData.contactPerson}
            onChange={handleChange}
            placeholder="DeinName#1234 oder @dein.name"
            className={`mt-1 bg-slate-700/50 border-slate-600 placeholder:text-slate-400 text-white focus:ring-[#FFD700] focus:border-[#FFD700] ${errors.contactPerson ? 'border-red-500 focus:ring-red-500' : ''}`}
          />
          {errors.contactPerson && <p className="text-xs text-red-400 mt-1">{errors.contactPerson}</p>}
        </motion.div>

        <motion.div variants={inputFieldVariants} transition={{delay:0.25}}>
          <div className="flex items-start space-x-3">
            <Checkbox
              id="hasConfirmed"
              name="hasConfirmed"
              checked={formData.hasConfirmed}
              onCheckedChange={(checked) => handleChange({ target: { name: 'hasConfirmed', type: 'checkbox', checked } })}
              className={`mt-1 border-slate-500 data-[state=checked]:bg-sky-500 data-[state=checked]:border-sky-500 ${errors.hasConfirmed ? 'border-red-500' : ''}`}
            />
            <div className="grid gap-1.5 leading-none">
              <label
                htmlFor="hasConfirmed"
                className="text-sm font-medium leading-none text-white peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                Ich bestätige, dass ich die Voraussetzungen für eine Partnerschaft erfülle und die{' '}
                <a
                  href="https://discord.com/terms"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-semibold text-sky-400 hover:text-sky-300 underline underline-offset-2 transition-colors"
                >
                  Discord ToS
                </a>{' '}
                gelesen habe und akzeptiere.
              </label>
            </div>
          </div>
          {errors.hasConfirmed && <p className="text-xs text-red-400 mt-2">{errors.hasConfirmed}</p>}
        </motion.div>
      </div>

      <motion.div variants={inputFieldVariants} className="!mt-6">
        <div className="flex items-start space-x-3 bg-slate-800/50 p-3 rounded-md border border-slate-600/80">
          <Shield className="h-5 w-5 text-yellow-400 flex-shrink-0 mt-0.5" />
          <p className="text-xs text-slate-400">
            Zum Schutz vor Missbrauch und zur Gewährleistung der Sicherheit werden bei der Übermittlung dieses Formulars technische Daten, wie z.B. deine IP-Adresse, erfasst.
          </p>
        </div>
      </motion.div>

      <motion.div 
        className="mt-10 text-center"
        variants={inputFieldVariants}
        transition={{delay:0.3}}
      >
        <Button
          type="submit"
          disabled={isSubmitting}
          className="w-full sm:w-auto font-semibold py-3 px-8 text-base text-black bg-gradient-to-r from-[#FFD700] via-[#FFEA00] to-[#007BFF] hover:shadow-[0_0_20px_5px_rgba(255,215,0,0.5),0_0_20px_5px_rgba(0,123,255,0.3)] transition-all duration-300 ease-in-out transform hover:scale-105 focus:ring-4 focus:ring-[#FFD700]/50 focus:ring-offset-2 focus:ring-offset-[#1e1e2f] rounded-lg"
        >
          {isSubmitting ? (
            <>
              <Loader2 className="mr-2 h-5 w-5 animate-spin" />
              Sende...
            </>
          ) : (
            <>
              <Send className="mr-2 h-5 w-5" />
              Bewerbung absenden
            </>
          )}
        </Button>
      </motion.div>
    </motion.form>
  );
};

export default PartnershipForm;