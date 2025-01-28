// app/components/Aptos/WalletProv.tsx
"use client";
import React, { useMemo } from "react";
import { AptosWalletAdapterProvider } from "@aptos-labs/wallet-adapter-react";
import { PetraWallet } from "petra-plugin-wallet-adapter";
import NavbarMain from "@/components/common/NavbarMain";
import Footer from "@/components/common/Footer";

export default function WalletProv({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // Define the wallets you'd like to use
  const wallets = useMemo(() => [new PetraWallet()], []);

  return (
    <>
      <AptosWalletAdapterProvider plugins={wallets} autoConnect={true}>
        <NavbarMain /> 
        {children}
        <div className="">
          <Footer />
        </div>
      </AptosWalletAdapterProvider>
    </>
  );
}
