"use client";
import React, { useMemo } from "react";
import { ConnectionProvider, WalletProvider } from "@solana/wallet-adapter-react";
import { WalletAdapterNetwork } from "@solana/wallet-adapter-base";
import { PhantomWalletAdapter } from "@solana/wallet-adapter-wallets";
import { WalletModalProvider } from "@solana/wallet-adapter-react-ui";
import { clusterApiUrl } from "@solana/web3.js";
import NavbarMain from "@/components/common/NavbarMain";
import Footer from "@/components/common/Footer";

require("@solana/wallet-adapter-react-ui/styles.css");

export default function WalletProv({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    const network = WalletAdapterNetwork.Testnet;

    const endpoint = useMemo(() => clusterApiUrl(network), [network]);

    const wallets = useMemo(() => [
        new PhantomWalletAdapter()
    ], [network]);

    return (
        <>
            <ConnectionProvider endpoint={endpoint}>
                <WalletProvider wallets={wallets} autoConnect>
                    <WalletModalProvider>
                        <NavbarMain />
                        {children}
                        <Footer />
                    </WalletModalProvider>
                </WalletProvider>
            </ConnectionProvider></>
    );
}