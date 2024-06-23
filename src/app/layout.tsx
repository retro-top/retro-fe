import type { Metadata } from "next";
import { Inter, Titillium_Web } from "next/font/google";
import "./globals.css";
import { GoogleAnalytics } from "@next/third-parties/google";
import Sidebar from "@/components/Sidebar/Sidebar";
import TopNavBar from "@/components/Navbar/TopNavBar";

const font = Titillium_Web({
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
      <body className={`${font.className} bg-emerald-700`}>
        {google_analytics_id && <GoogleAnalytics gaId={google_analytics_id} />}
        <TopNavBar />
        <Sidebar />
        {children}
      </body>
    </html>
  );
}
