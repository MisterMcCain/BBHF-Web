import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { AlertDialog, AlertDialogAction, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle } from '@/components/ui/alert-dialog';
import { Send, Loader2, CheckCircle, Shield } from 'lucide-react';
import { 
  DiscordNameField, 
  AgeField, 
  MotivationField, 
  ExperienceField, 
  AreaField, 
  OtherAreaDescriptionField,
  AvailabilityField, 
  TermsAgreementField,
  inputFieldVariants,
} from '@/components/application/ApplicationFormFields';
import { useApplicationFormLogic } from '@/components/application/ApplicationFormLogic';
import { areas as applicationAreasData } from '@/components/application/applicationData';


const ApplicationFormPresentation = ({
  formData,
  errors,
  isSubmitting,
  handleChange,
  handleSelectChange,
  handleSubmit,
}) => (
  <motion.form
    onSubmit={handleSubmit}
    className="space-y-8 max-w-2xl mx-auto"
    initial="initial"
    animate="animate"
    variants={{ animate: { transition: { staggerChildren: 0.05 } } }}
  >
    <DiscordNameField value={formData.discordName} onChange={handleChange} error={errors.discordName} />
    <AgeField value={formData.age} onChange={handleChange} error={errors.age} />
    <MotivationField value={formData.motivation} onChange={handleChange} error={errors.motivation} />
    <ExperienceField value={formData.experience} onChange={handleChange} error={errors.experience} />
    <div>
      <AreaField 
        value={formData.area} 
        onValueChange={handleSelectChange} 
        error={errors.area} 
        areas={applicationAreasData} 
      />
      <AnimatePresence>
        <OtherAreaDescriptionField
          value={formData.otherAreaDescription}
          onChange={handleChange}
          error={errors.otherAreaDescription}
          isVisible={formData.area === 'other'}
        />
      </AnimatePresence>
    </div>
    <AvailabilityField value={formData.availability} onChange={handleChange} />
    <TermsAgreementField 
      checked={formData.agreedToTerms} 
      onCheckedChange={(checked) => handleChange({ target: { name: 'agreedToTerms', type: 'checkbox', checked }})} 
      error={errors.agreedToTerms}
    />

    <motion.div variants={inputFieldVariants} className="!mt-6">
      <div className="flex items-start space-x-3 bg-slate-900/50 p-3 rounded-md border border-slate-600/80">
        <Shield className="h-5 w-5 text-yellow-400 flex-shrink-0 mt-0.5" />
        <p className="text-xs text-slate-400">
          Zum Schutz vor Missbrauch und zur Gewährleistung der Sicherheit werden bei der Übermittlung dieses Formulars technische Daten, wie z.B. deine IP-Adresse, erfasst.
        </p>
      </div>
    </motion.div>

    <motion.div variants={inputFieldVariants} className="pt-4">
      <Button 
        type="submit" 
        disabled={isSubmitting}
        className="w-full bg-gradient-to-r from-primary to-purple-600 hover:from-primary/90 hover:to-purple-500 text-white font-semibold py-3 px-6 text-lg rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 focus:ring-2 focus:ring-primary/50 focus:ring-opacity-50 disabled:opacity-70 disabled:cursor-not-allowed"
      >
        {isSubmitting ? (
          <>
            <Loader2 className="mr-2 h-5 w-5 animate-spin" />
            Wird gesendet...
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

const SuccessDialog = ({ isOpen, onOpenChange }) => (
  <AlertDialog open={isOpen} onOpenChange={onOpenChange}>
    <AlertDialogContent className="bg-slate-800 border-slate-700">
      <AlertDialogHeader>
        <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-green-100 mb-4">
          <CheckCircle className="h-6 w-6 text-green-600" />
        </div>
        <AlertDialogTitle className="text-2xl font-bold text-center text-slate-100">Bewerbung erfolgreich gesendet!</AlertDialogTitle>
        <AlertDialogDescription className="text-center text-slate-300 pt-2">
          Vielen Dank für deine Bewerbung! Wir werden sie so schnell wie möglich prüfen und uns bei dir melden.
        </AlertDialogDescription>
      </AlertDialogHeader>
      <AlertDialogFooter className="pt-4">
        <AlertDialogAction 
          onClick={() => onOpenChange(false)}
          className="w-full bg-primary hover:bg-primary/90 text-white"
        >
          Schließen
        </AlertDialogAction>
      </AlertDialogFooter>
    </AlertDialogContent>
  </AlertDialog>
);

const ApplicationForm = () => {
  const {
    formData,
    errors,
    isSubmitting,
    showSuccessDialog,
    handleChange,
    handleSelectChange,
    handleSubmit,
    setShowSuccessDialog,
  } = useApplicationFormLogic(applicationAreasData);

  return (
    <>
      <ApplicationFormPresentation
        formData={formData}
        errors={errors}
        isSubmitting={isSubmitting}
        handleChange={handleChange}
        handleSelectChange={handleSelectChange}
        handleSubmit={handleSubmit}
      />
      <SuccessDialog isOpen={showSuccessDialog} onOpenChange={setShowSuccessDialog} />
    </>
  );
};

export default ApplicationForm;