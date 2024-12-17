import React from 'react';
import { Shield, Award, Heart } from 'lucide-react';
import { useLanguage } from './LanguageContext'; 

export function About() {
  const { language } = useLanguage();
  return (
    <section id="about" className="font-prompt py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-50 mb-4">{language === 'th' ? 'เกี่ยวกับเรา' : 'About Us'}</h2>
          <p className="text-xl text-gray-300">
             {/* {language === 'th' ? 'xxx' : 'xxx'} */}
             {language === 'th' ? 'เราให้บริการดำน้ำที่ปลอดภัยและมีคุณภาพสำหรับทุกระดับตั้งแต่ผู้เริ่มต้นจนถึงนักดำน้ำมืออาชีพ' : 'We provide safe and high-quality diving services for all levels, from beginners to professional divers.'}
            
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <Feature
            icon={Shield}
            title={language === 'th' ? 'ความปลอดภัยสูงสุด' : 'Maximum Safety'}
            description={language === 'th' ? 'อุปกรณ์ได้มาตรฐานและทีมงานผ่านการรับรอง' : 'Standardized equipment and a certified team.'}
          />
          <Feature
            icon={Award}
            title={ language === 'th' ? 'เป็นผู้มีประสบการณ์สูงและความเชี่ยวชาญในสายงาน' : 'Experience and Expertise'} 
            description={ language === 'th' ? 'ทีมงานมืออาชีพพร้อมดูแลคุณในทุกการดำน้ำ' : 'A professional team ready to assist you in every dive.'} 
          />
          <Feature
            icon={Heart}
            title={language === 'th' ? 'ใส่ใจสิ่งแวดล้อม' : 'Environmental Care'}
            description={language === 'th' ? 'ร่วมอนุรักษ์ท้องทะเลไทยให้สวยงาม' : 'Committed to preserving the beauty of Thailand\'s oceans.'}
          />
        </div>

        <div className="max-w-4xl mx-auto bg-gray-800 text-white p-8 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold mb-4 text-center">{language === 'th' ? 'พันธกิจของเรา' : 'Our Mission'}</h2>
          <p className="text-center">
            {language === 'th' ? 'มุ่งเน้นการสร้างประสบการณ์ที่น่าประทับใจในโลกใต้ทะเล พร้อมทั้งส่งเสริมความรู้และการอนุรักษ์สิ่งแวดล้อมทางทะเล':'To create unforgettable underwater experiences, promote knowledge, and support marine,'}
            {language === 'th' ? 'เพื่อให้ทุกการดำน้ำเป็นความทรงจำที่พิเศษและมีความหมายสำหรับลูกค้าของเรา':'ensuring every dive becomes a special and meaningful memory for our customers.'}
            
          </p>
        </div>
      </div>
    </section>
  );
}

function Feature({
  icon: Icon,
  title,
  description,
}: {
  icon: React.ElementType;
  title: string;
  description: string;
}) {
  return (
    <div className="text-center">
      <div className="inline-block p-4 bg-gray-800 rounded-full mb-4 border border-gray-700">
        <Icon className="w-8 h-8 text-blue-400" />
      </div>
      <h3 className="text-xl font-bold mb-2 text-gray-50">{title}</h3>
      <p className="text-gray-300">{description}</p>
    </div>
  );
}
