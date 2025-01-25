// import React from "react";

// function Contact() {
//   return (
//     <section
//       id="contact"
//       className="py-16 bg-black text-white flex flex-col items-center justify-center"
//     >
//       <h2 className="text-4xl font-bold mb-6">Keep In Touch.</h2>
//       <p className="text-lg text-gray-400 text-center mb-8 max-w-2xl">
//         I'm currently specializing in{" "}
//         <span className="text-teal-400">Full-Stack Development</span>. Feel free
//         to get in touch and talk more about your projects.
//       </p>

//       {/* Buttons */}
//       <div className="flex space-x-6 mb-12">
//         <a
//           href="https://www.linkedin.com/"
//           target="_blank"
//           rel="noopener noreferrer"
//           className="flex items-center bg-gray-800 hover:bg-teal-500 px-6 py-3 rounded-lg transition-all duration-300"
//         >
//           <img
//             src="https://cdn-icons-png.flaticon.com/512/3536/3536505.png"
//             alt="LinkedIn"
//             className="w-5 h-5 mr-2"
//           />
//           LinkedIn
//         </a>
//         <a
//           href="mailto:your-email@example.com"
//           className="flex items-center bg-gray-800 hover:bg-teal-500 px-6 py-3 rounded-lg transition-all duration-300"
//         >
//           <img
//             src="https://cdn-icons-png.flaticon.com/512/732/732200.png"
//             alt="Email"
//             className="w-5 h-5 mr-2"
//           />
//           Email
//         </a>
//         <a
//   href="/Resume.pdf"
//   download="Sandip_Resume.pdf" // Provide the desired file name for the download
//   className="flex items-center bg-gray-800 hover:bg-teal-500 px-6 py-3 rounded-lg transition-all duration-300"
// >
//   <img
//     src="https://cdn-icons-png.flaticon.com/512/685/685676.png"
//     alt="Resume"
//     className="w-5 h-5 mr-2"
//   />
//   Resume
// </a>

//       </div>

//       {/* Footer */}
//       <div className="text-sm text-gray-500 text-center">
//         Designed and Developed by{" "}
//         <span className="text-teal-400">[Your Name]</span>.
//         <br />
//         Built with <span className="text-teal-400">React.js & Tailwind CSS</span>.
//         Hosted on <span className="text-teal-400">Vercel</span>.
//       </div>
//     </section>
//   );
// }

// export default Contact;


import React from "react";

function Contact() {
  return (
    <section
      id="contact"
      className="py-16 bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 text-white flex flex-col items-center justify-center relative"
    >
      <div className="absolute inset-0 bg-black opacity-50 z-0"></div>
      <div className="container mx-auto px-4 relative z-10">
        <h2 className="text-4xl font-bold mb-6 text-center">Keep In Touch</h2>
        <p className="text-lg text-gray-400 text-center mb-8 max-w-2xl mx-auto">
          I'm currently specializing in{" "}
          <span className="text-teal-400">Full-Stack Development</span>. Feel free
          to get in touch and talk more about your projects.
        </p>

        {/* Buttons */}
        <div className="flex space-x-6 mb-12 justify-center">
          <a
            href="https://www.linkedin.com/in/sandip-singh-parmar-b29034251"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center bg-gray-800 hover:bg-teal-500 px-6 py-3 rounded-lg transition-all duration-300"
          >
            LinkedIn
          </a>
          <a
            href="https://github.com/sandipsinghparmar18"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center bg-gray-800 hover:bg-teal-500 px-6 py-3 rounded-lg transition-all duration-300"
          >
            GitHub
          </a>
        </div>

        {/* Contact Form */}
        <form className="w-full max-w-lg mx-auto bg-gray-800 p-8 rounded-lg">
          <div className="form-group">
            <label className="block text-gray-400 text-sm font-bold mb-2" htmlFor="name">
              Name
            </label>
            <input
              className="w-full px-3 py-2 text-gray-900 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
              type="text"
              id="name"
              placeholder="Your Name"
            />
          </div>
          <div className="form-group">
            <label className="block text-gray-400 text-sm font-bold mb-2" htmlFor="email">
              Email
            </label>
            <input
              className="w-full px-3 py-2 text-gray-900 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
              type="email"
              id="email"
              placeholder="Your Email"
            />
          </div>
          <div className="form-group">
            <label className="block text-gray-400 text-sm font-bold mb-2" htmlFor="message">
              Message
            </label>
            <textarea
              className="w-full px-3 py-2 text-gray-900 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
              id="message"
              rows="4"
              placeholder="Your Message"
            ></textarea>
          </div>
          <div className="text-center">
            <button
              type="submit"
              className="bg-teal-500 hover:bg-teal-600 text-white font-bold py-2 px-4 rounded-lg transition duration-300"
            >
              Send Message
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}

export default Contact;