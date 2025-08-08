import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { NavigationProvider } from "@/contexts/NavigationContext";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "예수서원 - 복음과 지성의 통합 | 고석희 목사",
  description: "고석희 목사가 뉴욕 Oyster Bay에서 시작한 복음과 지성을 통합하는 기독교 인문학 아카데미. 설교영상, 강의, 블로그를 통해 깊이 있는 신학적 통찰을 제공합니다.",
  keywords: [
    "예수서원", 
    "고석희 목사", 
    "기독교 인문학", 
    "뉴욕", 
    "Oyster Bay", 
    "설교영상", 
    "강의", 
    "복음과 지성", 
    "기독교 아카데미",
    "KWMC",
    "한인세계선교운동"
  ],
  authors: [{ name: "고석희 목사", url: "https://www.jesusacademia.org" }],
  creator: "예수서원",
  publisher: "예수서원",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://jesusacademia.org'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: "예수서원 - 복음과 지성의 통합 | 고석희 목사",
    description: "고석희 목사가 뉴욕 Oyster Bay에서 시작한 복음과 지성을 통합하는 기독교 인문학 아카데미. 설교영상, 강의, 블로그를 통해 깊이 있는 신학적 통찰을 제공합니다.",
    url: 'https://jesusacademia.org',
    siteName: '예수서원',
    locale: 'ko_KR',
    type: 'website',
    images: [
      {
        url: 'https://jesusacademia.org/og-image.jpg',
        width: 1200,
        height: 630,
        alt: '예수서원 - 복음과 지성의 통합',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: "예수서원 - 복음과 지성의 통합 | 고석희 목사",
    description: "고석희 목사가 뉴욕 Oyster Bay에서 시작한 복음과 지성을 통합하는 기독교 인문학 아카데미",
    images: ['https://jesusacademia.org/og-image.jpg'],
  },
  other: {
    'contact:phone': '+1-516-277-2082',
    'contact:email': 'JesusChristAcademia@gmail.com',
    'contact:address': '1330 Wolver Hollow Rd., Oyster Bay, NY 11771',
    'social:youtube': 'https://www.youtube.com/user/plumhair388/videos',
    'social:instagram': 'https://www.instagram.com/jesus_academia/',
    'social:website': 'https://www.jesusacademia.org',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body
        className={`${inter.variable} font-sans antialiased bg-gray-50`}
      >
        <NavigationProvider>
          {children}
        </NavigationProvider>
      </body>
    </html>
  );
}
