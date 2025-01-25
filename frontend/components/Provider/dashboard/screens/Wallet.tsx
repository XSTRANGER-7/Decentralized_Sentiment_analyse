import SendSOL from '@/components/solana/SendSOL'
import React from 'react'

export default function Wallet() {
    return (
        <div className='py-2'>
            <div className='flex flex-col py-2'>
                <h2 className='text-2xl font-bold text-gray-800 '>Wallet</h2>
                <span className='text-sm text-gray-700'>Manage your wallet here</span>
            </div>
            <div className='generalBorder offsetEffect bg-blue-200'>
                <h2>Send Solana </h2>
                <SendSOL lamps={200} toKey="AJ59PfYxyeZsxX8h6a2SEsJPC5Rie2HHLkq2vdx5Muk1" />
            </div>
        </div>
    )
}
