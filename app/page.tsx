import Image from "next/image";
import Navbar from "@/components/navbar/Navbar";
import heroImage from "@/public/assest/hero.jpeg";
import logo from "@/app/favicon.ico";

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
    </main>
  );
}
