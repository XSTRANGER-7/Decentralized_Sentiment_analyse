import React from 'react'

export default function Status() {
    return (
        <div className='py-2'>
            <h2 className='text-2xl font-semibold'>Daemon status</h2>
            <div className='bg-green-200 generalBorder offsetEffect'>
                RUNNING
            </div>
            <span className='my-2 text-xs'>last updated 20 secs ago</span>
        </div>
    )
}
