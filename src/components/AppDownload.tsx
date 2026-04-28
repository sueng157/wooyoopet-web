"use client";

import { QRCodeSVG } from "qrcode.react";

export default function AppDownload() {
  const PLAYSTORE_URL =
    "https://play.google.com/store/apps/details?id=com.wooyoopet&pcampaignid=web_share";
  const APPSTORE_URL =
    "https://apps.apple.com/kr/app/wooyoopet/id6755390763";

  return (
    <section id="download" className="py-20 sm:py-28 bg-gradient-to-br from-primary via-primary-dark to-primary relative overflow-hidden">
      {/* 배경 장식 */}
      <div className="absolute top-[-100px] right-[-100px] w-[400px] h-[400px] rounded-full bg-white/5 blur-3xl" />
      <div className="absolute bottom-[-80px] left-[-80px] w-[300px] h-[300px] rounded-full bg-white/5 blur-3xl" />

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* 타이틀 */}
        <div className="mb-12">
          <span className="inline-block px-4 py-1.5 rounded-full bg-white/15 text-white text-sm font-semibold mb-4">
            DOWNLOAD
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            앱 다운로드
          </h2>
          <p className="mt-4 text-lg text-white/80 max-w-xl mx-auto">
            우유펫 앱을 다운로드하고 지금 바로 돌봄을 시작하세요.
          </p>
        </div>

        {/* 스토어 버튼 */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
          <a
            href={PLAYSTORE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 rounded-2xl bg-white text-dark font-bold text-lg hover:bg-white/90 hover:shadow-xl transition-all duration-300 hover:-translate-y-0.5"
          >
            <svg className="w-7 h-7" viewBox="0 0 24 24" fill="none">
              <path d="M3.609 1.814L13.792 12 3.61 22.186a.996.996 0 01-.61-.92V2.734a1 1 0 01.609-.92zm10.89 10.893l2.302 2.302-10.937 6.333 8.635-8.635zM17.1 8.692l3.104 1.795a1.001 1.001 0 010 1.726l-3.104 1.795L14.5 11.7l2.6-3.008zM5.864 2.658L16.8 8.99l-2.302 2.302L5.864 2.658z" fill="currentColor"/>
            </svg>
            Google Play
          </a>
          <a
            href={APPSTORE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 rounded-2xl bg-white text-dark font-bold text-lg hover:bg-white/90 hover:shadow-xl transition-all duration-300 hover:-translate-y-0.5"
          >
            <svg className="w-7 h-7" viewBox="0 0 24 24" fill="currentColor">
              <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
            </svg>
            App Store
          </a>
        </div>

        {/* QR 코드 */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-8">
          <div className="text-center">
            <div className="w-36 h-36 rounded-2xl bg-white flex items-center justify-center mx-auto mb-3 shadow-lg p-3">
              <QRCodeSVG
                value={PLAYSTORE_URL}
                size={120}
                level="M"
                bgColor="#FFFFFF"
                fgColor="#1A1A2E"
              />
            </div>
            <span className="text-sm font-medium text-white/70">Android</span>
          </div>
          <div className="text-center">
            <div className="w-36 h-36 rounded-2xl bg-white flex items-center justify-center mx-auto mb-3 shadow-lg p-3">
              <QRCodeSVG
                value={APPSTORE_URL}
                size={120}
                level="M"
                bgColor="#FFFFFF"
                fgColor="#1A1A2E"
              />
            </div>
            <span className="text-sm font-medium text-white/70">iOS</span>
          </div>
        </div>
      </div>
    </section>
  );
}
