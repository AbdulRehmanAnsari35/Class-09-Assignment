import React from 'react';
import Link from 'next/link';

const Header = () => {
  return (
    <div>
      <nav className="bg-sky-800 p-5 ">
        <div className="max-w-4xl mx-auto flex items-center justify-between">
          {/* Logo and Heading */}
          <div className="flex items-center space-x-4">
            <h2 className="text-white font-semibold text-xl sm:text-2xl">
              Free Education Program on Latest Technologies
            </h2>
          </div>

          {/* Navigation Links */}
          <div className="flex flex-wrap space-x-8 sm:flex-row sm:space-x-8">
            <Link href="/" className="text-white hover:text-gray-300 font-bold">Home</Link>
            <Link href="/apply" className="text-white hover:text-gray-300 font-bold">Apply</Link>
            <Link href="/jobs" className="text-white hover:text-gray-300 font-bold">Jobs</Link>
            <Link href="/result" className="text-white hover:text-gray-300 font-bold">Result</Link>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
