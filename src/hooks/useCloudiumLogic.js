import { useState } from 'react';
import { CLOUDIUM_ORDER_WEBHOOK_URL } from '@/config/appConfig';

export const useCloudiumLogic = (toast) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isManagedModalOpen, setIsManagedModalOpen] = useState(false);
  const [isCustomModalOpen, setIsCustomModalOpen] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState(null);
  const [discordName, setDiscordName] = useState('');

  const handlePlanSelect = (plan) => {
    setSelectedPlan(plan);
    setIsModalOpen(true);
  };

  const handleModalSubmit = async () => {
    if (!discordName.trim()) {
      toast({
        title: 'Fehler',
        description: 'Bitte gib deinen Discord Namen ein.',
        variant: 'destructive',
      });
      return;
    }

    if (!selectedPlan) {
      toast({
        title: 'Fehler',
        description: 'Kein Paket ausgewählt.',
        variant: 'destructive',
      });
      return;
    }

    const payload = {
      embeds: [{
        title: `Neue Paketanfrage: ${selectedPlan.name}`,
        color: 0x8b5cf6, 
        fields: [
          { name: 'Paket', value: selectedPlan.name, inline: true },
          { name: 'Preis', value: selectedPlan.price, inline: true },
          { name: 'Discord Name', value: discordName, inline: false },
        ],
        footer: { text: 'Cloudium Paketanfrage' },
        timestamp: new Date().toISOString(),
      }],
    };

    try {
      const response = await fetch(CLOUDIUM_ORDER_WEBHOOK_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });

      if (response.ok) {
        toast({
          title: 'Bestellung erfolgreich!',
          description: "Vielen Dank für deine Bestellung! Deine Anfrage ist erfolgreich eingegangen und wir melden uns in Kürze.",
        });
        setIsModalOpen(false);
        setDiscordName('');
      } else {
        toast({
          title: 'Fehler beim Senden',
          description: 'Deine Anfrage konnte nicht gesendet werden. Bitte versuche es später erneut.',
          variant: 'destructive',
        });
      }
    } catch (error) {
      toast({
        title: 'Netzwerkfehler',
        description: 'Verbindung zum Server fehlgeschlagen. Bitte überprüfe deine Internetverbindung.',
        variant: 'destructive',
      });
    }
  };

  const handleManagedGameHostingSubmit = async (data) => {
    try {
      const response = await fetch(CLOUDIUM_ORDER_WEBHOOK_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          embeds: [{
            title: 'Neue Anfrage: Managed Game Hosting',
            color: 0x7c3aed,
            fields: [
              { name: 'Discord Name', value: data.discordName, inline: true },
              { name: 'Gewünschtes Spiel', value: data.game, inline: true }, 
              { name: 'Zusätzliche Infos', value: data.additionalInfo || 'Keine', inline: false },
            ],
            timestamp: new Date().toISOString(),
          }],
        }),
      });
      if (response.ok) {
        toast({ 
            title: 'Anfrage erfolgreich!', 
            description: "Vielen Dank für deine Anfrage! Sie ist erfolgreich eingegangen und wir melden uns in Kürze.", 
        });
      } else {
        toast({ title: 'Fehler', description: 'Anfrage konnte nicht gesendet werden.', variant: 'destructive' });
      }
    } catch (error) {
      toast({ title: 'Fehler', description: 'Netzwerkfehler.', variant: 'destructive' });
    }
    setIsManagedModalOpen(false);
  };

  const handleCustomServerSubmit = async (data) => {
     try {
      const response = await fetch(CLOUDIUM_ORDER_WEBHOOK_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          embeds: [{
            title: 'Neue Anfrage: Custom Server',
            color: 0x0ea5e9,
            fields: [
              { name: 'Discord Name', value: data.discordName, inline: true },
              { name: 'vCores', value: data.vCores, inline: true },
              { name: 'RAM (GB)', value: data.ram, inline: true },
              { name: 'SSD Speicher (GB)', value: data.ssd, inline: true },
              { name: 'Zusätzliche Infos', value: data.additionalInfo || 'Keine', inline: false },
            ],
            timestamp: new Date().toISOString(),
          }],
        }),
      });
      if (response.ok) {
        toast({ 
            title: 'Anfrage erfolgreich!', 
            description: "Vielen Dank für deine Anfrage! Sie ist erfolgreich eingegangen und wir melden uns in Kürze.",
        });
      } else {
        toast({ title: 'Fehler', description: 'Anfrage konnte nicht gesendet werden.', variant: 'destructive' });
      }
    } catch (error) {
      toast({ title: 'Fehler', description: 'Netzwerkfehler.', variant: 'destructive' });
    }
    setIsCustomModalOpen(false);
  };

  return {
    isModalOpen,
    setIsModalOpen,
    isManagedModalOpen,
    setIsManagedModalOpen,
    isCustomModalOpen,
    setIsCustomModalOpen,
    selectedPlan,
    discordName,
    setDiscordName,
    handlePlanSelect,
    handleModalSubmit,
    handleManagedGameHostingSubmit,
    handleCustomServerSubmit,
  };
};