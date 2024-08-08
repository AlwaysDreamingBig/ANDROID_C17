import React from "react";
import Section from "./Section";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';

const Footer = () => {
  return (
    <Section crosses className="!px-0 !py-10 bg-gradient-to-b from-n-8/0 to-n-8/90">
        <div className="container mx-auto px-4 lg:grid lg:grid-cols-2">
            {/* Logo and About Us */}
            <div className='hidden lg:flex'>
                <div className="w-full mb-6 md:mb-0" id={'aboutus'}>
                    <h1 className="text-3xl font-bold mb-4">About Us:</h1>
                    <p className="text-gray-400 font-serif ">
                        We are a dedicated team of professionals committed to delivering top-notch solutions and exceptional experiences. Our mission is to innovate and create products that not only meet but exceed our customers' expectations. With a passion for excellence and a drive for continuous improvement, we strive to make a positive impact in every project we undertake.
                    </p>
                    <p className="text-gray-400 font-serif mt-2 sm:block hidden">Step into Android-17 and discover a world where strategic depth, cooperative gameplay, and dynamic environments converge. Customize your journey and lead your team to victory.</p>
                    <p className="text-gray-400 font-serif ">
                        We are a dedicated team of professionals committed to delivering top-notch solutions and exceptional experiences. Our mission is to innovate and create products that not only meet but exceed our customers' expectations. With a passion for excellence and a drive for continuous improvement, we strive to make a positive impact in every project we undertake.
                    </p>
                </div>

                <div className="w-px bg-gray-600 h-full"></div>
            </div>


            <div className='items-center'>
                <div className='container items-center'>
                    <div className="flex justify-between mb-8">
                        {/* Navigation Links */}
                        <div className="w-full mb-6 md:mb-0 flex flex-col items-center mx-auto">
                            <h2 className="text-xl font-semibold mb-4 text-center">Quick Links</h2>
                            <ul className="list-none text-center">
                                <li className="mb-2"><a href="/aboutus" className="hover:text-gray-400">About Us</a></li>
                                <li className="mb-2"><a href="/services" className="hover:text-gray-400">Services</a></li>
                                <li className="mb-2"><a href="/contact" className="hover:text-gray-400">Contact</a></li>
                                <li><a href="/privacy" className="hover:text-gray-400">Privacy Policy</a></li>
                            </ul>
                        </div>

                        {/* Social Media Links */}
                        <div className="w-full mb-6 md:mb-0 flex flex-col items-center mx-auto mt-10">
                            <h2 className="text-xl font-semibold mb-4 text-center">Follow Us</h2>
                            <div className="flex space-x-4">
                                <a href="https://facebook.com" className="text-gray-400 hover:text-white rounded-full bg-green-100 p-2">
                                <FaFacebookF size={30} />
                                </a>
                                <a href="https://twitter.com" className="text-gray-400 hover:text-white bg-green-100 p-2">
                                <FaTwitter size={30} />
                                </a>
                                <a href="https://instagram.com" className="text-gray-400 hover:text-white rounded-full bg-green-100 p-2">
                                <FaInstagram size={30} />
                                </a>
                                <a href="https://linkedin.com" className="text-gray-400 hover:text-white bg-green-100 p-2">
                                <FaLinkedinIn size={30} />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

                <div>
                    <hr className="my-4 border-gray-600" />

                    {/* Contact Information */}
                    <div className="text-center mb-6">
                        <p className="text-gray-400">Email: fakeemail@bytheway.com</p>
                        <p className="text-gray-400">Phone: (033) 456-789-560</p>
                    </div>

                    {/* Newsletter Signup (Optional) */}
                    <div className="text-center mb-6">
                        <h2 className="text-xl font-semibold mb-4">Subscribe to Our Newsletter</h2>
                        <form className="flex justify-center">
                        <input
                            type="email"
                            placeholder="Your email"
                            className="p-2 rounded-l-lg text-gray-900"
                        />
                        <button
                            type="submit"
                            className="bg-blue-500 text-white p-2 rounded-r-lg hover:bg-blue-600"
                        >
                            Subscribe
                        </button>
                        </form>
                    </div>  

                    {/* Copyright Notice */}
                    <div className="text-center text-gray-500">
                        <p>&copy; {new Date().getFullYear()} Your Company. All rights reserved.</p>
                    </div>
                </div>
            </div>
        </div>
    </Section>
  );
};

export default Footer;