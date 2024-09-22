import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHtml5,
  faCss3,
  faJsSquare,
  faReact,
  faSwift,
  faFigma,
} from "@fortawesome/free-brands-svg-icons"; 
import { faCode } from "@fortawesome/free-solid-svg-icons"; 

const Skills = () => {
  const skills = [
    { name: "HTML", level: "Intermediate", icon: <FontAwesomeIcon icon={faHtml5} className="text-orange-600" /> },
    { name: "CSS", level: "Intermediate", icon: <FontAwesomeIcon icon={faCss3} className="text-blue-600" /> },
    { name: "JavaScript", level: "Intermediate", icon: <FontAwesomeIcon icon={faJsSquare} className="text-yellow-500" /> },
    { name: "React", level: "Beginner", icon: <FontAwesomeIcon icon={faReact} className="text-blue-500" /> },
    { name: "Flutter", level: "Beginner", icon: <FontAwesomeIcon icon={faCode} className="text-teal-500" /> }, 
    { name: "Tailwind CSS", level: "Beginner", icon: <FontAwesomeIcon icon={faCode} className="text-teal-400" /> }, 
    { name: "Kotlin", level: "Beginner", icon: <FontAwesomeIcon icon={faCode} className="text-purple-500" /> }, 
    { name: "Swift UI", level: "Beginner", icon: <FontAwesomeIcon icon={faSwift} className="text-orange-400" /> },
    { name: "Figma", level: "Beginner", icon: <FontAwesomeIcon icon={faFigma} className="text-purple-500" /> },
  ];

  return (
    <section id="skills" className="py-16 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-8" style={{ color: 'rgb(0, 140, 255)'}}>My Skills</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 ease-in-out text-center"
            >
              <div className="text-6xl mb-4">{skill.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{skill.name}</h3>
              <p className="text-gray-500">{skill.level}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
