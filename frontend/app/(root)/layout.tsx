"use client";
import React from "react";

import WalletProv from "@/components/solana/WalletProv";



export default function layout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {


    return (

        <WalletProv>
            {children}
        </WalletProv>


    );
}