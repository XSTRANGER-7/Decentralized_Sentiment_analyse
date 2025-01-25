import ChipsButton from '@/components/common/ChipsButton'
import { Button } from '@/components/ui/button'
import Link from 'next/link';
import React, { useState } from 'react'

interface Props {
    onChange: (tab: number) => void;
    activeIdx: number;
}
export default function RentTabs({ onChange, activeIdx }: Props) {
    const [activeIndex, setActiveIndex] = useState(activeIdx);
    return (
        <div className='flex items-center gap-4 py-2'>
            <ChipsButton content='Deployments' onClick={() => {
                onChange(0);
                setActiveIndex(0)
            }} active={activeIndex === 0 ? true : false} />
            <ChipsButton content='Cost Calculator' onClick={() => {
                onChange(1)
                setActiveIndex(1)
            }} active={activeIndex === 1 ? true : false} />
            <ChipsButton content='Transactions' onClick={() => {
                onChange(2)
                setActiveIndex(2)
            }} active={activeIndex === 2 ? true : false} />
            <Link className='offsetstyle bg-white p-2 border border-black rounded-md' href="/search">All machines</Link>
            {/* <ChipsButton content='Wallet' onClick={() => {
                onChange(3)
                setActiveIndex(3)
            }} active={activeIndex === 3 ? true : false} />
            <ChipsButton content='Earnings' onClick={() => {
                onChange(4)
                setActiveIndex(4)
            }} active={activeIndex === 4 ? true : false} />
            <ChipsButton content='Transactions' onClick={() => {
                onChange(5)
                setActiveIndex(5)
            }} active={activeIndex === 5 ? true : false} /> */}
        </div>
    )
}
