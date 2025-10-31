import React, { useState, useEffect } from 'react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
  DialogClose,
} from '@/components/ui/dialog';
import { X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { useToast } from '@/components/ui/use-toast';
import { Shield } from 'lucide-react';

const ManagedGameHostingModal = ({ isOpen, onOpenChange, onSubmit, supportedGames }) => {
  const [discordName, setDiscordName] = useState('');
  const [game, setGame] = useState('');
  const [otherGameName, setOtherGameName] = useState('');
  const [additionalInfo, setAdditionalInfo] = useState('');
  const { toast } = useToast();

  useEffect(() => {
    if (!isOpen) {
      setDiscordName('');
      setGame('');
      setOtherGameName('');
      setAdditionalInfo('');
    }
  }, [isOpen]);

  const handleSubmit = () => {
    if (!discordName.trim()) {
      toast({ title: 'Fehler', description: 'Bitte gib deinen Discord Namen ein.', variant: 'destructive' });
      return;
    }
    if (!game) {
      toast({ title: 'Fehler', description: 'Bitte wähle ein Spiel aus.', variant: 'destructive' });
      return;
    }
    if (game === 'Andere' && !otherGameName.trim()) {
      toast({ title: 'Fehler', description: 'Bitte gib den Namen des anderen Spiels an.', variant: 'destructive' });
      return;
    }

    const gameToSubmit = game === 'Andere' ? `Andere: ${otherGameName}` : game;
    onSubmit({ discordName, game: gameToSubmit, additionalInfo });
  };

  return (
    <Dialog open={isOpen} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-md bg-slate-800 border border-slate-700 text-white rounded-xl shadow-xl" hideCloseButton>
        <DialogClose asChild>
          <button
            aria-label="Schließen"
            className="absolute right-4 top-4 rounded-md p-1 opacity-70 transition hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-sky-400 hover:bg-slate-700/50"
          >
            <X className="h-5 w-5" />
          </button>
        </DialogClose>
        <DialogHeader>
          <DialogTitle className="text-sky-400">Managed Game Hosting Anfrage</DialogTitle>
          <DialogDescription className="text-slate-400">
            Wir kümmern uns um die Einrichtung und Wartung deines Game-Servers. Für diesen Service fällt eine monatliche Gebühr von 3,50 € zuzüglich zu den regulären Serverkosten an.
          </DialogDescription>
        </DialogHeader>

        <div className="grid gap-4 py-4">
          <div className="grid gap-2">
            <Label htmlFor="discordName" className="text-slate-300">Discord Name</Label>
            <Input
              id="discordName"
              value={discordName}
              onChange={(e) => setDiscordName(e.target.value)}
              placeholder="DeinName#1234"
              className="bg-slate-700 border-slate-600 placeholder:text-slate-500"
            />
          </div>

          <div className="grid gap-2">
            <Label htmlFor="game" className="text-slate-300">Gewünschtes Spiel</Label>
            <Select value={game} onValueChange={setGame}>
              <SelectTrigger id="game" className="bg-slate-700 border-slate-600">
                <SelectValue placeholder="Spiel auswählen" />
              </SelectTrigger>
              <SelectContent className="bg-slate-700 border-slate-600 text-white">
                {supportedGames.map((g) => (
                  <SelectItem key={g.name} value={g.name} className="hover:bg-slate-600 focus:bg-slate-600">
                    {g.icon} {g.name}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          {game === 'Andere' && (
            <div className="grid gap-2">
              <Label htmlFor="otherGameName" className="text-slate-300">Name des Spiels</Label>
              <Input
                id="otherGameName"
                value={otherGameName}
                onChange={(e) => setOtherGameName(e.target.value)}
                placeholder="z.B. Enshrouded"
                className="bg-slate-700 border-slate-600 placeholder:text-slate-500"
              />
            </div>
          )}

          <div className="grid gap-2">
            <Label htmlFor="additionalInfo" className="text-slate-300">Zusätzliche Informationen (optional)</Label>
            <Textarea
              id="additionalInfo"
              value={additionalInfo}
              onChange={(e) => setAdditionalInfo(e.target.value)}
              placeholder="Spezielle Wünsche, Spieleranzahl, etc."
              className="bg-slate-700 border-slate-600 placeholder:text-slate-500 min-h-[100px]"
            />
          </div>

          <div className="flex items-start space-x-3 bg-slate-900/50 p-3 rounded-md border border-slate-600/80 mt-2">
            <Shield className="h-5 w-5 text-yellow-400 flex-shrink-0 mt-0.5" />
            <p className="text-xs text-slate-400">
              Zum Schutz vor Missbrauch werden bei der Übermittlung technische Daten, wie z.B. deine IP-Adresse, erfasst.
            </p>
          </div>
        </div>

        <DialogFooter>
          <Button variant="outline" onClick={() => onOpenChange(false)} className="text-slate-300 border-slate-600 hover:bg-slate-700 hover:text-white">
            Abbrechen
          </Button>
          <Button onClick={handleSubmit} className="bg-gradient-to-r from-teal-500 to-cyan-500 hover:opacity-90 text-white">
            Anfrage senden
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default ManagedGameHostingModal;
