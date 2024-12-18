import Image from 'next/image'
import React from 'react'
import { Link } from "@nextui-org/react";
import logo from '../assets/chairbord.png'
import 'remixicon/fonts/remixicon.css'; // Remix Icon CSS

const Footer = () => {
    return (
        <footer className="bg-[#28272C] text-white  lg:px-40 px-5">
            <div className="w-full lg:flex lg:py-10 pt-10 justify-between ">
                {/* About Us Section */}
                <div className="flex flex-col mb-5 lg:mb-0">
                    <Image
                        src={logo}
                        width={300}
                        height={100}
                        className='lg:w-[300px] w-[200px]'
                        alt="Chairbord Logo"
                    />
                    
                    {/* <h2 className="text-3xl font-bold text-[#00B4FF]">ABOUT US</h2> */}
                    {/* <p className="text-lg text-justify mt-[-20px] text-gray-300">
                        At Chairbord, we&apos;re passionate about revolutionizing the way you travel. As a leading provider of innovative mobility solutions, we&apos;re committed to simplifying your journey and enhancing your overall experience.

                    </p> */}
                </div>

                {/* Quick Links Section */}
                <div>
                    <div>
                        <h2 className="lg:text-3xl text-xl font-bold text-[#00B4FF] mb-2 ">QUICK LINKS</h2>
                        <ul className="gap-2 lg:text-lg  grid-cols-1 grid text-gray-300">
                            <Link href="/" className=" outline-none">
                                Home
                            </Link>
                            <Link href="/contactus" className=" outline-none">
                                Contact us
                            </Link>
                            <Link href="/privacypolicy" className=" outline-none">
                                Privacy policy
                            </Link>
                            <Link href="/cancellationpolicy" className=" outline-none">
                                Cancellation policy
                            </Link>
                            <Link href="/termsandconditions" className=" outline-none">
                                Terms & conditions
                            </Link>
                        </ul>
                    </div>
                    


                </div>

                {/* Address & Contact Section */}
                
                <div className='flex flex-col'>
                <div>
                        <h2 className="lg:text-3xl text-xl font-bold text-[#00B4FF]  mb-2 mt-4 lg:mt-0 ">ADDRESS</h2>
                        <p className="lg:text-lg text-gray-300">
                        ChairBord pvt ltd 13, Sapna towar, near Marudhar Mart, Kalwar road, <br /> Govindpura, Jaipur, Rajasthan-302012
                        </p>
                    </div>
                    <div>
                        <h2 className="lg:text-3xl text-xl font-bold text-[#00B4FF] mt-4 mb-2">CONTACT</h2>
                        <p className="lg:text-lg text-gray-300">
                            Email: connect@chairbord.com
                            <br />
                            Mob: +91-9269666646
                        </p>
                    </div>
                </div>
                    
                    <div>
                        <h2 className="lg:text-3xl text-xl font-bold text-[#00B4FF] lg:mt-0 mt-4  mb-2">SOCIALIZE</h2>
                        <div className="flex space-x-4">
                            <Link
                                href="https://www.linkedin.com/company/chairbord/posts/?feedView=all"
                                className="text-white hover:bg-white bg-[#00B4FF]/15 px-2 py-1 rounded-full hover:text-[#0A66C2]"
                            >
                                <i className="ri-linkedin-fill text-2xl"></i> {/* Remix Icon LinkedIn */}
                            </Link>
                            <Link
                                href="https://facebook.com"
                                className="text-white hover:bg-white bg-[#00B4FF]/15 px-2 py-1 rounded-full hover:text-[#1877F2]"
                            >
                                <i className="ri-facebook-fill text-2xl"></i> {/* Remix Icon Facebook */}
                            </Link>
                            <Link
                                href="https://twitter.com"
                                className="text-white hover:bg-white bg-[#00B4FF]/15 px-2 py-1 rounded-full hover:text-[#0A66C2]"
                            >
                                <i className="ri-twitter-fill text-2xl"></i> {/* Remix Icon Twitter */}
                            </Link>                        </div>
                    </div>


                {/* Socialize Section */}

            </div>
            <div className="lg:h-full lg:my-auto lg:pb-5 py-5 lg:py-0">
                    <h1 className="text-gray-300 md:text-lg  text-[12px] text-center font-medium ">
                        Copyright &copy; 2024 Chairbord Pvt. Ltd. All rights reserved.
                    </h1>
                </div>
        </footer>
    );
};

export default Footer;
