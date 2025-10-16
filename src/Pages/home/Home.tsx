import { Link } from "react-router-dom";
import { useDarkMode } from "../../context/DarkModeContext";

export default function Home() {
  const { darkMode } = useDarkMode();

  return (
    <div
      className={`min-h-screen flex flex-col transition-colors duration-500 ${
        darkMode
          ? "bg-gray-900 text-gray-100"
          : "bg-gradient-to-b from-blue-50 via-white to-blue-100 text-gray-900"
      }`}
    >
      {/* Hero Section */}
      <section className="relative flex flex-col justify-center items-center text-center px-6 py-24 md:py-32 overflow-hidden">
        {/* Background video */}
        <video
          src="/videos/video-home.mp4"
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover opacity-40"
        ></video>

        {/* Overlay */}
        <div
          className={`absolute inset-0 ${
            darkMode ? "bg-black/60" : "bg-white/60"
          }`}
        ></div>

        {/* Hero Content */}
        <div className="relative z-10 max-w-3xl">
          <h1 className="text-4xl md:text-6xl font-extrabold mb-4 text-blue-700 dark:text-yellow-400 drop-shadow-lg">
            💻 Welcome to IT Resources
          </h1>
          <p className="text-lg md:text-xl leading-relaxed text-gray-700 dark:text-gray-200 mb-10">
            Explore interactive IT presentations and educational materials — all in one place.
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            <Link
              to="/presentations"
              className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition shadow-md dark:bg-yellow-400 dark:text-gray-900 dark:hover:bg-yellow-500"
            >
              📘 Explore Presentations
            </Link>
            <Link
              to="/about"
              className="bg-gray-700 hover:bg-gray-800 text-white px-6 py-3 rounded-lg font-semibold transition shadow-md dark:bg-gray-600 dark:hover:bg-gray-500"
            >
              ℹ️ Learn More
            </Link>
          </div>
        </div>
      </section>

      {/* Learning Path Section */}
      <section className="max-w-6xl mx-auto px-6 py-20 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-10 text-blue-700 dark:text-yellow-400">
          🧩 Choose Your Learning Path
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            { id: 1, title: "Part 1", desc: "Basics of IT and Computing", path: "/part1" },
            { id: 2, title: "Part 2", desc: "Advanced IT Topics", path: "/part2" },
            { id: 3, title: "Part 3", desc: "Specialized Areas of Tech", path: "/part3" },
          ].map((item) => (
            <Link
              key={item.id}
              to={item.path}
              className="group bg-white dark:bg-gray-800 rounded-2xl shadow-md border border-gray-200 dark:border-gray-700 overflow-hidden hover:-translate-y-2 hover:shadow-xl transition-all duration-300 p-8"
            >
              <h3 className="text-2xl font-bold mb-3 text-gray-800 dark:text-gray-100 group-hover:text-blue-600 dark:group-hover:text-yellow-400">
                {item.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">{item.desc}</p>
              <span className="inline-block text-blue-600 dark:text-yellow-400 font-semibold">
                View Presentations →
              </span>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
