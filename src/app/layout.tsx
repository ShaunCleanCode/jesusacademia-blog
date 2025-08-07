import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "예수서원 - 복음과 지성의 통합",
  description: "고석희 목사가 뉴욕 Oyster Bay에서 시작한 복음과 지성을 통합하는 기독교 인문학 아카데미",
  keywords: ["예수서원", "고석희 목사", "기독교 인문학", "뉴욕", "Oyster Bay"],
  authors: [{ name: "예수서원" }],
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
    title: "예수서원 - 복음과 지성의 통합",
    description: "고석희 목사가 뉴욕 Oyster Bay에서 시작한 복음과 지성을 통합하는 기독교 인문학 아카데미",
    url: 'https://jesusacademia.org',
    siteName: '예수서원',
    locale: 'ko_KR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "예수서원 - 복음과 지성의 통합",
    description: "고석희 목사가 뉴욕 Oyster Bay에서 시작한 복음과 지성을 통합하는 기독교 인문학 아카데미",
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
        {children}
      </body>
    </html>
  );
}
