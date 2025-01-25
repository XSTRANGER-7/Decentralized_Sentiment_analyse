import { Button } from '@/components/ui/button'
import Link from 'next/link'
import React from 'react'

export default function Machines() {
    return (
        <div className='flex flex-col '>
            <h2 className='text-xl font-bold'>Your machines</h2>
            <span>Here is a list of your machines</span>

            <Button className='w-fit offsetstyle generalBorder bg-red-200 text-black' asChild><Link href="/provider/add-machine">Add a machine</Link></Button>
            <div className='py-2 flex flex-col gap-2'>
                <div className='generalBorder offsetEffect bg-pink-200'>
                    <h1 className='text-lg font-medium'>tappin.diptanshu87</h1>

                    <div>
                        <span className='text-xs text-gray-500'>SPECS</span>
                        <div className='flex gap-2 flex-wrap font-medium'>
                            <div>
                                4GB RAM
                            </div>
                            <div>
                                2 cores
                            </div>
                            <div>
                                12hrs remaining
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
