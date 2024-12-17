import React, { createContext, useContext, useState, ReactNode } from 'react';

// Define LanguageContext type
interface LanguageContextProps {
  language: 'th' | 'en';
  setLanguage: (language: 'th' | 'en') => void;
}

// Create the context
const LanguageContext = createContext<LanguageContextProps | undefined>(undefined);

// Custom hook to use the context
export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};

// Provider Component
export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<'th' | 'en'>('th');
  return (
    <LanguageContext.Provider value={{ language, setLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};
