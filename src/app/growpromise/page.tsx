"use client"

import React, { useState, useEffect } from 'react';
import { ChevronDown, Heart, Camera, Gift, Sprout, Star, Users, Shield, Download } from 'lucide-react';
import Image from 'next/image';

export default function GrowPromise() {
  const [isVisible, setIsVisible] = useState(false);
  const [currentFeature, setCurrentFeature] = useState(0);

  useEffect(() => {
    setIsVisible(true);
    const interval = setInterval(() => {
      setCurrentFeature((prev) => (prev + 1) % 4);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const features = [
    { icon: Heart, title: "약속 만들기", desc: "부모와 아이가 함께 의미있는 약속을 설정해요" },
    { icon: Camera, title: "약속 인증", desc: "사진으로 약속을 지켰다는 것을 증명해요" },
    { icon: Gift, title: "칭찬 스티커", desc: "약속을 지키면 예쁜 스티커를 받아요" },
    { icon: Sprout, title: "식물 키우기", desc: "약속을 지킬 때마다 식물이 쑥쑥 자라요" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-yellow-50 to-blue-50 overflow-hidden">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-4">
        {/* Background Decorations */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-10 w-20 h-20 bg-yellow-300 rounded-full opacity-20 animate-bounce" style={{ animationDelay: '0s' }}></div>
          <div className="absolute top-40 right-20 w-16 h-16 bg-green-300 rounded-full opacity-25 animate-bounce" style={{ animationDelay: '1s' }}></div>
          <div className="absolute bottom-40 left-20 w-12 h-12 bg-blue-300 rounded-full opacity-30 animate-bounce" style={{ animationDelay: '2s' }}></div>
          <div className="absolute bottom-20 right-10 w-24 h-24 bg-purple-300 rounded-full opacity-15 animate-bounce" style={{ animationDelay: '0.5s' }}></div>
        </div>

        <div className={`text-center max-w-4xl mx-auto transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          {/* App Icon */}
          <div className="mb-8 flex justify-center">
            <div className="w-32 h-32 bg-gradient-to-br from-green-400 to-green-600 rounded-3xl shadow-2xl flex items-center justify-center transform hover:scale-105 transition-transform duration-300">
              <Image src="/icon.png" alt="App Icon" width={200} height={200} className='rounded-2xl' />
            </div>
          </div>

          {/* Main Title */}
          <h1 className="text-6xl md:text-7xl font-bold mb-6">
            <span className="text-green-600">
              쑥쑥약속
            </span>
          </h1>
          
          <p className="text-2xl md:text-3xl text-gray-700 mb-4 font-medium">
            부모와 아이를 위한 약속 관리 앱
          </p>
          
          <p className="text-lg md:text-xl text-gray-600 mb-12 max-w-2xl mx-auto leading-relaxed">
            약속을 지키며 함께 성장하는 따뜻한 경험을 만들어보세요
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <button className="group bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white px-8 py-4 rounded-2xl text-lg font-semibold shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 flex items-center justify-center">
              <Download className="w-5 h-5 mr-2 group-hover:animate-bounce" />
              App Store에서 다운로드
            </button>
            <button className="group bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white px-8 py-4 rounded-2xl text-lg font-semibold shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 flex items-center justify-center">
              <Download className="w-5 h-5 mr-2 group-hover:animate-bounce" />
              Google Play에서 다운로드
            </button>
          </div>

          {/* Scroll Indicator */}
          <div className="animate-bounce">
            <ChevronDown className="w-8 h-8 text-gray-400 mx-auto" />
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-gray-800">
            <span className="bg-gradient-to-r from-green-500 to-blue-500 bg-clip-text text-transparent">
              주요 기능
            </span>
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className={`bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-500 ${
                  currentFeature === index ? 'ring-4 ring-green-300 scale-105' : ''
                }`}
              >
                <div className="mb-6 flex justify-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-green-400 to-green-500 rounded-2xl flex items-center justify-center">
                    <feature.icon className="w-8 h-8 text-white" />
                  </div>
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-4 text-center">
                  {feature.title}
                </h3>
                <p className="text-gray-600 text-center leading-relaxed">
                  {feature.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About & Contact Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-green-50 to-blue-50">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* 앱 소개 */}
            <div className="space-y-6">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-800">
                <span className="bg-gradient-to-r from-green-500 to-blue-500 bg-clip-text text-transparent">
                  쑥쑥약속 소개
                </span>
              </h2>
              
              <div className="space-y-4">
                <p className="text-lg text-gray-700 leading-relaxed">
                  쑥쑥약속은 부모와 아이가 함께 만든 약속을 통해 성장하는 특별한 앱입니다.
                </p>
                
                <div className="space-y-3">
                  <div className="flex items-start">
                    <Heart className="w-5 h-5 text-green-500 mt-1 mr-3 flex-shrink-0" />
                    <p className="text-gray-600">약속을 만들고 함께 지키며 가족 유대감을 강화해요</p>
                  </div>
                  <div className="flex items-start">
                    <Camera className="w-5 h-5 text-blue-500 mt-1 mr-3 flex-shrink-0" />
                    <p className="text-gray-600">사진으로 약속 인증하고 칭찬 스티커를 받아요</p>
                  </div>
                  <div className="flex items-start">
                    <Sprout className="w-5 h-5 text-green-500 mt-1 mr-3 flex-shrink-0" />
                    <p className="text-gray-600">약속을 지킬 때마다 식물이 쑥쑥 자라나요</p>
                  </div>
                  <div className="flex items-start">
                    <Shield className="w-5 h-5 text-purple-500 mt-1 mr-3 flex-shrink-0" />
                    <p className="text-gray-600">아이들을 위한 안전하고 건전한 디지털 환경</p>
                  </div>
                </div>
              </div>
            </div>

            {/* 개발자 연락처 */}
            <div className="bg-white rounded-3xl p-8 shadow-xl">
              <h3 className="text-2xl font-bold text-gray-800 mb-6 text-center">
                개발자에게 연락하기
              </h3>
              
              <div className="space-y-6">
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-green-400 to-blue-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <Users className="w-8 h-8 text-white" />
                  </div>
                  <p className="text-gray-600 mb-4">
                    궁금한 점이 있거나 문의사항이 있으시면 언제든 연락해주세요!
                  </p>
                </div>
                
                <div className="bg-gray-50 rounded-2xl p-6 text-center">
                  <p className="text-sm text-gray-500 mb-2">이메일</p>
                  <a 
                    href="mailto:whoiswhat.team@gmail.com"
                    className="text-lg font-semibold text-blue-600 hover:text-blue-700 transition-colors duration-200"
                  >
                    whoiswhat.team@gmail.com
                  </a>
                </div>
                
                <div className="space-y-3">
                  <div className="flex items-center text-gray-600">
                    <Heart className="w-4 h-4 text-red-400 mr-2" />
                    <span className="text-sm">앱 개선 제안</span>
                  </div>
                  <div className="flex items-center text-gray-600">
                    <Shield className="w-4 h-4 text-green-400 mr-2" />
                    <span className="text-sm">기술 지원</span>
                  </div>
                  <div className="flex items-center text-gray-600">
                    <Star className="w-4 h-4 text-yellow-400 mr-2" />
                    <span className="text-sm">사용자 피드백</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 bg-gray-800 text-center">
        <p className="text-gray-400">
          © 2025 쑥쑥약속(GrowPromise). 모든 권리 보유.
        </p>
        {/* 개인정보처리방침 Url */}
        <a href="https://docs.google.com/document/d/1E6In0_c1aaAVHQpOyBLYoPntfVRa6lN3SGfV3dCZ_0k/edit?usp=sharing" className="text-gray-400 hover:text-gray-200 transition-colors duration-200">
          개인정보처리방침
        </a>
      </footer>
    </div>
  );
}