'use client';

import Image from 'next/image';
import { TracingBeam } from './ui/tracing-beam';
import { content } from '@/data';
// 
const Content = () => {
  return (
    <div className="max-w-5xl w-full dark:bg-black bg-white dark:bg-dot-white/[0.25] bg-dot-black/[0.25] relative flex flex-col items-center justify-center pt-10 lg:pt-16 gap-5 lg:gap-10">
      <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
      <div className='max-w-3xl px-5 z-30'>
         <h1 className='text-xl md:text-2xl lg:text-3xl font-bold mb-4 text-neutral-900 dark:text-zinc-200'>Cara Menyampaikan Aspirasi dengan Etika yang Benar</h1>
         <p className='font-medium text-sm text-justify text-neutral-900 dark:text-zinc-200'>
         Menyampaikan aspirasi adalah hak setiap individu. Namun, agar aspirasi tersebut dapat diterima dengan baik dan memberikan dampak positif, penting untuk menyampaikannya dengan etika yang baik. Berikut adalah cara-cara menyampaikan aspirasi dengan etika yang baik:
         </p>
      </div>
      <div className='flex items-center justify-center'>
      <TracingBeam className="px-6">
      <div className="max-w-2xl mx-auto antialiased pt-4 relative">
        {content.map((item, index) => (
          <div key={`content-${index}`} className="mb-10">
            <h2 className={"text-lg lg:text-2xl font-bold ml-3 mb-4 text-neutral-900 dark:text-zinc-200"}>
              {item.title}
            </h2>

            <div className="prose prose-sm dark:prose-invert px-5">
              {item?.image && (
                <Image
                  src={item.image}
                  alt="blog thumbnail"
                  height="1000"
                  width="1000"
                  className="rounded-lg mb-10 object-cover"
                />
              )}
              <p className='font-medium text-sm text-justify text-neutral-900 dark:text-zinc-200'>
                {item.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </TracingBeam>
      </div>
    </div>  
    )
}

export default Content