import Link from 'next/link'
import React from 'react'

export default function Footer() {
    return (
        <footer className='bg-gray-900 flex justify-between items-center text-white px-[5%] py-[2%]'>
            <div>
                <div className='text-gray-500'>
                    Quick links
                </div>
                <div className='flex flex-col py-2'>
                    <Link href="/">Home</Link>
                    <Link href="/docs">Docs</Link>
                    <Link href="/#faq">FAQs</Link>

                    <Link href="/provider">Provider</Link>
                    <Link href="/rent">Renting</Link>
                </div>
            </div>
            <div className='text-2xl font-bold'>
                TAppIN
            </div>
        </footer>
    )
}
