import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

import { NavigationProvider } from "@/contexts/NavigationContext";
import { ThemeProvider } from "@/contexts/ThemeContext";
import ChatbotProvider from "@/components/ChatbotProvider";
import { defaultMetadata } from "@/lib/seo/metadata";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = defaultMetadata;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body className={inter.className}>
        <ThemeProvider>
          <NavigationProvider>
            <ChatbotProvider>
              {children}
            </ChatbotProvider>
          </NavigationProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
