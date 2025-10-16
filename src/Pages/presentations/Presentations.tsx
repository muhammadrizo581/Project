import { Link } from "react-router-dom";
import { useDarkMode } from "../../context/DarkModeContext";

export default function Presentations() {
  const { darkMode } = useDarkMode();

  const parts = [
    {
      id: 1,
      title: "📘 Part 1: IT Fundamentals",
      desc: "Explore the basics of information technology — hardware, software, and networks.",
      image: "/numbers1/1.png",
      link: "/part1",
      gradient: "from-blue-500 to-blue-700",
    },
    {
      id: 2,
      title: "📙 Part 2: Advanced Topics",
      desc: "Dive deeper into cybersecurity, AI, and cloud computing presentations.",
      image: "/numbers2/1.png",
      link: "/part2",
      gradient: "from-indigo-500 to-purple-700",
    },
    {
      id: 3,
      title: "📗 Part 3: Professional IT Concepts",
      desc: "Enhance your knowledge with modern tools, case studies, and research projects.",
      image: "/numbers3/1.png",
      link: "/part3",
      gradient: "from-green-500 to-emerald-700",
    },
  ];

  return (
    <div
      className={`min-h-screen flex flex-col items-center px-4 sm:px-6 py-16 text-center transition-colors duration-500 ${
        darkMode
          ? "bg-gray-900 text-gray-100"
          : "bg-gradient-to-b from-blue-50 via-white to-blue-100 text-gray-900"
      }`}
    >
      {/* Header */}
      <h1 className="text-4xl sm:text-5xl font-extrabold mb-6 text-blue-700 dark:text-yellow-400 tracking-tight drop-shadow-md">
        💾 IT Presentations Hub
      </h1>
      <p className="max-w-2xl text-base sm:text-lg mb-12 text-gray-600 dark:text-gray-300 leading-relaxed">
        Choose a presentation set below to explore different IT topics in interactive slides.  
        Each part offers unique learning materials and insights.
      </p>

      {/* Parts grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl w-full">
        {parts.map((part) => (
          <Link
            key={part.id}
            to={part.link}
            className={`group relative rounded-2xl overflow-hidden shadow-lg border dark:border-gray-700 transition-all transform hover:-translate-y-2 hover:shadow-2xl duration-500`}
          >
            {/* Image with blur + dark overlay */}
            <div className="relative w-full h-56 overflow-hidden">
              <img
                src={part.image}
                alt={part.title}
                className="w-full h-full object-cover blur-[2px] brightness-75 group-hover:brightness-90 group-hover:blur-[1px] transition-all duration-500"
              />
              <div className={`absolute inset-0 bg-gradient-to-br ${part.gradient} opacity-60 group-hover:opacity-70 transition-all duration-500`}></div>
            </div>

            {/* Content overlay */}
            <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6 py-4">
              <h2 className="text-2xl sm:text-3xl font-bold mb-3 text-white drop-shadow-lg">
                {part.title}
              </h2>
              <p className="text-sm sm:text-base text-white/90 max-w-sm">
                {part.desc}
              </p>
            </div>

            {/* Bottom button */}
            <div className="absolute bottom-4 left-0 right-0 flex justify-center">
              <span className="bg-white/80 dark:bg-gray-900/80 text-gray-800 dark:text-yellow-300 px-4 py-2 rounded-lg text-sm font-semibold backdrop-blur-md shadow-md group-hover:scale-105 transition-transform">
                📑 View Presentations
              </span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
