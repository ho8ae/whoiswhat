'use client';

import Link from 'next/link';
import { useLanguage } from '../context/LanguageContext';
import { useEffect } from 'react';

export default function Header() {
  const { language, setLanguage, t } = useLanguage();
  
  // 디버깅용 효과
  useEffect(() => {
    console.log('Current language:', language);
  }, [language]);
  
  const handleLanguageChange = (lang: 'ko' | 'en') => {
    console.log('Language changing to:', lang);
    setLanguage(lang);
  };
  
  return (
    <header className="bg-black text-white py-6">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          <Link href="/">
            <h1 className="text-2xl font-bold">WhoisWhat</h1>
          </Link>
          
          <div className="flex items-center space-x-8">
            <nav>
              <ul className="flex space-x-6">
                <li>
                  <Link href="/" className="hover:underline">
                    {t('홈', 'Home')}
                  </Link>
                </li>
                <li>
                  <Link href="/about" className="hover:underline">
                    {t('소개', 'About')}
                  </Link>
                </li>
                <li>
                  <Link href="/services" className="hover:underline">
                    {t('서비스', 'Services')}
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="hover:underline">
                    {t('연락처', 'Contact')}
                  </Link>
                </li>
              </ul>
            </nav>
            
            <div className="flex space-x-2">
              <button 
                onClick={() => handleLanguageChange('ko')} 
                className={`px-2 py-1 text-sm rounded ${language === 'ko' ? 'bg-white text-black' : 'bg-transparent'}`}
              >
                KO
              </button>
              <button 
                onClick={() => handleLanguageChange('en')} 
                className={`px-2 py-1 text-sm rounded ${language === 'en' ? 'bg-white text-black' : 'bg-transparent'}`}
              >
                EN
              </button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}