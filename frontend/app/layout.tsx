import type { Metadata } from "next";
import "./globals.css";
import { general_sans } from "@/fonts/fonts";
import WalletProv from "@/components/solana/WalletProv";

export const metadata: Metadata = {
  title: "DecnAIX",
  description: "",
  authors: [
    { name: "Krish Agarwal" },
    { name: "Vraj Shah" },
    { name: "Hemil Dudhat" },
  ],

  keywords: ["DecnAIX", "DecnAIX", "decnaix"],
  robots: "index,follow",
  applicationName: "DecnAIX",
  category: "resources",
  creator: "Krish Agarwal, Vraj Shah, Hemil Dudhat",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${general_sans.className} bg-[#f0ffff]`}>
        {children}
      </body>
    </html>
  );
}
