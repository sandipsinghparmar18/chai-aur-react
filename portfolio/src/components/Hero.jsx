import React from 'react';
import profileImg from '../assets/profile.jpg';

function Hero() {
  return (
    <section className="bg-gray-900 text-white py-20 text-center relative">
      <img
        src={profileImg}
        alt="Profile"
        className="w-32 h-32 rounded-full mx-auto mb-6 shadow-lg"
      />
      <h1 className="text-4xl font-bold">Hi, I'm [Your Name]</h1>
      <p className="text-xl mt-4">Final-Year Computer Science Student | MERN Stack Developer</p>
      <a
        href="#contact"
        className="mt-6 inline-block bg-teal-500 text-white py-2 px-6 rounded-full shadow-lg hover:bg-teal-600 transition duration-300"
      >
        Contact Me
      </a>
    </section>
  );
}

export default Hero;
