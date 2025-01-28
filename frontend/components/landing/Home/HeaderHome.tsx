import { Button } from "@/components/ui/button";
import { images } from "@/constants/images/images";
import { ChevronRightCircle, Circle } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function HeaderHome() {
  return (
    <div className="px-[5%] md:py-[5%] py-[10%] justify-between flex flex-col items-center gap-2">
      <div className="w-full flex-col">
        <div className="w-full">
          <div className="w-full">
            <div className=" grid-cols-1 text-center px-[2%] py-[5%] bg-teal-100 flex flex-col items-center">
              <div className="w-full px-[2%] py-[5%] bg-teal-100 flex flex-col items-center text-center">
                <h1 className="text-5xl font-bold">
                  Revolutionize Computing With
                </h1>
                <h1 className="text-5xl font-bold">Decentralized Edge</h1>
                <p className="italic text-lg mt-2">
                  Leveraging decentralized GPU power to train your AI models,
                  ensuring data privacy and security.
                </p>
              </div>
            </div>
          </div>

          <div className="flex md:flex-row flex-col gap-3 py-6">
            <div className="generalBorder bg-yellow-400 ">
              <Link href="/provider">
                <h1 className="text-2xl font-black">Become a provider</h1>
                <span>
                  Having some resources? some idle computers, some RAM, some
                  GPU? then join our network and start earning by renting out
                  your resources
                </span>
              </Link>
            </div>
            <div className="generalBorder bg-blue-300">
              <Link href="/rent">
                <h1 className="text-2xl font-black">Rent a device</h1>
                <span>
                  Want to render something? or compile ? you don&apos;t have
                  enough compute? You are at the correct place, get your
                  resources here from our providers
                </span>
              </Link>
            </div>
            <div className="generalBorder bg-orange-400 ">
              <h1 className="text-2xl font-black">Wanna know more?</h1>
              <span>
                Contact our experts, and know your requirements. This could be
                the start of something epic. We are always happy to help and
                guide our customers on their needs. Feel free to hop in! Our
                team will guide you in every step.
              </span>
            </div>
          </div>
        </div>

        {/* <div className="px-[2%] py-4 flex-col justify-between items-center  gap-[2%]"> */}
        {/* <div className="flex flex-wrap md:w-[60%]   gap-[2%]">
          <Button className="bg-orange-700  rounded-md border border-black">
            Become a Provider
          </Button>
          <Button className="bg-green-900 rounded-md border border-black">
            Rent a machine
          </Button>
          <Button className="bg-blue-900  rounded-md border border-black">
            Having issues? contact support
          </Button>
        </div> */}
        {/* <Link href="/" className="underline ">
            Check out our FAQs
          </Link> */}
        {/* </div> */}
      </div>
    </div>
  );
}
