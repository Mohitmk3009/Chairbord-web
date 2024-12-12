"use client";

import Image from "next/image";
import React, { useState } from "react";
import {
  Navbar,
  NavbarContent,
  NavbarItem,
  Link,
} from "@nextui-org/react";
import logo from "../assets/chairbord.png";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleScroll = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <Navbar className="bg-[#28272C] md:py-4 py-2 md:px-8  flex w-full  sticky top-0 z-50">
      {/* Logo */}
      <Image
        alt="Chairbord"
        src={logo}
        className="md:w-[200px] w-[140px] justify-start lg:ml-0 ml-[-10px]"
        width={200}
        height={50}
      />

      {/* Desktop Navbar */}
      <NavbarContent className="hidden sm:flex gap-10 text-xl w-full  pr-[200px] lg:justify-center" justify="center">
        <NavbarItem>
          <Link color="foreground" href="/">
            Home
          </Link>
        </NavbarItem>
        <NavbarItem>
          <button onClick={() => handleScroll("about")} className="text-white">
            About
          </button>
        </NavbarItem>
        <NavbarItem>
          <button onClick={() => handleScroll("members")} className="text-white">
            Members
          </button>
        </NavbarItem>
        <NavbarItem>
          <button onClick={() => handleScroll("products")} className="text-white">
            Products
          </button>
        </NavbarItem>
        
        <NavbarItem>
          <Link color="foreground" href="/contactus">
            Contact
          </Link>
        </NavbarItem>
      </NavbarContent>
      
      {/* Update Button */}
      {/* <NavbarContent>
        <NavbarItem>
          <Button className="bg-white/80 hidden backdrop-blur-lg text-black md:flex items-center font-medium text-lg gap-2 px-4 py-2 rounded-full shadow-lg hover:bg-white/50 transition">
            Check for updates
          </Button>
        </NavbarItem>
      </NavbarContent> */}

      {/* Mobile Hamburger */}
      <div className="sm:hidden z-[50] relative mr-[-10px]">
        <button
          onClick={toggleMenu}
          className={`relative w-10 h-10 flex-col flex gap-[5px] items-center justify-center focus:outline-none transition-all duration-500 ease-in-out ${
            isMenuOpen ? "open" : ""
          }`}
        >
          {/* Hamburger Bars */}
          <span
            className={`block w-7 h-[2px] bg-white rounded-full transform transition-transform duration-300 ease-in-out ${
              isMenuOpen ? "rotate-45 translate-y-1.5" : "rotate-0"
            }`}
          ></span>
          <span
            className={`block w-7 h-[2px] bg-white rounded-full transform transition-opacity duration-300 ease-in-out ${
              isMenuOpen ? "opacity-0" : "opacity-100"
            }`}
          ></span>
          <span
            className={`block w-7 h-[2px] bg-white rounded-full transform transition-transform duration-300 ease-in-out ${
              isMenuOpen ? "-rotate-45 -translate-y-2" : "rotate-0"
            }`}
          ></span>
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="absolute top-[100%] left-0  w-full bg-[#28272C] shadow-lg z-40">
          <ul className="flex flex-col items-center gap-4 py-4 text-lg text-white">
            <li>
              <Link color="foreground" href="/" onClick={toggleMenu}>
                Home
              </Link>
            </li>
            <li>
              <button
                onClick={() => {
                  handleScroll("about");
                  toggleMenu();
                }}
              >
                About
              </button>
            </li>
            <li>
              <button
                onClick={() => {
                  handleScroll("members");
                  toggleMenu();
                }}
              >
                Members
              </button>
            </li>
            <li>
              <button
                onClick={() => {
                  handleScroll("products");
                  toggleMenu();
                }}
              >
                Products
              </button>
            </li>
            
            <li>
              <Link color="foreground" href="/contactus" onClick={toggleMenu}>
                Contact
              </Link>
            </li>
          </ul>
        </div>
      )}
    </Navbar>
  );
};

export default Header;
