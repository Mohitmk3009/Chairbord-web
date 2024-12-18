// 'use client';
// import React, { useState, useEffect } from "react";
// import p1 from "../assets/p1.png";
// import p2 from "../assets/p2.png";
// import p3 from "../assets/p3.png";
// import Image from "next/image";

// const ImageCarousel = () => {
//   const slides = [p1, p2, p3]; // Correctly define the slides array
//   const [currentIndex, setCurrentIndex] = useState(0);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
//     }, 2000); // Change slide every 2 seconds
//     return () => clearInterval(interval);
//   }, [slides.length]);

//   return (
//     <div className="relative w-full bg-white h-[600px] overflow-hidden">
//       {/* Slider Container */}
//       <div
//         className="flex transition-transform ease-linear duration-1000"
//         style={{ transform: translateX(-${currentIndex * 100}%) }}
//       >
//         {slides.map((slide, index) => (
//           <div key={index} className="w-full h-[600px] flex-shrink-0">
//             {/* Use an img tag instead of backgroundImage */}
//             <Image
//               src={slide.src || slide}
//               width={1920}
//               height={1080}
//               alt={Slide ${index + 1}}
//               className="w-full h-[600px] object-cover"
//             />
//           </div>
//         ))}
//       </div>

//       {/* Navigation Dots */}
//       <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
//         {slides.map((_, index) => (
//           <button
//             key={index}
//             className={w-3 h-3 rounded-full ${
//               currentIndex === index ? "bg-[#00B4FF]" : "bg-gray-400"
//             }}
//             onClick={() => setCurrentIndex(index)}
//           ></button>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default ImageCarousel;

'use client';
import React, { useState, useEffect } from "react";
import p1 from "../assets/BG1.png";
import p2 from "../assets/BG2.png";
import p3 from "../assets/BG3.png";
import Image from "next/image";

const Slide1 = () => (
  <div className="w-[1903px] h-[600px] flex-shrink-0 relative">
    <Image
      src={p1.src || p1}
      width={1920}
      height={1080}
      alt="Slide 1"
      className="w-full h-[600px] object-cover"
    />
    <div className="absolute inset-0 flex flex-col bg-black/40 items-end justify-center text-center px-20">
      <div className="bg-white w-[800px] text-black p-10 rounded-xl text-left"> <h1 className=" text-2xl md:text-6xl font-bold mb-4">
        Grow more, earn more
      </h1>
        <h2 className=" text-justify text-xl text-gray-500 mb-4">
          Chairbord offers innovative opportunities for growth and increased revenue through its diverse range of products, seamlessly interconnected to a unified platform.
        </h2>
        <button
          className="px-6 py-2 bg-black text-white text-lg font-semibold rounded hover:bg-[#008FCC] transition"
          onClick={() => alert("Navigating to products page!")}
        >
          Learn More
        </button>
      </div>


    </div>
  </div>
);

const Slide2 = () => (
  <div className="w-[1903px] h-[600px] flex-shrink-0 relative">
    <Image
      src={p2.src || p2}
      width={1920}
      height={1080}
      alt="Slide 2"
      className="w-full h-[600px] object-cover"
    />
    <div className="absolute inset-0 flex flex-col items-center bg-black/60  justify-center text-center p-4">
    <div className="w-[1000px]"><h2 className="text-white text-2xl md:text-6xl font-bold mb-4">
        Make your Vehicle an Attention to Drive
      </h2>
      <h2 className="text-white text-xl  mb-4">
        Chairbord provides a wide range of premium products and accessories designed to enhance the luxury of your vehicle while supporting its maintenance and upkeep.
      </h2>
      <button
        className="px-6 py-2 bg-[#00B4FF] text-white text-lg font-semibold rounded hover:bg-[#008FCC] transition"
        onClick={() => alert("Navigating to sign-up page!")}
      >
        Sign Up
      </button></div>
      
    </div>
  </div>
);

const Slide3 = () => (
  <div className="w-[1903px] h-[600px] flex-shrink-0 relative">
    <Image
      src={p3.src || p3}
      width={1920}
      height={1080}
      alt="Slide 3"
      className="w-full h-[600px] object-cover"
    />
    <div className="absolute inset-0 flex flex-col items-end bg-black/40 justify-center text-justify p-20">
      <div className=" w-[700px]">
      <h2 className="text-white text-2xl md:text-6xl font-bold mb-4">
      HDFC Credit Card made for you
      </h2>
      <h2 className="text-white text-xl  mb-4">
      Chairbord offers HDFC Credit Cards tailored to meet your needs, providing a seamless lifestyle experience at no additional cost. Terms and conditions apply.
      </h2>
      <div className="flex items-center bg-white rounded-xl shadow-md overflow-hidden p-2 w-full">
        <input
          type="email"
          placeholder="Enter email address"
          className="flex-1 px-2 py-2 text-gray-700 focus:outline-none"
        />
        <button
          className="px-6 py-2 bg-black rounded-md text-white font-semibold hover:bg-gray-800 transition"
          onClick={() => alert("Email submitted!")}
        >
          Get Free Card
        </button>
      </div>
      </div>
      
    </div>
  </div>
);


const ImageCarousel = () => {
  const slides = [<Slide1 />, <Slide2 />, <Slide3 />];
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
    }, 5000); // Change slide every 2 seconds
    return () => clearInterval(interval);
  }, [slides.length]);

  return (
    <div className="relative w-full bg-white h-[600px] overflow-hidden">
      {/* Slider Container */}
      <div
        className="flex transition-transform ease-linear duration-1000"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {slides.map((slide, index) => (
          <div key={index}>{slide}</div>
        ))}
      </div>

      {/* Navigation Dots */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            className={`w-3 h-3 rounded-full ${currentIndex === index ? "bg-[#00B4FF]" : "bg-gray-400"
              }`}
            onClick={() => setCurrentIndex(index)}
          ></button>
        ))}
      </div>
    </div>
  );
};

export default ImageCarousel;
