/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // 정적 HTML 내보내기를 위한 설정
  images: {
    unoptimized: true, // 정적 내보내기 시 이미지 최적화 비활성화
  },
  trailingSlash: true, // 정적 내보내기 시 도움이 됨
  // 정적 파일 복사 보장
  distDir: 'out',
};

module.exports = nextConfig;