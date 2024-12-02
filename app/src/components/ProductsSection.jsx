'use client'
// import { useEffect, useState, useRef } from 'react';
import fastag from '../assets/Fastag.png'
import creditcard from '../assets/creditcard.jpg'
import gps from '../assets/gps.jpg'
import accessories from '../assets/Accessories.png'
import Image from 'next/image';

const ProductsSection = () => {

    return (
        
        <div className='bg-[#F5F5F5] flex flex-col items-center lg:pt-6 pt-2 pb-5'>
            <div className="flex items-center justify-center  lg:mb-6 mb-[-8px] lg:mx-auto lg:w-fit w-full px-5 ">
                <div className="flex-grow border-t border-gray-300 h-[1px] lg:w-[150px] w-[80px]"></div>
                <h2 className="text-center mx-4 lg:text-2xl text-lg font-semibold text-black">Products</h2>
                <div className="flex-grow border-t border-gray-300 h-[1px] lg:w-[150px] w-[80px]"></div>
            </div>
            <section className="work-section ">

                <div className="project project0">
                    <div className="project-img">
                        <div className="project-img-wrapper">
                            <a href="/products" target="_blank">
                                <Image src={fastag} width={250} height={200} alt="project image" draggable="false" className=' img shadow-lg px-20 py-12 rounded-lg bg-white text-centerbg-[#C0C0C0] lg:mb-0 mb-[-20px]  ' />
                            </a>

                        </div>
                    </div>
                    <div className="project-details mx-6">
                        <h3>FASTag</h3>
                        <span className='font-medium' >What is FASTag?</span>
                        <p className='mt-2 text-black'>
                        FASTag is a revolutionary electronic toll collection system that revolutionizes your highway travel experience. It&apos;s a simple, reloadable tag that you affix to your vehicle&apos;s windscreen. This nifty device uses Radio Frequency Identification (RFID) technology to automatically deduct toll charges from your linked prepaid account as you pass through toll plazas.
                        </p>
                        {/* <span className='font-medium' >Why Choose FASTag?</span>
                        <p className='mt-2 text-black'>
                        FASTag is a revolutionary electronic toll collection system that revolutionizes your highway travel experience. It's a simple, reloadable tag that you affix to your vehicle's windscreen. This nifty device uses Radio Frequency Identification (RFID) technology to automatically deduct toll charges from your linked prepaid account as you pass through toll plazas.
                        </p> */}

                    </div>
                    <a className="circle-dot" href="/products" target="_blank"></a>
                    <div className="circle-extension"></div>
                </div>

                <div className="project project1">
                    <div className="project-details mx-6">
                        <h3>GPS</h3>
                        <span className='font-medium'>What is GPS?</span>
                        <p className='mt-2'>
                        GPS, or Global Positioning System, is a satellite-based navigation system that provides highly accurate positioning, navigation, and timing (PNT) services worldwide. It&apos;s the technology that powers your smartphone&apos;s maps, your car&apos;s navigation system, and many other devices.
                        </p>


                    </div>
                    <div className="project-img">
                        <div className="project-img-wrapper ">
                            <a href="/products" target="_blank" >
                                <Image src={gps} width={200} height={200} alt="project image" draggable="false" className='img shadow-lg px-20 py-5 rounded-lg bg-white text-center    lg:mb-0 mb-[-20px]' />

                            </a>

                        </div>
                    </div>
                    <a className="circle-dot" href="/products" target="_blank"> </a>
                    <div className="circle-extension"></div>
                </div>
                <div className="project project2 ">
                    <div className="project-img">
                        <div className="project-img-wrapper">
                            <a href="/products" target="_blank" className=''>
                                <Image src={creditcard} width={150} height={100} alt="project image" draggable="false" className='shadow-lg px-24 py-4  rounded-lg bg-white text-center  lg:mb-0 mb-[-20px]' />

                            </a>

                        </div>
                    </div>
                    <div className="project-details mx-6">
                        <h3>Credit Card</h3>
                        <span className='font-medium'>HDFC Credit Cards: Your Gateway to a World of Possibilities</span>
                        <p className='mt-2'>
                        HDFC Bank offers a diverse range of credit cards tailored to meet various needs and lifestyles. From basic rewards cards to premium travel and lifestyle cards, you&apos;re sure to find the perfect card to elevate your financial journey.
                        </p>


                    </div>
                    <a className="circle-dot" href="/products" target="_blank"></a>
                    <div className="circle-extension"></div>
                </div>
                <div className="project project3 ">

                    <div className="project-details mx-6">
                        <h3>Accessories</h3>
                        <span className='font-medium'>Accessories: The Finishing Touch</span>
                        <p className='mt-2'>
                        Accessories are the secret ingredient to elevating any outfit. They can transform a simple look into a statement, adding a touch of personality and style. Whether you&apos;re dressing up for a special occasion or keeping it casual, the right accessories can make all the difference.
                        </p>


                    </div>
                    <div className="project-img">
                        <div className="project-img-wrapper">
                            <a href="/products" target="_blank" className=''>
                                <Image src={accessories} width={200} height={100} alt="project image" draggable="false" className='img px-24 py-4 shadow-lg  rounded-lg bg-white text-center  lg:mb-0 mb-[-20px]' />

                            </a>

                        </div>
                    </div>
                    <a className="circle-dot" href="/products" target="_blank"></a>
                    <div className="circle-extension"></div>
                </div>




                <div className="vertical-line"></div>
            </section>
            <a href="/products">
            <button
                                type="submit"
                                className=" bg-[#00B4FF] text-white py-2 mt-5 px-5 rounded-lg font-semibold"
                            >
                                View more
                            </button>
            </a>
            
        </div>
    );
};

export default ProductsSection;
