import { useState, useEffect } from 'react';
import { useToast } from '@/components/ui/use-toast';
import { APPLICATION_FORM_WEBHOOK_URL } from '@/config/appConfig';

const MIN_AGE = 14;

const initialFormData = {
  discordName: '',
  age: '',
  motivation: '',
  experience: '',
  area: '',
  otherAreaDescription: '',
  availability: '',
  agreedToTerms: false,
};

export const useApplicationFormLogic = (areas) => {
  const [formData, setFormData] = useState(initialFormData);
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccessDialog, setShowSuccessDialog] = useState(false);
  const { toast } = useToast();

  const validate = () => {
    const newErrors = {};
    if (!formData.discordName.trim()) newErrors.discordName = 'Discord-Name ist erforderlich.';
    else if (formData.discordName.trim().length < 2 || formData.discordName.trim().length > 32) newErrors.discordName = 'Discord-Name muss zwischen 2 und 32 Zeichen lang sein.';
    
    if (!formData.age) newErrors.age = 'Alter ist erforderlich.';
    else if (isNaN(formData.age) || parseInt(formData.age, 10) < MIN_AGE) newErrors.age = `Du musst mindestens ${MIN_AGE} Jahre alt sein.`;
    else if (parseInt(formData.age, 10) > 99) newErrors.age = 'Bitte gib ein gültiges Alter an.';

    if (!formData.motivation.trim()) newErrors.motivation = 'Motivation ist erforderlich.';
    else if (formData.motivation.trim().length < 50) newErrors.motivation = 'Die Motivation sollte mindestens 50 Zeichen umfassen.';
    
    if (!formData.experience.trim()) newErrors.experience = 'Erfahrung ist erforderlich.';
    else if (formData.experience.trim().length < 50) newErrors.experience = 'Die Beschreibung deiner Erfahrungen sollte mindestens 50 Zeichen umfassen.';

    if (!formData.area) newErrors.area = 'Bitte wähle einen Bereich aus.';
    if (formData.area === 'other' && !formData.otherAreaDescription.trim()) {
      newErrors.otherAreaDescription = 'Bitte beschreibe den Bereich, wenn du "Anderes" auswählst.';
    } else if (formData.area === 'other' && formData.otherAreaDescription.trim().length < 10){
      newErrors.otherAreaDescription = 'Die Beschreibung für "Anderes" sollte mindestens 10 Zeichen umfassen.';
    }

    if (!formData.agreedToTerms) newErrors.agreedToTerms = 'Du musst den Datenschutzbestimmungen zustimmen.';
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };
  
  const handleSelectChange = (value) => {
    setFormData(prev => ({ ...prev, area: value }));
    if (value !== 'other') {
      setFormData(prev => ({ ...prev, otherAreaDescription: '' }));
      setErrors(prev => ({ ...prev, otherAreaDescription: undefined }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) {
      toast({
        variant: "destructive",
        title: "Fehler im Formular",
        description: "Bitte überprüfe deine Eingaben und korrigiere die markierten Fehler.",
      });
      return;
    }

    setIsSubmitting(true);

    const areaLabel = areas.find(a => a.id === formData.area)?.label || formData.area;
    const areaValue = formData.area === 'other' ? `${areaLabel}: ${formData.otherAreaDescription}` : areaLabel;

    const payload = {
      username: "Bewerbungs-Bot",
      avatar_url: "https://horizons-cdn.hostinger.com/071dade1-1e9e-4e60-9a92-463dc65e7bd5/bus-icon.png",
      embeds: [
        {
          title: `Neue Bewerbung von ${formData.discordName}`,
          color: 5814783,
          fields: [
            { name: "Discord-Name", value: formData.discordName, inline: true },
            { name: "Alter", value: formData.age, inline: true },
            { name: "Bewirbt sich für", value: areaValue },
            { name: "Verfügbarkeit", value: formData.availability || 'Nicht angegeben' },
            { name: "Motivation", value: formData.motivation },
            { name: "Erfahrung", value: formData.experience },
          ],
          footer: {
            text: `Bewerbung gesendet am: ${new Date().toLocaleString('de-DE')}`
          }
        }
      ]
    };

    try {
      const response = await fetch(APPLICATION_FORM_WEBHOOK_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        throw new Error(`Webhook-Fehler: ${response.statusText}`);
      }
      
      toast({
        variant: 'default',
        title: '✅ Bewerbung erfolgreich gesendet!',
        description: 'Wir werden uns bald bei dir melden.',
        className: "bg-green-600 text-white border-green-700"
      });
      setFormData(initialFormData);
      setErrors({});
      setShowSuccessDialog(true);

    } catch (error) {
      console.error('Fehler beim Senden der Bewerbung:', error);
      toast({
        variant: 'destructive',
        title: '❌ Fehler beim Senden',
        description: 'Deine Bewerbung konnte nicht gesendet werden. Bitte versuche es später erneut oder kontaktiere uns direkt.',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  useEffect(() => {
    if (Object.keys(errors).length > 0 && !isSubmitting) {
      validate();
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [formData]);


  return {
    formData,
    errors,
    isSubmitting,
    showSuccessDialog,
    handleChange,
    handleSelectChange,
    handleSubmit,
    setShowSuccessDialog,
  };
};