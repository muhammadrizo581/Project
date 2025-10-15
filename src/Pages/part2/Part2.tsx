import { Link } from "react-router-dom";

interface PPTItem {
  id: number;
  title: string;
  image: string;
}

const pptList: PPTItem[] = [
  { id: 1, title: "Unit 1: Software Development", image: "/numbers2/1.png" },
  { id: 2, title: "Unit 2: Computer Security", image: "/numbers2/2.png" },
  { id: 3, title: "Unit 3: Data Structures", image: "/numbers2/3.png" },
  { id: 4, title: "Unit 4: Artificial Intelligence", image: "/numbers2/4.png" },
  { id: 5, title: "Unit 5: Cloud Computing", image: "/numbers2/5.png" },
  { id: 6, title: "Unit 6: IoT & Smart Devices", image: "/numbers2/6.png" },
  { id: 7, title: "Unit 7: Machine Learning", image: "/numbers2/7.png" },
  { id: 8, title: "Unit 8: Cyber Ethics", image: "/numbers2/8.png" },
];

export default function Part2() {
  return (
    <div className="mt-[100px] min-h-screen flex flex-col items-center px-4 sm:px-6 py-10 sm:py-14 text-center transition-colors duration-300 bg-gradient-to-b from-indigo-50 via-white to-indigo-100 dark:from-gray-900 dark:via-gray-950 dark:to-gray-900">
      
      {/* Title */}
      <h1 className="text-4xl sm:text-5xl font-extrabold text-indigo-700 dark:text-yellow-400 mb-6 drop-shadow-md tracking-tight">
        📘 IT Presentations – Part 2
      </h1>

      {/* Description */}
      <p className="text-gray-700 dark:text-gray-300 max-w-2xl mb-12 text-base sm:text-lg leading-relaxed px-2">
        Explore the second part of our interactive IT presentations.
        <br className="hidden sm:block" />
        Click any topic below to view it in fullscreen mode.
      </p>

      {/* Presentation Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10 max-w-6xl w-full px-4 sm:px-0">
        {pptList.map((ppt) => (
          <Link
            key={ppt.id}
            to={`/ppt2/${ppt.id}`}
            className="group bg-white dark:bg-gray-800 rounded-2xl shadow-md overflow-hidden border border-gray-100 dark:border-gray-700 transform hover:-translate-y-2 hover:shadow-2xl transition-all duration-300"
          >
            {/* Image */}
            <div className="relative overflow-hidden">
              <img
                src={ppt.image}
                alt={ppt.title}
                className="w-full h-44 sm:h-48 object-cover transform transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>

            {/* Title */}
            <div className="p-5 sm:p-6">
              <h2 className="text-lg sm:text-xl font-semibold text-gray-800 dark:text-gray-100 mb-2 group-hover:text-indigo-600 dark:group-hover:text-yellow-400 transition-colors duration-300">
                {ppt.title}
              </h2>
              <p className="text-gray-500 dark:text-gray-400 italic text-sm sm:text-base">
                📑 View Presentation
              </p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
