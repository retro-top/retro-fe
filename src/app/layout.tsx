import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { GoogleAnalytics } from "@next/third-parties/google";
import Sidebar from "@/components/Sidebar/Sidebar";
import TopNavBar from "@/components/Navbar/TopNavBar";
import RootLayoutProvider from "@/providers/RootLayoutProvider";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Footer from "@/components/Footer/Footer";

const font = Inter({
  subsets: ["latin"],
  weight: ["200", "300", "400", "600", "700", "900"],
});

export const metadata: Metadata = {
  title: "Aptos Gamble",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const google_analytics_id = process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_ID;

  return (
    <html lang="en">
      <body className={`${font.className} bg-primary transition`}>
        {google_analytics_id && <GoogleAnalytics gaId={google_analytics_id} />}
        <RootLayoutProvider>
          <TopNavBar />
          <Sidebar />
          <div className="overflow-y-scroll h-[calc(100vh-3.5rem)]">
            {children}
            <Footer />
          </div>
        </RootLayoutProvider>
      </body>
    </html>
  );
}
