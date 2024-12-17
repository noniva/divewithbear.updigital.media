import React from 'react';
import { Phone, MapPin, Mail } from 'lucide-react';
import { SocialIcon } from 'react-social-icons';
import { FaFacebookMessenger } from 'react-icons/fa';
import { useLanguage  } from './LanguageContext';

export function Contact() {
  const { language } = useLanguage();
  return (
    <section id="contact" className="font-prompt py-10 bg-gray-800">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto text-center mb-16">
           
          <h2 className="text-4xl font-bold text-gray-50 mb-4">{language === 'th' ? 'ติดต่อเรา' : 'Contact'}</h2>
          <p className="text-xl text-gray-300">{language === 'th' ? 'พร้อมให้คำปรึกษาและบริการคุณ' : 'Ready to provide consultation and service for you.'}</p>
        </div>

        <div className="flex flex-col md:flex-row justify-start md:justify-center items-center space-y-8 md:space-y-0 md:space-x-12">
          <ContactInfo icon={Phone} title={language === 'th' ? 'โทรศัพท์' : 'Telephone'} detail="081-987-9093" />
          <ContactInfo icon={Mail} title={language === 'th' ? 'อีเมล' : 'Email'} detail="1lantateam@gmail.com" />
        </div>

        <div className="mt-12 flex justify-center space-x-6">
          <SocialIcon url="https://www.facebook.com/profile.php?id=61569554293592" />
          <SocialIcon url="https://www.instagram.com/divewithbear" />
          <SocialIcon url="https://wa.me/66819879093" network="whatsapp"/>
        </div>
        <div className="flex justify-end">
          {/* เนื้อหาอื่น ๆ ของการติดต่อ */}
          <a
            href="https://m.me/divewithbear"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaFacebookMessenger size={30} color="#0084FF" />
          </a>
        </div>
      </div>
    </section>
  );
}

function ContactInfo({ icon: Icon, title, detail }) {
  return (
    <div className="flex items-center text-left space-x-4">
      <div className="p-3 bg-gray-900 rounded-full">
        <Icon className="w-6 h-6 text-blue-400" />
      </div>
      <div>
        <h4 className="text-lg font-semibold text-gray-50">{title}</h4>
        <p className="text-gray-300">{detail}</p>
      </div>
    </div>
  );
}
