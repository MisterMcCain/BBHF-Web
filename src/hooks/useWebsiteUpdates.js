import { useState, useEffect } from 'react';
import { websiteUpdatesData } from '@/lib/websiteData';

export const useWebsiteUpdates = () => {
  const [updates, setUpdates] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const storedUpdates = localStorage.getItem('websiteUpdates');
    if (storedUpdates) {
      const parsedUpdates = JSON.parse(storedUpdates);
      const currentIds = websiteUpdatesData.map(upd => upd.id);
      const storedIds = parsedUpdates.map(upd => upd.id);
      
      let needsUpdate = false;
      if (currentIds.length !== storedIds.length) {
        needsUpdate = true;
      } else {
        for (const id of currentIds) {
          if (!storedIds.includes(id)) {
            needsUpdate = true;
            break;
          }
        }
      }

      if (needsUpdate) {
        localStorage.setItem('websiteUpdates', JSON.stringify(websiteUpdatesData));
        setUpdates(websiteUpdatesData);
      } else {
        setUpdates(parsedUpdates);
      }

    } else {
      localStorage.setItem('websiteUpdates', JSON.stringify(websiteUpdatesData));
      setUpdates(websiteUpdatesData);
    }
    setLoading(false);
  }, []);

  return { updates, loading, setUpdates };
};