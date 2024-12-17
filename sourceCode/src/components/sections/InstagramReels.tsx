import React, { useEffect, useState } from 'react';
import { useLanguage } from './LanguageContext';

export const InstagramReels = () => {
  const [reels, setReels] = useState([]);
  const { language } = useLanguage();
  const accessToken = 'IGAB6F1saxQmpBZAE9vTjlGbkxDMzUtSjkyVGk5ZAEFZAek5vc0tDNUNxRkNXazd2U05lbXdMS3VHOWZANRE1Hak45UHVBQUMyU1BrRUUyQVBLVFUwZAlNoQjNoUDQ1U3c2Vm5fMlhtTF90a21jTm1HNllzUUNUbHVCT3NPT3ZA6NTg1bwZDZD';
  const userId = '17841470404867925';

  useEffect(() => {
    const fetchReels = async () => {
      try {
        const response = await fetch(
          `https://graph.instagram.com/${userId}/media?fields=id,media_type,media_url,thumbnail_url,caption,permalink&access_token=${accessToken}`
        );
        const data = await response.json();
        const filteredReels = data.data.filter((item) => item.media_type === 'VIDEO');
        setReels(filteredReels);
      } catch (error) {
        console.error('Error fetching Instagram reels:', error);
      }
    };

    fetchReels();
  }, []);

  return (
    <section id="instagram-reels" className="py-20 bg-gray-800 font-prompt">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-4xl font-bold text-gray-50 mb-8">
          {language === 'th' ? 'วิดีโอจาก Instagram' : 'Instagram Reels'}
        </h2>
        <a
          href="https://www.instagram.com/divewithbear"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block px-6 py-3 mb-8 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors"
        >
          {language === 'th' ? 'ไปที่ Instagram หลัก' : 'Visit Main Instagram'}
        </a>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {reels.length > 0 ? (
            reels.map((reel) => (
              <div key={reel.id} className="rounded-lg shadow-lg overflow-hidden flex flex-col items-center">
                <div className="w-full">
                  <video
                    src={reel.media_url}
                    controls
                    className="w-full h-100 object-cover"
                  />
                </div>
                <div className="p-4 bg-gray-900 text-gray-50 w-full">
                  <p className="text-sm text-center mb-4">
                    {reel.caption ? reel.caption : language === 'th' ? 'วิดีโอจากอินสตาแกรม' : 'Instagram Reel'}
                  </p>
                  <a
                    href={reel.permalink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-lg transition-colors"
                  >
                    {language === 'th' ? 'ดูบน Instagram' : 'View on Instagram'}
                  </a>
                </div>
              </div>
            ))
          ) : (
            <p className="text-gray-400 text-lg">
              {language === 'th'
                ? 'ไม่พบวิดีโอจาก Instagram'
                : 'No Instagram Reels available.'}
            </p>
          )}
        </div>
      </div>
    </section>
  );
};

// Add this component in App.tsx
// import { InstagramReels } from './components/sections/InstagramReels';
// Inside App function:
// <InstagramReels />
