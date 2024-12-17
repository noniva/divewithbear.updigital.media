import React from 'react';
import { ChevronDown } from 'lucide-react';
import { useLanguage  } from './LanguageContext';

export function Hero() {
  const { language } = useLanguage();
  return (
    <div id="home" className="relative min-h-screen overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center animate-randomZoom"
        style={{
          backgroundImage:
            'url("src/images/hero-image-dark.jpg")',
        }}
      >
        <div className="absolute inset-0 bg-black/40" />
      </div>

      <div className="font-prompt relative pt-32 container mx-auto px-4">
        <div className="max-w-3xl text-white">
          <h1 className="text-{language === 'th' ? '5' : ''}xl md:text-5xl font-bold mb-6">
            {language === 'th' ? 'สัมผัสโลกใต้ทะเล' : 'Discover the Underwater World'}
            <br/>
            {language === 'th' ? 'กับทีมดำน้ำมืออาชีพ' : 'with Our Professional Diving Team'}
            {/* {language === 'th' ? 'xxx' : 'xxx'} */}
          </h1>
          <p className="text-xl mb-8">
          {language === 'th' ? 'ค้นพบความมหัศจรรย์ใต้ท้องทะเลกับทีมผู้เชี่ยวชาญที่พร้อมดูแลคุณในทุกการเดินทาง' : 'Explore the wonders beneath the ocean with our team of experts ready to guide you on every journey.'}
            
          </p>
          <div className="space-x-4">
            <a
              href="#services"
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg inline-block"
            >
              {language === 'th' ? 'ดูบริการของเรา' : 'View Our Services'}
            </a>
            <a
              href="#contact"
              className="bg-white/20 hover:bg-white/30 backdrop-blur-sm text-white px-8 py-3 rounded-lg inline-block"
            >
              {language === 'th' ? 'ติดต่อเรา' : 'Contact Us'}
              
            </a>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <ChevronDown className="w-8 h-8 text-white" />
      </div>
    </div>
  );
}
