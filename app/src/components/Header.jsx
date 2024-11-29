import Image from 'next/image'
import React from 'react'
import { Navbar, NavbarContent, NavbarItem, Link, Button } from "@nextui-org/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import logo from '../assets/chairbord.png'
const Header = () => {
  return (
    <Navbar className='bg-[#28272C] py-4 px-8 flex w-full justify-between'>
      <Image
        src={logo}
        width={200}
        height={50}
      />
      <NavbarContent className="hidden sm:flex gap-10 text-xl " justify="center">
        <NavbarItem>
          <Link color="foreground" href="/">
            Home
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="#">
            Members
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="/products">
            Products
          </Link>
        </NavbarItem>
        <NavbarItem isActive>
          <Link href="#" aria-current="page">
          About
          </Link>
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
      {/* <FontAwesomeIcon icon={faArrowRight} className="text-black" /> */}
    </Button>
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  )
}

export default Header