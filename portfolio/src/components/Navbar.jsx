import React from 'react';
import SvgLogo from '../assets/portfolio-svgrepo-com.svg';

function Navbar() {
  return (
    <nav className="bg-gray-800 text-white py-4 px-8 shadow-md fixed w-full top-0 z-10">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center space-x-4">
          <img src={SvgLogo} alt="Logo" className="h-8 w-8" />
          <h1 className="text-2xl font-bold">My Portfolio</h1>
        </div>
        <ul className="hidden md:flex space-x-6">
          {['Hero', 'About', 'Projects', 'Skills', 'Testimonials', 'Contact'].map((section) => (
            <li key={section}>
              <a
                href={`#${section.toLowerCase()}`}
                className="hover:text-gray-400 transition duration-300"
              >
                {section}
              </a>
            </li>
          ))}
        </ul>
        <button className="md:hidden text-white focus:outline-none">
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16m-7 6h7"
            ></path>
          </svg>
        </button>
      </div>
    </nav>
  );
}

export default Navbar;