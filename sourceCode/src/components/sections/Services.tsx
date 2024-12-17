import React ,{ useState } from 'react';
import {
  Award,
  Users,
  Map,
  GraduationCap,
  LifeBuoy,
  RefreshCw,
} from 'lucide-react';
import { Modal } from "./Modal";
import ReactGA from 'react-ga4';
import { useLanguage } from './LanguageContext'; 


const services = [
  {
    titleTh: 'Try Scuba',
    titleEn: 'Try Scuba',
    descriptionTh:
      'สัมผัสประสบการณ์ดำน้ำครั้งแรกในชีวิต พร้อมคำแนะนำจากทีมงานมืออาชีพและอุปกรณ์ดำน้ำที่ได้มาตรฐาน',
    descriptionEn:
      'Experience your first scuba dive with professional guidance and high-standard diving equipment.',
    priceTh: '6,000 บาท/ท่าน',
    priceEn: '6,000 THB/person',
    durationTh: '1 วัน',
    durationEn: '1 day',
    icon: Users,
  },
  {
    titleTh: 'Open Water (เกาะเต่า)',
    titleEn: 'Open Water (Koh Tao)',
    descriptionTh:
      'เรียนรู้การดำน้ำระดับเริ่มต้น พร้อมรับประกาศนียบัตรจากสถาบันดำน้ำระดับโลก บนเกาะเต่า',
    descriptionEn:
      'Learn beginner-level scuba diving and receive certification from a world-class diving institute at Koh Tao.',
    priceTh: '15,000 บาท/ท่าน',
    priceEn: '15,000 THB/person',
    durationTh: '3 วัน',
    durationEn: '3 days',
    icon: GraduationCap,
    image: 'src/images/TimelineKohTao.png',
  },
  {
    titleTh: 'Open Water (แสมสาร)',
    titleEn: 'Open Water (Samaesan)',
    descriptionTh:
      'เรียนรู้การดำน้ำระดับเริ่มต้น พร้อมรับประกาศนียบัตรจากสถาบันดำน้ำระดับโลก ที่แสมสาร',
    descriptionEn:
      'Learn beginner-level scuba diving and receive certification from a world-class diving institute at Samaesan.',
    priceTh: '13,000 บาท/ท่าน',
    priceEn: '13,000 THB/person',
    durationTh: '3 วัน',
    durationEn: '3 days',
    icon: GraduationCap,
    image: 'src/images/TimelineSamaesan.png',
  },
  // {
  //   titleTh: 'Open Water (เกาะลันตา)',
  //   titleEn: 'Open Water (Koh Lanta)',
  //   descriptionTh:
  //     'เรียนรู้การดำน้ำระดับเริ่มต้น พร้อมรับประกาศนียบัตรจากสถาบันดำน้ำระดับโลก ที่เกาะลันตา',
  //   descriptionEn:
  //     'Learn beginner-level scuba diving and receive certification from a world-class diving institute at Koh Lanta.',
  //   priceTh: '12,600 บาท/ท่าน',
  //   priceEn: '12,600 THB/person',
  //   durationTh: '3-4 วัน',
  //   durationEn: '3-4 days',
  //   icon: GraduationCap,
  // },
  {
    titleTh: 'Advanced Adventure (เกาะเต่า)',
    titleEn: 'Advanced Adventure (Koh Tao)',
    descriptionTh:
      'ยกระดับทักษะการดำน้ำด้วยหลักสูตรขั้นสูง สำรวจจุดดำน้ำที่ท้าทายและน่าตื่นเต้นที่สุดบนเกาะเต่า',
    descriptionEn:
      'Enhance your diving skills with an advanced course. Explore the most challenging and exciting dive sites around Koh Tao.',
    priceTh: '13,000 บาท/ท่าน',
    priceEn: '13,000 THB/person',
    durationTh: '2 วัน',
    durationEn: '2 days',
    icon: Map,
  },
  {
    titleTh: 'Perfect Buoyancy',
    titleEn: 'Perfect Buoyancy',
    descriptionTh:
      'พัฒนาการควบคุมการลอยตัว เพื่อการดำน้ำที่ปลอดภัยและสนุกสนานยิ่งขึ้น',
    descriptionEn:
      'Improve your buoyancy control for safer and more enjoyable dives.',
    priceTh: '7,000 บาท/ท่าน',
    priceEn: '7,000 THB/person',
    durationTh: '1 วัน',
    durationEn: '1 day',
    icon: LifeBuoy,

  },
  {
    titleTh: 'Refresh',
    titleEn: 'Refresh',
    descriptionTh:
      'ทบทวนทักษะการดำน้ำสำหรับผู้ที่ห่างหายจากการดำน้ำไปนาน',
    descriptionEn:
      'Review diving skills for those who have been away from diving for a long time.',
    priceTh: '2,500 บาท/ท่าน',
    priceEn: '2,500 THB/person',
    durationTh: '1 วัน',
    durationEn: '1 day',
    icon: RefreshCw,
  },
  
];
  
export const Services: React.FC = () => {
  const [selectedService, setSelectedService] = useState<{
    image: string;
  } | null>(null);

  const openModal = (service: { image: string }) => {
    if (service.image) {
      setSelectedService(service);
    }
  };

  const closeModal = () => {
    setSelectedService(null);
  };
  const statClick = (label: string) => {
    ReactGA.event({
      category: 'Button', // หมวดหมู่ของอีเวนต์
      action: 'Click', // การกระทำที่เกิดขึ้น
      label: label, // ป้ายกำกับสำหรับอีเวนต์นี้
    });
  };
  const { language } = useLanguage();
  {/* {language === 'th' ? 'xxx' : 'xxx'} */}
  return (
    <section id="services" className="font-prompt py-20 bg-gray-800">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-50 mb-4">{language === 'th' ? 'บริการของเรา' : 'Our Services'}</h2>
          <p className="text-xl text-gray-300">
            {language === 'th' ? 'เลือกประสบการณ์ที่เหมาะกับคุณ' : 'Choose the experience that suits you.'}
            
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-gray-900 rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow border border-gray-700 cursor-pointer"
              onClick={() => openModal(service) && statClick(service.titleEn)}
            >
              <service.icon className="w-12 h-12 text-blue-400 mb-6" />
              <h3 className="text-2xl font-bold mb-4 text-gray-50">
                {language === 'th' ? service.titleTh : service.titleEn}
              </h3>
              <p className="text-gray-300 mb-6">{language === 'th' ? service.descriptionTh : service.descriptionEn}</p>
              <div className="border-t border-gray-700 pt-4">
                <p className="text-lg font-semibold text-blue-400">
                  {language === 'th' ? service.priceTh : service.priceEn}
                </p>
                <p className="text-gray-400">{language === 'th' ? 'ระยะเวลา':"Duration" }: {language === 'th' ? service.durationTh : service.durationEn}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Modal */}
        {selectedService && (
          <Modal
            isOpen={!!selectedService}
            onClose={closeModal}
            imageSrc={selectedService.image}
          />
        )}
      </div>
    </section>
  );
};
