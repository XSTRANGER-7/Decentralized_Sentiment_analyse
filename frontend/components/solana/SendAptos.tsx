// "use client";

// import { useWallet } from "@aptos-labs/wallet-adapter-react";
// import { TransactionBuilder, AptosClient, TxnBuilderTypes } from "aptos";
// import React, { useCallback } from "react";
// import { Button } from "../ui/button";

// interface Props {
//   amount: number;
//   toAddress: string;
// }

// export default function SendAptos({ amount, toAddress }: Props) {
//   const { account, signAndSubmitTransaction } = useWallet();

//   const onClick = useCallback(async () => {
//     if (!account) {
//       console.error("Wallet not connected");
//       return;
//     }

//     try {
//       const client = new AptosClient("https://fullnode.devnet.aptoslabs.com/v1"); // Use the correct Aptos node URL for your environment

//       const payload = new TransactionBuilder()
//         .transfer(amount, toAddress)
//         .build();

//       // The account will sign the transaction before sending it
//       const signature = await sendTransaction(payload);
//       console.log("Transaction sent: ", signature);
//     } catch (error) {
//       console.error("Error sending transaction: ", error);
//     }
//   }, [account, amount, toAddress, sendTransaction]);

//   return (
//     <Button
//       className="generalBorder bg-green-300 text-black hover:text-white"
//       onClick={onClick}
//       disabled={!account}
//     >
//       Send Aptos
//     </Button>
//   );
// }
