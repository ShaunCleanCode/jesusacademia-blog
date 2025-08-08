import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { NavigationProvider } from "@/contexts/NavigationContext";
import ChatbotProvider from "@/components/ChatbotProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "예수서원 - 복음과 지성의 통합",
  description: "뉴욕에서 시작한 기독교 인문학 아카데미",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body className={inter.className}>
        <NavigationProvider>
          <ChatbotProvider>
            {children}
          </ChatbotProvider>
        </NavigationProvider>
      </body>
    </html>
  );
}
