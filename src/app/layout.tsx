import type { Metadata } from "next";
import { Inter } from "next/font/google";
import FloatingChatbot from "@/components/floating-chatbot";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  title: "Asif Majeed - AI Web Developer & Solutions",
  description: "Professional portfolio for web development, AI solutions, and business websites",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.variable} font-sans antialiased text-gray-900`}>
        {children}
        <FloatingChatbot />
      </body>
    </html>
  );
}
