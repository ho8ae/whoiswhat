"use client"

import React, { useState, useEffect } from 'react';
import { ChevronDown, Heart, Camera, Gift, Sprout, Star, Users, Shield, Download } from 'lucide-react';

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
              <Sprout className="w-16 h-16 text-white" />
            </div>
          </div>

          {/* Main Title */}
          <h1 className="text-6xl md:text-7xl font-bold mb-6">
            <span className="bg-gradient-to-r from-green-500 via-yellow-500 to-blue-500 bg-clip-text text-transparent">
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



      {/* Benefits Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-gray-800">
            <span className="bg-gradient-to-r from-green-500 to-blue-500 bg-clip-text text-transparent">
              왜 쑥쑥약속인가요?
            </span>
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: Users, title: "가족 유대감 강화", desc: "부모와 아이가 함께 약속을 만들고 지키며 더욱 가까워져요" },
              { icon: Star, title: "습관 형성 도움", desc: "게이미피케이션을 통해 좋은 습관을 자연스럽게 만들어요" },
              { icon: Shield, title: "안전한 환경", desc: "아이들을 위한 안전하고 건전한 디지털 환경을 제공해요" }
            ].map((benefit, index) => (
              <div key={index} className="text-center p-8 bg-white rounded-3xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="mb-6 flex justify-center">
                  <div className="w-20 h-20 bg-gradient-to-br from-green-400 to-blue-500 rounded-2xl flex items-center justify-center">
                    <benefit.icon className="w-10 h-10 text-white" />
                  </div>
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-4">{benefit.title}</h3>
                <p className="text-gray-600 leading-relaxed">{benefit.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
    

      {/* Footer */}
      <footer className="py-8 px-4 bg-gray-800 text-center">
        <p className="text-gray-400">
          © 2025 쑥쑥약속(GrowPromise). 모든 권리 보유.
        </p>
      </footer>
    </div>
  );
}