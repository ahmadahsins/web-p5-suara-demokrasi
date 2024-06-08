import React from 'react'
import { AnimatedTooltip } from './ui/animated-tooltip';
import { people } from '@/data';
import { PinContainer } from './ui/3d-pin';
import Image from 'next/image';

const Footer = () => {        
    return (
        <div className="flex flex-col items-center justify-center mt-10 lg:mt-36 w-full bg-black py-36 gap-8 bg-grid-small-white/[0.2] relative">
            {/* Radial gradient for the container to give a faded look */}
            <div className="absolute pointer-events-none inset-0 flex items-center justify-center bg-black [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>

            <div className="flex flex-col items-center justify-center gap-5 z-30">
                <h2 className="font-medium text-sm text-justify text-zinc-200">Website ini dibuat oleh:</h2>
                <div className='flex'>
                    <AnimatedTooltip items={people} />
                </div>
                <h2 className="font-medium text-sm text-justify text-zinc-200">Kelompok 3 Projek Kelas XI.A</h2>
            </div>
            <PinContainer
                title="sites.google.com/view/portofolio-kelompok3-xia"
                href="https://sites.google.com/view/portofolio-kelompok3-xia/home"
            >
                <div className="flex basis-full flex-col p-4 tracking-tight text-slate-100/50 sm:basis-1/2 w-[20rem] h-[20rem]">
                    <h3 className="max-w-xs !pb-2 !m-0 font-bold text-base text-neutral-900 dark:text-zinc-200">
                        Kunjungi Website Kami
                    </h3>
                    {/* <div className="text-base !m-0 !p-0 font-normal">
                        <span className="text-slate-500 ">
                        Customizable Tailwind CSS and Framer Motion Components.
                        </span>
                    </div> */}
                    <Image src="/web-kelompok.png" width={300} height={300} alt='Website Kami' className='w-full h-56 object-cover rounded-md border border-black dark:border-white' />
                </div>
            </PinContainer>
        </div>
    );
}

export default Footer
