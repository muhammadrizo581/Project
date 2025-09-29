import { Link, NavLink } from "react-router-dom";
import { useState } from "react";
import { FaBars, FaTimes, FaSun, FaMoon } from "react-icons/fa";
import { useDarkMode } from "../../context/DarkModeContext";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const { darkMode, toggleDarkMode } = useDarkMode();

  const navItems = [
    { title: "About", path: "/about" },
    { title: "Jeopardy Game", path: "/jeopardy1" },
    { title: "PDF", path: "/pdf" },
  ];

  return (
    <nav
      className={`sticky top-0 z-50 transition duration-300 shadow-md ${
        darkMode
          ? "bg-gray-900 text-gray-100"
          : "bg-gradient-to-r from-blue-600 to-blue-700 text-white"
      }`}
    >
      <div className="flex justify-between items-center max-w-7xl mx-auto px-6 py-4">
        <Link
          to="/"
          className="text-2xl font-extrabold tracking-wide relative group"
        >
          Resources
          <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-yellow-300 group-hover:w-full transition-all duration-300"></span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-8">
          {navItems.map((item, i) => (
            <NavLink
              key={i}
              to={item.path}
              className={({ isActive }) =>
                `relative px-2 py-1 text-lg transition duration-200 ${
                  isActive
                    ? "font-semibold text-yellow-300"
                    : "hover:text-yellow-200"
                }`
              }
            >
              {item.title}
            </NavLink>
          ))}
        </div>

        {/* Actions */}
        <div className="flex items-center space-x-4">
          <button
            onClick={toggleDarkMode}
            className="text-xl hover:scale-110 transition"
          >
            {darkMode ? <FaSun className="text-yellow-400" /> : <FaMoon />}
          </button>

          {/* Mobile Hamburger */}
          <button
            className="md:hidden text-2xl hover:scale-110 transition"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div
          className={`md:hidden flex flex-col items-center space-y-4 py-6 shadow-inner transition-all duration-500 ${
            darkMode ? "bg-gray-800" : "bg-blue-700"
          }`}
        >
          {navItems.map((item, i) => (
            <NavLink
              key={i}
              to={item.path}
              onClick={() => setIsOpen(false)}
              className={({ isActive }) =>
                `w-full text-center py-3 rounded-lg transition text-lg ${
                  isActive
                    ? darkMode
                      ? "bg-gray-900 text-yellow-300 font-semibold"
                      : "bg-blue-900 text-yellow-300 font-semibold"
                    : darkMode
                    ? "hover:bg-gray-700"
                    : "hover:bg-blue-800"
                }`
              }
            >
              {item.title}
            </NavLink>
          ))}
        </div>
      )}
    </nav>
  );
}
