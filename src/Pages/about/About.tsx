import { Link } from "react-router-dom";
import { useDarkMode } from "../../context/DarkModeContext";

const About = () => {
  const { darkMode } = useDarkMode();

  return (
    <div
      className={`relative min-h-screen flex items-center justify-center overflow-hidden transition-colors duration-500 ${
        darkMode
          ? "bg-gray-900 text-gray-100"
          : "bg-gradient-to-b from-blue-50 via-white to-blue-100 text-gray-900"
      }`}
    >
      {/* 🔹 Background video */}
      <video
        src="/videos/video-about.mp4"
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover opacity-40"
      />

      {/* 🔹 Overlay */}
      <div
        className={`absolute inset-0 backdrop-blur-sm ${
          darkMode ? "bg-black/70" : "bg-white/60"
        }`}
      ></div>

      {/* 🔹 Content */}
      <div className="relative z-10 max-w-4xl mx-auto text-center px-6 py-10 sm:py-16">
        <h1
          className={`text-4xl sm:text-5xl font-extrabold mb-6 drop-shadow-lg ${
            darkMode ? "text-yellow-300" : "text-blue-700"
          }`}
        >
          ℹ️ About This Project
        </h1>

        <p
          className={`text-base sm:text-lg leading-relaxed mb-10 transition-colors duration-500 ${
            darkMode ? "text-gray-300" : "text-gray-700"
          }`}
        >
          This platform provides{" "}
          <span className="font-semibold">
            interactive IT learning materials
          </span>
          , including{" "}
          <span className="font-semibold">
            presentations, games, and useful resources
          </span>
          .
          <br className="hidden sm:block" />
          Our goal is to make learning more engaging and accessible for students of
          Information Technology.
        </p>


        {/* 🔹 Feature highlights */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-12">
          <div
            className={`p-6 rounded-2xl shadow-md backdrop-blur-sm ${
              darkMode
                ? "bg-gray-800/70 border border-gray-700"
                : "bg-white/70 border border-blue-100"
            }`}
          >
            <h3 className="text-xl font-semibold mb-2">
              🎓 Easy Learning
            </h3>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Access structured units designed for IT students with clear examples and visuals.
            </p>
          </div>

          <div
            className={`p-6 rounded-2xl shadow-md backdrop-blur-sm ${
              darkMode
                ? "bg-gray-800/70 border border-gray-700"
                : "bg-white/70 border border-blue-100"
            }`}
          >
            <h3 className="text-xl font-semibold mb-2">
              🧩 Interactive Tools
            </h3>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Play educational games like Jeopardy to test and reinforce your knowledge in a fun way.
            </p>
          </div>

          <div
            className={`p-6 rounded-2xl shadow-md backdrop-blur-sm ${
              darkMode
                ? "bg-gray-800/70 border border-gray-700"
                : "bg-white/70 border border-blue-100"
            }`}
          >
            <h3 className="text-xl font-semibold mb-2">
              🌐 Modern Design
            </h3>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Built with React and TailwindCSS to ensure a smooth, modern, and responsive user experience.
            </p>
          </div>
        </div>

        {/* 🔹 Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            to="/"
            className={`px-6 py-3 rounded-lg font-medium shadow-md transition-all text-lg ${
              darkMode
                ? "bg-gray-700 hover:bg-gray-600 text-yellow-300"
                : "bg-blue-600 hover:bg-blue-700 text-white"
            }`}
          >
            ⬅ Back to Home
          </Link>

          <Link
            to="/pdf"
            className={`px-6 py-3 rounded-lg font-medium shadow-md transition-all text-lg ${
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
