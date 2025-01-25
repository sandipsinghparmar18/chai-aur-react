import React from 'react';
import profilePic from '../assets/profile.jpg';

function About() {
  return (
    <section id="about" className="about-section pt-20 py-12 px-8 bg-white" data-aos="fade-up" data-aos-duration="1000">
      <h2 className="text-3xl font-bold text-gray-800 text-center">About Me</h2>
      <p className="mt-4 text-gray-600 text-center max-w-2xl mx-auto">
        I’m a final-year Computer Science Engineering student with expertise in DSA using Java and
        full-stack development with the MERN stack. My passion lies in solving complex problems and
        building scalable applications.
      </p>
      <div className="mt-8 flex flex-col md:flex-row items-center justify-center space-y-8 md:space-y-0 md:space-x-8">
        <div className="w-full md:w-1/3 text-center">
          <img src={profilePic} alt="Profile" className="rounded-full mx-auto w-32 h-32" />
          <h3 className="text-xl font-bold text-gray-800 mt-4">John Doe</h3>
          <p className="text-gray-600">Full-Stack Developer</p>
        </div>
        <div className="w-full md:w-2/3">
          <h3 className="text-2xl font-bold text-gray-800">Skills & Expertise</h3>
          <ul className="mt-4 text-gray-600 list-disc list-inside">
            <li>Proficient in Java, JavaScript, and Python</li>
            <li>Experienced with React, Node.js, Express, and MongoDB</li>
            <li>Strong understanding of data structures and algorithms</li>
            <li>Knowledge of cloud services like AWS and Azure</li>
            <li>Excellent problem-solving and analytical skills</li>
          </ul>
          <h3 className="text-2xl font-bold text-gray-800 mt-8">Interests</h3>
          <p className="mt-4 text-gray-600">
            Apart from coding, I enjoy hiking, photography, and exploring new technologies. I am
            always eager to learn and take on new challenges.
          </p>
        </div>
      </div>
    </section>
  );
}

export default About;
