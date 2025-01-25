import type { Metadata } from "next";
import "./globals.css";
import { general_sans } from "@/fonts/fonts";


export const metadata: Metadata = {
  title: "TAppIN",
  description: "need resources? or have resources? we got you covered",
  authors: [{ name: "Raja Majumdar" }, { name: "Ankit Paul" }, { name: "Diptanshu Mahish" }, { name: "Abhirup Saha" }],

  keywords: [
    "TAppIN",
    "TAPPIN",
    "tappin"
  ],
  robots: "index,follow",
  applicationName: "TAppIN",
  category: "resources",
  creator: "Diptanshu Mahish, Raja Majumdar, Abhirup Saha, Ankit Paul",
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${general_sans.className} bg-[#d0d3c1]`}>

        {children}
      </body>
    </html>
  );
}
