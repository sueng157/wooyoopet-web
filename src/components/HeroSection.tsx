"use client";

import { QRCodeSVG } from "qrcode.react";
import Image from "next/image";

export default function HeroSection() {
  const PLAYSTORE_URL =
    "https://play.google.com/store/apps/details?id=com.wooyoopet&pcampaignid=web_share";
  const APPSTORE_URL =
    "https://apps.apple.com/kr/app/wooyoopet/id6755390763";

  return (
    <section id="hero" className="relative pt-[72px] overflow-hidden">
      {/* 배경 */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary-50 via-white to-primary-light" />
      <div className="absolute top-20 right-[-100px] w-[400px] h-[400px] rounded-full bg-primary/5 blur-3xl" />
      <div className="absolute bottom-[-50px] left-[-80px] w-[300px] h-[300px] rounded-full bg-kindergarten/5 blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-24">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16 xl:gap-20">
          {/* 텍스트 영역 */}
          <div className="flex-1 text-center lg:text-left min-w-0">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-8">
              <span>🐶</span>
              <span>반려견 가정집 돌봄 서비스</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-[56px] font-extrabold leading-[1.15] text-dark tracking-tight">
              우리 아이 맡길 곳,
              <br />
              <span className="text-primary whitespace-nowrap">따뜻한 가정집 돌봄, 우유펫</span>
            </h1>

            <p className="mt-6 text-lg sm:text-xl text-gray leading-relaxed max-w-xl mx-auto lg:mx-0">
              검증된 펫시터가 우리 집처럼 내 아이를 돌봐드립니다.
              <br className="hidden sm:block" />
              우유펫 앱 하나로 간편하게 돌봄을 시작하세요.
            </p>

            {/* QR 코드 다운로드 */}
            <div className="mt-8 flex flex-row items-start gap-6 justify-center lg:justify-start">
              <div className="flex flex-col items-center gap-2">
                <div className="w-28 h-28 p-2 rounded-2xl bg-white border border-border shadow-md">
                  <QRCodeSVG
                    value={PLAYSTORE_URL}
                    size={96}
                    level="M"
                    bgColor="transparent"
                    fgColor="#1A1A2E"
                  />
                </div>
                <div className="flex items-center gap-1.5 text-sm font-semibold text-dark-secondary">
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none">
                    <path d="M3.609 1.814L13.792 12 3.61 22.186a.996.996 0 01-.61-.92V2.734a1 1 0 01.609-.92zm10.89 10.893l2.302 2.302-10.937 6.333 8.635-8.635zM17.1 8.692l3.104 1.795a1.001 1.001 0 010 1.726l-3.104 1.795L14.5 11.7l2.6-3.008zM5.864 2.658L16.8 8.99l-2.302 2.302L5.864 2.658z" fill="currentColor"/>
                  </svg>
                  Google Play
                </div>
              </div>

              <div className="flex flex-col items-center gap-2">
                <div className="w-28 h-28 p-2 rounded-2xl bg-white border border-border shadow-md">
                  <QRCodeSVG
                    value={APPSTORE_URL}
                    size={96}
                    level="M"
                    bgColor="transparent"
                    fgColor="#1A1A2E"
                  />
                </div>
                <div className="flex items-center gap-1.5 text-sm font-semibold text-dark-secondary">
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
                  </svg>
                  App Store
                </div>
              </div>
            </div>

            {/* 서비스 알아보기 */}
            <div className="mt-6 flex justify-center lg:justify-start">
              <a
                href="#service"
                className="inline-flex items-center gap-1.5 text-gray hover:text-primary text-sm font-medium transition-colors"
              >
                서비스 알아보기
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </a>
            </div>
          </div>

          {/* 폰 목업 3개 — 일렬 배치, 우측 여유 */}
          <div className="flex-shrink-0 flex items-end gap-3 lg:gap-5 justify-center lg:translate-x-8 xl:translate-x-12">
            {/* 폰 1: 홈 화면 (메인, 크게) */}
            <div>
              <div className="w-[220px] sm:w-[240px] lg:w-[250px] rounded-[2.5rem] border-[2px] border-gray-light/80 bg-white shadow-lg shadow-gray/10 overflow-hidden">
                <div className="rounded-[2.3rem] overflow-hidden">
                  <Image
                    src="/images/app-screen-home.png"
                    alt="우유펫 앱 홈 화면 - 지도에서 주변 유치원 탐색"
                    width={250}
                    height={540}
                    className="w-full h-auto block"
                  />
                </div>
              </div>
            </div>

            {/* 폰 2: 유치원 상세 (작게) */}
            <div className="hidden sm:block">
              <div className="w-[170px] lg:w-[190px] rounded-[2rem] border-[2px] border-gray-light/80 bg-white shadow-md shadow-gray/10 overflow-hidden">
                <div className="rounded-[1.8rem] overflow-hidden">
                  <Image
                    src="/images/app-screen-detail.png"
                    alt="우유펫 앱 유치원 상세 페이지"
                    width={190}
                    height={411}
                    className="w-full h-auto block"
                  />
                </div>
              </div>
            </div>

            {/* 폰 3: 채팅 화면 (작게) */}
            <div className="hidden lg:block">
              <div className="w-[170px] lg:w-[190px] rounded-[2rem] border-[2px] border-gray-light/80 bg-white shadow-md shadow-gray/10 overflow-hidden">
                <div className="rounded-[1.8rem] overflow-hidden">
                  <Image
                    src="/images/app-screen-chat.png"
                    alt="우유펫 앱 채팅 화면 - 돌봄 중 실시간 소통"
                    width={190}
                    height={411}
                    className="w-full h-auto block"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
