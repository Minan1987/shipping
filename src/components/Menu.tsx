import { useState } from "react";
import { Link, Outlet } from "react-router-dom";
import logo from "/images/mdglobal-logo.png";
import Search from "./Search";
import { CiSearch } from "react-icons/ci";

function Menu() {
  const [isOpenMenu, setIsOpenMenu] = useState(false);
  const [isOpenSearch, setIsOpenSearch] = useState(false);

  return (
    <nav className="bg-neutral-100 text-blue-950 opacity-90 py-5">
      <div className="container mx-auto flex items-center justify-center h-20 px-4 gap-16">
        {/* Logo */}
        <Link to="/">
          <img src={logo} alt="MD Global Logestic" className="h-20" />
        </Link>

        {/* Hamburger */}
        <button
          onClick={() => setIsOpenMenu(!isOpenMenu)}
          className="lg:hidden focus:outline-none"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            {isOpenMenu ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>

        {/* Menu Items */}
        <div
          className={`flex-1 lg:flex lg:items-center lg:justify-between ${
            isOpenMenu ? "block" : "hidden"
          }`}
        >
          <ul className="flex flex-col lg:flex-row lg:space-x-6 space-y-2 lg:space-y-0 mt-4 lg:mt-0">
            <li>
              <Link to="/" className="text-yellow-500 hover:text-yellow-400">
                Home
              </Link>
            </li>
            <li>
              <Link to="/about-us" className="hover:text-yellow-400">
                ABOUT US
              </Link>
            </li>
            <li>
              <Link to="/services" className="hover:text-yellow-400">
                SERVICES
              </Link>
            </li>
            <li>
              <Link to="/projects" className="hover:text-yellow-400">
                PROJECTS
              </Link>
            </li>
            <li>
              <Link to="/news" className="hover:text-yellow-400">
                NEWS
              </Link>
            </li>
            <li>
              <Link to="/shop" className="hover:text-yellow-400">
                SHOP
              </Link>
            </li>
            <li>
              <Link to="/contact-us" className="hover:text-yellow-400">
                CONTACT US
              </Link>
            </li>
            <li>
              {/* Search & Outlet */}
              <div className="mt-4 lg:mt-0 lg:flex lg:items-center lg:space-x-4">
                <button
                  onClick={() => setIsOpenSearch(!isOpenSearch)}
                  className="text-2xl hover:text-yellow-500 transition"
                >
                  <CiSearch />
                </button>
              </div>
            </li>
          </ul>
        </div>
      </div>

      {/* Search Dropdown (Animated) */}
      <div
        className={`
            absolute left-0 w-full bg-white shadow-lg overflow-hidden
            transition-all duration-300 ease-out
            ${isOpenSearch ? "max-h-40 opacity-100" : "max-h-0 opacity-0"}
          `}
      >
        <div className="container mx-auto flex justify-center items-center px-4 py-4">
          <Search />
        </div>
      </div>
    </nav>
  );
}

export default Menu;
