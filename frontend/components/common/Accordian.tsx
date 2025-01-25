'use client'

import { ClassValue } from 'clsx'
import { ChevronDown } from 'lucide-react'

import { useEffect, useRef, useState } from 'react'

import { cn } from '@/lib/utils'

type Props = {
    className?: ClassValue
    question: string
    answer: string
}

export default function Accordion({ question, answer, className }: Props) {
    const [showContent, setShowContent] = useState(false)
    const [contentHeight, setContentHeight] = useState('0px')
    const contentRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        if (contentRef.current) {
            setContentHeight(`${contentRef.current.scrollHeight}px`)
        }
    }, [showContent])

    return (
        <div
            data-state={showContent ? 'open' : 'closed'}
            className="w-full group rounded-base border-2 border-black rounded-md offsetEffect"
        >
            <button
                role="button"
                aria-expanded={showContent}
                className={cn(
                    'flex w-full items-center text-text transition-[border-radius] justify-between border-b-0 group-data-[state=closed]:rounded-md group-data-[state=open]:rounded-t-md group-data-[state=open]:border-b-2 border-b-black bg-yellow-300 p-4 md:p-5 font-bold lg:text-xl',
                    className,
                )}
                onClick={() => {
                    setShowContent(!showContent)
                }}
            >
                {question}
                <ChevronDown className="sm:ml-4 ml-3 sm:min-h-[24px] sm:min-w-[24px] group-data-[state=open]:rotate-180 group-data-[state=closed]:0 min-h-[18px] min-w-[18px] transition-transform ease-in-out" />
            </button>
            <div
                ref={contentRef}
                style={{ height: showContent ? `${contentHeight}` : '0' }}
                className="overflow-hidden rounded-b-md  dark:bg-darkBg font-base transition-[height] ease-in-out"
            >
                <p className="p-4 md:p-5 text-sm md:text-base leading-relaxed md:leading-relaxed">
                    {answer}
                </p>
            </div>
        </div>
    )
}