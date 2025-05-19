'use client';

import { useLanguage } from '../context/LanguageContext';
import Layout from '../components/Layout';
import ClientLayout from '../client-layout';
import { useEffect } from 'react';

export default function About() {
  return (
    <ClientLayout>
      <AboutPage />
    </ClientLayout>
  );
}

function AboutPage() {
  const { t, language } = useLanguage();
  
  useEffect(() => {
    console.log('AboutPage rendering with language:', language);
  }, [language]);
  
  return (
    <Layout>
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-8 border-b pb-4">
          {t('회사 소개', 'About Us')}
        </h1>
        
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4">
            {t('우리는 누구인가?', 'Who We Are')}
          </h2>
          <p className="text-lg mb-6">
            {t(
              'WhoisWhat은 복잡한 문제를 단순하고 우아한 솔루션으로 해결하는 회사입니다. 우리는 2022년에 설립되어 혁신적인 접근 방식으로 다양한 산업 분야의 도전 과제를 해결해 왔습니다.',
              'WhoisWhat is a company that solves complex problems with simple and elegant solutions. Founded in 2022, we have been addressing challenges in various industries with innovative approaches.'
            )}
          </p>
          <p className="text-lg">
            {t(
              '단순함을 추구하지만, 우리의 단순함은 결코 가볍지 않습니다. 깊은 고민과 철학이 담긴 단순함, 이것이 우리의 강점입니다.',
              'We pursue simplicity, but our simplicity is never lightweight. Simplicity infused with deep contemplation and philosophy - this is our strength.'
            )}
          </p>
        </section>
        
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4">
            {t('우리의 비전', 'Our Vision')}
          </h2>
          <p className="text-lg mb-6">
            {t(
              '복잡한 세상에서 본질적 가치를 추구하는 기업이 되는 것. 우리는 사람들의 삶을 더 단순하고 풍요롭게 만드는 솔루션을 제공하고자 합니다.',
              'To become a company that pursues essential value in a complex world. We aim to provide solutions that make people\'s lives simpler and richer.'
            )}
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
            <div className="bg-gray-50 p-6">
              <h3 className="text-xl font-bold mb-3">
                {t('미션', 'Mission')}
              </h3>
              <p>
                {t(
                  '복잡한 문제를 단순하고 우아한 방식으로 해결하여 사람들의 삶에 가치를 더합니다.',
                  'Adding value to people\'s lives by solving complex problems in simple and elegant ways.'
                )}
              </p>
            </div>
            <div className="bg-gray-50 p-6">
              <h3 className="text-xl font-bold mb-3">
                {t('핵심 가치', 'Core Values')}
              </h3>
              <p>
                {t(
                  '단순함, 혁신, 철학적 깊이, 사용자 중심, 지속 가능성',
                  'Simplicity, Innovation, Philosophical Depth, User-centricity, Sustainability'
                )}
              </p>
            </div>
          </div>
        </section>
        
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4">
            {t('우리의 접근 방식', 'Our Approach')}
          </h2>
          <p className="text-lg mb-6">
            {t(
              '우리는 모든 프로젝트에 깊은 철학적 사고를 적용합니다. 표면적으로 단순해 보이는 솔루션 뒤에는 복잡한 문제에 대한 깊은 이해와 고민이 있습니다.',
              'We apply deep philosophical thinking to every project. Behind solutions that appear simple on the surface lies a deep understanding and contemplation of complex problems.'
            )}
          </p>
          <ol className="list-decimal pl-6 space-y-4">
            <li className="text-lg">
              {t(
                '<strong>문제 깊이 이해하기</strong>: 우리는 표면적 증상이 아닌 근본 원인을 찾습니다.',
                '<strong>Deeply Understand the Problem</strong>: We look for root causes, not surface symptoms.'
              )}
            </li>
            <li className="text-lg">
              {t(
                '<strong>본질에 집중하기</strong>: 불필요한 것을 제거하고 가장 중요한 것에 집중합니다.',
                '<strong>Focus on the Essence</strong>: We eliminate the unnecessary and focus on what matters most.'
              )}
            </li>
            <li className="text-lg">
              {t(
                '<strong>혁신적 해결책 제시</strong>: 기존의 틀을 넘어서는 창의적 사고로 새로운 솔루션을 만듭니다.',
                '<strong>Provide Innovative Solutions</strong>: We create new solutions with creative thinking that goes beyond existing frameworks.'
              )}
            </li>
            <li className="text-lg">
              {t(
                '<strong>지속적 개선</strong>: 완벽한 솔루션은 없습니다. 우리는 끊임없이 배우고 개선합니다.',
                '<strong>Continuous Improvement</strong>: There is no perfect solution. We continuously learn and improve.'
              )}
            </li>
          </ol>
        </section>
      </div>
    </Layout>
  );
}