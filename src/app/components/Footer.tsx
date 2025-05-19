'use client';

import { useLanguage } from '../context/LanguageContext';

export default function Footer() {
  const { t } = useLanguage();
  
  return (
    <footer className="bg-black text-white py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">WhoisWhat</h3>
            <p className="text-gray-300">
              {t(
                '단순하지만 강력한 철학이 담긴 혁신적인 서비스', 
                'Innovative services with a powerful philosophy in simplicity'
              )}
            </p>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">{t('연락처', 'Contact')}</h3>
            <p className="text-gray-300 mb-2">
              {t('전화', 'Phone')}: +82 10 9789 7457
            </p>
            <p className="text-gray-300 mb-2">
              {t('이메일', 'Email')}: whoiswatashi@gmail.com
            </p>
            <p className="text-gray-300">
              {t(
                '주소: 경기도 남양주시 다산동 4025-33 A-202', 
                'Address: A-202, 26-5, Donong-ro jungchon 2-gil, Namyangju-si, Gyeonggi-do, Republic of Korea'
              )}
            </p>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">{t('소셜 미디어', 'Social Media')}</h3>
            <div className="flex space-x-4">
              <a href="#" className="text-white hover:text-gray-300">
                Instagram
              </a>
              <a href="#" className="text-white hover:text-gray-300">
                LinkedIn
              </a>
              <a href="#" className="text-white hover:text-gray-300">
                Twitter
              </a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-6 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} WhoisWhat. {t('모든 권리 보유.', 'All rights reserved.')}</p>
        </div>
      </div>
    </footer>
  );
}