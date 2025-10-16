import { Link } from "react-router-dom";
import { useDarkMode } from "../../context/DarkModeContext";

const Footer = () => {
  const { darkMode } = useDarkMode();

  return (
    <footer
      className={`transition-colors duration-500 mt-16 ${
        darkMode ? "bg-gray-900 text-gray-300" : "bg-gray-100 text-gray-700"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-10 grid grid-cols-1 md:grid-cols-2 gap-8 text-center md:text-left">
        {/* 🔹 Logo va qisqacha ma’lumot */}
        <div className="flex flex-col items-center md:items-start">
          <div className="flex items-center gap-2 mb-3">
            <img src="/icon.png" alt="logo" className="w-9 h-9" />
            <h2
              className={`text-xl font-extrabold ${
                darkMode ? "text-yellow-400" : "text-blue-700"
              }`}
            >
              EspWithMe
            </h2>
          </div>
          <p className="text-sm leading-relaxed text-center md:text-left">
            IT ta’lim resurslari, o‘yinlar va materiallar — hammasi bitta joyda.
          </p>
        </div>

        {/* 🔹 Tezkor linklar */}
        <div className="flex flex-col items-center md:items-start">
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
              <Link to="/presentations" className="hover:text-blue-500 transition">
                Presentations
              </Link>              
            </li>
            <li>
              <Link to="/lessons" className="hover:text-blue-500 transition">
                Video Lessons
              </Link>
            </li>
          </ul>
        </div>
      </div>

      {/* 🔹 Pastki qism */}
      <div
        className={`border-t ${
          darkMode ? "border-gray-700" : "border-gray-300"
        } py-4 text-center text-xs md:text-sm`}
      >
        © {new Date().getFullYear()}{" "}
        <span className="font-semibold">Resources Project</span>. All rights
        reserved.
      </div>
    </footer>
  );
};

export default Footer;
