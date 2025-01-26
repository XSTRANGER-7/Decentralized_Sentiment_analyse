"use client"; // Add this line to mark this file as a Client Component

import React, { useEffect, useState } from "react";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import ComputeCard from "./cards/ComputeCard";

export default function SearchWrapper() {
  const [machines, setMachines] = useState<any[]>([
    {
      id: "1", // Ensure it's a string
      title: "Machine 1",
      cpu: "4 CPU",
      ram: 8,
      size: 500,
      user: { address: "0x123" },
    },
    {
      id: "2", // Ensure it's a string
      title: "Machine 2",
      cpu: "8 CPU",
      ram: 16,
      size: 1000,
      user: { address: "0x456" },
    },
    {
        id: "3", // Ensure it's a string
        title: "Machine 3",
        cpu: "8 CPU",
        ram: 12,
        size: 1000,
        user: { address: "0x456" },
      },
      {
        id: "4", // Ensure it's a string
        title: "Machine 4",
        cpu: "6 CPU",
        ram: 16,
        size: 1000,
        user: { address: "0x456" },
      },
  ]);
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    // const fetchMachines = async () => {
    //   const response = await fetch(
    //     "https://tappin-api.onrender.com/machine/all",
    //     {
    //       cache: "no-store",
    //     }
    //   );
    //   const data = await response.json();
    //   setMachines((prevMachines) => [
    //     ...prevMachines,
    //     ...data.map((machine: any) => ({
    //       ...machine,
    //       id: String(machine.id), // Convert id to string
    //     })),
    //   ]);
    //   setLoading(false);
    // };
    // fetchMachines();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="px-[5%]">
      <div className="py-4 w-full flex justify-center items-center">
        <div className="flex-col justify-center items-center text-center">
          <h2 className="text-3xl font-bold">Available compute</h2>
          <span>Here is the compute you have to access from our providers</span>
        </div>
      </div>

      <div className="w-full py-4 flex justify-center items-center">
        <div className="w-full flex items-center gap-4 justify-center">
          <Input
            className="generalTabsBorder offsetEffect w-[40%]"
            placeholder="search for compute"
          />
          <Button className="generalTabsBorder offsetstyle bg-orange-800">
            Filter
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-4 gap-4 mt-6">
        {machines.length > 0 ? (
          machines.map((machine: any) => (
            <ComputeCard
              key={String(machine.id)} // Ensure key is string
              id={String(machine.id)} // Ensure id is string
              title={machine.title}
              cpu={machine.cpu}
              ram={machine.ram}
              storage={machine.size}
              address={machine.user.address}
            />
          ))
        ) : (
          <div>No machines available</div>
        )}
      </div>
    </div>
  );
}
