import React from 'react';

function Navbar() {
  return (
    <nav className="bg-gray-800 text-white py-4 px-8 shadow-md fixed w-full top-0 z-10">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold">My Portfolio</h1>
        <ul className="flex space-x-6">
          {['About', 'Projects', 'Skills', 'Testimonials', 'Contact'].map((section) => (
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
      </div>
    </nav>
  );
}

export default Navbar;
