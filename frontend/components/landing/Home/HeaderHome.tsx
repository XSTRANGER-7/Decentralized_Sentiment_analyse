
import { Button } from '@/components/ui/button'
import { images } from '@/constants/images/images'
import { ChevronRightCircle, Circle } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function HeaderHome() {
    return (
        <div className='px-[5%] md:py-[5%] py-[10%] justify-between flex flex-col items-center gap-2'>
            <div className='border-2 border-black  w-full rounded-lg offsetstyle'>
                <div className='border-b border-black px-[2%] py-1 flex  justify-between items-center'>

                    <div className='flex gap-2'>

                        <Circle size={18} fill='red' />
                        <Circle size={18} fill="yellow" />
                        <Circle size={18} fill="green" />
                    </div>
                    <div className='font-semibold '>
                        TAppIn
                    </div>
                </div>

                <div className='px-[2%] py-[5%] flex md:flex-row flex-col justify-between md:items-center bg-teal-150 border-b border-black md:h-[90px]'>
                    <div>
                        <h1 className='lg:text-6xl md:text-4xl text-2xl font-bold '>

                            Welcome to TAppIN!™</h1>
                        <span className='font-medium
                        '>Decentralized AI training powered by resource-driven computing and secure data sharing.</span>
                    </div>
                    <Image src={images['log-black']} alt='logo' height={90} width={90} className='md:h-[90px] h-[40px] aspect-square md:flex hidden' />
                </div>


                <div className='px-[2%] py-4'>
                    <div className='flex items-center justify-between gap-4'>
                        <div className='flex'>
                            <Image src={images.hands} alt='hands' height={150} width={150} className='md:h-[150px] h-[70px] aspect-square' />
                            <Image src={images.flowers} alt='hands' height={150} width={150} className='md:h-[150px] h-[70px] aspect-square' />
                        </div>

                        <div className='lg:text-5xl md:text-3xl text-xl font-bold'>TAppIN</div>
                        <div className='flex'>
                            <Image src={images.tape} alt='hands' height={150} width={150} className='md:h-[150px] h-[70px] aspect-square' />
                            <Image src={images.exc} alt='hands' height={150} width={150} className='md:h-[150px] h-[70px] aspect-square' />
                        </div>
                    </div>
                    <div className='flex md:flex-row flex-col gap-3 py-6'>
                        <div className='generalBorder bg-yellow-400 md:w-[30%] offsetEffect'>
                            <h1 className='text-2xl font-black'>Become a provider</h1>
                            <span>Having some resources? some idle computers, some RAM, some GPU? then join our network and start earning by renting out your resources</span>
                        </div>
                        <div className='generalBorder bg-blue-300 offsetEffect md:w-[30%]'>
                            <h1 className='text-2xl font-black'>Rent a device</h1>
                            <span>Want to render something? or compile ? you don&apos;t have enough compute? You are at the correct place, get your resources here from our providers</span>
                        </div>
                        <div className='generalBorder md:w-[55%] bg-orange-400 offsetEffect '>
                            <h1 className='text-2xl font-black'>Wanna know more?</h1>
                            <span>Contact our experts, and know your requirements. This could be the start of something epic. We are always happy to help and guide our customers on their needs. Feel free to hop in! Our team will guide you in every step.</span>
                        </div>
                    </div>
                </div>

                <div className='px-[2%] border-t border-black py-4 flex justify-between items-center  gap-[2%]'>
                    <div className='flex flex-wrap md:w-[60%]   gap-[2%]'>
                        <Button className='bg-orange-700 offsetstyle rounded-md border border-black'>Become a Provider</Button>
                        <Button className='bg-green-900 offsetstyle rounded-md border border-black'>Rent a machine</Button>
                        <Button className='bg-blue-900 offsetstyle rounded-md border border-black'>Having issues? contact support</Button>
                    </div>
                    <Link href="/" className='underline '>Check out our FAQs</Link>
                </div>

            </div>

        </div>
    )
}
