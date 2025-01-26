import React, { useState } from "react";
import { AptosClient } from "aptos";
import { Button } from "@/components/ui/button"; // Replace with your own Button component

// Initialize Aptos Client
const aptosClient = new AptosClient("https://fullnode.devnet.aptoslabs.com/v1"); // You can change the endpoint to mainnet or testnet

// Transaction display structure
interface Transaction {
  from: string;
  to: string;
  amount: number;
  timestamp: string;
}

export default function Transactions() {
  const [transactions, setTransactions] = useState<Transaction[]>([]);

  // Function to simulate fetching transactions
  const fetchTransactions = async () => {
    try {
      // Uncomment the following to fetch real transactions from Aptos (when live)
      // const clientAddress = "your-client-wallet-address"; // Replace with actual client address
      // const systemAddress = "your-system-wallet-address"; // Replace with actual system address

      // Simulate fetching transactions (use dummy data for now)
      const dummyTransactions: Transaction[] = [
        {
          from: "0xb5d277018f46c7b4f3b4b2a9786b362adf411a42ec841267a8f02299e4b04875",
          to: "0xc2f32af30e54e817084bca048745e030c698357694fa4777e6697fb1f99cc5e8",
          amount: 0.5,
          timestamp: new Date().toISOString(),
        },
        {
          from: "0xb5d277018f46c7b4f3b4b2a9786b362adf411a42ec841267a8f02299e4b04875",
          to: "0xc2f32af30e54e817084bca048745e030c698357694fa4777e6697fb1f99cc5e8",
          amount: 0.3,
          timestamp: new Date().toISOString(),
        },
        {
          from: "0xb5d277018f46c7b4f3b4b2a9786b362adf411a42ec841267a8f02299e4b04875",
          to: "0xc2f32af30e54e817084bca048745e030c698357694fa4777e6697fb1f99cc5e8",
          amount: 1.2,
          timestamp: new Date().toISOString(),
        },
        {
          from: "0xb5d277018f46c7b4f3b4b2a9786b362adf411a42ec841267a8f02299e4b04875",
          to: "0xc2f32af30e54e817084bca048745e030c698357694fa4777e6697fb1f99cc5e8",
          amount: 0.8,
          timestamp: new Date().toISOString(),
        },
      ];

      // Set dummy transactions to state
      setTransactions(dummyTransactions);
    } catch (error) {
      console.error("Error fetching transactions:", error);
    }
  };

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold">Transaction Ledger</h2>

      {transactions.length === 0 ? (
        <p>No transactions available</p>
      ) : (
        <div className="mt-4">
          <h3 className="text-xl font-semibold">Client to System / System to Client Transactions</h3>
          <table className="min-w-full bg-gray-800 text-white mt-4">
            <thead>
              <tr>
                <th className="p-2">From</th>
                <th className="p-2">To</th>
                <th className="p-2">Amount (APT)</th>
                <th className="p-2">Timestamp</th>
              </tr>
            </thead>
            <tbody>
              {transactions.map((txn, index) => (
                <tr key={index} className="border-t border-gray-600">
                  <td className="p-2">{txn.from}</td>
                  <td className="p-2">{txn.to}</td>
                  <td className="p-2">{txn.amount}</td>
                  <td className="p-2">{new Date(txn.timestamp).toLocaleString()}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      <Button onClick={fetchTransactions} variant="outline" className="mt-4">
        Refresh Transactions
      </Button>
    </div>
  );
}
