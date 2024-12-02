"use client";

import Image from 'next/image';
import React from 'react';
import { Navbar, NavbarContent, NavbarItem,Link, Button } from "@nextui-org/react";
import logo from '../assets/chairbord.png';

const Header = () => {
  const handleScroll = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <Navbar className='bg-[#28272C] py-4 px-8 flex w-full justify-between sticky top-0 z-50'>
      <Image
        alt='Chairbord'
        src={logo}
        width={200}
        height={50}
      />
      <NavbarContent className="hidden sm:flex gap-10 text-xl" justify="center">
        <NavbarItem>
        <Link color="foreground" href="/">
            Home
          </Link>
        </NavbarItem>
        <NavbarItem>
          <button onClick={() => handleScroll('members')} className="text-white">
            Members
          </button>
        </NavbarItem>
        <NavbarItem>
          <button onClick={() => handleScroll('products')} className="text-white">
            Products
          </button>
        </NavbarItem>
        <NavbarItem>
          <button onClick={() => handleScroll('about')} className="text-white">
            About
          </button>
        </NavbarItem>
        <NavbarItem>
        <Link color="foreground" href="/contactus">
            Contact
          </Link>
        </NavbarItem>
      </NavbarContent>
      <NavbarContent>
        <NavbarItem>
          <Button
            className="bg-white/80 backdrop-blur-lg text-black flex items-center font-medium text-lg gap-2 px-4 py-2 rounded-full shadow-lg hover:bg-white/50 transition"
          >
            Check for updates
          </Button>
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
};

export default Header;
