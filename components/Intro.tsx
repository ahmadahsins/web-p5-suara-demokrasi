import React from 'react'
import { CardBody, CardContainer, CardItem } from './ui/3d-card'
import Image from 'next/image'
import { Vortex } from './ui/vortex'

const Intro = () => {
  return (
    <div className="h-screen w-full bg-black relative flex flex-col items-center justify-center">
      {/* Radial gradient for the container to give a faded look */}
      <Vortex
            backgroundColor="black"
            rangeY={800}
            particleCount={100}
            baseHue={180}
            className="flex items-center flex-col justify-center px-2 md:px-10 py-4 w-full h-full"
            >
        <CardContainer className="inter-var">
          <CardBody className="relative group/card hover:shadow-2xl hover:shadow-violet-500/[0.3] bg-white dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-full max-w-80 md:max-w-lg h-auto rounded-xl p-6 lg:p-10 border">
            <CardItem
              translateZ="50"
              className="text-lg lg:text-2xl font-bold text-neutral-900 dark:text-zinc-200"
            >
              Apa itu Aspirasi?
            </CardItem>
            <CardItem translateZ="100" className="w-full my-4">
              <Image
                src="/thesis.webp"
                height="1000"
                width="1000"
                className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                alt="thumbnail"
              />
            </CardItem>
            <CardItem
              as="p"
              translateZ="60"
              className="font-medium text-sm text-justify text-neutral-900 dark:text-zinc-200 mt-2"
            >
              Aspirasi adalah istilah yang memiliki makna sama dengan berbagai kata lainnya, seperti harapan, cita-cita, keinginan, dambaan hati, impian, hingga angan-angan. Kebanyakan orang kerap kali juga memahami makna aspirasi adalah keinginan masyarakat yang disampaikan kepada pemerintah.
            </CardItem>
          </CardBody>
        </CardContainer>
      </Vortex>
    </div>
  )
}

export default Intro
