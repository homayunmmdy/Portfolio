import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import "./Font.css";
import Footer from "@/components/Footer";
import GetStarted from "@/components/GetStarted";
import Navbar from "@/components/Navbar";
import SiteConfig from "@/config/site";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: SiteConfig.name,
  description: SiteConfig.description,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang={SiteConfig.lang} dir={SiteConfig.dir}>
    <body className={inter.className}>
      <Navbar />
      {children}
      <div style={{ background: "hsla(127, 8%, 14%, 1)" }}>
        <div className='px-5 w-[98%] md:w-[92%] mx-auto'>
          <GetStarted />
        </div>
      </div>
      <Footer />
    </body>
  </html>
  );
}
