import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { images } from '@/constants/images/images'
import Image from 'next/image'
import React from 'react'

export default function page() {
    return (
        <div className='px-[5%] py-[3%] flex justify-between'>
            <form action="" className='w-[50%] py-2 flex flex-col gap-2'>
                <h1 className='text-lg font-semibold'>Add a new machine</h1>
                <div className='flex flex-col gap-1 py-2'>
                    <span>Enter CPU cores, you have</span>
                    <Input className='offsetstyle generalTabsBorder bg-white' placeholder='2, 4, 8 GB' />
                </div>
                <div className='flex flex-col gap-1 py-2'>
                    <span>Enter amount of RAM, you have</span>
                    <Input className='offsetstyle generalTabsBorder  bg-white' placeholder='4, 8, 16 GB' />
                </div>
                <div className='flex flex-col gap-1 py-2'>
                    <span>Enter amount of space, you have</span>
                    <Input className='offsetstyle generalTabsBorder  bg-white' placeholder='512GB, 1TB' />
                </div>
                <div className='flex flex-col gap-1 py-2'>
                    <span>Enter amount of time, you want to rent it out for</span>
                    <Input className='offsetstyle generalTabsBorder  bg-white' placeholder='12hrs' />
                </div>
                <Button className='offsetstyle generalBorder bg-green-300 text-black hover:text-white'>Add request</Button>
            </form>
            <div>
                <Image src={images.machineAdd} height={400} width={600} alt='machine add' className='' />
            </div>
        </div>
    )
}
