import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Sidebar } from "@/components/portfolio/Sidebar";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Quang Bui — AI/ML enthusiast",
  description:
    "Quang (Buno) is an AI/ML enthusiast who loves to build, research, and sometimes break LLM models. Currently, he is researching AI at VNU and MIT while running his own research organization Synthica. He also picks up side gigs every now and then such as website building.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} h-full scroll-smooth antialiased`}>
      <body className="min-h-full bg-white font-sans text-[#1A1A1A]">
        <div className="flex min-h-screen flex-col bg-white md:flex-row">
          <Sidebar />
          <main className="min-w-0 flex-1 border-t border-[#EEEEEE] px-4 pb-8 pt-[max(4rem,env(safe-area-inset-top,0px)+0.75rem)] sm:px-6 md:ml-[220px] md:border-t-0 md:px-8 md:pb-10 md:pt-5 lg:ml-[240px] lg:px-10 lg:pb-12 lg:pt-6">
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}
