import React from 'react';

function About() {
  return (
    <section
      id="about"
      className="py-12 px-8 bg-white"
      data-aos="fade-up"
      data-aos-duration="1000"
    >
      <h2 className="text-3xl font-bold text-gray-800 text-center">About Me</h2>
      <p className="mt-4 text-gray-600 text-center max-w-2xl mx-auto">
        I’m a final-year Computer Science Engineering student with expertise in DSA using Java and
        full-stack development with the MERN stack. My passion lies in solving complex problems and
        building scalable applications.
      </p>
    </section>
  );
}

export default About;
