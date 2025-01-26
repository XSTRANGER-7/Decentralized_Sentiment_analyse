"use client"; // Add this line to mark this file as a Client Component

import React, { useEffect, useState } from "react";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import ComputeCard from "./cards/ComputeCard";
import axios from "axios";
export default function SearchWrapper() {
  const [machines, setMachines] = useState<any[]>();
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    const fetchMachines = async () => {
      try {
        const response = await axios.get("http://localhost:4000/machines/all");
        const data = response.data;
  
        setMachines(data.map((machine: any) => ({
          ...machine,
          id: String(machine.id), // Convert id to string
        })));
      } catch (error) {
        console.error("Error fetching machines:", error);
      } finally {
        setLoading(false);
      }
    };
  
    fetchMachines();
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
      {machines?.map((machine: any, idx: any) => (
                    <ComputeCard key={idx}  machine={machine}
                    />
                ))}
      </div>
    </div>
  );
}
