import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const UpdateCard = ({ title, date, excerpt, imageUrl, link, source }) => {
  const sourceColor = source === 'website' ? 'from-blue-500 to-indigo-600' : 'from-purple-500 to-pink-600';
  
  return (
    <motion.div 
      className="card-hover rounded-lg overflow-hidden bg-secondary border border-border"
      whileHover={{ y: -5 }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      <div className="relative">
        {imageUrl ? (
          <img src={imageUrl} alt={title} className="w-full h-48 object-cover" />
        ) : (
          <div className={`w-full h-48 bg-gradient-to-r ${sourceColor} flex items-center justify-center`}>
            <span className="text-white text-xl font-bold">{source === 'website' ? 'mistermccain.com' : 'cloudium.host'}</span>
          </div>
        )}
        <div className="absolute top-3 right-3">
          <span className={`px-3 py-1 rounded-full text-xs font-medium text-white bg-gradient-to-r ${sourceColor}`}>
            {source === 'website' ? 'Website' : 'Cloudium'}
          </span>
        </div>
      </div>
      
      <div className="p-5 space-y-3">
        <div className="flex items-center text-xs text-muted-foreground">
          <Calendar size={14} className="mr-1" />
          <span>{date}</span>
        </div>
        
        <h3 className="text-lg font-bold leading-tight">{title}</h3>
        
        <p className="text-sm text-muted-foreground line-clamp-3">
          {excerpt}
        </p>
        
        <Button variant="ghost" size="sm" className="mt-2 text-primary" asChild>
          <a href={link} target="_blank" rel="noopener noreferrer">
            Weiterlesen <ArrowRight size={16} className="ml-1" />
          </a>
        </Button>
      </div>
    </motion.div>
  );
};

export default UpdateCard;