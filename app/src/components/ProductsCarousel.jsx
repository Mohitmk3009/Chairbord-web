'use client'
import { useState } from 'react';
import fastag from '../assets/Fastag.png';
import creditcard from '../assets/creditcard.jpg';
import gps from '../assets/gps.jpg';
import accessories from '../assets/Accessories.png';
import Image from 'next/image';

const ProductCarousel = () => {
  const products = [
    {
      name: 'FASTag',
      image: fastag,
      description: {
        heading1: 'What is FASTag?',
        details: [
          'FASTag is a revolutionary electronic toll collection system that revolutionizes your highway travel experience. It\'s a simple, reloadable tag that you affix to your vehicle\'s windscreen. This nifty device uses Radio Frequency Identification (RFID) technology to automatically deduct toll charges from your linked prepaid account as you pass through toll plazas.',
        ],
        heading2: 'Why Choose FASTag?',
        bullets: [
          'Hassle-Free Travel: Say goodbye to long queues and cash transactions at toll plazas. With FASTag, you can breeze through toll gates without stopping.',
          'Time-Saving: Save valuable time on your journeys.',
          'Cashless Convenience: Enjoy the ease of cashless payments.',
          'Secure and Reliable: Your transactions are secure and protected.',
          'Government-Backed: FASTag is a government-backed initiative, ensuring its reliability and widespread acceptance.',
        ],
        heading3: 'How Does it Work?',
        steps: [
          'Purchase and Activation: Buy a FASTag from authorized banks or online portals. Link it to your prepaid account.',
          'Tag Installation: Affix the tag to your vehicle\'s windscreen as per the instructions.',
          'Toll Plaza Passage: As you approach a toll plaza, the RFID reader will automatically detect your FASTag and deduct the toll amount from your linked account.',
        ],
      },
    },
    {
      name: 'GPS',
      image: gps,
      description: {
        heading: 'GPS: Your Personal Navigator',
        details: [
          'GPS, or Global Positioning System, is a satellite-based navigation system that provides highly accurate positioning, navigation, and timing (PNT) services worldwide. It\'s the technology that powers your smartphone\'s maps, your car\'s navigation system, and many other devices.',
        ],
        bullets: [
          'Accurate Navigation: GPS helps you find your way, whether you\'re driving, walking, or hiking.',
          'Real-time Tracking: GPS allows you to track your location and share it with others.',
          'Location-Based Services: GPS enables a wide range of location-based services, such as weather forecasts, traffic updates, and nearby points of interest.',
          'Safety and Security: GPS can be used for emergency services, fleet management, and personal safety tracking.',
        ],
        steps: [
          'Satellite Network: A network of 24 satellites orbits the Earth, continuously transmitting radio signals.',
          'GPS Receiver: Your device (like a smartphone or GPS device) receives these signals.',
          'Triangulation: By calculating the time it takes for the signals to reach your device from multiple satellites, the receiver can determine your precise location (latitude, longitude, and altitude).',
        ],
      },
    },
    {
      name: 'Credit Card',
      image: creditcard,
      description: {
        heading: 'HDFC Credit Cards: Your Gateway to a World of Possibilities',
        details: [
          'HDFC Bank offers a diverse range of credit cards tailored to meet various needs and lifestyles. From basic rewards cards to premium travel and lifestyle cards, you\'re sure to find the perfect card to elevate your financial journey.',
        ],
        bullets: [
          'Reward Programs: Earn valuable reward points on every purchase, which can be redeemed for exciting rewards like cashback, gift vouchers, airline miles, and more.',
          'Flexible Payment Options: Enjoy the convenience of interest-free credit periods and flexible repayment options to manage your finances effectively.',
          'Exclusive Offers and Discounts: Access exclusive deals and discounts from top brands and merchants across India.',
          'Enhanced Security: Benefit from advanced security features like 3D Secure authentication and EMV chip technology to protect your transactions.',
          'Personalized Services: Enjoy personalized customer service and support from HDFC Bank\'s dedicated team.',
        ],
      },
    },
    {
      name: 'Accessories',
      image: accessories,
      description: {
        heading: 'Accessories: The Finishing Touch',
        details: [
          'Accessories are the secret ingredient to elevating any outfit. They can transform a simple look into a statement, adding a touch of personality and style.',
        ],
        bullets: [
          'FASTag Holder: Protect your FASTag in case of accident and prevent unauthorized scanning.',
          'Cleaning Fabrics: Includes towels (anti-scratch) and glass vipers for spotless cleaning.',
          'Decorative Products: Wooden items with mesmerizing and attractive designs.',
          'Luxury KeyGuard: Elevate your keys with luxurious designs.',
        ],
      },
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

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

  const currentProduct = products[currentIndex];

  return (
    <div className="mx-auto p-4 border border-gray-200 rounded-lg shadow-lg bg-white ">
      {/* Image and Navigation */}
      <div className="relative flex justify-center items-center">
        <button
          onClick={prevProduct}
          className="absolute left-0 text-xl bg-gray-200 py-2 px-4 rounded-full text-black shadow-lg z-10"
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
          className="absolute right-0 text-xl bg-gray-200 py-2 px-4 rounded-full text-black shadow-lg z-10"
        >
          &#x276F;
        </button>
      </div>

      {/* Product Description */}
      <div className="mt-4 text-center space-y-4">
        <h3 className="text-3xl font-bold text-black">{currentProduct.name}</h3>
        <h4 className="text-xl font-semibold  flex justify-start text-gray-700">
          {currentProduct.description.heading1}
        </h4>
        {currentProduct.description.details.map((detail, index) => (
          <p key={index} className="text-gray-600 text-left">
            {detail}
          </p>
        ))}
        <h4 className="text-xl font-semibold  flex justify-start text-gray-700">
          {currentProduct.description.heading2}
        </h4>
        <ul className="text-left list-disc list-inside space-y-2 text-gray-600">
          {currentProduct.description.bullets.map((bullet, index) => (
            <li key={index}>{bullet}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ProductCarousel;
