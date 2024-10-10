// app/layout.js
import type { Metadata } from "next";
import "./globals.css";
import Link from "next/link";

import SplashScreen from "@/app/components/loading";
import Sidebar from "@/app/components/sidebar";
import Footer from "@/app/components/footer";

export const metadata: Metadata = {
  title: "Juan Mejia",
  description: "Portfolio created by Juan Paulo Mejia",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Poiret+One&family=Raleway:ital,wght@0,100..900;1,100..900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className={`antialiased`}>
        <SplashScreen />

        <div className="fixed w-full top-0 z-20 ">
          <div className="flex justify-between items-center my-5 ml-10 mr-5">
            <Link href="/" className="title">
              J1
            </Link>
            <Sidebar />
          </div>
        </div>

        {children}
        <div className="h-6 bg-[#141414] mb-[300px] lg:mb-[500px]"></div>
        <Footer />
      </body>
    </html>
  );
}
