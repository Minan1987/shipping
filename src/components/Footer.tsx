import { Link } from "react-router-dom";
import logo from "/images/logo.jpeg";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";
import { FaTwitter } from "react-icons/fa";
import { IoLogoLinkedin } from "react-icons/io5";
import { FaFacebook } from "react-icons/fa";
import { FaSkype } from "react-icons/fa";
import { FaPinterestP } from "react-icons/fa";
import { ImLocation } from "react-icons/im";
import { MdPhone } from "react-icons/md";
import { MdOutlineMailOutline } from "react-icons/md";
import { LuAlarmClock } from "react-icons/lu";

const Footer = () => {
  return (
    <footer>
      <div className="container">
        <div className="row py-5">
          <div className="col-lg-3 col-md-6 col-sm-12">
            <Link to="/">
              <img
                src={logo}
                alt="Industrial Logo"
                className="mb-4"
                width="170px"
              />
            </Link>
            <p style={{ color: "#7f92a7" }}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <Link to="/" className="text-info text-decoration-none">
              Read More <MdKeyboardDoubleArrowRight />
            </Link>
            <div className="socialLink mt-4">
              <ul className="list-inline d-flex justify-content-start">
                <li>
                  <a href="#">
                    <FaTwitter />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <IoLogoLinkedin />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <FaFacebook />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <FaSkype />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <FaPinterestP />
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-12 footer-links">
            <h3 className="text-light fs-5 mb-5">
              Our Solutions
              <hr />
            </h3>
            <ul className="list-unstyled">
              <li>
                <Link to="/">-Power And Energy</Link>
              </li>
              <li>
                <Link to="/">-Oil And Lubricant</Link>
              </li>
              <li>
                <Link to="/">-Material Engineering</Link>
              </li>
              <li>
                <Link to="/">-Mechanical Engineering</Link>
              </li>
              <li>
                <Link to="/">-chemical Research</Link>
              </li>
              <li>
                <Link to="/">-Alternate Energy</Link>
              </li>
            </ul>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-12 footer-links quick">
            <h3 className="text-light fs-5 mb-5">
              Quick Links
              <hr />
            </h3>
            <ul className="list-unstyled">
              <li>
                <Link to="/about-us">-About Us</Link>
              </li>
              <li>
                <Link to="/news">-News</Link>
              </li>
              <li>
                <Link to="/">-Testimonial</Link>
              </li>
              <li>
                <Link to="/">-Request A Quote</Link>
              </li>
              <li>
                <Link to="/">-FAQ</Link>
              </li>
            </ul>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-12 footer-links contact-links">
            <h3 className="text-light fs-5 mb-5">
              Get In Touch
              <hr />
            </h3>
            <ul className="list-unstyled">
              <li className="d-flex align-items-start">
                <ImLocation />
                <span>
                  {" "}
                  Lorance 502B, Tailstoi Town 5048 MT, Worldwide Country
                </span>
              </li>
              <li>
                <MdPhone />
                <span> 18004567890</span>
              </li>
              <li>
                <MdOutlineMailOutline />
                <span> info@industrial.com</span>
              </li>
              <li>
                <LuAlarmClock />
                <span> Mon - Sat : 9am to 6pm</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="copy-right py-4">
        <div className="container">
          <div className="row justify-content-between align-items-center">
            <div className="col-12 col-md-6 text-center text-md-start">
              Copyright © 2024 Industrial wp demo. All rights reserved.
            </div>
            <div className="col-12 col-md-6 text-center text-md-end">
              Developed by Mina Nazari
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
