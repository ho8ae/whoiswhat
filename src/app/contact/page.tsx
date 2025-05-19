'use client';

import { useState, useEffect } from 'react';
import { useLanguage } from '../context/LanguageContext';
import Layout from '../components/Layout';
import ClientLayout from '../client-layout';

export default function Contact() {
  return (
    <ClientLayout>
      <ContactPage />
    </ClientLayout>
  );
}

function ContactPage() {
  const { t, language } = useLanguage();
  
  useEffect(() => {
    console.log('ContactPage rendering with language:', language);
  }, [language]);
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  
  const [isSubmitted, setIsSubmitted] = useState(false);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // 실제 구현에서는 여기에 form 제출 로직을 추가
    console.log('Form submitted:', formData);
    setIsSubmitted(true);
    
    // 폼 리셋
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: ''
    });
    
    // 5초 후 메시지 숨기기
    setTimeout(() => {
      setIsSubmitted(false);
    }, 5000);
  };
  
  return (
    <Layout>
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-8 border-b pb-4">
          {t('연락하기', 'Contact Us')}
        </h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-2xl font-bold mb-6">
              {t('문의하기', 'Get in Touch')}
            </h2>
            <p className="mb-8">
              {t(
                '귀하의 프로젝트나 궁금한 점에 대해 알려주세요. 최대한 빠르게 답변해 드리겠습니다.',
                'Tell us about your project or inquiry. We\'ll get back to you as soon as possible.'
              )}
            </p>
            
            {isSubmitted && (
              <div className="mb-6 p-4 bg-green-50 text-green-800 rounded">
                {t('메시지가 전송되었습니다. 곧 연락드리겠습니다.', 'Your message has been sent. We\'ll be in touch soon.')}
              </div>
            )}
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block mb-2 font-medium">
                  {t('이름', 'Name')}
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-black"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block mb-2 font-medium">
                  {t('이메일', 'Email')}
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-black"
                />
              </div>
              
              <div>
                <label htmlFor="subject" className="block mb-2 font-medium">
                  {t('제목', 'Subject')}
                </label>
                <select
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-black"
                >
                  <option value="">{t('선택해주세요', 'Please select')}</option>
                  <option value="general">{t('일반 문의', 'General Inquiry')}</option>
                  <option value="project">{t('프로젝트 의뢰', 'Project Request')}</option>
                  <option value="partnership">{t('제휴 제안', 'Partnership Proposal')}</option>
                  <option value="other">{t('기타', 'Other')}</option>
                </select>
              </div>
              
              <div>
                <label htmlFor="message" className="block mb-2 font-medium">
                  {t('메시지', 'Message')}
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={6}
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-black"
                ></textarea>
              </div>
              
              <button
                type="submit"
                className="bg-black text-white px-8 py-3 rounded hover:bg-gray-800 transition"
              >
                {t('보내기', 'Send Message')}
              </button>
            </form>
          </div>
          
          <div>
            <h2 className="text-2xl font-bold mb-6">
              {t('연락처 정보', 'Contact Information')}
            </h2>
            
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-bold mb-2">{t('주소', 'Address')}</h3>
                <p className="mb-1">
                  {t(
                    '경기도 남양주시 다산동 4025-33 A-202',
                    'A-202, 26-5, Donong-ro jungchon 2-gil, Namyangju-si, Gyeonggi-do'
                  )}
                </p>
                <p>{t('대한민국', 'Republic of Korea')}</p>
              </div>
              
              <div>
                <h3 className="text-lg font-bold mb-2">{t('이메일', 'Email')}</h3>
                <p>whoiswatashi@gmail.com</p>
              </div>
              
              <div>
                <h3 className="text-lg font-bold mb-2">{t('전화', 'Phone')}</h3>
                <p>+82 10 9789 7457</p>
              </div>
              
              <div>
                <h3 className="text-lg font-bold mb-2">{t('영업 시간', 'Business Hours')}</h3>
                <p>{t('월요일 - 금요일: 9:00 - 18:00', 'Monday - Friday: 9:00 - 18:00')}</p>
                <p>{t('주말 및 공휴일: 휴무', 'Weekends & Holidays: Closed')}</p>
              </div>
            </div>
            
            <div className="mt-10 p-6 bg-gray-50 rounded">
              <h3 className="text-lg font-bold mb-4">
                {t('찾아오시는 길', 'How to Find Us')}
              </h3>
              <p className="mb-4">
                {t(
                  '지하철 경의중앙선 도농역에서 도보 15분 거리에 위치해 있습니다.',
                  'We are located about a 15-minute walk from Donong Station on the Gyeongui-Jungang Line.'
                )}
              </p>
              <div className="h-48 bg-gray-200 flex items-center justify-center">
                <p>{t('지도가 여기에 표시됩니다', 'Map will be displayed here')}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}