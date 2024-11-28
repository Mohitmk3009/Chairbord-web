import React from 'react'
import sbi from '../assets/sbi.jpg'
import bajaj from '../assets/bajaj.jpg'
import call from '../assets/Call.png'
import Image from 'next/image';

const HeroSection = () => {
  return (
    <section className="relative bg-[#F5F5F5] w-full py-40 ">
      <div className="container  flex items-center justify-between gap-20  mx-auto ml-36 w-full ">
        {/* Left Content */}
        <div className="max-w-7xl">
          <h1 className="text-6xl font-bold text-gray-800 mb-4">
            The easiest way to monitor and dispatch your vehicles.
          </h1>
          <p className="text-gray-600 text-xl mb-6">
            We give you the power and performance of a complete fleet management system. Fleet owners gain a new level of control over their vehicles, drivers, and fleet operating costs.
          </p>
          <button className="flex items-center bg-black text-white py-2 px-4 gap-2 rounded-full shadow hover:bg-gray-800">
          <Image
              src={call} // Replace with your actual first image path
              alt="Fastag Card"
              className="rounded-xl border border-black shadow-lg w-[20px] "
            /> +91-9290666466
          </button>
        </div>

        {/* Right Content (Two stacked images) */}
        <div className="relative  w-[600px]">
          <div className="">
            {/* Image 1 */}
            <Image
              src={sbi} // Replace with your actual first image path
              alt="Fastag Card"
              className="rounded-xl border border-black shadow-lg w-[400px] z-0"
            />
            {/* Image 2 */}
            <Image
              src={bajaj} // Replace with your actual second image path
              alt="Fastag Card 2"
              className="rounded-xl shadow-lg border border-black w-[400px] z-10 ml-[110px] mt-[-100px]"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
