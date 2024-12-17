import React, { useState } from 'react';
import CookieConsent, { getCookieConsentValue, resetCookieConsentValue } from 'react-cookie-consent';
import { useLanguage  } from './LanguageContext';

const PDPAConsent: React.FC = () => {
  const [showModal, setShowModal] = useState(false); // State for showing/hiding the modal
  const [consentGiven, setConsentGiven] = useState(getCookieConsentValue() === 'true'); // Track consent status

  const handleOpenModal = () => setShowModal(true);
  const handleCloseModal = () => setShowModal(false);

  const handleResetConsent = () => {
    resetCookieConsentValue(); // Reset the cookie consent value
    setConsentGiven(false); // Reset the local consent state
  };
  const { language } = useLanguage();
  return (
    <>
      {/* Show Cookie Consent Banner if not yet given */}
      {!consentGiven && (
        <CookieConsent
          location="bottom"
          buttonText= {language === 'th' ? 'ยอมรับทั้งหมด' : 'Accept All'}
          declineButtonText={language === 'th' ? 'ปฏิเสธทั้งหมด' : 'Decline All'}
          enableDeclineButton
          onAccept={() => {
            console.log('Cookies Accepted');
            setConsentGiven(true); // Update state when accepted
          }}
          onDecline={() => {
            console.log('Cookies Declined');
            setConsentGiven(true); // Update state when declined
          }}
          style={{
            background: '#2B373B',
            color: '#fff',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}
          buttonStyle={{
            backgroundColor: '#4CAF50', // Default Tailwind green color
            color: '#fff',
            padding: '10px 20px',
            borderRadius: '5px',
            fontWeight: 'bold',
            cursor: 'pointer',
            transition: 'background-color 0.3s ease',
          }}
          declineButtonStyle={{
            backgroundColor: '#f44336', // Default Tailwind red color
            color: '#fff',
            padding: '10px 20px',
            borderRadius: '5px',
            fontWeight: 'bold',
            cursor: 'pointer',
            transition: 'background-color 0.3s ease',
          }}
          buttonClasses="bg-yellow-500 hover:bg-yellow-600 text-white font-bold px-6 py-3 rounded-lg shadow-lg transition-all duration-300"
          declineButtonClasses="bg-red-500 hover:bg-red-600 text-white font-bold px-6 py-3 rounded-lg shadow-lg transition-all duration-300"
        >
          {language === 'th' ? 'เว็บไซต์นี้ใช้คุกกี้เพื่อปรับปรุงประสบการณ์ของคุณ' : 'This website uses cookies to improve your experience.'}
          {' '}
          <button
            onClick={handleOpenModal}
            className="text-blue-400 underline hover:text-blue-300 focus:outline-none"
          >
            {language === 'th' ? 'อ่านเพิ่มเติม' : 'Read More'}
            
          </button>
        </CookieConsent>
      )}

      {/* Modal */}
      {showModal && (
        <div
          className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50"
          role="dialog"
          aria-modal="true"
        >
          <div className="bg-white rounded-lg shadow-lg w-11/12 md:w-1/2 p-6">
            <h2 className="text-2xl font-bold mb-4">{language === 'th' ? 'นโยบายคุ้มครองข้อมูลส่วนบุคคล' : 'Privacy Policy'}</h2>
            <p className="text-gray-700">
                {language === 'th' ? 'เราใช้คุกกี้เพื่อปรับปรุงประสบการณ์ของคุณ รวมถึงการวิเคราะห์การใช้งานเว็บไซต์ การให้บริการที่ปรับแต่งตามความต้องการ และการจัดทำโฆษณาที่เกี่ยวข้องกับคุณ' : 'We use cookies to improve your experience, analyze website usage, tailor services to your preferences, and serve ads that are relevant to you.'}
                <br /><br />
                <strong>{language === 'th' ? 'ข้อมูลที่เราเก็บรวบรวม:' : 'Data We Collect:'}
                    </strong> 
                    {language === 'th' ? 'ข้อมูลการใช้งานเว็บไซต์ เช่น การเข้าชมหน้าเว็บ, เวลาที่ใช้ในเว็บไซต์, และข้อมูลเบราว์เซอร์ รวมถึงข้อมูลส่วนบุคคล เช่น ชื่อ อีเมล หรือเบอร์โทรศัพท์ ที่คุณให้ผ่านแบบฟอร์ม (หากมี)' : 'Data collected through website usage, such as page views, time spent on the website, and browser information, including personal data such as name, email, or phone number, if provided.'}
                <br /><br />
                <strong>{language === 'th' ? 'วัตถุประสงค์ของการใช้งาน:' : 'Purpose of Use:'}</strong> 
                {language === 'th' ? 'ข้อมูลเหล่านี้ใช้เพื่อปรับปรุงประสิทธิภาพเว็บไซต์ มอบประสบการณ์การใช้งานที่เหมาะสม และจัดทำโฆษณาที่ตรงกับความสนใจของคุณ' : 'Data is used to improve the quality of the website and to serve ads that are relevant to you.'}
                
                <br /><br />
                <strong>
                    {language === 'th' ? 'การเก็บรักษาข้อมูล:' : 'Data Storage:'}
                    </strong> 
                    {language === 'th' ? 'ข้อมูลจะถูกเก็บรักษาไว้อย่างปลอดภัย และเราจะไม่เปิดเผยข้อมูลนี้แก่บุคคลที่สาม ยกเว้นตามที่กฎหมายกำหนด' : 'Data will be stored securely and we will not disclose it to third parties unless required by law.'}
                    
                <br /><br />
                <strong>{language === 'th' ? 'สิทธิของคุณ:' : 'Your Rights:'}</strong> 
                {language === 'th' ? 'คุณสามารถปฏิเสธคุกกี้ที่ไม่จำเป็น หรือขอแก้ไขหรือลบข้อมูลส่วนบุคคลของคุณได้ตลอดเวลา' : 'You can opt-out of non-essential cookies or request to have your personal data deleted at any time.'}
                
            </p>
            <p className="text-gray-700 mb-4">
            {language === 'th' ? 'หากคุณต้องการปฏิเสธการใช้คุกกี้ คุณสามารถตั้งค่าการปฏิเสธในแบนเนอร์ด้านล่างนี้ หรือในส่วนของการตั้งค่าคุกกี้' : 'If you want to opt-out of cookies, you can set the opt-out option in the banner below or in the cookie settings.'}
              
            </p>
            <div className="flex justify-end space-x-4">
              <button
                onClick={handleCloseModal}
                className="bg-gray-300 hover:bg-gray-400 text-black px-4 py-2 rounded-md"
              >
                {language === 'th' ? 'ปิด' : 'Close'}
                
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Reset Button for Testing */}
      {/* <div className="fixed bottom-20 right-4">
        <button
          onClick={handleResetConsent}
          className="bg-yellow-500 hover:bg-yellow-600 text-white px-4 py-2 rounded-md shadow-md"
        >
          Reset Consent
        </button>
      </div> */}
    </>
  );
};

export default PDPAConsent;
