"use client";
import { images } from "@/constants/images/images";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { Button } from "../ui/button";
import { Menu, Wallet2 } from "lucide-react";
import {
    WalletDisconnectButton,
    WalletMultiButton,
} from "@solana/wallet-adapter-react-ui";
import { useWallet } from "@solana/wallet-adapter-react";
import dynamic from "next/dynamic";

const NavbarMain = () => {
    const { publicKey } = useWallet();
    const [data, setData] = useState(localStorage.getItem("user"));
    useEffect(() => {
        const dat = localStorage.getItem("user");
        if (dat === null) {
            setData(null);
        } else {
            setData(dat);
        }
    }, [data])
    return (
        <div className="sticky top-4 px-[5%]">
            <nav className="px-[2%] rounded-md offsetEffect bg-[#b3a2e5]  py-2 border border-black flex justify-between items-center">
                <div className="flex items-center gap-2">
                    <Image
                        src={images["log-black"]}
                        height={40}
                        width={40}
                        alt="lgo"
                    />
                    <span className="font-bold text-lg">TAppIN™</span>
                </div>
                <div className="font-medium md:flex hidden gap-2 items-center w-max">
                    <Link href="/">Home</Link>
                    <Link href="/docs">Docs</Link>
                    <Link href="/#faq">FAQs</Link>

                    <Link href="/provider">Provider</Link>
                    <Link href="/rent">Renting</Link>
                    <Button
                        asChild
                        className="bg-white border hover:text-white border-black ml-2 text-black rounded-md offsetstyle"
                    >
                        {data === null && <Link href="/onboard">Sign in</Link>}
                    </Button>
                    {publicKey ? (
                        <Button className="relative offsetEffect bg-red-400 generalBorder text-black hover:text-white">
                            <div className="opacity-0 absolute">
                                <WalletDisconnectButton className="hidden" />
                            </div>
                            <span className="flex gap-2 items-center"> Disconnect wallet <Wallet2 size={15} /></span>
                        </Button>
                    ) : (
                        <Button className="relative offsetEffect bg-blue-300 generalBorder text-black hover:text-white">
                            <div className="opacity-0 absolute">
                                <WalletMultiButton />
                            </div>
                            <span className="flex gap-2 items-center"> Connect Wallet <Wallet2 size={15} /></span>
                        </Button>

                    )}
                </div>
                <Button className="aspect-square p-[10px] offsetstyle bg-white  text-black generalBorder md:hidden hover:text-white">
                    <Menu size={30} />
                </Button>
            </nav>
        </div>
    );
}

export default dynamic(() => Promise.resolve(NavbarMain), { ssr: false })
