"use client"
import Image from "next/image"
import logo from "@/app/favicon.ico";
import Autoplay from 'embla-carousel-autoplay'
import one from "@/public/assest/one (1).jpg"
import two from "@/public/assest/two.jpg"
import three from "@/public/assest/three.jpg"
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
  } from "@/components/ui/carousel"

export default function Status() {
  return (
    <div>
          <div className={` bg-white/10  h-[34rem] overflow-hidden rounded-3xl flex flex-col gap-5  w-full md:w-[24rem] p-5`}>
            <div className=" flex  justify-between items-center">
              <div className=" flex justify-center items-center gap-2 ">
                <div>
                  <Image
                    className=" h-8 w-8"
                    src={logo}
                    alt="Next.js Logo"
                    priority
                  />
                </div>

                <h1 className="text-sm font-bold leading-tight text-gray-900 dark:text-gray-300 uppercase ">
                  weblab
                </h1>
              </div>
              <div>dot</div>
            </div>
            {/* <p className="mt-3 max-w-3xl text-lg leading-6 text-gray-500 dark:text-gray-400">
              Next.js is a JavaScript framework for building single-page
              applications (SPAs).
            </p> */}
            <div className=" overflow-hidden ">
            <Carousel
             plugins={[
              Autoplay({
                delay: 5000,
              }),
            ]}
            className=" overflow-hidden"
            
            >
  <CarouselContent>
    <CarouselItem>
      <Image
        src={one}
        alt="Next.js Logo"
        className=""
        priority
      />
    </CarouselItem>
    <CarouselItem>
      <Image
      className=" w-full h-full"
        src={two}
        alt="Next.js Logo"
        priority
       
      />
    </CarouselItem>
    <CarouselItem>
      <Image
        src={three}
        alt="Next.js Logo"
        priority
      />
    </CarouselItem>
   
  </CarouselContent>
 
  <CarouselNext />
</Carousel>
            </div>
          </div>
    </div>
  )
}

