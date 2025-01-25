import { images } from '@/constants/images/images'
import Image from 'next/image'
import React from 'react'
import { Button } from '../ui/button'
import { ChevronRightCircle, Download } from 'lucide-react'
import Link from 'next/link'

export default function ProviderHome() {
    return (
        <div className='py-[3%] px-[10%]'>
            <Image src={images.providerHome} height={600} width={1920} alt='provider home' />
            <div className='offsetEffect generalBorder my-4 flex flex-col gap-2 bg-pink-400' style={{ backgroundImage: `url(${images.here})`, backgroundRepeat: "no-repeat", backgroundPosition: "90%", }}>
                <div className='flex flex-col '>
                    <h2 className='text-2xl font-bold '>Looking for the dashboard?</h2>
                    <span>All your resource sharing, earnings and everything of you being a provider is here
                        !
                    </span>
                </div>
                <Button asChild className='offsetstyle w-fit flex items-center gap-2 bg-white generalBorder text-black hover:text-white '>
                    <Link href="/provider/dashboard">IT&apos;s here<ChevronRightCircle /></Link>
                </Button>
            </div>
            <div className='flex justify-between gap-2'>
                <div className='w-[50%]  bg-blue-300 generalBorder offsetEffect flex flex-col gap-2' style={{ backgroundImage: `url(${images.designer})`, backgroundRepeat: "no-repeat", backgroundPosition: "90%", }}>
                    <h2 className='md:text-4xl font-bold'>Become a TAppIN provider today and start earning!</h2>
                    <span >Rent out your machines for training AI models and start earning for those hours. Your machine will be used only when you want it to be</span>
                </div>
                <div className='w-[50%] generalBorder offsetEffect bg-blue-900 flex items-center justify-center text-white font-bold text-3xl flex-col gap-2'>
                    <div className='flex flex-col justify-center items-center'>
                        <h2>Become a provider today.</h2>
                        <span className='md:text-xl font-medium opacity-80'><em>Start your journey here!</em></span>
                    </div>
                    <Button className='offsetstyle flex items-center gap-2 bg-white generalBorder text-black hover:text-white '>Start here! <ChevronRightCircle /></Button>
                </div>
            </div>
            <div style={{ backgroundImage: `url(${images.daemon})`, backgroundRepeat: "no-repeat", backgroundPosition: "90%", }} className='w-full bg-yellow-300 my-4 offsetEffect generalBorder flex flex-col gap-4 items-center justify-center'>
                <Download size={30} />
                <h2 className='text-3xl font-bold'>Download the TAppIN provider script</h2>
                <span className='text-center max-w-[50%]'>The TAppIN daemon allows your device to share your resources for the AI training. This daemon runs in background and allocates the required resources for the processes.</span>
                <Button className='offsetstyle bg-white generalBorder text-black hover:text-white '><a className=' flex items-center gap-2' href="/src/provider.py">Download script<Download /></a></Button>
            </div>
        </div>
    )
}
