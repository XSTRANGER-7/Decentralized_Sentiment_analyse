import Accordion from "@/components/common/Accordian";
import React from "react";

export default function HeaderFAQ() {
  return (
    <div
      className=" flex md:flex-row flex-col gap-16 px-6 sm:px-12 md:px-8 lg:px-20 xl:px-32 py-12  text-black"
      id="faq"
    >
      <div className="">
        <h2 className="text-4xl md:text-5xl font-extrabold text-center mb-8 tracking-wide">
          Frequently Asked Questions
        </h2>
        <p className="text-lg text-gray-400 text-center max-w-2xl mx-auto mb-6">
          Find answers to common questions about our services and offerings.
        </p>
      </div>

      <div className="flex flex-col gap-6 max-w-3xl mx-auto">
        <Accordion
          question="What we are building ?"
          answer="Our project is about Training AI model on decentralized Servers, connecting users to its required GPU contributors. Users can securely upload their training scripts, which are executed by GPU providers in exchange for compensation."
        />
        <Accordion
          question="Tech and Chain used?"
          answer="Our Decentralized AI Training Platform is built using Aptos blockchain for secure and efficient smart contract execution. 
    The frontend is developed using Next.js, providing a fast and seamless user experience, while Node.js powers the backend for handling API interactions and task management. 
    MongoDB is used for scalable and efficient data storage. 
    For secure and isolated AI model execution, we utilize Docker for containerization, ensuring smooth and efficient training processes. 
    The platform integrates Web3 functionalities for decentralized authentication and transactions, providing a secure and transparent ecosystem."
        />
        <Accordion
          question="How do I get started?"
          answer="Simply create an account, connect your wallet, and choose a provider that matches your compute requirements."
        />
      </div>
    </div>
  );
}
