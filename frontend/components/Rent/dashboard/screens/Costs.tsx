"use client"
import { Button } from '@/components/ui/button';
import React, { useState } from 'react'
import { twMerge } from 'tailwind-merge';


const ram = ["4GB", "8GB", "16GB"];
const cores = ["2", "4", "8"];
export default function Costs() {
    const [selectedRAM, setSelectedRAM] = useState(0);
    const [selectedCore, setSelectedCore] = useState(0);
    return (
        <div className='py-2'>
            <h2 className='text-2xl font-bold'>Costs Calculator</h2>
            <span>check out how much you will be charged for usage</span>

            <div className='py-4'>
                <span className='text-xs text-gray-600'>Select RAM</span>
                <div>
                    <div className='py-2 flex gap-2 flex-wrap'>
                        {ram.map((ele, idx) => {
                            return <Button className={twMerge(selectedRAM === idx ? "bg-blue-300 text-black" : "", "offsetstyle generalTabsBorder")} onClick={() => {
                                setSelectedRAM(idx)
                            }} key={idx}>{ele}</Button>
                        })}
                    </div>
                </div>
            </div>

            <div className='py-2'>
                <span className='text-xs text-gray-600'>Select CPU cores</span>
                <div>
                    <div className='py-2 flex gap-2 flex-wrap'>
                        {cores.map((ele, idx) => {
                            return <Button className={twMerge(selectedCore === idx ? "bg-pink-300 text-black" : "", "offsetstyle generalTabsBorder")} onClick={() => {
                                setSelectedCore(idx)
                            }} key={idx}>{ele}</Button>
                        })}
                    </div>
                </div>

            </div>
            <div>
                <h2>Expected costs</h2>
                <span className='text-2xl font-bold'>
                    {returnPrice(selectedCore, selectedRAM)[0]}USD /hr or   {returnPrice(selectedCore, selectedRAM)[1]} SOL/hr
                </span>
            </div>
        </div>
    )
}


function returnPrice(core: number, ram: number): string[] {
    if (core === 0) {
        switch (ram) {
            case 0:
                return ["0.0416", "0.000292"]
            case 1:
                return ["0.0832", "0.00585"]
            case 2:
                return ["0.126", "0.000886"]

            default:
                break;
        }
    } else if (core == 1) {
        switch (ram) {
            case 0:
                return ["0.05", "0.000351"]
            case 1:
                return ["0.09", "0.000633"]
            case 2:
                return ["0.136", "0.000956"]

            default:
                break;
        }
    } else {
        switch (ram) {
            case 0:
                return ["0.1", "0.000703"]
            case 1:
                return ["0.2", "0.001406"]
            case 2:
                return ["0.272", "0.001912"]

            default:
                break;
        }
    }
    return [""]
}