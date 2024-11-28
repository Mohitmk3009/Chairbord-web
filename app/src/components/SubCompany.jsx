'use client'
import { useEffect, useState, useRef } from 'react';
import fastag from '../assets/Fastag.png'
import creditcard from '../assets/creditcard.webp'
import gps from '../assets/gps.jpg'
import accessories from '../assets/Accessories.png'
import octabae from '../assets/octabae.png'
import proofito from '../assets/proofito.png'
import Image from 'next/image';

const SubCompany = () => {
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
        <div
            className="bg-white py-8"
            ref={sectionRef}
        >
            <div
                className={`transition-transform duration-700 ${inView ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                    }`}
            >
                <div className="flex flex-col items-center my-8 ">
                    <div className="flex items-center justify-center my-6 mt-[-34px] ">
                        <div className="flex-grow border-t border-gray-300 h-[1px] w-[150px]"></div>
                        <h2 className="text-center mx-4 text-2xl font-semibold text-black">Sub Companies</h2>
                        <div className="flex-grow border-t border-gray-300 h-[1px] w-[150px]"></div>
                    </div>
                    <div className="flex gap-14 text-black ">
                        <div className="shadow-lg  pt-5 rounded-lg bg-white text-center max-w-[300px] ">
                            <Image src={octabae} alt="FASTag" width={400} height={200} className="h-[160px] w-full " />
                            <div className='px-5 py-3 mt-4 bg-[#F5F5F5]'>
                                <p className=" flex justify-center  w-full font-bold text-xl">Octabae</p>
                                <p className="mt-3 flex justify-center  w-full text-xs text-justify">Lorem ipsum dolor sit amet consectetur. Est rutrum maecenas rhoncus faucibus commodo. Morbi elementum in tellus nibh mi lorem commodo a. Purus in nunc feugiat cras turpis.</p>
                            </div>

                        </div>
                        
                        <div className="shadow-lg  pt-5 rounded-lg bg-white text-center max-w-[300px] ">
                            <Image src={proofito} alt="FASTag" width={400} height={200} className="h-[160px] w-full " />
                            <div className='px-5 py-3 mt-4 bg-[#F5F5F5]'>
                                <p className=" flex justify-center  w-full font-bold text-xl">Proofito</p>
                                <p className="mt-3 flex justify-center  w-full text-xs text-justify">Lorem ipsum dolor sit amet consectetur. Est rutrum maecenas rhoncus faucibus commodo. Morbi elementum in tellus nibh mi lorem commodo a. Purus in nunc feugiat cras turpis.</p>
                            </div>

                        </div>
                        

                    </div>
                </div>
            </div>
        </div>
    );
};

export default SubCompany;
