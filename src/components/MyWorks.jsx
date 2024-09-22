import React from "react";
import foto1 from "../assets/DzikirAppKotlin.png";
import foto2 from "../assets/NewsAppKotlin.png";
import foto3 from "../assets/GuestBook.png";

const projects = [
  {
    title: "Dzikir App",
    description: "A Mobile Application using Kotlin.",
    image: foto1, 
    link: "https://github.com/Praditya27-stack/Dzikir-App",
  },
  {
    title: "News App",
    description: "A mobile Application using kotlin and integrated API news.",
    image: foto2, 
    link: "https://github.com/Praditya27-stack/NewsAppKotlin",
  },
  {
    title: "Guest Book",
    description: "A Website using Laravel and MySQL for my high school guest book.",
    image: foto3, 
    link: "https://github.com/Praditya27-stack/guest-book",
  },
];

const MyWorks = () => {
  return (
    <section id="myWorks" className="py-12 bg-gradient-to-r from-gray-100 to-gray-200">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold text-blue-600 mb-8">My Projects</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-lg overflow-hidden transform hover:scale-105 transition-transform duration-300 ease-in-out"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-800">{project.title}</h3>
                <p className="text-gray-600 my-4">{project.description}</p>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block px-4 py-2 bg-blue-600 text-white rounded-full font-semibold hover:bg-blue-400 transition-colors duration-300"
                >
                  View Project
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MyWorks;
