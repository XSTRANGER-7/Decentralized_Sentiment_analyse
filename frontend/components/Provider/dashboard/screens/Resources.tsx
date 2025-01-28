"use client";
import { Button } from "@/components/ui/button";
import React, { useState } from "react";
import { twMerge } from "tailwind-merge";

const ram = ["4GB", "8GB", "16GB"];
const cores = ["2", "4", "8", "10", "12", "16"];

export default function Resources() {
  const [selectedRAM, setSelectedRAM] = useState(0);
  const [selectedCore, setSelectedCore] = useState(0);
  return (
    <div className="py-2">
      <h2 className="text-2xl font-bold">Earnings Calculator</h2>
      <span>check out how much you can potentially earn</span>
      <div className="">
        <div className="py-4">
          <span className="text-xs text-gray-600">Select RAM</span>
          <div>
            <div className="py-2 flex gap-2 flex-wrap">
              {ram.map((ele, idx) => {
                return (
                  <Button
                    className={twMerge(
                      selectedRAM === idx ? "bg-green-300 text-black" : "",
                      "generalTabsBorder"
                    )}
                    onClick={() => {
                      setSelectedRAM(idx);
                    }}
                    key={idx}
                  >
                    {ele}
                  </Button>
                );
              })}
            </div>
          </div>
        </div>

        <div className="py-2">
          <span className="text-xs text-gray-600">Select CPU cores</span>
          <div>
            <div className="py-2">

              <div className="w-48">
                <div className="py-2 grid grid-cols-3 gap-4">
                  {cores.map((ele, idx) => {
                    return (
                      <Button
                        className={twMerge(
                          selectedCore === idx
                            ? "bg-yellow-300 text-black"
                            : "",
                          "generalTabsBorder"
                        )}
                        onClick={() => {
                          setSelectedCore(idx);
                        }}
                        key={idx}
                      >
                        {ele}
                      </Button>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col">
        <h3 className="text-3xl font-medium">Potential Earnings</h3>
            <div className="py-2 flex flex-col  generalBorder my-2 w-fit bg-yellow-300">
          <span className="text-2xl font-semibold">
            {returnPrice(selectedCore, selectedRAM)[0]} USD ${" "}
            <span className="text-xs text-gray-500">/hr</span>
          </span>
          <span className="text-2xl font-semibold">
            {returnPrice(selectedCore, selectedRAM)[1]} SOL{" "}
            <span className="text-xs text-gray-500">/hr</span>
          </span>
        </div>
      </div>
    </div>
  );
}

function returnPrice(core: number, ram: number): string[] {
  // Base price for 2-core systems
  const basePrices = [
    ["0.0416", "0.000292"], // 4GB RAM
    ["0.0832", "0.000585"], // 8GB RAM
    ["0.126", "0.000886"], // 16GB RAM
  ];

  // Scaling factor for additional cores
  const coreMultiplier = [1, 1.2, 1.5, 2, 2.5, 3, 3.5]; // Adjust factors for better scaling

  // Get index based on selected cores (0 → 2 cores, 1 → 4 cores, etc.)
  let coreIndex = Math.min(core, coreMultiplier.length - 1);

  // Ensure RAM index is valid
  let ramIndex = Math.min(ram, basePrices.length - 1);

  // Calculate final prices dynamically
  const usdPrice = (
    parseFloat(basePrices[ramIndex][0]) * coreMultiplier[coreIndex]
  ).toFixed(4);
  const solPrice = (
    parseFloat(basePrices[ramIndex][1]) * coreMultiplier[coreIndex]
  ).toFixed(6);

  return [usdPrice, solPrice];
}
