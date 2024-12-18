import React, { useEffect, useState } from 'react';
import { useLanguage } from './LanguageContext';

export const InstagramReels = () => {
  const [reels, setReels] = useState([]);
  const [visibleReels, setVisibleReels] = useState([]);
  const [expandedCaptions, setExpandedCaptions] = useState({});
  const [reelsToShow, setReelsToShow] = useState(4);
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
        setVisibleReels(filteredReels.slice(0, reelsToShow));
      } catch (error) {
        console.error('Error fetching Instagram reels:', error);
      }
    };

    fetchReels();
  }, [reelsToShow]);

  const loadMoreReels = () => {
    setReelsToShow((prev) => prev + 4);
  };

  const toggleCaption = (id) => {
    setExpandedCaptions((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  return (
    <section id="instagram-reels" className="py-20 bg-gray-800 font-prompt">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-4xl font-bold text-gray-50 mb-8">
          {language === 'th' ? 'วิดีโอจาก Instagram' : 'Instagram Reels'}
        </h2>
        <a
          href="https://www.instagram.com/your_instagram_account/"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block px-6 py-3 mb-8 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors"
        >
          {language === 'th' ? 'ไปที่ Instagram หลัก' : 'Visit Main Instagram'}
        </a>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {visibleReels.length > 0 ? (
            visibleReels.map((reel) => (
              <div key={reel.id} className="rounded-lg shadow-lg overflow-hidden flex flex-col items-center">
                <div className="w-full bg-gray-700" style={{ aspectRatio: '16/9' }}>
                  <video
                    src={reel.media_url}
                    controls
                    className="w-full h-full object-cover"
                    style={{ display: 'block' }}
                  />
                </div>
                <div className="p-4 bg-gray-900 text-gray-50 w-full">
                  <p className="text-sm text-center mb-4">
                    {reel.caption
                      ? expandedCaptions[reel.id]
                        ? reel.caption
                        : reel.caption.length > 50
                        ? `${reel.caption.substring(0, 50)}... `
                        : reel.caption
                      : language === 'th' ? 'วิดีโอจากอินสตาแกรม' : 'Instagram Reel'}
                    {reel.caption && reel.caption.length > 50 && (
                      <button
                        onClick={() => toggleCaption(reel.id)}
                        className="text-blue-400 ml-2 hover:underline"
                      >
                        {expandedCaptions[reel.id] ? (language === 'th' ? 'ย่อ' : 'Show Less') : (language === 'th' ? 'เพิ่มเติม' : 'Read More')}
                      </button>
                    )}
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
        {reels.length > visibleReels.length && (
          <button
            onClick={loadMoreReels}
            className="mt-8 px-6 py-3 bg-blue-500 hover:bg-blue-600 text-white rounded-lg transition-colors"
          >
            {language === 'th' ? 'โหลดเพิ่มเติม' : 'Load More'}
          </button>
        )}
      </div>
    </section>
  );
};

// Add this component in App.tsx
// import { InstagramReels } from './components/sections/InstagramReels';
// Inside App function:
// <InstagramReels />
