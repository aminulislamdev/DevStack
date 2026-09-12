import { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";

import navLogo from "../assets/logo-text.png";

const Navber = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-white shadow-sm">
      <div className="container mx-auto px-4 py-4">

        {/* ================= Mobile Navbar ================= */}
        <div className="flex items-center justify-between md:hidden">

          {/* Hamburger */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-2xl cursor-pointer"
          >
            {isMenuOpen ? <FiX /> : <FiMenu />}
          </button>

          {/* Logo */}
          <img
            src='/ds.png'
            alt="Navbar Logo"
            className="h-8"
          />

          {/* Auth Buttons */}
          <div className="flex items-center gap-2">
            <button className="text-sm cursor-pointer">
              Sign In
            </button>

            <button className="btn btn-secondary btn-sm">
              Sign Up
            </button>
          </div>
        </div>


        {/* ================= Mobile Menu ================= */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 border-t pt-4">
            <ul className="flex flex-col gap-4">
              <li className="text-[#DB2777]">
                <a href="">Home</a>
              </li>

              <li>
                <a href="">Technologies</a>
              </li>

              <li>
                <a href="">Projects</a>
              </li>

              <li>
                <a href="">About</a>
              </li>

              <li>
                <a href="">Contact</a>
              </li>
            </ul>
          </div>
        )}


        {/* ================= Desktop Navbar ================= */}
        <div className="hidden md:flex justify-between items-center">

          {/* Logo */}
          <img
            src={navLogo}
            alt="Navbar Logo"
          />

          {/* Navigation */}
          <ul className="flex justify-between items-center gap-10 text-sm font-medium text-[#475569]">
            <li className="text-[#DB2777]">
              <a href="">Home</a>
            </li>

            <li>
              <a href="">Technologies</a>
            </li>

            <li>
              <a href="">Projects</a>
            </li>

            <li>
              <a href="">About</a>
            </li>

            <li>
              <a href="">Contact</a>
            </li>
          </ul>

          {/* Auth Buttons */}
          <div className="flex justify-between items-center gap-5">
            <button className="cursor-pointer text-[#334155] text-sm font-medium">
              Sign In
            </button>

            <button className="btn btn-secondary text-[#FFFFFF] font-semibold text-sm">
              Sign Up
            </button>
          </div>

        </div>

      </div>
    </nav>
  );
};

export default Navber;