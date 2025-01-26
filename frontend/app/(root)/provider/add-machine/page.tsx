"use client";

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { images } from '@/constants/images/images';
import Image from 'next/image';
import React, { useState, ChangeEvent, FormEvent } from 'react';

interface FormData {
    cpuCores: string;
    ram: string;
    storage: string;
    rentalTime: string;
}

export default function Page() {
    const [formData, setFormData] = useState<FormData>({
        cpuCores: '',
        ram: '',
        storage: '',
        rentalTime: ''
    });

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        try {
            const response = await fetch('/api/add-machine', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
            });
            if (!response.ok) {
                throw new Error('Failed to submit form');
            }
            alert('Request added successfully');
            setFormData({ cpuCores: '', ram: '', storage: '', rentalTime: '' });
        } catch (error) {
            console.error('Error:', error);
            alert('Error submitting request');
        }
    };

    return (
        <div className='px-[5%] py-[3%] flex justify-between'>
            <form onSubmit={handleSubmit} className='w-[50%] py-2 flex flex-col gap-2'>
                <h1 className='text-lg font-semibold'>Add a new machine</h1>
                <div className='flex flex-col gap-1 py-2'>
                    <span>Enter CPU cores, you have</span>
                    <Input name='cpuCores' value={formData.cpuCores} onChange={handleChange} className='offsetstyle generalTabsBorder bg-white' placeholder='2, 4, 8 GB' />
                </div>
                <div className='flex flex-col gap-1 py-2'>
                    <span>Enter amount of RAM, you have</span>
                    <Input name='ram' value={formData.ram} onChange={handleChange} className='offsetstyle generalTabsBorder bg-white' placeholder='4, 8, 16 GB' />
                </div>
                <div className='flex flex-col gap-1 py-2'>
                    <span>Enter amount of space, you have</span>
                    <Input name='storage' value={formData.storage} onChange={handleChange} className='offsetstyle generalTabsBorder bg-white' placeholder='512GB, 1TB' />
                </div>
                <div className='flex flex-col gap-1 py-2'>
                    <span>Enter amount of time, you want to rent it out for</span>
                    <Input name='rentalTime' value={formData.rentalTime} onChange={handleChange} className='offsetstyle generalTabsBorder bg-white' placeholder='12hrs' />
                </div>
                <Button type='submit' className='offsetstyle generalBorder bg-green-300 text-black hover:text-white'>Add request</Button>
            </form>
            <div>
                <Image src={images.machineAdd} height={400} width={600} alt='machine add' className='' />
            </div>
        </div>
    );
}
