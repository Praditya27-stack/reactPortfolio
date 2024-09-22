import React, { useState } from "react";
import { Link } from "react-scroll";
import imageData from '../constant/image.js';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  const navItems = [
    { name: "Home", path: "home" },
    { name: "About", path: "about" },
    { name: "Skills", path: "skills" },
    { name: "My Projects", path: "myWorks" }, 
    { name: "Contact", path: "contact" },
  ];

  return (
    <nav className="sticky top-0 z-50 " style={{ backgroundColor: 'rgb(0, 140, 255)'}}>
      <div className="px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 w-full">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <img className="w-10 h-10 rounded-full mr-4" src={imageData.foto} alt="Logo" />
            </div>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                {navItems.map((item) => (
                  <Link
                    key={item.path}
                    to={item.path}
                    smooth={true}
                    duration={500}
                    className="px-3 py-2 rounded-md text-lg font-medium text-white cursor-pointer hover:underline"
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            </div>
          </div>
          <div className="-mr-2 flex md:hidden">
            <button
              onClick={toggle}
              type="button"
              className="inline-flex items-center justify-center p-2 text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2"
              style={{ backgroundColor: 'rgb(0, 140, 255)' }}
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className="h-7 w-7"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden ml-auto">
          <div className="px-2 pt-2 pb-4 sm:px-3 ">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                smooth={true}
                duration={500}
                className="block px-3 py-2 rounded-md text-base font-medium text-white"
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
