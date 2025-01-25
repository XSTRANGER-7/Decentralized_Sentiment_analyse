import React from 'react'
import Image from 'next/image'
import { images } from '@/constants/images/images'
import { Button } from '../ui/button'
import Link from 'next/link'
import { ChevronRightCircle, Download } from 'lucide-react'

export default function RentHome() {
    return (
        <div className='py-[3%] px-[10%]'>
            <Image src={images.rentHome} height={600} width={1920} alt='provider home' />
            <div className='offsetEffect generalBorder my-4 flex flex-col gap-2 bg-green-400' style={{ backgroundImage: `url(${images.here})`, backgroundRepeat: "no-repeat", backgroundPosition: "90%", }}>
                <div className='flex flex-col '>
                    <h2 className='text-2xl font-bold '>Looking for the dashboard?</h2>
                    <span>Your console is here, with all deployments ready to go
                    </span>
                </div>
                <Button asChild className='offsetstyle w-fit flex items-center gap-2 bg-white generalBorder text-black hover:text-white '>
                    <Link href="/rent/dashboard">IT&apos;s here<ChevronRightCircle /></Link>
                </Button>
            </div>
            <div className='flex justify-between gap-2'>
                <div className='w-[50%]  bg-yellow-300 generalBorder offsetEffect flex flex-col gap-2' style={{ backgroundImage: `url(${images.designer})`, backgroundRepeat: "no-repeat", backgroundPosition: "90%", }}>
                    <h2 className='md:text-4xl font-bold'>Want that super compute for your heavy tasks?</h2>
                    <span >Rent a machine today from our providers and start your tasks with ease! Our providers are verified and always provide the best compute for all your tasks, with full commitment</span>
                </div>
                <div className='w-[50%] generalBorder offsetEffect bg-purple-900 flex items-center justify-center text-white font-bold text-3xl flex-col gap-2'>
                    <div className='flex flex-col justify-center items-center'>
                        <h2>Rent a machine today</h2>
                        <span className='md:text-xl font-medium opacity-80'><em>Start your journey here!</em></span>
                    </div>
                    <Link className='offsetstyle text-sm flex items-center gap-2 bg-white generalBorder text-black hover:text-white ' href="/search">Start here! </Link>
                </div>
            </div>
            {/* <div style={{ backgroundImage: `url(${images.daemon})`, backgroundRepeat: "no-repeat", backgroundPosition: "90%", }} className='w-full bg-pink-300 my-4 offsetEffect generalBorder flex flex-col gap-4 items-center justify-center'>
                <Download size={30} />
                <h2 className='text-3xl font-bold'>Download the TAppIN daemon now!</h2>
                <span className='text-center max-w-[50%]'>The TAppIN daemon allows your device to share your resources for the AI training. This daemon runs in background and allocates the required resources for the processes.</span>
                <Button className='offsetstyle flex items-center gap-2 bg-white generalBorder text-black hover:text-white '>Download Daemon<Download /></Button>
            </div> */}
        </div>
    )
}
