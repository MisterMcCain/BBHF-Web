import { useState, useEffect } from 'react';
import { initialCommunityEvents, teamMembersData as defaultTeamMembers, communityRules as defaultCommunityRules } from '@/lib/communityData';

export const useCommunityData = () => {
  const [events, setEvents] = useState([]);
  const [team, setTeam] = useState([]);
  const [rules, setRules] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const storedEvents = localStorage.getItem('communityEvents');
    const currentInitialEvents = initialCommunityEvents;

    if (storedEvents) {
      const parsedEvents = JSON.parse(storedEvents);
      if (JSON.stringify(parsedEvents) !== JSON.stringify(currentInitialEvents) && currentInitialEvents.length === 0) {
        localStorage.setItem('communityEvents', JSON.stringify(currentInitialEvents));
        setEvents(currentInitialEvents);
      } else {
        setEvents(parsedEvents);
      }
    } else {
      localStorage.setItem('communityEvents', JSON.stringify(currentInitialEvents));
      setEvents(currentInitialEvents);
    }

    const storedTeam = localStorage.getItem('communityTeam');
    const currentTeamMembers = defaultTeamMembers;

    if (storedTeam) {
      const parsedTeam = JSON.parse(storedTeam);
      if (JSON.stringify(parsedTeam) !== JSON.stringify(currentTeamMembers)) {
        localStorage.setItem('communityTeam', JSON.stringify(currentTeamMembers));
        setTeam(currentTeamMembers);
      } else {
         setTeam(parsedTeam);
      }
    } else {
      localStorage.setItem('communityTeam', JSON.stringify(currentTeamMembers));
      setTeam(currentTeamMembers);
    }

    const storedRules = localStorage.getItem('communityRules');
    const currentCommunityRules = defaultCommunityRules;
    if (storedRules) {
      const parsedRules = JSON.parse(storedRules);
       if (JSON.stringify(parsedRules) !== JSON.stringify(currentCommunityRules)) {
        localStorage.setItem('communityRules', JSON.stringify(currentCommunityRules));
        setRules(currentCommunityRules);
      } else {
        setRules(parsedRules);
      }
    } else {
      localStorage.setItem('communityRules', JSON.stringify(currentCommunityRules));
      setRules(currentCommunityRules);
    }
    
    setLoading(false);
  }, []);

  return { events, team, rules, loading, setEvents, setTeam, setRules };
};