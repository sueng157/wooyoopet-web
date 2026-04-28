import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "우유펫 - 반려견 가정집 돌봄서비스",
  description:
    "우리 아이를 위한 따뜻한 가정집 돌봄. 검증된 펫시터가 내 아이를 우리 집처럼 돌봐드립니다. 가정집 돌봄, 산책, 픽업/드랍까지 우유펫 앱 하나로.",
  keywords:
    "우유펫, 반려견 돌봄, 펫시터, 가정집 돌봄, 강아지 돌봄, 반려동물, 펫시팅, 강아지 산책, 반려견 유치원, wooyoopet",
  openGraph: {
    title: "우유펫 - 반려견 가정집 돌봄서비스",
    description:
      "우리 아이를 위한 따뜻한 가정집 돌봄. 검증된 펫시터가 내 아이를 우리 집처럼 돌봐드립니다.",
    url: "https://wooyoopet.com",
    siteName: "우유펫",
    locale: "ko_KR",
    type: "website",
    images: [
      {
        url: "https://wooyoopet.com/images/og-image.png",
        width: 1200,
        height: 630,
        alt: "우유펫 - 반려견 가정집 돌봄서비스",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "우유펫 - 반려견 가정집 돌봄서비스",
    description:
      "우리 아이를 위한 따뜻한 가정집 돌봄. 검증된 펫시터가 내 아이를 우리 집처럼 돌봐드립니다.",
    images: ["https://wooyoopet.com/images/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  alternates: {
    canonical: "https://wooyoopet.com",
  },
};

// 구조화 데이터 (JSON-LD) — 검색 결과에 사업자 정보 노출
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "주식회사 우유펫",
  url: "https://wooyoopet.com",
  logo: "https://wooyoopet.com/images/logo.png",
  description:
    "반려견 가정집 돌봄서비스. 검증된 펫시터가 우리 집처럼 내 아이를 돌봐드립니다.",
  address: {
    "@type": "PostalAddress",
    streetAddress: "미사강변중앙로 208, 7층 701-d-31호(망월동, 부강타워)",
    addressLocality: "하남시",
    addressRegion: "경기도",
    addressCountry: "KR",
  },
  contactPoint: {
    "@type": "ContactPoint",
    telephone: "+82-10-9688-2728",
    contactType: "customer service",
    availableLanguage: "Korean",
  },
  sameAs: [
    "https://play.google.com/store/apps/details?id=com.wooyoopet",
    "https://apps.apple.com/kr/app/wooyoopet/id6755390763",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko" className="h-full antialiased">
      <head>
        <meta name="naver-site-verification" content="네이버인증코드" />
        <link rel="icon" href="/favicon.ico" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
