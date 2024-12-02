'use client'
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import about from '../assets/about.jpg';

const AboutUs = () => {
    const [hasAnimated, setHasAnimated] = useState(false); // To ensure animation only triggers once
    const sectionRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                const [entry] = entries;

                // Trigger animation only when it comes into view for the first time
                if (entry.isIntersecting) {
                    setHasAnimated(true);
                }
            },
            { threshold: 0.5 } // Trigger when 50% of the element is visible
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
        <section
            ref={sectionRef}
            className="bg-[#F5F5F5] lg:py-10 py-10 px-5  lg:px-16 "
        >
            <div className="flex items-center justify-center lg:my-6  my-2  mt-[-30px] lg:mt-[-25px]  ">
                <div className="flex-grow border-t border-gray-300 h-[1px] max-w-[150px]"></div>
                <h2 className="text-center mx-4 lg:text-2xl text-lg font-semibold text-black">About us</h2>
                <div className="flex-grow border-t border-gray-300 h-[1px] max-w-[150px]"></div>
            </div>
            <div className="lg:max-w-[1600px] w-full mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Left Section */}
                <div
                    className={` bg-white rounded-lg lg:p-8 p-4 shadow-md transition-all duration-700 ease-in-out ${hasAnimated ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                        }`}
                >
                    <h4 className="text-[#00B4FF] lg:text-2xl text-lg font-semibold lg:mb-3 mb-1">
                        About us
                    </h4>
                    <h2 className=" text-black lg:text-4xl text-xl text-justify font-bold lg:mb-6 mb-2">
                        Chairbord Private Limited: Your Trusted Partner for Smart Mobility Solutions

                    </h2>
                    <p className="text-gray-600 text-sm text-justify leading-relaxed lg:mb-4 mb-2">

                        At Chairbord, we&apos;re passionate about revolutionizing the way you travel. As a leading provider of innovative mobility solutions, we&apos;re committed to simplifying your journey and enhancing your overall experience.

                    </p>
                    <section id="section5" className="text-black lg:text-base text-sm">
                        <h2 className="lg:text-xl text-lg  font-semibold ">Our Expertise:</h2>

                        <ul className="list-disc pl-6 mt-2 space-y-3">
                            <li>
                                <span className="font-bold">FASTag:</span> Seamless toll payments, saving you time and hassle.
                            </li>
                            <li>
                                <span className="font-bold">GPS Tracking:</span> Real-time vehicle monitoring for enhanced security and efficiency.
                            </li>
                        </ul>
                        <h2 className="lg:text-xl text-lg font-semibold lg:mt-4 mt-2 ">Why Choose Chairbord?</h2>

                        <ul className="list-disc pl-6 mt-2 space-y-3">
                            <li>
                                <span className="font-bold">Trusted and Reliable:</span> Backed by a strong network of 1000+ agents and 25+ dedicated employees.
                            </li>
                            <li>
                                <span className="font-bold">Customer-Centric Approach:</span> We prioritize your needs and provide exceptional support.
                            </li>
                            <li>
                                <span className="font-bold">Cutting-Edge Technology:</span> We leverage the latest advancements to deliver state-of-the-art solutions.
                            </li>
                            <li>
                                <span className="font-bold">Commitment to Excellence:</span> We strive for continuous improvement and customer satisfaction.
                            </li>
                        </ul>
                    </section>
                    <p className="text-gray-600 mt-4 lg:text-base text-sm leading-relaxed lg:mb-4 mb-2 ">

                        Whether you&apos;re an individual or a business, Chairbord has the perfect solution for you. Explore our range of products and services, and experience the future of mobility.

                    </p>
                    <p className="text-[#00B4FF] lg:text-4xl text-lg  flex justify-center font-extrabold leading-relaxed ">

                        Join the Chairbord Family Today!

                    </p>
                </div>

                {/* Right Section */}
                <div
                    className={`bg-white rounded-lg lg:p-8 p-4 shadow-md transition-all duration-700 ease-in-out ${hasAnimated ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                        }`}
                >
                    <Image
                        src={about} // Replace with the actual image path
                        alt="Team Working"
                        width={400}
                        height={400}
                        className="rounded-lg h-auto object-cover w-full"
                    />
                    {/* Statistics Section */}
                    <div className="grid grid-cols-2 mt-4 gap-4">
                        {[
                            { value: "4", label: "Years Experience" },
                            { value: "5", label: "Trusted Banks" },
                            { value: "200+", label: "Positive Reviews" },
                            { value: "2000", label: "Trusted Agents" },
                        ].map((item, index) => (
                            <div
                                key={index}
                                className="bg-gray-50 shadow-sm rounded-lg lg:p-4 p-2 text-center"
                            >
                                <h3 className="lg:text-2xl text-xl font-bold text-gray-900">{item.value}</h3>
                                <p className="text-gray-600 text-xs lg:text-base">{item.label}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutUs;
