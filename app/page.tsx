import Image from "next/image";
import Navbar from "@/components/navbar/Navbar";
import heroImage from "@/public/assest/hero.jpeg";
import servicesImage from "@/public/assest/services.jpeg";

import logo from "@/app/favicon.ico";

import { useEffect } from "react";
import Status from "@/components/Status";

export default function Home() {
  return (
    <main className="flex gap-10 min-h-screen flex-col items-center  px-5 lg:px-24 pt-2">
      <Navbar />

      <div className=" flex gap-5 lg:h-[34rem] relative flex-col lg:flex-row  ">
        <div className="    top-0  flex  flex-col h-full   text-[3rem]   lg:text-[7rem]   font-bold    leading-none uppercase">
          <video
            src="https://d3vlq52qrgdnc2.cloudfront.net/Services-Showreel-1080.mp4"
            className=" object-cover rounded-2xl  w-full h-full"
            autoPlay
            loop
            muted
          />
        </div>
        <div className=" hidden lg:block">
          <Status />
        </div>
      </div>
<div  className=" flex  flex-col md:flex-row w-full gap-5">
<div className=" lg:hidden">
<Status />
</div>


      <div className=" grid grid-cols-2 lg:grid-cols-3 gap-5  w-full text-center">
        <div className=" bg-[#3C0753] rounded-2xl  col-span-2 lg:col-span-1 " >research</div>
        <div className=" bg-[#3C0753] rounded-2xl" >degine</div>
        <div className=" bg-[#3C0753] rounded-2xl" >devlopment</div>
       
      </div>
</div>
     

      {/* <div className="services relative h-fit">
         <Image src={servicesImage} alt="services image"/>
         <div className="absolute top-5 w-full flex flex-col gap-10">
          <div className=" top-bar flex   text-black  justify-between w-full px-6">
            <h1 className=" text-9xl   leading-[7rem]   font-[500] w-1/2">OUR SERVICES</h1>
            <div className=" w-1/2  flex  justify-end  items-end   ">
              <div className=" text-4xl bg-black rounded-full p-10 text-white ">logo</div>
            </div>
          </div>
          <div className="bottom   w-full h-full grid grid-cols-2 gap-5 text-black p-10 ">
            <div className=" border-2 flex gap-16  p-10  bg-gray-100 rounded-3xl ">
              <div className=" flex  justify-start h-full items-start ">
                <Image src="https://assets-global.website-files.com/63f38a8c92397a024fcb9ae8/64f852beac4d6ff134432f2b_icon-services-research.svg" alt="" width="120" height="120"/>
                <Image src="https://assets-global.website-files.com/63f38a8c92397a024fcb9ae8/64f852beac4d6ff134432f2b_icon-services-research.svg" alt="" width="100" height="100"/>
              
              </div>
              <div>
                <h1 className=" leading-8 text-4xl font-semibold">Product design </h1>
                <p className=" py-5 text-xl">By putting users&apos; needs at the forefront, we tell a unique story of your company, juggling with fancy visual elements.</p>
              </div>
               </div>
            <div className=" border-2 flex gap-16  p-10  bg-gray-100 rounded-3xl ">
              <div className=" flex  justify-start h-full items-start ">
                <Image src="https://assets-global.website-files.com/63f38a8c92397a024fcb9ae8/64f852beac4d6ff134432f2b_icon-services-research.svg" alt="" width="120" height="120"/>
                <Image src="https://assets-global.website-files.com/63f38a8c92397a024fcb9ae8/64f852beac4d6ff134432f2b_icon-services-research.svg" alt="" width="100" height="100"/>
              
              </div>
              <div>
                <h1 className=" leading-8 text-4xl font-semibold">Product design </h1>
                <p className=" py-5 text-xl">By putting users&apos; needs at the forefront, we tell a unique story of your company, juggling with fancy visual elements.</p>
              </div>
               </div>
            <div className=" border-2 flex gap-16  p-10  bg-gray-100 rounded-3xl ">
              <div className=" flex  justify-start h-full items-start ">
                <Image src="https://assets-global.website-files.com/63f38a8c92397a024fcb9ae8/64f852beac4d6ff134432f2b_icon-services-research.svg" alt="" width="120" height="120"/>
                <Image src="https://assets-global.website-files.com/63f38a8c92397a024fcb9ae8/64f852beac4d6ff134432f2b_icon-services-research.svg" alt="" width="100" height="100"/>
              
              </div>
              <div>
                <h1 className=" leading-8 text-4xl font-semibold">Product design </h1>
                <p className=" py-5 text-xl">By putting users&apos; needs at the forefront, we tell a unique story of your company, juggling with fancy visual elements.</p>
              </div>
               </div>
            <div className=" border-2 flex gap-16  p-10  bg-gray-100 rounded-3xl ">
              <div className=" flex  justify-start h-full items-start ">
                <Image src="https://assets-global.website-files.com/63f38a8c92397a024fcb9ae8/64f852beac4d6ff134432f2b_icon-services-research.svg" alt="" width="120" height="120"/>
                <Image src="https://assets-global.website-files.com/63f38a8c92397a024fcb9ae8/64f852beac4d6ff134432f2b_icon-services-research.svg" alt="" width="100" height="100"/>
              
              </div>
              <div>
                <h1 className=" leading-8 text-4xl font-semibold">Product design </h1>
                <p className=" py-5 text-xl">By putting users&apos; needs at the forefront, we tell a unique story of your company, juggling with fancy visual elements.</p>
              </div>
               </div>
           

          </div>
         </div>



      </div> */}
    </main>
  );
}
