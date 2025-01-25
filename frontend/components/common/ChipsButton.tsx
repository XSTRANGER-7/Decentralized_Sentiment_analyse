import React from 'react'
import { Button } from '../ui/button';
import { twMerge } from 'tailwind-merge';

interface Props {
    content: string;
    active?: boolean;
    onClick: () => void
}
export default function ChipsButton({ content, active, onClick }: Props) {
    return (
        <Button onClick={onClick} className={twMerge(active === true ? "bg-yellow-400" : "bg-white", 'offsetstyle  flex  items-center gap-2  generalTabsBorder text-black hover:text-white ')}>{content}</Button>
    )
}
