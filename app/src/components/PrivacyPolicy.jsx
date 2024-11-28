// pages/privacy-policy.js
import React from "react";

const PrivacyPolicy = () => {
    return (
        <div className="flex flex- bg-white md:flex-row text-black px-20 py-20 space-y-6 md:space-y-0 md:space-x-10 text-justify">
            {/* Left Content: Privacy Policy Details */}
            <div className="w-full md:w-3/4 space-y-6 overflow-y-auto pr-5 max-h-[80vh]">
                <h1 className="text-3xl font-bold">Privacy Policy</h1>
                <p className=" text-sm">Last Updated May 23rd, 2022</p>

                <p>
                    At CHAIRBORD PVT LTD (“we,” “us,” or “our”), we respect your privacy and are committed to protecting the personal information you share with us. This Privacy Policy outlines how we collect, use, and safeguard your data when you use our website and services.
                    By using our website or services, you agree to the collection and use of information as outlined in this Privacy Policy. If you do not agree with the practices described herein, please do not use our services.

                </p>

                <section id="section1">
                    <h2 className="text-xl font-semibold ">1. Information We Collect</h2>
                    <p className="mt-2">
                        We may collect the following types of personal information when you interact with us:
                    </p>
                    <ul className="list-disc pl-6 mt-2 space-y-2">
                        <li>
                            <span className="font-bold">Personal Information:</span> Name, address, email address, phone number, and other personal identifiers.
                        </li>
                        <li>
                            <span className="font-bold">Transaction Information:</span> Details related to the services you purchase or transactions you perform.
                        </li>
                        <li>
                            <span className="font-bold">Device Information:</span> Information about the device you use to access our services, including IP address, browser type, and operating system.
                        </li>
                        <li>
                            <span className="font-bold">Location Information:</span> We may collect and process information about your location if you allow us to do so.
                        </li>
                    </ul>
                    
                </section>
                <section id="section2">
                    <h2 className="text-xl font-semibold ">2. How We Use Your Information</h2>
                    <p className="mt-2">
                    We use the information we collect for the following purposes:
                    </p>
                    <ul className="list-disc pl-6 mt-2 space-y-2">
                        <li>
                            <span className="font-bold">To Provide Services:</span> To offer and manage the services you request from us.
                        </li>
                        <li>
                            <span className="font-bold">To Improve Our Services:</span> To understand how you use our services and make improvements.
                        </li>
                        <li>
                            <span className="font-bold">To Communicate with You:</span> For administrative purposes, to notify you about important changes, or to respond to your queries.
                        </li>
                        <li>
                            <span className="font-bold">For Marketing:</span> We may send you promotional materials, but only if you have opted in to receive them.
                        </li>
                        <li>
                            <span className="font-bold">For Legal and Security Reasons:</span> To comply with applicable laws and regulations or to protect our rights and the rights of others.
                        </li>
                    </ul>
                </section>
                <section id="section3">
                    <h2 className="text-xl font-semibold ">3. Data Sharing</h2>
                    <p className="mt-2">
                    We do not sell, trade, or rent your personal information to third parties. However, we may share your data with:
                    </p>
                    <ul className="list-disc pl-6 mt-2 space-y-2">
                        <li>
                            <span className="font-bold">Service Providers:</span> Companies that provide services on our behalf (e.g., payment processors, customer support).
                        </li>
                        <li>
                            <span className="font-bold">Legal Authorities:</span> When required to do so by law or to comply with legal processes.
                        </li>
                        
                    </ul>
                </section>
                <section id="section4">
                    <h2 className="text-xl font-semibold ">4. Data Security</h2>
                    <p className="mt-2">
                    We take reasonable steps to protect your personal information from unauthorized access, use, or disclosure. However, no online system is 100% secure, and we cannot guarantee the absolute security of your data.
                    </p>
                    
                </section>
                <section id="section5">
                    <h2 className="text-xl font-semibold ">5. Your Choices</h2>
                    <p className="mt-2">
                    You have the following rights regarding your personal information:
                    </p>
                    <ul className="list-disc pl-6 mt-2 space-y-2">
                        <li>
                            <span className="font-bold">Access:</span> You can request access to the personal data we hold about you.
                        </li>
                        <li>
                            <span className="font-bold">Correction:</span> You can request that we correct any inaccuracies in your data.
                        </li>
                        <li>
                            <span className="font-bold">Deletion:</span> You can request that we delete your personal information under certain circumstances.
                        </li>
                    </ul>
                </section>
                <section id="section6">
                    <h2 className="text-xl font-semibold ">6. Cookies and Tracking Technologies</h2>
                    <p className="mt-2">
                    Our website uses cookies and similar technologies to enhance your experience. You can control the use of cookies through your browser settings.
                    </p>
                    
                </section>
                <section id="section7">
                    <h2 className="text-xl font-semibold ">7. Third-Party Links</h2>
                    <p className="mt-2">
                    Our website may contain links to third-party websites. We are not responsible for the privacy practices or content of these third-party sites.
                    </p>
                    
                </section>
                <section id="section8">
                    <h2 className="text-xl font-semibold ">8. Changes to the Privacy Policy</h2>
                    <p className="mt-2">
                    We may update this Privacy Policy from time to time. Any changes will be posted on this page, and your continued use of the website or services after such changes have been posted will constitute your agreement to the revised policy.
                    </p>
                    
                </section>
                <section id="section9">
                    <h2 className="text-xl font-semibold ">9. Contact Information</h2>
                    <p className="mt-2">
                    If you have any questions or concerns about this Privacy Policy or our data practices, please contact us using the contact information provided on our website.
                    </p>
                    
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
                            1. Information We Collect
                            </a>
                        </li>
                        <li>
                            <a href="#section2" className="hover:underline">
                            2. How We Use Your Information
                            </a>
                        </li>
                        <li>
                            <a href="#section3" className="hover:underline">
                            3. Data Sharing
                            </a>
                        </li>
                        <li>
                            <a href="#section4" className="hover:underline">
                            4. Data Security
                            </a>
                        </li>
                        <li>
                            <a href="#section5" className="hover:underline">
                            5. Your Choices
                            </a>
                        </li>
                        <li>
                            <a href="#section6" className="hover:underline">
                            6. Cookies and Tracking Technologies
                            </a>
                        </li>
                        <li>
                            <a href="#section7" className="hover:underline">
                            7. Third-Party Links
                            </a>
                        </li>
                        <li>
                            <a href="#section8" className="hover:underline">
                            8. Changes to the Privacy Policy
                            </a>
                        </li>
                        <li>
                            <a href="#section9" className="hover:underline">
                            9. Contact Information
                            </a>
                        </li>
                        {/* Add more links as needed */}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default PrivacyPolicy;
