

import { images } from '@/constants/images/images'
import Image from 'next/image'
import OnboardTabs from './OnboardTabs'





export default function OnboardWrapper() {

    return (
        <div className='md:py-[4%] py-[8%] px-[5%] flex md:flex-row flex-col justify-between md:items-center gap-[5%]'>
            <div className='md:w-[30%]'>
                <Image src={images.onboard} alt='onboard' height={400} width={400} className='md:flex hidden' />
                <Image src={images.onboardHorizontal} alt='onboard' height={400} width={400} className='md:hidden flex w-full' />
            </div>
            <OnboardTabs />
        </div>
    )
}
