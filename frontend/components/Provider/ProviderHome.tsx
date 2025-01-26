import { images } from "@/constants/images/images";
import Image from "next/image";
import React from "react";
import { Button } from "../ui/button";
import { ArrowRightIcon, ChevronRightCircle, Download } from "lucide-react";
import Link from "next/link";

export default function ProviderHome() {
  return (
    <div className="py-[3%] px-[10%] h-full w-full">
      {/* <Image src={images.providerHome} height={600} width={1920} alt='provider home' /> */}
      <div className="md:h-60 flex items-center justify-center">
        <h1
          className="text-8xl"
          style={{ fontFamily: "Varela Round, sans-serif" }}
        >
          Empower the Future!
        </h1>
      </div>
      <div
        className=" generalBorder my-4 flex justify-between gap-2 bg-teal-200"
        // style={{
        //   backgroundImage: `url(${images.here})`,
        //   backgroundRepeat: "no-repeat",
        //   backgroundPosition: "90%",
        // }}
      >
        <div className="flex flex-col ">
          <h2 className="text-2xl font-bold ">Looking for the dashboard?</h2>
          <span>
            All your resource sharing, earnings and everything of you being a
            provider is here !
          </span>
        </div>
        <Button
          asChild
          className=" flex items-center gap-1 bg-white generalBorder text-black hover:text-white "
        >
          <Link href="/provider/dashboard">
            IT&apos;s here
            <ArrowRightIcon/>
          </Link>
        </Button>
      </div>
      <div className="flex justify-between gap-2">
        <div
          className="w-[50%]  bg-blue-300 generalBorder  flex flex-col gap-2"
        //   style={{
        //     backgroundImage: `url(${images.designer})`,
        //     backgroundRepeat: "no-repeat",
        //     backgroundPosition: "90%",
        //   }}
        >
          <h2 className="md:text-4xl font-bold">
            Become a Contributor today and start earning!
          </h2>
          <span>
            Rent out your machines for training AI models and start earning for
            those hours. Your machine will be used only when you want it to be
          </span>
        </div>
        <div className="w-[50%] generalBorder bg-cyan-400 flex items-center justify-center text-white font-bold text-3xl flex-col gap-2">
          <div className="flex flex-col justify-center items-center">
            <h2>Become a Contributor today.</h2>
            <span className="md:text-xl font-medium opacity-80">
              <em>Start your journey here!</em>
            </span>
          </div>
          <Button className=" flex items-center gap-2 bg-white generalBorder text-black hover:text-white ">
            Start here! <ArrowRightIcon/> 
          </Button>
        </div>
      </div>
      {/* <div style={{ backgroundImage: `url(${images.daemon})`, backgroundRepeat: "no-repeat", backgroundPosition: "90%", }} className='w-full bg-yellow-300 my-4 offsetEffect generalBorder flex flex-col gap-4 items-center justify-center'>
                <Download size={30} />
                <h2 className='text-3xl font-bold'>Download the TAppIN provider script</h2>
                <span className='text-center max-w-[50%]'>The TAppIN daemon allows your device to share your resources for the AI training. This daemon runs in background and allocates the required resources for the processes.</span>
                <Button className='offsetstyle bg-white generalBorder text-black hover:text-white '><a className=' flex items-center gap-2' href="/src/provider.py">Download script<Download /></a></Button>
            </div> */}
    </div>
  );
}
