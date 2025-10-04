import { Link } from "react-router-dom";
import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaLinkedin,
  FaGithub,
} from "react-icons/fa";
import { useDarkMode } from "../../context/DarkModeContext";

const Footer = () => {
  const { darkMode } = useDarkMode();

  return (
    <footer
      className={`transition-colors duration-500 mt-16 ${
        darkMode ? "bg-gray-900 text-gray-300" : "bg-gray-100 text-gray-700"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-10 grid md:grid-cols-3 gap-8 text-center md:text-left">
        {/* 🔹 Logo va qisqacha ma’lumot */}
        <div>
          <div className="flex items-center justify-center md:justify-start gap-2 mb-3">
            <img src="/icon.png" alt="logo" className="size-[36px]" />
            <h2
              className={`text-xl font-extrabold ${
                darkMode ? "text-yellow-400" : "text-blue-700"
              }`}
            >
              Resources
            </h2>
          </div>
          <p className="text-sm leading-relaxed">
            IT ta’lim resurslari, o‘yinlar va materiallar — hammasi bitta joyda.
          </p>
        </div>

        {/* 🔹 Tezkor linklar */}
        <div>
          <h3
            className={`font-semibold mb-3 ${
              darkMode ? "text-gray-100" : "text-gray-900"
            }`}
          >
            Quick Links
          </h3>
          <ul className="space-y-2 text-sm">
            <li>
              <Link to="/" className="hover:text-blue-500 transition">
                Home
              </Link>
            </li>
            <li>
              <Link to="/about" className="hover:text-blue-500 transition">
                About
              </Link>
            </li>
            <li>
              <Link to="/pdf" className="hover:text-blue-500 transition">
                PDF Materials
              </Link>
            </li>
            <li>
              <Link to="/jeopardy1" className="hover:text-blue-500 transition">
                Jeopardy Game
              </Link>
            </li>
          </ul>
        </div>

        {/* 🔹 Ijtimoiy tarmoqlar */}
        <div>
          <h3
            className={`font-semibold mb-3 ${
              darkMode ? "text-gray-100" : "text-gray-900"
            }`}
          >
            Follow Us
          </h3>
          <div className="flex justify-center md:justify-start space-x-4 text-xl">
            <a
              href="https://facebook.com"
              target="_blank"
              className="hover:text-blue-500 transition"
            >
              <FaFacebook />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              className="hover:text-sky-400 transition"
            >
              <FaTwitter />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              className="hover:text-pink-500 transition"
            >
              <FaInstagram />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              className="hover:text-blue-400 transition"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://github.com"
              target="_blank"
              className="hover:text-gray-400 transition"
            >
              <FaGithub />
            </a>
          </div>
        </div>
      </div>

      {/* 🔹 Pastki qism */}
      <div
        className={`border-t ${
          darkMode ? "border-gray-700" : "border-gray-300"
        } py-4 text-center text-xs md:text-sm`}
      >
        © {new Date().getFullYear()} <span className="font-semibold">Resources Project</span>. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
