'use client';

import { useLanguage } from '../context/LanguageContext';
import Layout from '../components/Layout';
import Link from 'next/link';
import ClientLayout from '../client-layout';
import { useEffect } from 'react';

export default function Services() {
  return (
    <ClientLayout>
      <ServicesPage />
    </ClientLayout>
  );
}

function ServicesPage() {
  const { t, language } = useLanguage();
  
  useEffect(() => {
    console.log('ServicesPage rendering with language:', language);
  }, [language]);
  
  const services = [
    {
      id: 'digital-transformation',
      title: {
        ko: '디지털 트랜스포메이션',
        en: 'Digital Transformation'
      },
      description: {
        ko: '기업의, 디지털 전환을 위한 통합 솔루션을 제공합니다. 비즈니스 프로세스를 혁신하고 디지털 경쟁력을 강화합니다.',
        en: 'We provide integrated solutions for corporate digital transformation. Innovate business processes and strengthen digital competitiveness.'
      },
      features: {
        ko: ['비즈니스 프로세스 혁신', '디지털 역량 강화', '데이터 기반 의사결정 시스템', '사용자 중심 디지털 경험 설계'],
        en: ['Business Process Innovation', 'Digital Capability Enhancement', 'Data-Driven Decision Systems', 'User-Centric Digital Experience Design']
      }
    },
    {
      id: 'product-development',
      title: {
        ko: '혁신적 제품 개발',
        en: 'Innovative Product Development'
      },
      description: {
        ko: '단순하지만 강력한 제품을 개발합니다. 복잡한 문제를 우아하게 해결하는 솔루션을 만듭니다.',
        en: 'We develop simple yet powerful products. Creating solutions that elegantly solve complex problems.'
      },
      features: {
        ko: ['사용자 중심 디자인', '기술 혁신', '지속 가능한 개발', '단순함과 깊이의 조화'],
        en: ['User-Centered Design', 'Technological Innovation', 'Sustainable Development', 'Harmony of Simplicity and Depth']
      }
    },
    {
      id: 'strategic-consulting',
      title: {
        ko: '전략적 컨설팅',
        en: 'Strategic Consulting'
      },
      description: {
        ko: '복잡한 비즈니스 환경에서 명확한 방향을 제시합니다. 철학적 깊이를 바탕으로 한 전략적 인사이트를 제공합니다.',
        en: 'We provide clear direction in complex business environments. Strategic insights based on philosophical depth.'
      },
      features: {
        ko: ['비즈니스 전략 수립', '시장 분석 및 인사이트', '혁신 전략', '조직 문화 개선'],
        en: ['Business Strategy Development', 'Market Analysis & Insights', 'Innovation Strategy', 'Organizational Culture Improvement']
      }
    },
    {
      id: 'design-thinking',
      title: {
        ko: '디자인 씽킹',
        en: 'Design Thinking'
      },
      description: {
        ko: '문제 해결을 위한 창의적 접근법을 제공합니다. 사용자 중심의 혁신적인 솔루션을 개발합니다.',
        en: 'We provide creative approaches to problem-solving. Developing user-centered innovative solutions.'
      },
      features: {
        ko: ['공감 기반 문제 정의', '창의적 아이디어 발상', '프로토타이핑', '검증 및 개선'],
        en: ['Empathy-Based Problem Definition', 'Creative Ideation', 'Prototyping', 'Validation & Improvement']
      }
    }
  ];
  
  return (
    <Layout>
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold mb-8 border-b pb-4">
          {t('서비스', 'Services')}
        </h1>
        
        <p className="text-xl mb-12">
          {t(
            'WhoisWhat은 복잡한 문제를 단순하고 우아하게 해결하는 서비스를 제공합니다. 깊은 철학을 바탕으로 한 혁신적인 솔루션으로 가치를 창출합니다.',
            'WhoisWhat provides services that solve complex problems simply and elegantly. We create value with innovative solutions based on deep philosophy.'
          )}
        </p>
        
        <div className="space-y-16">
          {services.map((service, index) => (
            <div key={service.id} className={`grid grid-cols-1 md:grid-cols-2 gap-8 ${index % 2 === 1 ? 'md:flex-row-reverse' : ''}`}>
              <div className="bg-gray-100 h-64 flex items-center justify-center">
                <div className="text-3xl font-bold">{service.title[language === 'ko' ? 'ko' : 'en']}</div>
              </div>
              
              <div>
                <h2 className="text-2xl font-bold mb-4">{service.title[language === 'ko' ? 'ko' : 'en']}</h2>
                <p className="text-lg mb-6">{service.description[language === 'ko' ? 'ko' : 'en']}</p>
                
                <h3 className="font-bold mb-3">{t('주요 특징', 'Key Features')}</h3>
                <ul className="list-disc pl-6 mb-6">
                  {service.features[language === 'ko' ? 'ko' : 'en'].map((feature, i) => (
                    <li key={i} className="mb-2">{feature}</li>
                  ))}
                </ul>
                
                <Link href="/contact" className="inline-block bg-black text-white px-6 py-2 rounded hover:bg-gray-800 transition">
                  {t('문의하기', 'Contact Us')}
                </Link>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-16 p-8 bg-gray-50 rounded-lg text-center">
          <h2 className="text-2xl font-bold mb-4">
            {t('맞춤형 서비스가 필요하신가요?', 'Need a Custom Service?')}
          </h2>
          <p className="text-lg mb-6">
            {t(
              '귀사의 특별한 요구에 맞춘 솔루션을 제공해 드립니다. 지금 문의하세요.',
              'We provide solutions tailored to your specific needs. Contact us now.'
            )}
          </p>
          <Link href="/contact" className="inline-block bg-black text-white px-8 py-3 rounded hover:bg-gray-800 transition">
            {t('상담 요청하기', 'Request a Consultation')}
          </Link>
        </div>
      </div>
    </Layout>
  );
}