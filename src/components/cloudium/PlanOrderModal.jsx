import React, { useState, useEffect } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
  DialogClose,          // ⬅️ NEU
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Shield, X } from "lucide-react";       // ⬅️ X-Icon
import { useToast } from "@/components/ui/use-toast";

const PlanOrderModal = ({ isOpen, onClose, selectedPlan }) => {
  const [discordName, setDiscordName] = useState("");
  const [notes, setNotes] = useState("");
  const { toast } = useToast();

  useEffect(() => {
    if (!isOpen) {
      setDiscordName("");
      setNotes("");
    }
  }, [isOpen]);

  const handleSubmit = () => {
    if (!discordName.trim()) {
      toast({
        title: "Fehler",
        description: "Bitte gib deinen Discord-Namen ein.",
        variant: "destructive",
      });
      return;
    }
    toast({
      title: "Bestellung gesendet",
      description: `Deine Bestellung für ${selectedPlan?.name} wurde übermittelt.`,
    });
    onClose();
  };

  return (
    <Dialog open={isOpen} onOpenChange={(open) => { if (!open) onClose(); }}>
      {/* overflow-visible, damit nichts abgeschnitten wird */}
      <DialogContent className="dialog-content sm:max-w-2xl bg-slate-800 border-slate-700 text-white overflow-visible" hideCloseButton>
        <DialogClose asChild>
          <button
            aria-label="Schließen"
            className="absolute right-4 top-4 rounded-md p-1 opacity-70 transition hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-sky-400 hover:bg-slate-700/50"
          >
            <X className="h-5 w-5" />
          </button>
        </DialogClose>

        <DialogHeader>
          <DialogTitle className="text-sky-400">Server bestellen – {selectedPlan?.name}</DialogTitle>
          <DialogDescription className="text-slate-400">
            Bitte gib deinen Discord-Namen an, damit wir dich bei Rückfragen erreichen können.
            Nach der Bestätigung wird der Server manuell durch unser Team eingerichtet.
          </DialogDescription>
        </DialogHeader>

        <div className="grid gap-6 py-4">
          <div className="grid gap-2">
            <Label htmlFor="discord" className="text-slate-300">Discord Name</Label>
            <Input
              id="discord"
              value={discordName}
              onChange={(e) => setDiscordName(e.target.value)}
              placeholder="z. B. Gamer#1234"
              className="bg-slate-700 border-slate-600 placeholder:text-slate-500"
            />
          </div>

          <div className="grid gap-2">
            <Label htmlFor="notes" className="text-slate-300">Anmerkungen (optional)</Label>
            <Textarea
              id="notes"
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
              placeholder="z. B. gewünschtes Startdatum, Mods, Besonderheiten …"
              className="bg-slate-700 border-slate-600 placeholder:text-slate-500 min-h-[100px]"
            />
          </div>

          <div className="!mt-2">
            <div className="flex items-start space-x-3 bg-slate-900/50 p-3 rounded-md border border-slate-600/80">
              <Shield className="h-5 w-5 text-yellow-400 flex-shrink-0 mt-0.5" />
              <p className="text-xs text-slate-400">
                Zum Schutz vor Missbrauch und zur Gewährleistung der Sicherheit werden bei der Übermittlung
                technische Daten (z. B. IP-Adresse) erfasst.
              </p>
            </div>
          </div>
        </div>

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
            onClick={handleSubmit}
            className="bg-gradient-to-r from-sky-500 to-blue-500 hover:opacity-90 text-white"
          >
            Bestellung senden
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default PlanOrderModal;
