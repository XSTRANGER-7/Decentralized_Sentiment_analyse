"use client";

import { WalletNotConnectedError } from "@solana/wallet-adapter-base";
import { useConnection, useWallet } from "@solana/wallet-adapter-react";
import { SystemProgram, Transaction, PublicKey } from "@solana/web3.js";
import React, { useCallback } from "react";
import { Button } from "../ui/button";

interface Props {
  lamps: number;
  toKey: string;
}
export default function SendSOL({ lamps, toKey }: Props) {
  const { connection } = useConnection();
  const { publicKey, sendTransaction } = useWallet();

  const onClick = useCallback(async () => {
    if (!publicKey) throw new WalletNotConnectedError();
    const lamports = lamps;

    const transaction = new Transaction().add(
      SystemProgram.transfer({
        fromPubkey: publicKey,
        toPubkey: new PublicKey(toKey),
        lamports,
      })
    );

    const {
      context: { slot: minContextSlot },
      value: { blockhash, lastValidBlockHeight },
    } = await connection.getLatestBlockhashAndContext();

    const signature = await sendTransaction(transaction, connection, {
      minContextSlot,
    });

    const paymentStatus = await connection.confirmTransaction({
      blockhash,
      lastValidBlockHeight,
      signature,
    });
    console.log(paymentStatus)
  }, [publicKey, sendTransaction, connection]);

  return (
    <Button
      className="generalBorder offsetEffect  bg-green-300 text-black hover:text-white"
      onClick={onClick}
      disabled={!publicKey}>
      Send SOL
    </Button>
  );
}
