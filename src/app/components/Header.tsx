"use client";
import React, { useState } from 'react';
import Link from 'next/link';
import { GiHamburgerMenu } from 'react-icons/gi';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div>
      <nav className="bg-sky-800 p-5">
        <div className="max-w-4xl mx-auto flex items-center justify-between">
          {/* Logo and Heading */}
          <div className="flex items-center space-x-4">
            <h2 className="text-white font-semibold text-xl">
              Free Education Program on Latest Technologies
            </h2>
          </div>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex space-x-8">
            <Link href="/" className="text-white hover:text-gray-300 font-bold">
              Home
            </Link>
            <Link href="/apply" className="text-white hover:text-gray-300 font-bold">
              Apply
            </Link>
            <Link href="/jobs" className="text-white hover:text-gray-300 font-bold">
              Jobs
            </Link>
            <Link href="/result" className="text-white hover:text-gray-300 font-bold">
              Result
            </Link>
          </div>

          {/* Menu Button */}
          <button
            className="md:hidden text-white text-2xl focus:outline-none"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <GiHamburgerMenu />
          </button>
        </div>

        {/* Mobile Navigation Links */}
        {menuOpen && (
          <div className="md:hidden mt-4 flex flex-col space-y-4">
            <Link href="/" className="text-white hover:text-gray-300 font-bold">
              Home
            </Link>
            <Link href="/apply" className="text-white hover:text-gray-300 font-bold">
              Apply
            </Link>
            <Link href="/jobs" className="text-white hover:text-gray-300 font-bold">
              Jobs
            </Link>
            <Link href="/result" className="text-white hover:text-gray-300 font-bold">
              Result
            </Link>
          </div>
        )}
      </nav>
    </div>
  );
};

export default Header;
