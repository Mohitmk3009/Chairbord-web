// pages/privacy-policy.js
import React from "react";
import backgroundImage from "../assets/contactusbg.jpg";
const CancellationPolicy = () => {
    return (
        <>
        <div
                className="relative text-white text-center py-20"
                style={{
                    backgroundImage: `url(${backgroundImage.src})`, // Use .src to get the resolved path
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                }}
            >
                {/* Overlay */}
                <div className="absolute inset-0 bg-black/50"></div>
                <div className="relative z-10">
                    <h1 className="text-6xl font-bold mb-2">We&apos;re here to help.</h1>
                    <p className="text-lg">Home &gt; Privacy Policy</p>
                </div>
            </div>
        <div className="flex flex- bg-white md:flex-row text-black px-20 py-20 space-y-6 md:space-y-0 md:space-x-10 text-justify">
            {/* Left Content: Privacy Policy Details */}
            <div className="w-full md:w-3/4 space-y-6 overflow-y-auto pr-5 max-h-[80vh]">
                <h1 className="text-3xl font-bold">Cancellation & Refund Policy</h1>
                <p className=" text-sm">Last Updated May 23rd, 2022</p>

                <section id="section1">
                    <h2 className="text-xl font-semibold ">Cancellation & Refund Policy</h2>
                    <p className="mt-2">
                    CHAIRBORD PVT LTD believes in helping its customers as far as possible, and has therefore a liberal cancellation policy. Under this policy:

                    </p>
                    <ul className="list-disc pl-6 mt-2 space-y-2">
                        <li>
                            Cancellations will be considered only if the request is made immediately after placing the order. However, the cancellation request may not be entertained if the orders have been communicated to the vendors/merchants and they have initiated the process of shipping them.

                        </li>
                        <li>
                        CHAIRBORD PVT LTD does not accept cancellation requests for damageable items like glass, chips etc. However, refund/replacement can be made if the customer establishes that the quality of product delivered is not good.

                        </li>
                        <li>
                        In case of receipt of damaged or defective items please report the same to our Customer Service team. The request will, however, be entertained once the merchant has checked and determined the same at his own end. This should be reported within 7 Days days of receipt of the products. In case you feel that the product received is not as shown on the site or as per your expectations, you must bring it to the notice of our customer service within 7 Days days of receiving the product. The Customer Service Team after looking into your complaint will take an appropriate decision.

                        </li>
                        <li>
                        In case of complaints regarding products that come with a warranty from manufacturers, please refer the issue to them. In case of any Refunds approved by the CHAIRBORD PVT LTD, it’ll take 6-8 Days days for the refund to be processed to the end customer.

                        </li>
                    </ul>
                    
                </section>
                {/* Add more sections as needed */}
            </div>

            {/* Right Content: Sticky Table of Contents */}
            <div className="w-full md:w-1/4 md:sticky top-8">
                <div className="bg-gray-100 p-4 rounded-lg shadow-md space-y-4">
                    <h2 className="text-2xl font-semibold">Table of contents</h2>
                    <ul className=" space-y-2">
                        <li>
                            <a href="#section1" className="hover:underline">
                            1. Cancellation & Refund Policy
                            </a>
                        </li>
                        
                        {/* Add more links as needed */}
                    </ul>
                </div>
            </div>
        </div>
        </>
    );
};

export default CancellationPolicy;
