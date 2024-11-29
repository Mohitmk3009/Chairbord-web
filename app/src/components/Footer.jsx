import Image from 'next/image'
import React from 'react'
import { Link } from "@nextui-org/react";
import logo from '../assets/chairbord.png'
import 'remixicon/fonts/remixicon.css'; // Remix Icon CSS

const Footer = () => {
    return (
        <footer className="bg-[#28272C] text-white py-10 pl-48 ">
            <div className="w-fit  grid grid-cols-1 md:grid-cols-3 gap-32">
                {/* About Us Section */}
                <div className="flex flex-col gap-8">
                    <Image
                        src={logo}
                        width={200}
                        height={50}
                        alt="Chairbord Logo"
                    />
                    <h2 className="text-3xl font-bold text-[#00B4FF]">ABOUT US</h2>
                    <p className="text-lg text-justify mt-[-20px] text-gray-300">
                        At Chairbord, we're passionate about revolutionizing the way you travel. As a leading provider of innovative mobility solutions, we're committed to simplifying your journey and enhancing your overall experience.

                    </p>
                </div>

                {/* Quick Links Section */}
                <div>
                    <div>
                        <h2 className="text-3xl font-bold text-[#00B4FF] mb-2">QUICK LINKS</h2>
                        <ul className="gap-2 text-lg grid-cols-2 grid text-gray-300">
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
                    <div>
                        <h2 className="text-3xl font-bold text-[#00B4FF]  mt-6 mb-2 ">ADDRESS</h2>
                        <p className="text-lg text-gray-300">
                            314, 3rd floor, HB Twin Tower, Netaji Subhash Place,<br /> New Delhi - 110034
                        </p>
                    </div>


                </div>

                {/* Address & Contact Section */}
                <div>

                    <div>
                        <h2 className="text-3xl font-bold text-[#00B4FF] mb-2  ">CONTACT</h2>
                        <p className="text-lg text-gray-300">
                            Email: info@genuinemark.org
                            <br />
                            Mob: +91 8866296868
                        </p>
                    </div>
                    <div>
                        <h2 className="text-3xl font-bold text-[#00B4FF] mt-6 mb-2">SOCIALIZE</h2>
                        <div className="flex space-x-4">
                            <Link
                                href="https://linkedin.com/in/mohit-kumar-b161a322a"
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

                </div>

                {/* Socialize Section */}

            </div>
        </footer>
    );
};

export default Footer;
