import { useState, useEffect } from 'react';
import { defaultCloudiumUpdates } from '@/lib/cloudiumData';

export const useCloudiumUpdates = () => {
  const [updates, setUpdates] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const storedUpdates = localStorage.getItem('cloudiumUpdates');
    if (storedUpdates) {
      const parsedUpdates = JSON.parse(storedUpdates);
      const currentIds = defaultCloudiumUpdates.map(upd => upd.id);
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
      
      if(needsUpdate) {
        localStorage.setItem('cloudiumUpdates', JSON.stringify(defaultCloudiumUpdates));
        setUpdates(defaultCloudiumUpdates);
      } else {
        setUpdates(parsedUpdates);
      }
    } else {
      localStorage.setItem('cloudiumUpdates', JSON.stringify(defaultCloudiumUpdates));
      setUpdates(defaultCloudiumUpdates);
    }
    setLoading(false);
  }, []);

  return { updates, loading, setUpdates };
};