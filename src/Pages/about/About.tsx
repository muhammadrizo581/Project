import { Link } from "react-router-dom";
import { useDarkMode } from "../../context/DarkModeContext";

const About = () => {
  const { darkMode } = useDarkMode();

  return (
    <div
      className={`relative min-h-screen flex items-center justify-center overflow-hidden transition-colors duration-500 ${
        darkMode ? "bg-gray-900 text-gray-100" : "bg-gray-100 text-gray-900"
      }`}
    >
      {/* Background video */}
      <video
        src="/videos/video-about.mp4"
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover opacity-40"
      />

      {/* Overlay */}
      <div
        className={`absolute inset-0 ${
          darkMode ? "bg-black/60" : "bg-white/60"
        }`}
      ></div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto text-center px-6">
        <h1
          className={`text-4xl md:text-5xl font-extrabold mb-6 drop-shadow-lg ${
            darkMode ? "text-yellow-300" : "text-blue-700"
          }`}
        >
          ℹ️ About This Project
        </h1>
        

        {/* Call to action */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            to="/"
            className={`px-6 py-3 rounded-lg shadow-md transition text-lg font-medium ${
              darkMode
                ? "bg-gray-700 hover:bg-gray-600 text-yellow-300"
                : "bg-blue-600 hover:bg-blue-700 text-white"
            }`}
          >
            ⬅️ Back to Home
          </Link>
          <Link
            to="/pdf"
            className={`px-6 py-3 rounded-lg shadow-md transition text-lg font-medium ${
              darkMode
                ? "bg-yellow-400 hover:bg-yellow-500 text-gray-900"
                : "bg-yellow-500 hover:bg-yellow-600 text-gray-900"
            }`}
          >
            📂 View Resources
          </Link>
        </div>
      </div>
    </div>
  );
};

export default About;
