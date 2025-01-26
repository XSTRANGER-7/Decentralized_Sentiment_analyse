import Link from "next/link";
import React from "react";

export default function Footer() {
  return (
    <footer className="bg-gray-900 flex justify-between items-center text-white px-6 py-3 text-sm ">
      <div>
        <div className="flex gap-8 mt-1">
          <div className="text-gray-400 font-semibold">Quick Links</div>
          <Link href="/" className="hover:text-gray-300 transition">
            Home
          </Link>
          <Link href="/#faq" className="hover:text-gray-300 transition">
            FAQs
          </Link>
          <Link href="/provider" className="hover:text-gray-300 transition">
            Provider
          </Link>
          <Link href="/rent" className="hover:text-gray-300 transition">
            Renting
          </Link>
        </div>
      </div>
      <div className="text-lg font-semibold">DecnAIX</div>
    </footer>
  );
}
