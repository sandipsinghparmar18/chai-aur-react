import React from 'react';
import rentConnectImg from '../assets/rentconnect.png';

function Projects() {
  return (
    <section id="projects" className="py-12 px-8 bg-gray-100">
      <h2 className="text-3xl font-bold text-gray-800 text-center">Projects</h2>
      <div className="mt-8 flex flex-wrap justify-center">
        <div
          className="bg-white rounded-lg shadow-md max-w-md p-6 m-4"
          data-aos="zoom-in"
          data-aos-duration="1000"
        >
          <img
            src={rentConnectImg}
            alt="RentConnect Project"
            className="w-full rounded-lg mb-4"
          />
          <h3 className="text-xl font-bold text-gray-800">RentConnect</h3>
          <p className="text-gray-600 mt-2">
            A web application inspired by Airbnb, connecting property owners and renters. Built with
            JavaScript, EJS, Express, Node.js, and MongoDB.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Projects;
