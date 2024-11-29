'use client'
import { useState } from 'react';
import fastag from '../assets/Fastag.png'
import creditcard from '../assets/creditcard.jpg'
import gps from '../assets/gps.jpg'
import accessories from '../assets/Accessories.png'
import Image from 'next/image';

const ProductCarousel = () => {
  // Product data
  const products = [
    {
      name: 'Fastag',
      image: fastag, // Replace with your actual image paths
      description: 'A cutting-edge smartphone with advanced features.',
    },
    {
      name: 'GPS',
      image: gps,
      description: 'Experience true freedom with crystal-clear sound quality.',
    },
    {
      name: 'Credit card',
      image: creditcard,
      description: 'Track your health and stay connected on the go.',
    },
    {
        name: 'Accessories',
        image: accessories,
        description: 'Track your health and stay connected on the go.',
      },
  ];

  // State to track the current product
  const [currentIndex, setCurrentIndex] = useState(0);

  // Handlers for navigation
  const nextProduct = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === products.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevProduct = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? products.length - 1 : prevIndex - 1
    );
  };

  // Get the current product
  const currentProduct = products[currentIndex];

  return (
    <div className=" mx-auto p-4 border border-gray-200 rounded-lg shadow-lg bg-white">
      {/* Image and Navigation */}
      <div className="relative flex justify-center items-center">
      <button
          onClick={prevProduct}
          className="absolute left-0 text-xl bg-[#F5F5F5] py-2 px-4 rounded-full text-black shadow-lg z-10"
        >
          &#x276E;
        </button>
       
        <Image
          src={currentProduct.image}
          alt={currentProduct.name}
          className="w-full h-96 object-contain"
        />
        <button
          onClick={nextProduct}
          className="absolute right-0 text-xl  bg-[#F5F5F5] py-2 px-4 rounded-full text-black shadow-lg z-10"
        >
          &#x276F;
        </button>
        
      </div>

      {/* Product Description */}
      <div className="mt-4 text-center">
        <h3 className="text-lg font-bold">{currentProduct.name}</h3>
        <p className="text-gray-600">{currentProduct.description}</p>
      </div>
    </div>
  );
};

export default ProductCarousel;
