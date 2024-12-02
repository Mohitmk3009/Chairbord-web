'use client';
import React, { useState, useEffect } from "react";
import p1 from "../assets/p1.png";
import p2 from "../assets/p2.png";
import p3 from "../assets/p3.png";
import Image from "next/image";

const ImageCarousel = () => {
  const slides = [p1, p2, p3];
  const [currentIndex, setCurrentIndex] = useState(0);
  const [startX, setStartX] = useState(0);
  const [isDragging, setIsDragging] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      if (!isDragging) {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
      }
    }, 3000); // Change slide every 2 seconds
    return () => clearInterval(interval);
  }, [slides.length, isDragging]);

  // Start dragging (for touch and mouse)
  const handleStart = (clientX) => {
    setStartX(clientX);
    setIsDragging(true);
  };

  // Move (for touch and mouse)
  const handleMove = (clientX) => {
    if (!isDragging) return;

    const diff = startX - clientX;

    if (diff > 50) {
      // Swipe/drag left
      setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
      setIsDragging(false);
    } else if (diff < -50) {
      // Swipe/drag right
      setCurrentIndex((prevIndex) =>
        prevIndex === 0 ? slides.length - 1 : prevIndex - 1
      );
      setIsDragging(false);
    }
  };

  // End dragging (for touch and mouse)
  const handleEnd = () => {
    setIsDragging(false);
  };

  return (
    <div
      className="relative w-full bg-white lg:h-[500px] h-[150px] overflow-hidden"
      // Touch events
      onTouchStart={(e) => handleStart(e.touches[0].clientX)}
      onTouchMove={(e) => handleMove(e.touches[0].clientX)}
      onTouchEnd={handleEnd}
      // Mouse events
      onMouseDown={(e) => handleStart(e.clientX)}
      onMouseMove={(e) => isDragging && handleMove(e.clientX)}
      onMouseUp={handleEnd}
      onMouseLeave={handleEnd} // To handle dragging out of bounds
    >
      {/* Slider Container */}
      <div
        className="flex transition-transform ease-linear duration-500"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {slides.map((slide, index) => (
          <div key={index} className="w-full lg:h-[500px] h-[150px] flex-shrink-0">
            <Image
              src={slide.src || slide}
              width={1920}
              height={1080}
              alt={`Slide ${index + 1}`}
              className="w-full lg:h-[500px] h-[150px] object-cover"
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
