import { useState } from "react";
import { NavLink } from "react-router-dom";
import logo from "/images/logo.png";
import Search from "./Search";
import { CiSearch } from "react-icons/ci";

function Menu() {
  const [isOpenMenu, setIsOpenMenu] = useState(false);
  const [isOpenSearch, setIsOpenSearch] = useState(false);

  return (
    <nav className="fixed w-full z-10 top-12 bg-blue-950 text-white opacity-90 py-5">
      <div className="flex items-center justify-between h-20 px-4 lg:justify-center lg:gap-16">
        {/* Logo */}
        <div className="w-fit">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive
                ? "text-yellow-500 font-bold"
                : "text-white  font-bold hover:text-yellow-500 "
            }
          >
            <img src={logo} alt="MD Global Logestic" className="h-28 z-10" />
          </NavLink>
        </div>

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
          className={`w-screen bg-blue-950 absolute lg:static text-center  right-0 lg:bg-transparent lg:flex lg:w-fit lg:items-center lg:justify-between ${
            isOpenMenu ? "block" : "hidden"
          }`}
          style={{ top: "119px" }}
        >
          <ul className="flex flex-col lg:flex-row lg:space-x-6 space-y-2 lg:space-y-0 mt-4 lg:mt-0">
            <li>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive
                    ? "text-yellow-500 font-bold"
                    : "text-white  font-bold hover:text-yellow-500 "
                }
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/about-us"
                className={({ isActive }) =>
                  isActive
                    ? "text-yellow-500 font-bold"
                    : "text-white  font-bold hover:text-yellow-500 "
                }
              >
                ABOUT US
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/services"
                className={({ isActive }) =>
                  isActive
                    ? "text-yellow-500 font-bold"
                    : "text-white  font-bold hover:text-yellow-500 "
                }
              >
                SERVICES
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/industries"
                className={({ isActive }) =>
                  isActive
                    ? "text-yellow-500 font-bold"
                    : "text-white  font-bold hover:text-yellow-500 "
                }
              >
                INDUSTRIES
              </NavLink>
            </li>

            <li>
              <NavLink
                to="/contact-us"
                className={({ isActive }) =>
                  isActive
                    ? "text-yellow-500 font-bold"
                    : "text-white  font-bold hover:text-yellow-500 "
                }
              >
                CONTACT US
              </NavLink>
            </li>
            <li>
              {/* Search & Outlet */}
              <div className="mt-4 lg:mt-0 lg:flex lg:items-center lg:space-x-4 hidden ">
                <button
                  onClick={() => setIsOpenSearch(!isOpenSearch)}
                  className="text-2xl hover:text-yellow-500 transition"
                >
                  <CiSearch />
                </button>
              </div>
              <div className="lg:hidden flex justify-center py-4">
                <Search />
              </div>
            </li>
          </ul>
        </div>
      </div>

      {/* Search Dropdown (Animated) */}
      <div
        className={`
            absolute left-0 w-full bg-blue-950 shadow-lg overflow-hidden
            transition-all duration-300 ease-out  
            ${isOpenSearch ? "max-h-40 opacity-100" : "max-h-0 opacity-0"}
          `}
        style={{ top: "119px" }}
      >
        <div className="container mx-auto flex justify-center items-center px-4 py-4">
          <Search />
        </div>
      </div>
    </nav>
  );
}

export default Menu;
