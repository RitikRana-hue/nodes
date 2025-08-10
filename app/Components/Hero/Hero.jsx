"use client";

import Image from 'next/image'
import React from 'react'
import { useTheme } from "../../context/ThemeContext";

export default function Hero() {
  const { theme } = useTheme();

  return (
    <>

        {/* Hero Section */}
        <div className='w-full h-fit px-8 py-12 mt-10 bg-[linear-gradient(135deg,_#f8f9fa_0%,_#e9ecef_100%)]'>
            <div className='flex flex-col md:flex-row lg:flex-row xl:flex-row gap-10'>
                {/* Left Content */}
                <div className='w-full lg:w-[50%]'>
                    <h1 className='text-5xl lg:text-6xl text-[rgb(51,51,51)] font-bold'>NodesIO for a Cleaner Future</h1>
                    <p className='py-10 text-[22px] lg:text-2xl text-gray-500'>Transform your waste management with our IoT-powered solution. Real-time monitoring, efficient collection, and data-driven decisions all in one platform.</p>
                    
                    {/* Buttons */}
                    <div className='flex flex-row flex-wrap justify-center sm:justify-start gap-4 pb-8 text-center sm:text-left'>
                        <button className='px-8 py-4 bg-[#4caf50] rounded-xl text-white font-semibold text-lg cursor-pointer hover:bg-[#388e3c]'>
                            Get Started
                        </button>
                        <button className='px-8 py-4 bg-white rounded-xl text-[#4caf50] font-semibold text-lg cursor-pointer border-2 border-[#4caf50] hover:bg-[#C8E6C9]'>
                            Learn More
                        </button>
                    </div>

                    {/* Stats Numbers */}
                    <div className='flex flex-row justify-center sm:justify-start gap-8 py-2 text-[#4caf50] text-4xl sm:text-5xl font-extrabold text-center sm:text-left'>
                        <p>500+</p>
                        <p>50+</p>
                        <p>95%</p>
                    </div>

                    {/* Stats Labels */}
                    <div className='flex flex-row justify-center sm:justify-start py-4 gap-14 text-lg lg:gap-22 text-gray-500 text-center sm:text-left'>
                        <p>Nodes Bins</p>
                        <p>Cities</p> 
                        <p>Efficiency</p>
                    </div>

                    {/* <div className='flex flex-row gap-4 pb-8'>
                        <button className='px-8 py-4 bg-[#4caf50] rounded-xl text-white font-semibold text-lg cursor-pointer hover:bg-[#388e3c]'>Get Started</button>
                        <button className='px-8 py-4 bg-white rounded-xl text-[#4caf50] font-semibold text-lg cursor-pointer border-2 border-[#4caf50] hover:bg-[#C8E6C9]'>Learn More</button>
                    </div>
                    <div className='flex flex-row gap-8 py-5 text-[#4caf50] text-5xl font-bold'>
                        <p>500+</p>
                        <p>50+</p>
                        <p>95%</p>
                    </div>
                    <div className='flex flex-row gap-22 py-2 text-gray-500'>
                        <p className=''>Nodes Bins</p>
                        <p className=''>Cities</p>
                        <p className=''>Efficiency</p>
                    </div> */}
                </div>
                {/* Right Content */}
                <div className='w-[50%]'>
                    <div className='flex items-center justify-center'>
                        {theme === 'dark' ? (
                          <Image className='text-black rounded-full' alt='NodesIO logo' src={'/images/logo.png'} width={300} height={300} />
                        ) : (
                          <Image className='text-black rounded-full' alt='NodesIO logo' src={'/images/nodesio.png'} width={300} height={300} />
                        )}
                    </div>
                </div>
            </div>
        </div>

    </>
  )
}

