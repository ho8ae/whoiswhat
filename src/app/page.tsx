'use client';

import { useLanguage } from './context/LanguageContext';
import Layout from './components/Layout';
import Image from 'next/image';
import Link from 'next/link';
import ClientLayout from './client-layout';
import { useEffect } from 'react';

export default function Home() {
  return (
    <ClientLayout>
      <HomePage />
    </ClientLayout>
  );
}

function HomePage() {
  const { t, language } = useLanguage();
  
  useEffect(() => {
    console.log('HomePage rendering with language:', language);
  }, [language]);
  
  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-20 text-center">
        <h1 className="text-5xl font-bold mb-6">
          {t('WHO IS WHAT?', 'WHO IS WHAT?')}
        </h1>
        <p className="text-xl max-w-3xl mx-auto mb-10">
          {t(
            '복잡함을 단순하게, 단순함을 강력하게. 우리는 창의적 혁신을 추구합니다.',
            'Simplifying complexity, empowering simplicity. We pursue creative innovation.'
          )}
        </p>
        <div className="flex justify-center space-x-4">
          <Link href="/about" className="bg-black text-white px-8 py-3 rounded-md hover:bg-gray-900 transition">
            {t('더 알아보기', 'Learn More')}
          </Link>
          <Link href="/contact" className="border border-black px-8 py-3 rounded-md hover:bg-gray-100 transition">
            {t('문의하기', 'Contact Us')}
          </Link>
        </div>
      </section>
      
      {/* Feature Blocks */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-16">
            {t('우리의 철학', 'Our Philosophy')}
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            <div className="bg-white p-8 shadow-md">
              <h3 className="text-xl font-bold mb-4">
                {t('단순함의 강력함', 'Power of Simplicity')}
              </h3>
              <p>
                {t(
                  '복잡한 세상에서 단순함은 강력한 무기입니다. 우리는 불필요한 것을 제거하고 본질에 집중합니다.',
                  'In a complex world, simplicity is a powerful weapon. We eliminate the unnecessary and focus on the essence.'
                )}
              </p>
            </div>
            
            <div className="bg-white p-8 shadow-md">
              <h3 className="text-xl font-bold mb-4">
                {t('창의적 혁신', 'Creative Innovation')}
              </h3>
              <p>
                {t(
                  '기존의 틀을 넘어서는 창의적 사고로 새로운 가치를 창출합니다. 혁신은 우리의 DNA입니다.',
                  'We create new value with creative thinking that goes beyond existing frameworks. Innovation is in our DNA.'
                )}
              </p>
            </div>
            
            <div className="bg-white p-8 shadow-md">
              <h3 className="text-xl font-bold mb-4">
                {t('깊은 철학', 'Profound Philosophy')}
              </h3>
              <p>
                {t(
                  '표면적 단순함 뒤에는 깊은 철학과 고민이 있습니다. 우리는 본질적 가치를 중요시합니다.',
                  'Behind the surface simplicity lies deep philosophy and contemplation. We value essential meaning.'
                )}
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Call to Action */}
      <section className="py-20 text-center">
        <h2 className="text-3xl font-bold mb-6">
          {t('함께 혁신적인 미래를 만들어가요', 'Let\'s Create an Innovative Future Together')}
        </h2>
        <p className="text-xl max-w-3xl mx-auto mb-10">
          {t(
            '당신의 아이디어를 현실로 만들 준비가 되었습니다. 지금 WhoisWhat과 함께하세요.',
            'We are ready to turn your ideas into reality. Join WhoisWhat now.'
          )}
        </p>
        <Link href="/contact" className="bg-black text-white px-8 py-3 rounded-md hover:bg-gray-900 transition">
          {t('프로젝트 시작하기', 'Start a Project')}
        </Link>
      </section>
    </Layout>
  );
}