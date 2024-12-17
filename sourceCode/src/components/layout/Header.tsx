import React from 'react';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';
import { Logo } from '../brand/Logo';
import { useLanguage  } from '../sections/LanguageContext';

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { language, setLanguage } = useLanguage();

  return (
    <header className="fixed w-full bg-gray-900/95 backdrop-blur-sm z-50 border-b border-gray-800">
      <nav className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <Logo />

          <div className="hidden md:flex items-center space-x-8">
            <NavLinks />
          

          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-gray-50"
          >
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>

        {/* Language Toggle */}
        <div className="hidden md:flex space-x-4">
          <button
            onClick={() => setLanguage('th')}
            className={`px-4 py-2 rounded-md ${language === 'th' ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
          >
            ไทย
          </button>
          <button
            onClick={() => setLanguage('en')}
            className={`px-4 py-2 rounded-md ${language === 'en' ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
          >
            EN
          </button>
        </div>
        </div>
        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden pt-4 pb-3">
            <div className="flex flex-col space-y-4 font-prompt">
              <NavLinks />
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}

function NavLinks() {
  const { language } = useLanguage();
  return (
    <>
      <a
        href="#home"
        className="font-prompt text-gray-300 hover:text-blue-400 transition-colors"
      >
        {language === 'th' ? 'หน้าแรก' : 'Home'}
      </a>
      <a
        href="#services"
        className="font-prompt text-gray-300 hover:text-blue-400 transition-colors"
      >
        {language === 'th' ? 'บริการ' : 'Services'}
      </a>
      {/* <a
        href="#testimonials"
        className="font-prompt text-gray-300 hover:text-blue-400 transition-colors"
      >
        รีวิว
      </a> */}
      <a
        href="#about"
        className="font-prompt text-gray-300 hover:text-blue-400 transition-colors"
      >
        {language === 'th' ? 'เกี่ยวกับเรา' : 'About Us'}
      </a>
      <a
        href="#contact"
        className="font-prompt text-gray-300 hover:text-blue-400 transition-colors"
      >
        {language === 'th' ? 'ติดต่อ' : 'Contact'}
      </a>
    </>
  );
}
