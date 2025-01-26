"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { images } from "@/constants/images/images";
import axios from "axios";
import Image from "next/image";
import React, { useState, ChangeEvent, FormEvent } from "react";

interface FormData {
  cpuCores: string;
  ram: string;
  storage: string;
  rentalTime: string;
}

export default function Page() {
  const [formData, setFormData] = useState<FormData>({
    cpuCores: "",
    ram: "",
    storage: "",
    rentalTime: "",
  });

  const formSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const res = await axios.post("http://localhost:4000/machines/create", {
      title: e.currentTarget.title.value,
      ram: e.currentTarget.ram.value,
      size: e.currentTarget.size.value,
      time: e.currentTarget.time.value,
      email : localStorage.getItem('user')
    });

    if (res.status === 201) {
      alert("Machine added successfully");
    }
  };

  return (
    <div className="px-[5%] py-[3%] flex justify-between">
      <form onSubmit={formSubmit} className="w-[50%] py-2 flex flex-col gap-2">
        <h1 className="text-lg font-semibold">Add a new machine</h1>
        <div className="flex flex-col gap-1 py-2">
          <span>Enter CPU cores, you have</span>
          <Input
            name="title"
            className="offsetstyle generalTabsBorder bg-white"
            placeholder="2, 4, 8 GB"
          />
        </div>
        <div className="flex flex-col gap-1 py-2">
          <span>Enter amount of RAM, you have</span>
          <Input
            name="ram"
            className="offsetstyle generalTabsBorder  bg-white"
            placeholder="4, 8, 16 GB"
          />
        </div>
        <div className="flex flex-col gap-1 py-2">
          <span>Enter amount of space, you have</span>
          <Input
            name="size"
            className="offsetstyle generalTabsBorder  bg-white"
            placeholder="512GB, 1TB"
          />
        </div>
        <div className="flex flex-col gap-1 py-2">
          <span>Enter amount of time, you want to rent it out for</span>
          <Input
            name="time"
            className="offsetstyle generalTabsBorder  bg-white"
            placeholder="12hrs"
          />
        </div>
        <Button className="offsetstyle generalBorder bg-green-300 text-black hover:text-white">
          Add request
        </Button>
      </form>
      <div>
        <Image
          src={images.machineAdd}
          height={400}
          width={600}
          alt="machine add"
          className=""
        />
      </div>
    </div>
  );
}
