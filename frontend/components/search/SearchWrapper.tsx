import React from 'react'
import { Input } from '../ui/input'
import { Button } from '../ui/button'
import ComputeCard from './cards/ComputeCard'

export default async function SearchWrapper() {
    const machines = await (await fetch("https://tappin-api.onrender.com/machine/all", {
        cache: 'no-store'
    })).json()

    return (
        <div className='px-[5%]'>
            <div className='w-full generalBorder offsetEffect bg-yellow-300'>
                <h2 className='text-3xl font-bold'>Available compute</h2>
                <span>Here is the compute you have to access from our providers</span>
            </div>
            <div className='py-4'>
                <div className='flex items-center gap-4'>
                    <Input className='generalTabsBorder offsetEffect w-[40%]' placeholder='search for compute' />
                    <Button className='generalTabsBorder offsetstyle bg-orange-800'>Filter</Button>
                </div>
            </div>
            <div className='grid grid-cols-4 gap-4'>
                {machines.map((machine: any, idx: any) => (
                    <ComputeCard key={idx} props={{ id: machine.id, title: machine.title, cpu: machine.cpu, ram: machine.ram, storage: machine.size, address: machine.user.address }} />
                ))}
            </div>
        </div>
    )
}
