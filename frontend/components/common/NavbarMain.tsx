"use client";
import { images } from "@/constants/images/images";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { Button } from "../ui/button";
import { Menu, Wallet2 } from "lucide-react";
// Import Aptos components
import { WalletSelector } from "@aptos-labs/wallet-adapter-ant-design";
import "@aptos-labs/wallet-adapter-ant-design/dist/index.css";

import { useWallet } from "@aptos-labs/wallet-adapter-react";
import dynamic from "next/dynamic";

const NavbarMain = () => {
  const { account, connected, disconnect, wallet } = useWallet();
  const [data, setData] = useState(localStorage.getItem("user"));

  useEffect(() => {
    const dat = localStorage.getItem("user");
    if (dat === null) {
      setData(null);
    } else {
      setData(dat);
    }
  }, [data]);

  return (
    <div className="sticky top-4 px-[5%] ">
      <nav className="px-[2%] rounded-md hover:shadow-md z-50  py-2 border border-black flex items-center bg-blue-300">
        {/* Name on the left */}
        <div className="flex justify-start items-center gap-2">
          <span className="font-bold text-lg">DecnAIX</span>
        </div>

        {/* Centered links */}
        <div className="font-medium md:flex justify-center hidden gap-8 items-center w-full pl-10">
          <Link href="/">Home</Link>
          <Link href="/provider">Provider</Link>
          <Link href="/rent">Renting</Link>
        </div>

        {/* Wallet button on the right */}
        <div className="flex justify-end items-center gap-2">
          <Button
            asChild
            className="bg-white border-2 hover:text-white border-black ml-2 text-black rounded-md "
          >
            {data === null && <Link href="/onboard">Sign in</Link>}
          </Button>
          {connected ? (
            <Button
              className="relative offsetEffect bg-red-400 generalBorder text-black hover:text-white"
              onClick={disconnect}
            >
              <span className="flex gap-2 items-center">
                Disconnect wallet <Wallet2 size={15} />
              </span>
            </Button>
          ) : (
            <WalletSelector />
          )}
        </div>

        {/* Mobile menu button */}
        <Button className="aspect-square p-[10px] offsetstyle bg-white text-black generalBorder md:hidden hover:text-white">
          <Menu size={30} />
        </Button>
      </nav>
    </div>
  );
};

export default dynamic(() => Promise.resolve(NavbarMain), { ssr: false });
