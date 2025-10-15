import { Link, NavLink, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import { Menu, X, Sun, Moon } from "lucide-react";
import { useDarkMode } from "../../context/DarkModeContext";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { darkMode, toggleDarkMode } = useDarkMode();
  const location = useLocation();

  const navItems = [
    { title: "Part 2", path: "/part2" },
    { title: "Part 3", path: "/part3" },
    { title: "About", path: "/about" },
    { title: "Jeopardy Game", path: "/jeopardy1" },
    { title: "PDF", path: "/pdf" },
    { title: "Lessons", path: "/lessons" },
  ];

  // 📜 Scroll soyasi effekti
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // 🔁 Sahifa o‘zgarsa menyuni yopish
  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  return (
    <>
      <nav
        className={`fixed top-0 w-full z-50 transition-all duration-500 ${
          darkMode
            ? `backdrop-blur-md ${
                scrolled ? "bg-gray-900/80 shadow-lg" : "bg-gray-900/60"
              } text-gray-100`
            : `backdrop-blur-md ${
                scrolled
                  ? "bg-white/90 shadow-md text-gray-900"
                  : "bg-blue-600/90 text-white"
              }`
        }`}
      >
        <div className="flex justify-between items-center max-w-7xl mx-auto px-6 py-4">
          {/* 🔹 Logo */}
          <Link
            to="/"
            className="text-2xl font-extrabold tracking-wide relative group flex gap-2 items-center"
          >
            <img src="/icon.png" alt="logo" className="size-[40px]" />
            <span
              className={`transition-colors ${
                darkMode ? "text-yellow-300" : "text-white"
              }`}
            >
              Resources
            </span>
            <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-yellow-300 group-hover:w-full transition-all duration-300"></span>
          </Link>

          {/* 💻 Desktop menu */}
          <div className="hidden md:flex space-x-8">
            {navItems.map((item, i) => (
              <NavLink
                key={i}
                to={item.path}
                className={({ isActive }) =>
                  `relative px-2 py-1 text-lg transition duration-200 ${
                    isActive
                      ? "font-semibold text-yellow-300"
                      : darkMode
                      ? "hover:text-yellow-300"
                      : "hover:text-yellow-200"
                  }`
                }
              >
                {item.title}
              </NavLink>
            ))}
          </div>

          {/* 🌙 Toggle + 🍔 Mobile */}
          <div className="flex items-center space-x-4">
            <button
              onClick={toggleDarkMode}
              className="text-xl hover:scale-110 transition"
              title="Toggle theme"
            >
              {darkMode ? (
                <Sun className="text-yellow-400" />
              ) : (
                <Moon className="text-yellow-300" />
              )}
            </button>

            {/* 🍔 Hamburger */}
            <button
              className="md:hidden text-2xl hover:scale-110 transition"
              onClick={() => setIsOpen(true)}
            >
              <Menu
                className={`transition ${
                  darkMode ? "text-yellow-300" : "text-white"
                }`}
                size={28}
              />
            </button>
          </div>
        </div>
      </nav>

      {/* 🌓 Overlay (fon qoraytiruvchi) */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/50 backdrop-blur-[1px] z-40"
          onClick={() => setIsOpen(false)}
        ></div>
      )}

      {/* 📱 Sidebar (chapdan chiqadigan menyu) */}
      <div
        className={`fixed top-0 left-0 h-full w-[70%] sm:w-[50%] z-50 transform transition-transform duration-500 ease-in-out ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } ${
          darkMode
            ? "bg-gray-900 text-gray-100"
            : "bg-gradient-to-b from-blue-600 to-blue-700 text-white"
        } flex flex-col p-6 space-y-6`}
      >
        <div className="flex justify-between items-center mb-4">
          <span className="text-2xl font-bold">Menu</span>
          <button
            onClick={() => setIsOpen(false)}
            className="text-2xl transition hover:scale-110"
          >
            <X
              className={`${
                darkMode ? "text-yellow-300" : "text-white"
              }`}
              size={28}
            />
          </button>
        </div>

        <div className="flex flex-col space-y-4">
          {navItems.map((item, i) => (
            <NavLink
              key={i}
              to={item.path}
              className={({ isActive }) =>
                `px-2 py-2 rounded-md text-lg transition duration-200 ${
                  isActive
                    ? "font-semibold text-yellow-300"
                    : "hover:text-yellow-200 hover:translate-x-1"
                }`
              }
            >
              {item.title}
            </NavLink>
          ))}
        </div>
      </div>
    </>
  );
}
