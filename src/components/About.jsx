import React from "react";
import foto from "../assets/byankafe.jpg";

const About = () => {
  return (
    <section id="about" className="h-screen bg-gradient-to-r from-gray-100 to-gray-200 flex flex-col justify-center items-center px-6 py-12">
      <div className="container mx-auto flex flex-col md:flex-row justify-center items-center">
        <div className="w-48 h-48 md:w-64 md:h-64 rounded-lg overflow-hidden shadow-lg mb-8 md:mb-0 md:mr-12">
          <img
            src={ foto } 
            alt="Profile"
            className="w-full h-full object-cover"
          />
        </div>


        <div className="text-center md:text-left">
          <h2 className="text-2xl font-bold text-blue-600 mb-4">About Me</h2>
          <h2 className="text-3xl font-bold text-black mb-4">Frontend Developer, Mobile Developer <br/>and Web and Mobile Designer.</h2>
          <p className="text-lg text-gray-600 mb-6 max-w-2xl">
            Hi, I am a passionate web developer with expertise in modern web technologies. 
            I specialize in building high-performance, responsive websites and Mobile applications 
            that provide a seamless user experience. With a strong foundation in front-end 
            and Mobile Development, I am always eager to learn and implement the latest 
            trends in the industry.
          <br/><br/>
            
          </p>
          <a
            href="#contact"
            className="inline-block px-6 py-3 bg-blue-600 text-white font-semibold rounded-full shadow-md hover:bg-blue-500 transition-colors duration-300"
          >
            Get in Touch
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
