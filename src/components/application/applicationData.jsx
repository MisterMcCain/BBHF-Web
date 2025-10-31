import React from 'react';
import { Briefcase, Users, Cog, MessageCircle, Edit3, CalendarPlus, HelpCircle } from 'lucide-react';

export const areas = [
  { id: 'moderation', label: 'Moderation', icon: <Users className="mr-2 h-4 w-4" /> },
  { id: 'supporter', label: 'Supporter', icon: <MessageCircle className="mr-2 h-4 w-4" /> },
  { id: 'technik', label: 'Technik', icon: <Cog className="mr-2 h-4 w-4" /> },
  { id: 'community_management', label: 'Community Management', icon: <Briefcase className="mr-2 h-4 w-4" /> },
  { id: 'content_creation', label: 'Content Erstellung (Social Media, etc.)', icon: <Edit3 className="mr-2 h-4 w-4" /> },
  { id: 'event_planning', label: 'Event Planung', icon: <CalendarPlus className="mr-2 h-4 w-4" /> },
  { id: 'other', label: 'Anderes (bitte im Textfeld erläutern)', icon: <HelpCircle className="mr-2 h-4 w-4" /> },
];