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
  title: SiteConfig.title,
  description: SiteConfig.description,
  keywords: SiteConfig.keywords,
  publisher: SiteConfig.name,
  authors: SiteConfig.author,
  robots: "index, follow",
  verification: {
    google: "KEW2K6gHlUqeWRDxOY39arw_0ZD47OKapZN1bBZI1Go",
  },
  openGraph: {
    title: SiteConfig.name,
    description: SiteConfig.description.slice(0, 160),
    siteName: SiteConfig.name,
    authors: SiteConfig.name,
    images: {
      url: `${SiteConfig.siteURL}img1.jpg`,
      secureUrl: `${SiteConfig.siteURL}img1.jpg`,
      width: 1200,
      height: 630,
      alt: `Preview image for ${SiteConfig.name}`,
    },
  },
  twitter: {
    card: "summary_large_image",
    site: `@${SiteConfig.name}`,
    description: SiteConfig.description.slice(0, 160),
    creator: `@${SiteConfig.name}`,
    images: {
      url: `${SiteConfig.siteURL}img1.jpg`,
      alt: `Preview image for ${SiteConfig.name}`,
    },
  },
  alternates: {
    canonical: SiteConfig.siteURL,
  },
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
          <div className="px-5 w-[98%] md:w-[92%] mx-auto">
            <GetStarted />
          </div>
        </div>
        <Footer />
      </body>
    </html>
  );
}
