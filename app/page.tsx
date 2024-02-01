import Image from "next/image";
import Navbar from "@/components/navbar/Navbar";
import heroImage from "@/public/assest/hero.jpeg";
import servicesImage from "@/public/assest/services.jpeg";
import logo from "@/app/favicon.ico";
import { useEffect } from "react";

export default function Home() {




 

  return (
    <main className="flex gap-10 min-h-screen flex-col items-center  px-5 lg:px-24 pt-2">
      <Navbar />

      <div className=" flex gap-10 h-full  relative flex-col md:flex-row ">
        <div className=" relative ">
          <Image className="" src={heroImage} alt="Next.js Logo" priority />
          <div className="  absolute  top-0 py-16 flex  flex-col h-full  text-[3rem]   lg:text-[7rem]   font-bold pl-10   leading-none uppercase">
            <p>Let&apos;s build the next</p>
            <div className=" absolute bottom-5 text-sm flex justify-between px-16 left-0   border-t-2 w-full">
              <div>one</div>
              <div>two</div>
            </div>
          </div>
          <div></div>
        </div>
        <div>
          <div className=" bg-white/10 h-full rounded-3xl w-[27rem] p-5">
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
            <p className="mt-3 max-w-3xl text-lg leading-6 text-gray-500 dark:text-gray-400">
              Next.js is a JavaScript framework for building single-page
              applications (SPAs).
            </p>
          </div>
        </div>
      </div>




      <div className="services relative h-fit">
         <Image src={servicesImage} alt="services image"/>
         <div className="absolute top-5 w-full flex flex-col gap-10">
          <div className=" top-bar flex   text-black  justify-between w-full px-6">
            <h1 className=" md:text-9xl   md:leading-[7rem]   font-[500] w-1/2">OUR SERVICES</h1>
            <div className=" w-1/2  flex  justify-end  items-end   ">
              <div className=" hidden text-4xl bg-black rounded-full p-10 text-white ">logo</div>
            </div>
          </div>
          <div className="bottom   w-full h-full grid md:grid-cols-2 gap-5 text-black md:p-10 ">
            <div className=" border-2 flex md:gap-16  md:p-10  bg-gray-100 rounded-3xl ">
              <div className=" hidden md:flex  justify-start h-full items-start ">
                <Image src="https://assets-global.website-files.com/63f38a8c92397a024fcb9ae8/64f852beac4d6ff134432f2b_icon-services-research.svg" alt="" width="120" height="120"/>
                <Image src="https://assets-global.website-files.com/63f38a8c92397a024fcb9ae8/64f852beac4d6ff134432f2b_icon-services-research.svg" alt="" width="100" height="100"/>
              
              </div>
              <div>
                <h1 className=" md:leading-8 md:text-4xl font-semibold">Product design </h1>
                <p className=" hidden md:block py-5 text-xl">By putting users&apos; needs at the forefront, we tell a unique story of your company, juggling with fancy visual elements.</p>
              </div>
               </div>
            <div className=" border-2 flex md:gap-16  md:p-10  bg-gray-100 rounded-3xl ">
              <div className=" hidden md:flex  justify-start h-full items-start ">
                <Image src="https://assets-global.website-files.com/63f38a8c92397a024fcb9ae8/64f852beac4d6ff134432f2b_icon-services-research.svg" alt="" width="120" height="120"/>
                <Image src="https://assets-global.website-files.com/63f38a8c92397a024fcb9ae8/64f852beac4d6ff134432f2b_icon-services-research.svg" alt="" width="100" height="100"/>
              
              </div>
              <div>
                <h1 className=" md:leading-8 md:text-4xl font-semibold">Product design </h1>
                <p className=" hidden md:block py-5 text-xl">By putting users&apos; needs at the forefront, we tell a unique story of your company, juggling with fancy visual elements.</p>
              </div>
               </div>
            <div className=" border-2 flex md:gap-16  md:p-10  bg-gray-100 rounded-3xl ">
              <div className=" hidden md:flex  justify-start h-full items-start ">
                <Image src="https://assets-global.website-files.com/63f38a8c92397a024fcb9ae8/64f852beac4d6ff134432f2b_icon-services-research.svg" alt="" width="120" height="120"/>
                <Image src="https://assets-global.website-files.com/63f38a8c92397a024fcb9ae8/64f852beac4d6ff134432f2b_icon-services-research.svg" alt="" width="100" height="100"/>
              
              </div>
              <div>
                <h1 className=" md:leading-8 md:text-4xl font-semibold">Product design </h1>
                <p className=" hidden md:block py-5 text-xl">By putting users&apos; needs at the forefront, we tell a unique story of your company, juggling with fancy visual elements.</p>
              </div>
               </div>
            <div className=" border-2 flex md:gap-16  md:p-10  bg-gray-100 rounded-3xl ">
              <div className=" hidden md:flex  justify-start h-full items-start ">
                <Image src="https://assets-global.website-files.com/63f38a8c92397a024fcb9ae8/64f852beac4d6ff134432f2b_icon-services-research.svg" alt="" width="120" height="120"/>
                <Image src="https://assets-global.website-files.com/63f38a8c92397a024fcb9ae8/64f852beac4d6ff134432f2b_icon-services-research.svg" alt="" width="100" height="100"/>
              
              </div>
              <div>
                <h1 className=" md:leading-8 md:text-4xl font-semibold">Product design </h1>
                <p className=" hidden md:block py-5 text-xl">By putting users&apos; needs at the forefront, we tell a unique story of your company, juggling with fancy visual elements.</p>
              </div>
               </div>
           

          </div>
         </div>



      </div>
    </main>
  );
}
