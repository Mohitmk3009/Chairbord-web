'use client';
import React, { useState, useEffect } from "react";
import p1 from "../assets/p1.png";
import p2 from "../assets/p2.png";
import p3 from "../assets/p3.png";
import Image from "next/image";

const ImageCarousel = () => {
  const slides = [p1, p2, p3]; // Correctly define the slides array
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
    }, 2000); // Change slide every 2 seconds
    return () => clearInterval(interval);
  }, [slides.length]);

  return (
    <div className="relative w-full bg-white h-[500px] overflow-hidden">
      {/* Slider Container */}
      <div
        className="flex transition-transform ease-linear duration-1000"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {slides.map((slide, index) => (
          <div key={index} className="w-full h-[500px] flex-shrink-0">
            {/* Use an img tag instead of backgroundImage */}
            <Image
              src={slide.src || slide}
              width={1920}
              height={1080}
              alt={`Slide ${index + 1}`}
              className="w-full h-[600px] object-cover "
            />
          </div>
        ))}
      </div>

      {/* Navigation Dots */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            className={`w-3 h-3 rounded-full ${
              currentIndex === index ? "bg-[#00B4FF]" : "bg-gray-400"
            }`}
            onClick={() => setCurrentIndex(index)}
          ></button>
        ))}
      </div>
    </div>
  );
};

export default ImageCarousel;
