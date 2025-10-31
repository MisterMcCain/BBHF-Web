import React from 'react';
import { motion } from 'framer-motion';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Checkbox } from '@/components/ui/checkbox';

export const inputFieldVariants = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.4 }
};

export const DiscordNameField = ({ value, onChange, error }) => (
  <motion.div variants={inputFieldVariants}>
    <Label htmlFor="discordName" className="text-lg font-medium text-slate-200">Discord-Name</Label>
    <Input
      id="discordName"
      name="discordName"
      value={value}
      onChange={onChange}
      placeholder="DeinName"
      className={`mt-2 bg-slate-700/50 border-slate-600 placeholder:text-slate-400 text-slate-100 focus:ring-primary ${error ? 'border-red-500 focus:ring-red-500' : ''}`}
    />
    {error && <p className="text-sm text-red-400 mt-1">{error}</p>}
  </motion.div>
);

export const AgeField = ({ value, onChange, error }) => (
  <motion.div variants={inputFieldVariants}>
    <Label htmlFor="age" className="text-lg font-medium text-slate-200">Alter (mind. 14 Jahre)</Label>
    <Input
      id="age"
      name="age"
      type="number"
      value={value}
      onChange={onChange}
      placeholder="z.B. 14"
      className={`mt-2 bg-slate-700/50 border-slate-600 placeholder:text-slate-400 text-slate-100 focus:ring-primary ${error ? 'border-red-500 focus:ring-red-500' : ''}`}
    />
    {error && <p className="text-sm text-red-400 mt-1">{error}</p>}
  </motion.div>
);

export const MotivationField = ({ value, onChange, error }) => (
  <motion.div variants={inputFieldVariants}>
    <Label htmlFor="motivation" className="text-lg font-medium text-slate-200">Warum möchtest du Teil des Teams werden?</Label>
    <Textarea
      id="motivation"
      name="motivation"
      value={value}
      onChange={onChange}
      placeholder="Erzähle uns von deiner Motivation..."
      rows={5}
      className={`mt-2 bg-slate-700/50 border-slate-600 placeholder:text-slate-400 text-slate-100 focus:ring-primary ${error ? 'border-red-500 focus:ring-red-500' : ''}`}
    />
    {error && <p className="text-sm text-red-400 mt-1">{error}</p>}
  </motion.div>
);

export const ExperienceField = ({ value, onChange, error }) => (
  <motion.div variants={inputFieldVariants}>
    <Label htmlFor="experience" className="text-lg font-medium text-slate-200">Welche Erfahrungen bringst du mit?</Label>
    <Textarea
      id="experience"
      name="experience"
      value={value}
      onChange={onChange}
      placeholder="Beschreibe deine relevanten Erfahrungen..."
      rows={5}
      className={`mt-2 bg-slate-700/50 border-slate-600 placeholder:text-slate-400 text-slate-100 focus:ring-primary ${error ? 'border-red-500 focus:ring-red-500' : ''}`}
    />
    {error && <p className="text-sm text-red-400 mt-1">{error}</p>}
  </motion.div>
);

export const AreaField = ({ value, onValueChange, error, areas: propAreas }) => (
  <motion.div variants={inputFieldVariants}>
    <Label htmlFor="area" className="text-lg font-medium text-slate-200">In welchem Bereich möchtest du mitwirken?</Label>
    <Select onValueChange={onValueChange} value={value}>
      <SelectTrigger className={`w-full mt-2 bg-slate-700/50 border-slate-600 text-slate-100 focus:ring-primary ${error ? 'border-red-500 focus:ring-red-500' : ''}`}>
        <SelectValue placeholder="Bereich auswählen" />
      </SelectTrigger>
      <SelectContent className="bg-slate-800 border-slate-700 text-slate-100">
        {propAreas.map(area => (
          <SelectItem key={area.id} value={area.id} className="hover:bg-slate-700 focus:bg-slate-700">
            {area.icon} {area.label}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
    {error && <p className="text-sm text-red-400 mt-1">{error}</p>}
  </motion.div>
);

export const OtherAreaDescriptionField = ({ value, onChange, error, isVisible }) => {
  if (!isVisible) return null;
  return (
    <motion.div 
      variants={inputFieldVariants} 
      initial="initial" 
      animate="animate" 
      exit="initial" 
      className="mt-4"
    >
      <Label htmlFor="otherAreaDescription" className="text-lg font-medium text-slate-200">Beschreibung für "Anderes"</Label>
      <Textarea
        id="otherAreaDescription"
        name="otherAreaDescription"
        value={value}
        onChange={onChange}
        placeholder="Bitte beschreibe hier den Bereich genauer..."
        rows={3}
        className={`mt-2 bg-slate-700/50 border-slate-600 placeholder:text-slate-400 text-slate-100 focus:ring-primary ${error ? 'border-red-500 focus:ring-red-500' : ''}`}
      />
      {error && <p className="text-sm text-red-400 mt-1">{error}</p>}
    </motion.div>
  );
};


export const AvailabilityField = ({ value, onChange }) => (
  <motion.div variants={inputFieldVariants}>
    <Label htmlFor="availability" className="text-lg font-medium text-slate-200">Zeitliche Verfügbarkeit (Optional)</Label>
    <Input
      id="availability"
      name="availability"
      value={value}
      onChange={onChange}
      placeholder="z.B. Abends unter der Woche, Wochenende flexibel"
      className="mt-2 bg-slate-700/50 border-slate-600 placeholder:text-slate-400 text-slate-100 focus:ring-primary"
    />
  </motion.div>
);

export const TermsAgreementField = ({ checked, onCheckedChange, error }) => (
  <>
    <motion.div variants={inputFieldVariants} className="flex items-start space-x-3 pt-2">
      <Checkbox
        id="agreedToTerms"
        name="agreedToTerms"
        checked={checked}
        onCheckedChange={onCheckedChange}
        className={`mt-1 data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground border-slate-600 ${error ? 'border-red-500' : ''}`}
      />
      <div className="grid gap-1.5 leading-none">
        <Label htmlFor="agreedToTerms" className="text-sm font-medium text-slate-300 peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
          Ich habe die <a href="/datenschutz" target="_blank" rel="noopener noreferrer" className="underline text-primary hover:text-primary/80">Datenschutzbestimmungen</a> gelesen und akzeptiere sie.
        </Label>
        {error && <p className="text-xs text-red-400">{error}</p>}
      </div>
    </motion.div>
  </>
);