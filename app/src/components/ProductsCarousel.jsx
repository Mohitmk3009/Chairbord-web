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
        details1: [
          'FASTag is a revolutionary electronic toll collection system that revolutionizes your highway travel experience. It\'s a simple, reloadable tag that you affix to your vehicle\'s windscreen. This nifty device uses Radio Frequency Identification (RFID) technology to automatically deduct toll charges from your linked prepaid account as you pass through toll plazas.',
        ],
        heading2: 'Why Choose FASTag?',
        bullets1: [
          'Hassle-Free Travel: Say goodbye to long queues and cash transactions at toll plazas. With FASTag, you can breeze through toll gates without stopping.',
          'Time-Saving: Save valuable time on your journeys.',
          'Cashless Convenience: Enjoy the ease of cashless payments.',
          'Secure and Reliable: Your transactions are secure and protected.',
          'Government-Backed: FASTag is a government-backed initiative, ensuring its reliability and widespread acceptance.',
        ],
        heading3: 'How Does it Work?',
        bullets2: [
          'Purchase and Activation: Buy a FASTag from authorized banks or online portals. Link it to your prepaid account.',
          'Tag Installation: Affix the tag to your vehicle\'s windscreen as per the instructions.',
          'Toll Plaza Passage: As you approach a toll plaza, the RFID reader will automatically detect your FASTag and deduct the toll amount from your linked account.',
        ],
        fastagending: 'Experience the Future of Highway Travel with FASTag!',
      },
    },
    {
      name: 'GPS',
      image: gps,
      description: {
        heading1: 'What is GPS?',
        details1: [
          'GPS, or Global Positioning System, is a satellite-based navigation system that provides highly accurate positioning, navigation, and timing (PNT) services worldwide. It\'s the technology that powers your smartphone\'s maps, your car\'s navigation system, and many other devices.',
        ],
        heading2: 'Key Benefits of GPS:',
        bullets1: [
          'Accurate Navigation: GPS helps you find your way, whether you\'re driving, walking, or hiking.',
          'Real-time Tracking: GPS allows you to track your location and share it with others.',
          'Location-Based Services: GPS enables a wide range of location-based services, such as weather forecasts, traffic updates, and nearby points of interest.',
          'Safety and Security: GPS can be used for emergency services, fleet management, and personal safety tracking.',
        ],
        heading3: 'How Does it Work?',
        bullets2: [
          'Satellite Network: A network of 24 satellites orbits the Earth, continuously transmitting radio signals.',
          'GPS Receiver: Your device (like a smartphone or GPS device) receives these signals.',
          'Triangulation: By calculating the time it takes for the signals to reach your device from multiple satellites, the receiver can determine your precise location (latitude, longitude, and altitude).',
        ],
        heading4: 'Applications of GPS:',
        bullets3: [
          'Transportation: Car navigation systems, ride-sharing apps, public transportation routing',
          'Outdoor Activities: Hiking, camping, geocaching.',
          'Aviation and Maritime: Air traffic control, marine navigation.',
          'Logistics and Supply Chain: Fleet tracking, delivery route optimization.',
          'Agriculture: Precision farming, crop monitoring.',
          'Emergency Services: Search and rescue operations.'
        ],
        heading5: 'Incorporating GPS into Your Website:',
        details2: [
          'If you\'re building a website that relies on location-based features, consider integrating GPS functionality. Here are some ideas:.',
        ],
        bullets4: [
          'Interactive Maps: Display interactive maps with markers for points of interest, er locations, or delivery routes.',
          'Location-Based Services: Offer personalized services based on the user\'s location, such as weather information or nearby restaurants.',
          'Geo-fencing: Trigger specific actions or notifications when a user enters or exits a defined geographical area.',
          'Real-time Tracking: Track the movement of objects or people in real-time, useful for logistics or fleet management.',

        ],
        gpsending: 'By understanding the basics of GPS and its applications, you can leverage this technology to enhance your website and provide a more engaging user experience.',
      },
    },
    {
      name: 'Credit Card',
      image: creditcard,
      description: {
        heading1: 'HDFC Credit Cards: Your Gateway to a World of Possibilities',
        details1: [
          'HDFC Bank offers a diverse range of credit cards tailored to meet various needs and lifestyles. From basic rewards cards to premium travel and lifestyle cards, you\'re sure to find the perfect card to elevate your financial journey.',
        ],
        heading2_e: 'Popular HDFC Credit Cards:',
        bullets1_1heading: 'HDFC MoneyBack Credit Card:',
        bullets1_1: [
          'Earn cashback on various spending categories like dining, groceries, and online shopping.',
          'Ideal for everyday expenses and maximizing savings.',
        ],
        bullets1_2heading: 'HDFC Regalia  Credit Card:',
        bullets1_2: [
          'Enjoy exclusive privileges and benefits like airport lounge access, concierge services, and complimentary golf green fees.',
          'Perfect for frequent travelers and luxury enthusiasts.',
        ],
        bullets1_3heading: 'HDFC Diners Club Black Card:',
        bullets1_3: [
          'Experience the ultimate in luxury and exclusivity with premium benefits like airport lounge access, concierge services, and personalized travel assistance.',
          'Designed for discerning individuals who demand the best.',
        ],
        bullets1_4heading: 'HDFC Millennia Credit Card:',
        bullets1_4: [
          'A great choice for young professionals and students, offering rewards and benefits tailored to their lifestyle.',
          'Ideal for online shopping, entertainment, and dining.',
        ],
        heading2: 'Key Benefits of HDFC Credit Cards:',
        bullets1: [
          'Reward Programs: Earn valuable reward points on every purchase, which can be redeemed for exciting rewards like cashback, gift vouchers, airline miles, and more.',
          'Flexible Payment Options: Enjoy the convenience of interest-free credit periods and flexible repayment options to manage your finances effectively.',
          'Exclusive Offers and Discounts: Access exclusive deals and discounts from top brands and merchants across India.',
          'Enhanced Security: Benefit from advanced security features like 3D Secure authentication and EMV chip technology to protect your transactions.',
          'Personalized Services: Enjoy personalized customer service and support from HDFC Bank\'s dedicated team.',
        ],

        heading3: 'How to Apply for an HDFC Credit Card:',
        bullets2: [
          'Online Application: Visit the HDFC Bank website and fill out the online application form.',
          'Branch Visit: Visit your nearest HDFC Bank branch and submit a physical application form.',
        ],
        heading4: 'Tips for Responsible Credit Card Usage:',
        bullets3: [
          'Pay on Time: Always make your payments on time to avoid late fees and interest charges.',
          'Track Your Spending: Monitor your spending habits to stay within your budget.',
          'Use Credit Wisely: Use your credit card for necessary expenses and avoid impulsive purchases.',
          'Secure Your Card: Keep your card information confidential and report any suspicious activity immediately.',
          'Personalized Services: Enjoy personalized customer service and support from HDFC Bank\'s dedicated team.',
        ],
        creditending: 'By choosing the right HDFC Credit Card and using it responsibly, you can unlock a world of financial freedom and rewards.',
      },
    },
    {
      name: 'Accessories',
      image: accessories,
      description: {
        heading1: 'Accessories: The Finishing Touch',
        details1: [
          'Accessories are the secret ingredient to elevating any outfit. They can transform a simple look into a statement, adding a touch of personality and style.',
        ],

        heading2_e: 'A Wide Range of Accessories',
        details2_1: [
          'From classic jewelry to trendy fashion accessories, there\'s something for everyone. Here are some popular categories:',
        ],
        bullets1_1heading: 'FASTag Holder:',
        bullets1_1: [
          'Protect your FASTag in case of accident.',
          'No threat to buy new FASTag in case of damage to windshield.',
          'Have your FASTag with you (saving from unauthorised scanning).',
        ],
        bullets1_2heading: 'Cleaning Fabrics:',
        bullets1_2: [
          'ETowels: Soft fabric/ Anti scratchable for cleaning your vehicle.',
          'Viper: Glass Viper for no back left stains. ',
        ],
        bullets1_3heading: 'Decorative Products:',
        bullets1_3: [
          'Wooden Items: Mesmerizing/Attractive designs on wooden sheets..',
        ],
        bullets1_4heading: 'Luxury KeyGuard:',
        bullets1_4: [
          'Enhance your key as a luxury and feel high.',
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
    <div className="mx-auto p-4 border border-gray-200 rounded-lg shadow-lg bg-[#F5F5F5]">
      {/* Image and Navigation */}
      <div className="relative flex justify-center items-center bg-white px-20 py-5 mx-2 rounded-2xl shadow-md">
        <button
          onClick={prevProduct}
          className="absolute left-5 text-xl bg-gray-200 py-2 px-4  rounded-full text-black shadow-lg z-10"
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
          className="absolute right-5 text-xl bg-gray-200 py-2 px-4 rounded-full text-black shadow-lg z-10"
        >
          &#x276F;
        </button>
      </div>

      {/* Product Description */}
      <div className="mt-4 text-center space-y-4 bg-white px-10 py-5 mx-2 rounded-2xl shadow-md">
        <h3 className="text-3xl font-bold text-black">{currentProduct.name}</h3>
        {currentProduct?.description?.heading1 && (
          <h4 className="text-xl font-semibold flex justify-start text-gray-700">
            {currentProduct.description.heading1}
          </h4>
        )}
        {currentProduct?.description?.details1?.length > 0 &&
          currentProduct.description.details1.map((detail, index) => (
            <p key={index} className="text-gray-600 text-left">
              {detail}
            </p>
          ))}


        {/* for credit and accessories */}
        {currentProduct?.description?.heading2_e && (
          <h4 className="text-xl font-semibold flex justify-start text-gray-700">
            {currentProduct.description.heading2_e}
          </h4>
        )}

        {currentProduct?.description?.details2_1?.length > 0 &&
          currentProduct.description.details2_1.map((detail, index) => (
            <p key={index} className="text-gray-600 text-left">
              {detail}
            </p>
          ))}
        <div className='ml-10 space-y-5'>
          {currentProduct?.description?.bullets1_1heading && (
            <h4 className="text-xl font-semibold flex justify-start text-gray-700">
              {currentProduct.description.bullets1_1heading}
            </h4>
          )}
          {currentProduct?.description?.bullets1_1?.length > 0 && (
            <ul className="text-left list-disc list-inside space-y-2 text-gray-600">
              {currentProduct.description.bullets1_1.map((bullet, index) => (
                <li key={index}>{bullet}</li>
              ))}
            </ul>
          )}
          {currentProduct?.description?.bullets1_2heading && (
            <h4 className="text-xl font-semibold flex justify-start text-gray-700">
              {currentProduct.description.bullets1_2heading}
            </h4>
          )}
          {currentProduct?.description?.bullets1_2?.length > 0 && (
            <ul className="text-left list-disc list-inside space-y-2 text-gray-600">
              {currentProduct.description.bullets1_2.map((bullet, index) => (
                <li key={index}>{bullet}</li>
              ))}
            </ul>
          )}
          {currentProduct?.description?.bullets1_3heading && (
            <h4 className="text-xl font-semibold flex justify-start text-gray-700">
              {currentProduct.description.bullets1_3heading}
            </h4>
          )}
          {currentProduct?.description?.bullets1_3?.length > 0 && (
            <ul className="text-left list-disc list-inside space-y-2 text-gray-600">
              {currentProduct.description.bullets1_3.map((bullet, index) => (
                <li key={index}>{bullet}</li>
              ))}
            </ul>
          )}
          {currentProduct?.description?.bullets1_4heading && (
            <h4 className="text-xl font-semibold flex justify-start text-gray-700">
              {currentProduct.description.bullets1_4heading}
            </h4>
          )}
          {currentProduct?.description?.bullets1_4?.length > 0 && (
            <ul className="text-left list-disc list-inside space-y-2 text-gray-600">
              {currentProduct.description.bullets1_4.map((bullet, index) => (
                <li key={index}>{bullet}</li>
              ))}
            </ul>
          )}

        </div>
        {currentProduct?.description?.heading2 && (
          <h4 className="text-xl font-semibold flex justify-start text-gray-700">
            {currentProduct.description.heading2}
          </h4>
        )}
        {currentProduct?.description?.bullets1?.length > 0 && (
          <ul className="text-left list-disc list-inside space-y-2 text-gray-600">
            {currentProduct.description.bullets1.map((bullet, index) => (
              <li key={index}>{bullet}</li>
            ))}
          </ul>
        )}
        {currentProduct?.description?.heading3 && (
          <h4 className="text-xl font-semibold flex justify-start text-gray-700">
            {currentProduct.description.heading3}
          </h4>
        )}
        {currentProduct?.description?.bullets2?.length > 0 && (
          <ul className="text-left list-disc list-inside space-y-2 text-gray-600">
            {currentProduct.description.bullets2.map((bullet, index) => (
              <li key={index}>{bullet}</li>
            ))}
          </ul>
        )}
        {currentProduct?.description?.heading4 && (
          <h4 className="text-xl font-semibold flex justify-start text-gray-700">
            {currentProduct.description.heading3}
          </h4>
        )}
        {currentProduct?.description?.bullets3?.length > 0 && (
          <ul className="text-left list-disc list-inside space-y-2 text-gray-600">
            {currentProduct.description.bullets2.map((bullet, index) => (
              <li key={index}>{bullet}</li>
            ))}
          </ul>
        )}
        {currentProduct?.description?.heading5 && (
          <h4 className="text-xl font-semibold flex justify-start text-gray-700">
            {currentProduct.description.heading3}
          </h4>
        )}
        {currentProduct?.description?.details2?.length > 0 &&
          currentProduct.description.details2.map((detail, index) => (
            <p key={index} className="text-gray-600 text-left">
              {detail}
            </p>
          ))}
        {currentProduct?.description?.bullets4?.length > 0 && (
          <ul className="text-left list-disc list-inside space-y-2 text-gray-600">
            {currentProduct.description.bullets2.map((bullet, index) => (
              <li key={index}>{bullet}</li>
            ))}
          </ul>
        )}
        
        {currentProduct?.description?.fastagending && (
    <h4 className="text-xl font-semibold flex justify-start text-gray-700">
      {currentProduct.description.fastagending}
    </h4>
  )}
        {currentProduct?.description?.gpsending && (
    <h4 className="text-xl font-semibold flex justify-start text-gray-700">
      {currentProduct.description.gpsending}
    </h4>
  )}
  {currentProduct?.description?.creditending && (
    <h4 className="text-xl font-semibold flex justify-start text-gray-700">
      {currentProduct.description.creditending}
    </h4>
  )}
      </div>
    </div>
  );
};

export default ProductCarousel;
