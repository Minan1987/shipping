import { Link } from "react-router-dom";
import logo from "/images/logo.jpeg";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";
import { FaTwitter, FaFacebook, FaSkype, FaPinterestP } from "react-icons/fa";
import { IoLogoLinkedin } from "react-icons/io5";
import { ImLocation } from "react-icons/im";
import { MdPhone, MdOutlineMailOutline } from "react-icons/md";
import { LuAlarmClock } from "react-icons/lu";

const Footer = () => {
  return (
    <footer className="bg-[#0b1c2c] text-gray-300 pt-10">
      <div className="container mx-auto px-4">
        {/* GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 py-10">
          {/* --- Column 1 --- */}
          <div>
            <Link to="/">
              <img src={logo} alt="Industrial Logo" className="mb-4 w-40" />
            </Link>

            <p className="text-[#7f92a7] leading-6 mb-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>

            <Link
              to="/"
              className="text-blue-400 flex items-center gap-1 hover:text-blue-300 transition"
            >
              Read More <MdKeyboardDoubleArrowRight />
            </Link>

            <ul className="flex gap-3 mt-5">
              <li>
                <a href="#" className="hover:text-blue-400 text-xl">
                  <FaTwitter />
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-400 text-xl">
                  <IoLogoLinkedin />
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-400 text-xl">
                  <FaFacebook />
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-400 text-xl">
                  <FaSkype />
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-400 text-xl">
                  <FaPinterestP />
                </a>
              </li>
            </ul>
          </div>

          {/* --- Column 2 --- */}
          <div>
            <h3 className="text-white text-lg mb-5 font-semibold border-b border-gray-700 pb-2">
              Our Solutions
            </h3>
            <ul className="space-y-2">
              {[
                "Power And Energy",
                "Oil And Lubricant",
                "Material Engineering",
                "Mechanical Engineering",
                "Chemical Research",
                "Alternate Energy",
              ].map((item) => (
                <li key={item}>
                  <Link to="/" className="hover:text-blue-300 transition block">
                    - {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* --- Column 3 --- */}
          <div>
            <h3 className="text-white text-lg mb-5 font-semibold border-b border-gray-700 pb-2">
              Quick Links
            </h3>
            <ul className="space-y-2">
              <li>
                <Link to="/about-us" className="hover:text-blue-300">
                  - About Us
                </Link>
              </li>
              <li>
                <Link to="/news" className="hover:text-blue-300">
                  - News
                </Link>
              </li>
              <li>
                <Link to="/" className="hover:text-blue-300">
                  - Testimonial
                </Link>
              </li>
              <li>
                <Link to="/" className="hover:text-blue-300">
                  - Request A Quote
                </Link>
              </li>
              <li>
                <Link to="/" className="hover:text-blue-300">
                  - FAQ
                </Link>
              </li>
            </ul>
          </div>

          {/* --- Column 4 --- */}
          <div>
            <h3 className="text-white text-lg mb-5 font-semibold border-b border-gray-700 pb-2">
              Get In Touch
            </h3>

            <ul className="space-y-4 text-[15px]">
              <li className="flex items-start gap-3">
                <ImLocation className="mt-1 text-xl" />
                <span>
                  Lorance 502B, Tailstoi Town 5048 MT, Worldwide Country
                </span>
              </li>

              <li className="flex items-center gap-3">
                <MdPhone className="text-xl" />
                <span>18004567890</span>
              </li>

              <li className="flex items-center gap-3">
                <MdOutlineMailOutline className="text-xl" />
                <span>info@industrial.com</span>
              </li>

              <li className="flex items-center gap-3">
                <LuAlarmClock className="text-xl" />
                <span>Mon - Sat : 9am to 6pm</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* --- Bottom Bar --- */}
      <div className="bg-[#09121e] py-4 mt-5">
        <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between text-center text-gray-400 text-sm">
          <p>Copyright © 2024 Industrial WP Demo. All rights reserved.</p>
          <p className="mt-2 md:mt-0">Developed by Mina Nazari</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
