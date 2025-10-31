import React, { useState, useEffect } from 'react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
  DialogClose
} from '@/components/ui/dialog';
import { X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Slider } from '@/components/ui/slider';
import { useToast } from '@/components/ui/use-toast';
import { Shield } from 'lucide-react';

const CustomServerModal = ({ isOpen, onClose, preselectedGame, preselectedPlan }) => {
  const [discordName, setDiscordName] = useState('');
  const [vCores, setVCores] = useState([4]);
  const [ram, setRam] = useState([8]);
  const [ssd, setSsd] = useState([100]);
  const [additionalInfo, setAdditionalInfo] = useState('');
  const { toast } = useToast();

  // 🧠 Wenn Spiel & Plan vorbelegt sind → automatisch in Text übernehmen
  useEffect(() => {
    if (preselectedGame || preselectedPlan) {
      setAdditionalInfo(
        `Anfrage für Spiel: ${preselectedGame ?? '-'} | Empfohlener Plan: ${preselectedPlan ?? '-'}`
      );
    }
  }, [preselectedGame, preselectedPlan]);

  const handleSubmit = () => {
    if (!discordName.trim()) {
      toast({
        title: 'Fehler',
        description: 'Bitte gib deinen Discord Namen ein.',
        variant: 'destructive'
      });
      return;
    }

    // Beispiel-Submit → in der Praxis würdest du hier ein Backend ansprechen
    toast({
      title: 'Anfrage gesendet',
      description: 'Wir melden uns bald bei dir mit einem Angebot.',
    });

    // Zurücksetzen & schließen
    setDiscordName('');
    setVCores([4]);
    setRam([8]);
    setSsd([100]);
    setAdditionalInfo('');
    onClose();
  };

  return (
    <Dialog open={isOpen} onOpenChange={(open) => !open && onClose()}>
      <DialogContent className="sm:max-w-lg bg-slate-800 border-slate-700 text-white" hideCloseButton>
        <DialogClose asChild>
          <button
            aria-label="Schließen"
            className="absolute right-4 top-4 rounded-md p-1 opacity-70 transition hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-sky-400 hover:bg-slate-700/50"
          >
            <X className="h-5 w-5" />
          </button>
        </DialogClose>
        <DialogHeader>
          <DialogTitle className="text-sky-400">Custom Server Konfiguration</DialogTitle>
          <DialogDescription className="text-slate-400">
            Stelle dir deinen Server nach deinen Wünschen zusammen. Wir erstellen dir ein
            individuelles Angebot. Bitte beachte, dass für die Einrichtung eine einmalige
            Gebühr von 5,00 € anfällt.
          </DialogDescription>
        </DialogHeader>

        <div className="grid gap-6 py-4">
          {/* Discord Name */}
          <div className="grid gap-2">
            <Label htmlFor="custom-discordName" className="text-slate-300">
              Discord Name
            </Label>
            <Input
              id="custom-discordName"
              value={discordName}
              onChange={(e) => setDiscordName(e.target.value)}
              placeholder="DeinName#1234"
              className="bg-slate-700 border-slate-600 placeholder:text-slate-500"
            />
          </div>

          {/* vCores */}
          <div className="grid gap-3">
            <Label htmlFor="custom-vcores" className="text-slate-300">
              vCores: <span className="font-bold text-sky-400">{vCores[0]}</span>
            </Label>
            <Slider
              id="custom-vcores"
              min={1}
              max={16}
              step={1}
              value={vCores}
              onValueChange={setVCores}
              className="[&>span:first-child]:h-1 [&>span:first-child]:bg-sky-500"
            />
          </div>

          {/* RAM */}
          <div className="grid gap-3">
            <Label htmlFor="custom-ram" className="text-slate-300">
              RAM (GB): <span className="font-bold text-sky-400">{ram[0]}</span>
            </Label>
            <Slider
              id="custom-ram"
              min={2}
              max={64}
              step={2}
              value={ram}
              onValueChange={setRam}
              className="[&>span:first-child]:h-1 [&>span:first-child]:bg-sky-500"
            />
          </div>

          {/* SSD */}
          <div className="grid gap-3">
            <Label htmlFor="custom-ssd" className="text-slate-300">
              SSD Speicher (GB): <span className="font-bold text-sky-400">{ssd[0]}</span>
            </Label>
            <Slider
              id="custom-ssd"
              min={50}
              max={500}
              step={10}
              value={ssd}
              onValueChange={setSsd}
              className="[&>span:first-child]:h-1 [&>span:first-child]:bg-sky-500"
            />
          </div>

          {/* Infofeld */}
          <div className="grid gap-2">
            <Label htmlFor="custom-additionalInfo" className="text-slate-300">
              Zusätzliche Informationen (optional)
            </Label>
            <Textarea
              id="custom-additionalInfo"
              value={additionalInfo}
              onChange={(e) => setAdditionalInfo(e.target.value)}
              placeholder="Spezielle Anforderungen, Betriebssystem, etc."
              className="bg-slate-700 border-slate-600 placeholder:text-slate-500 min-h-[100px]"
            />
          </div>

          {/* Hinweis */}
          <div className="!mt-4">
            <div className="flex items-start space-x-3 bg-slate-900/50 p-3 rounded-md border border-slate-600/80">
              <Shield className="h-5 w-5 text-yellow-400 flex-shrink-0 mt-0.5" />
              <p className="text-xs text-slate-400">
                Zum Schutz vor Missbrauch und zur Gewährleistung der Sicherheit werden bei der
                Übermittlung dieses Formulars technische Daten, wie z.B. deine IP-Adresse, erfasst.
              </p>
            </div>
          </div>
        </div>

        {/* Footer */}
        <DialogFooter>
          <Button
            type="button"
            variant="outline"
            onClick={onClose}
            className="text-slate-300 border-slate-600 hover:bg-slate-700 hover:text-white"
          >
            Abbrechen
          </Button>
          <Button
            type="submit"
            onClick={handleSubmit}
            className="bg-gradient-to-r from-sky-500 to-blue-500 hover:opacity-90 text-white"
          >
            Anfrage senden
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default CustomServerModal;
