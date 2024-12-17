import React from 'react';
import { Header } from './components/layout/Header';
import { Hero } from './components/sections/Hero';
import { Services } from './components/sections/Services';
import { About } from './components/sections/About';
import { Contact } from './components/sections/Contact';
import  Bubbles  from './components/sections/Bubbles';
import ReactGA from 'react-ga4';
import PDPAConsent from './components/sections/PDPAConsent';
import { LanguageProvider } from './components/sections/LanguageContext';

ReactGA.initialize('G-JGXQR2RHLZ'); 

function App() {
  ReactGA.send('pageview');
  return (
    <div className="min-h-screen bg-gray-900 text-gray-50">
      <LanguageProvider>
      <Header />
      <main className="">
        <Hero />
        <Services />
        <About />
        <Contact />
      </main>
      <Bubbles />
      <PDPAConsent />
      </LanguageProvider>
    </div>
  );
}

export default App;