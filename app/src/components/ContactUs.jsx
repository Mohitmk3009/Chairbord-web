import Image from "next/image";
import React from "react";
import phone from "../assets/phone-call.png";
import email from "../assets/email.png";
import address from "../assets/location.png";
import timing from "../assets/clock.png";
import backgroundImage from "../assets/contactus.png"; // Ensure the file path is correct

const ContactUs = () => {
    return (
        <div className="bg-gray-50">
            {/* Hero Section */}
            <div
                className="relative text-white text-center lg:py-20 py-8"
                style={{
                    backgroundImage: `url(${backgroundImage.src})`, // Use .src to get the resolved path
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                }}
            >
                {/* Overlay */}
                <div className="absolute inset-0 bg-black/50"></div>
                <div className="relative z-10">
                    <h1 className="lg:text-6xl text-3xl font-bold lg:mb-2">We&apos;re here to help.</h1>
                    <p className="lg:text-lg">Home &gt; Contact Us</p>
                </div>
            </div>

            {/* Contact Section */}
            <div className="container mx-auto px-4 lg:py-12 py-6">
                <h2 className="lg:text-4xl text-3xl font-bold text-gray-800 text-center lg:mb-6 mb-4">
                    Get in touch with us.
                </h2>
                <p className="text-center text-gray-600 lg:mb-8">
                    Want to get in touch? We&apos;d love to hear from you. Here&apos;s how you can
                    reach us...
                </p>

                <div className="lg:grid md:grid-cols-2 flex flex-col-reverse gap-8 ">
                    {/* Contact Info */}
                    <div className="gap-2 lg:grid lg:grid-cols-2  ">
                        <div className="flex items-center gap-4 ">
                            <Image
                                src={phone}
                                alt="Phone Icon"
                                className="w-[20px]"
                            />
                            <div className="lg:mt-7 ">
                                <p className="font-semibold lg:text-xl text-lg text-black">Call the helpline</p>
                                <p className="text-gray-600 lg:text-lg text-sm">+91-9269666646</p>
                            </div>
                        </div>
                        <div className="flex items-center gap-4 ">
                            <Image
                                src={email}
                                alt="Email Icon"
                                className="w-[20px]"
                            />
                            <div className="lg:mt-7 mt-2">
                                <p className="font-semibold lg:text-xl text-lg text-black">Email us:</p>
                                <p className="text-gray-600 lg:text-lg text-sm">connect@chairbord.com</p>
                            </div>
                        </div>
                        <div className="flex items-center gap-4 lg:mt-[-50px]">
                            <Image
                                src={address}
                                alt="Location Icon"
                                className="w-[20px]"
                            />
                            <div className="lg:mt-12  mt-2">
                                <p className="font-semibold lg:text-xl text-lg text-black">Location:</p>
                                <p className="text-gray-600 lg:w-5/6 text-justify lg:text-lg text-sm">
                                ChairBord pvt ltd 13, Sapna towar, near Marudhar Mart, Kalwar road, Govindpura, Jaipur, Rajasthan-302012
                                </p>
                            </div>
                        </div>
                        <div className="flex items-center gap-4 lg:mt-[-50px]">
                            <Image
                                src={timing}
                                alt="Clock Icon"
                                className="w-[20px]"
                            />
                            <div className="lg:mt-7 mt-2">
                                <p className="font-semibold lg:text-xl text-lg text-black">Work Hours:</p>
                                <p className="text-gray-600 lg:text-lg text-sm">Mon - Sat: 10am - 7pm</p>
                            </div>
                        </div>
                    </div>

                    {/* Contact Form */}
                    <div className="bg-white lg:p-8 p-4 shadow-lg rounded-lg mt-6 lg:mt-0">
                        <form>
                            <div className="lg:grid grid-cols-2 flex flex-col gap-4 mb-4">
                                <input
                                    type="text"
                                    placeholder="What's your name?"
                                    className="col-span-1 border-[.5px] border-gray-500 focus:border-black rounded-lg px-4 py-2 w-full text-gray-700"
                                />
                                <input
                                    type="text"
                                    placeholder="Enter Mobile Number"
                                    className="col-span-1 border-[.5px] border-gray-500 focus:border-black rounded-lg px-4 py-2 w-full text-gray-700"
                                />
                            </div>
                            <textarea
                                placeholder="Your message..."
                                className="border-[.5px] border-gray-500 focus:border-black rounded-lg px-4 py-2 w-full mb-4 text-gray-700"
                                rows="4"
                            ></textarea>
                            <p className="text-xs text-justify text-gray-500 mb-4">
                                By submitting this form, you agree to receive occasional
                                messages about our products and services via mobile. You can
                                opt-out at any time, and we will never share your mobile number
                                with third parties.
                            </p>
                            <button
                                type="submit"
                                className="w-full bg-[#00B4FF] text-white py-2 rounded-lg font-semibold"
                            >
                                Submit Now
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactUs;
