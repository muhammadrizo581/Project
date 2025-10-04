import { Link, NavLink, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import { FaBars, FaTimes, FaSun, FaMoon } from "react-icons/fa";
import { useDarkMode } from "../../context/DarkModeContext";


export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const { darkMode, toggleDarkMode } = useDarkMode();
  const location = useLocation();

  const navItems = [
    { title: "Part 2", path: "/part2" },
    { title: "Part 3", path: "/part3" },
    { title: "About", path: "/about" },
    { title: "Jeopardy Game", path: "/jeopardy1" },
    { title: "PDF", path: "/pdf" },
  ];

  // sahifa o‘zgarsa menyuni yopish
  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  return (
    <nav
      className={`sticky top-0 z-50 transition duration-300 shadow-md ${
        darkMode
          ? "bg-gray-900 text-gray-100"
          : "bg-gradient-to-r from-blue-600 to-blue-700 text-white"
      }`}
    >
      <div className="flex justify-between items-center max-w-7xl mx-auto px-6 py-4">
        {/* Logo */}
        <Link
          to="/"
          className="text-2xl font-extrabold tracking-wide relative group flex gap-2 items-center"
        >
          <img src="/icon.png" alt="" className="size-[40px] "/>
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
          {/* Dark Mode Toggle */}
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

      {/* Mobile Menu (slide-down) */}
      <div
        className={`fixed top-0 left-0 w-full h-screen flex flex-col items-center justify-center space-y-6 text-lg font-medium transform transition-transform duration-500 ${
          isOpen
            ? "translate-y-0 opacity-100"
            : "-translate-y-full opacity-0 pointer-events-none"
        } ${darkMode ? "bg-gray-900 text-gray-100" : "bg-blue-700 text-white"}`}
      >
        {navItems.map((item, i) => (
          <NavLink
            key={i}
            to={item.path}
            className={({ isActive }) =>
              `px-6 py-3 rounded-lg transition text-xl ${
                isActive
                  ? "font-semibold text-yellow-300"
                  : "hover:text-yellow-200"
              }`
            }
          >
            {item.title}
          </NavLink>
        ))}
        <Link
          to="/"
          className={`mt-8 px-6 py-3 rounded-lg shadow-md transition ${
            darkMode
              ? "bg-yellow-400 text-gray-900 hover:bg-yellow-500"
              : "bg-yellow-500 text-white hover:bg-yellow-600"
          }`}
        >
          ⬅️ Back to Home
        </Link>
      </div>
    </nav>
  );
}
