import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Devalaya — Sri Lakshmi Narasimha Swamy Devasthanam",
  description: "A modern digital platform preserving temple heritage, offering daily Panchangam details, upcoming festival events, and a devotional archive.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-theme="prabha" className="h-full antialiased">
      <body className="min-h-full flex flex-col font-sans">{children}</body>
    </html>
  );
}
