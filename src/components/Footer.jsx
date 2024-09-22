import React from "react";
import { Link } from "react-scroll";
import {GithubOutlined, LinkedinFilled, InstagramOutlined} from '@ant-design/icons'

function Footer() {
  return (
    <footer className="bg-blue-900 text-white py-8 bottom-0 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between">
          <div className="mb-4 md:mb-0">
            <h2 className="text-2xl font-bold">Abyan</h2>
            <br/>
            <p className="mt-2">
            "Tus errores son peldaños hacia tu crecimiento, no muros que te detengan."
            </p>
          </div>

          <div className="mb-4 md:mb-0">
            <h3 className="text-lg font-semibold">Quick Links</h3>
            <ul className="mt-2 space-y-2">
              <li>
                <Link
                  to="home"
                  smooth={true}
                  duration={500}
                  className="hover:underline cursor-pointer"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="about"
                  smooth={true}
                  duration={500}
                  className="hover:underline cursor-pointer"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  to="skills"
                  smooth={true}
                  duration={500}
                  className="hover:underline cursor-pointer"
                >
                  Skills
                </Link>
              </li>
              <li>
                <Link
                  to="sertifikat"
                  smooth={true}
                  duration={500}
                  className="hover:underline cursor-pointer"
                >
                  Sertifikat
                </Link>
              </li>
              <li>
                <Link
                  to="contact"
                  smooth={true}
                  duration={500}
                  className="hover:underline cursor-pointer"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold">Follow Me</h3>
            <div className="mt-2 flex space-x-4">
              <a href="https://github.com/Praditya27-stack" target="blank" className="hover:text-gray-400">
              <GithubOutlined style={{ fontSize: '28px' }} />
              </a>
              <a href="https://www.linkedin.com/in/praditya-abyan-b03920218/" target="blank" className="hover:text-gray-400">
                <LinkedinFilled style={{fontSize: '28px'}}/>
              </a>
              <a href="https://www.instagram.com/baeyand?igsh=aXJtbTEwd2R6ZjFh" target="blank" className="hover:text-gray-400">
                <InstagramOutlined style={{fontSize: '28px'}}/>
              </a>
            </div>
          </div>
        </div>

        <div className="mt-8 border-t border-gray-700 pt-4 text-center">
          <p className="text-sm">
            &copy; {new Date().getFullYear()} My Website. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

