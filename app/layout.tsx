import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "SRI SRIDEVI BHUDEVI SAMETHI SRI VENKATESHWARA SWAMY & SRI ABAYA ANJANEY SWAMY TEMPLE",
  description: "A modern digital platform preserving temple heritage, offering daily Panchangam details, upcoming festival events, and a devotional archive.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-theme="prabha" className="h-full antialiased">
      <head>
        <link 
          rel="stylesheet" 
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css" 
          integrity="sha512-DTOQO9RWCH3ppGqcWaEA1BIZOC6xxalwEsw9c2QQeAIftl+Vegovlnee1c9QX4TctnWMn13TZye+giMm8e2LwA==" 
          crossOrigin="anonymous" 
          referrerPolicy="no-referrer" 
        />
      </head>
      <body className="min-h-full flex flex-col font-sans">{children}</body>
    </html>
  );
}
