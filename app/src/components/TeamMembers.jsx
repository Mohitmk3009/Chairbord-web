'use client'
import React, { useState } from "react";
import m1 from '../assets/m1.png'
import m2 from '../assets/m2.png'
import m3 from '../assets/m4.png'
import m4 from '../assets/m1.png'
import m5 from '../assets/m2.png'

import Image from "next/image";
const teamMembers = [
  {
    name: "Kamlesh Natwadiya",
    designation: "CEO & MD",
    image: m1,
    bgColor: "bg-yellow-300",
  },
  {
    name: "Sunil Natwadiya",
    designation: "CMO",
    image: m1,
    bgColor: "bg-green-300",
  },
  {
    name: "Mahendra Natwadiya",
    designation: "COO",
    image: m1,
    bgColor: "bg-blue-500",
  },
  // {
  //   name: "Sam Wilson",
  //   designation: "Designation",
  //   image: m1,
  //   bgColor: "bg-purple-300",
  // },
  // {
  //   name: "Emily Carter",
  //   designation: "Designation",
  //   image: m1,
  //   bgColor: "bg-red-300",
  // },
];

const TeamMembers = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === teamMembers.length - 1 ? 0 : prevIndex + 1
    );
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? teamMembers.length - 1 : prevIndex - 1
    );
  };

  const getVisibleMembers = () => {
    // Show the current index and two adjacent members
    const visible = [];
    for (let i = -1; i <= 1; i++) {
      const index = (currentIndex + i + teamMembers.length) % teamMembers.length;
      visible.push(teamMembers[index]);
    }
    return visible;
  };

  return (
    <div className="flex flex-col items-center overflow-hidden bg-white">
      <div className="flex items-center justify-center my-6">
        <div className="flex-grow border-t border-gray-300 h-[1px] w-[150px]"></div>
        <h2 className="text-center mx-4 text-2xl font-semibold text-black">Team Members</h2>
        <div className="flex-grow border-t border-gray-300 h-[1px] w-[150px]"></div>
      </div>
      <div className="relative flex items-center w-full max-w-7xl">
        <button
          onClick={handlePrev}
          className="absolute left-0 text-xl bg-[#F5F5F5] py-2 px-4 rounded-full text-black shadow-lg z-10"
        >
          &#x276E;
        </button>
        <div className="flex justify-center items-center w-full overflow-hidden">
          <div className="flex transition-transform duration-300 ease-in-out">
            {getVisibleMembers().map((member, index) => {
              const isCenter = index === 1; // The second item is in the center
              const sizeClass = isCenter ? "w-[350px] h-[350px]" : "w-[250px] h-[250px]";
              const imageSizeClass = isCenter ? "w-full h-[450px]" : "w-full h-[350px]";
              const memberTextClass = isCenter
                ? "text-4xl font-semibold"
                : "text-2xl opacity-30 font-semibold";
              const desgnationTextClass = isCenter
                ? "text-2xl font-medium"
                : "text-md opacity-30 font-medium";
              return (
                <div
                  key={index}
                  className={`flex flex-col items-center justify-center mx-10 my-20 transition-all duration-300 ${isCenter ? "" : "opacity-60"}`}
                >
                  <div
                    className={`rounded-full flex items-center justify-center ${member.bgColor} ${sizeClass} transition-all duration-300`}
                  >
                    <Image
                      src={member.image}
                      alt={member.name}
                      width={400}
                      height={400}
                      className={`rounded-full ${imageSizeClass} mb-[100px] object-cover`}
                    />
                  </div>
                  <p className={`${memberTextClass} mt-4 text-black`}>{member.name}</p>
                  <p className={`${desgnationTextClass}  text-black`}>{member.designation}</p>
                </div>
              );
            })}
          </div>
        </div>
        <button
          onClick={handleNext}
          className="absolute right-0 text-xl  bg-[#F5F5F5] py-2 px-4 rounded-full text-black shadow-lg z-10"
        >
          &#x276F;
        </button>
      </div>
    </div>
  );
};

export default TeamMembers;
