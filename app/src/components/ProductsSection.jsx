'use client'
import { useEffect, useState, useRef } from 'react';
import fastag from '../assets/Fastag.png'
import creditcard from '../assets/creditcard.jpg'
import gps from '../assets/gps.jpg'
import accessories from '../assets/Accessories.png'
import Image from 'next/image';

const ProductsSection = () => {
    const [inView, setInView] = useState(false);
    const sectionRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                setInView(entry.isIntersecting);
            },
            { threshold: 0.1 } // Adjust the threshold as needed
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => {
            if (sectionRef.current) {
                observer.unobserve(sectionRef.current);
            }
        };
    }, []);

    return (
        // <div
        //     className="bg-[#F5F5F5] py-8"
        //     ref={sectionRef}
        // >
        //     <div
        //         className={transition-transform duration-700 ${inView ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        //             }}
        //     >
        //         <div className="flex flex-col items-center my-8 mb-[-5px]">
        //             <div className="flex items-center justify-center my-6 mt-[-34px] ">
        //                 <div className="flex-grow border-t border-gray-300 h-[1px] w-[150px]"></div>
        //                 <h2 className="text-center mx-4 text-2xl font-semibold text-black">Products</h2>
        //                 <div className="flex-grow border-t border-gray-300 h-[1px] w-[150px]"></div>
        //             </div>
        //             <div className="flex gap-14 text-black font-bold text-xl">
        //                 <div className='flex flex-col justify-center'>
        //                     <div className="shadow-lg px-7 py-6 rounded-lg bg-white text-center max-w-[280px] max-h-[116px]">
        //                         <Image src={fastag} alt="FASTag" width={400} height={200} className="h-[68px] w-full " />
        //                     </div>
        //                     <p className="mt-4 flex justify-center  w-full ">FASTag</p>
        //                 </div>
        //                 <div>
        //                     <div className="shadow-lg px-16 py-5 rounded-lg bg-white text-center max-w-[280px] max-h-[116px]">
        //                         <Image src={gps} alt="GPS" width={400} height={200} className="h-20 w-full " />
        //                     </div>
        //                     <p className="mt-4 flex justify-center  w-full">GPS</p>
        //                 </div>
        //                 <div>
        //                     <div className="shadow-lg px-20 py-2 rounded-lg bg-white text-center max-w-[280px] max-h-[116px]">
        //                         <Image src={creditcard} alt="Credit Card" width={400} height={200}  className="h-28 w-full" />
        //                     </div>
        //                     <p className="mt-4 flex justify-center  w-full">Credit Card</p>
        //                 </div>
        //                 <div>
        //                     <div className="shadow-lg px-20 py-1 rounded-lg bg-white text-center max-w-[280px] max-h-[116px]">
        //                         <Image src={accessories} alt="Accessories" width={400} height={200}  className="h-28 w-full" />
        //                     </div>
        //                     <p className="mt-4 flex justify-center  w-full">Accessories</p>
        //                 </div>

        //             </div>
        //         </div>
        //     </div>
        // </div>
        <div className='bg-[#F5F5F5] flex flex-col items-center py-10'>
            <div className="flex items-center justify-center  mb-6  mx-auto">
                <div className="flex-grow border-t border-gray-300 h-[1px] w-[150px]"></div>
                <h2 className="text-center mx-4 text-2xl font-semibold text-black">Products</h2>
                <div className="flex-grow border-t border-gray-300 h-[1px] w-[150px]"></div>
            </div>
            <section className="work-section ">

                <div className="project project0">
                    <div className="project-img">
                        <div className="project-img-wrapper">
                            <a href="https://www.harigurus.com/" target="_blank">
                                <Image src={fastag} width={250} height={200} alt="project image" draggable="false" className=' img shadow-lg px-20 py-12 rounded-lg bg-white text-centerbg-[#C0C0C0] lg:mb-0 mb-[-20px]  ' />
                            </a>

                        </div>
                    </div>
                    <div className="project-details mx-6">
                        <h3>FASTag</h3>
                        <span className='font-medium' >What is FASTag?</span>
                        <p className='mt-2 text-black'>
                        FASTag is a revolutionary electronic toll collection system that revolutionizes your highway travel experience. It's a simple, reloadable tag that you affix to your vehicle's windscreen. This nifty device uses Radio Frequency Identification (RFID) technology to automatically deduct toll charges from your linked prepaid account as you pass through toll plazas.
                        </p>
                        {/* <span className='font-medium' >Why Choose FASTag?</span>
                        <p className='mt-2 text-black'>
                        FASTag is a revolutionary electronic toll collection system that revolutionizes your highway travel experience. It's a simple, reloadable tag that you affix to your vehicle's windscreen. This nifty device uses Radio Frequency Identification (RFID) technology to automatically deduct toll charges from your linked prepaid account as you pass through toll plazas.
                        </p> */}

                    </div>
                    <a className="circle-dot" href="https://webdevenglish.com/" target="_blank"></a>
                    <div className="circle-extension"></div>
                </div>

                <div className="project project1">
                    <div className="project-details mx-6">
                        <h3>GPS</h3>
                        <span className='font-medium'>What is GPS?</span>
                        <p className='mt-2'>
                        GPS, or Global Positioning System, is a satellite-based navigation system that provides highly accurate positioning, navigation, and timing (PNT) services worldwide. It's the technology that powers your smartphone's maps, your car's navigation system, and many other devices.
                        </p>


                    </div>
                    <div className="project-img">
                        <div className="project-img-wrapper ">
                            <a href="https://eazygrad.com/" target="_blank" >
                                <Image src={gps} width={200} height={200} alt="project image" draggable="false" className='img shadow-lg px-20 py-5 rounded-lg bg-white text-center    lg:mb-0 mb-[-20px]' />

                            </a>

                        </div>
                    </div>
                    <a className="circle-dot" href="https://eazygrad.com/" target="_blank"> </a>
                    <div className="circle-extension"></div>
                </div>
                <div className="project project2 ">
                    <div className="project-img">
                        <div className="project-img-wrapper">
                            <a href="https://webdevenglish.com/" target="_blank" className=''>
                                <Image src={creditcard} width={150} height={100} alt="project image" draggable="false" className='shadow-lg px-24 py-4  rounded-lg bg-white text-center  lg:mb-0 mb-[-20px]' />

                            </a>

                        </div>
                    </div>
                    <div className="project-details mx-6">
                        <h3>Credit Card</h3>
                        <span className='font-medium'>HDFC Credit Cards: Your Gateway to a World of Possibilities</span>
                        <p className='mt-2'>
                        HDFC Bank offers a diverse range of credit cards tailored to meet various needs and lifestyles. From basic rewards cards to premium travel and lifestyle cards, you're sure to find the perfect card to elevate your financial journey.
                        </p>


                    </div>
                    <a className="circle-dot" href="https://webdevenglish.com/" target="_blank"></a>
                    <div className="circle-extension"></div>
                </div>
                <div className="project project3 ">

                    <div className="project-details mx-6">
                        <h3>Accessories</h3>
                        <span className='font-medium'>Accessories: The Finishing Touch</span>
                        <p className='mt-2'>
                        Accessories are the secret ingredient to elevating any outfit. They can transform a simple look into a statement, adding a touch of personality and style. Whether you're dressing up for a special occasion or keeping it casual, the right accessories can make all the difference.
                        </p>


                    </div>
                    <div className="project-img">
                        <div className="project-img-wrapper">
                            <a href="https://webdevenglish.com/" target="_blank" className=''>
                                <Image src={accessories} width={200} height={100} alt="project image" draggable="false" className='img px-24 py-4 shadow-lg  rounded-lg bg-white text-center  lg:mb-0 mb-[-20px]' />

                            </a>

                        </div>
                    </div>
                    <a className="circle-dot" href="https://webdevenglish.com/" target="_blank"></a>
                    <div className="circle-extension"></div>
                </div>




                <div className="vertical-line"></div>
            </section>
        </div>
    );
};

export default ProductsSection;
