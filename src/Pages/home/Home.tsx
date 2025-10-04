import { Link } from "react-router-dom";

interface PPTItem {
  id: number;
  title: string;
  image: string;
}

const pptList: PPTItem[] = [
  { id: 1, title: "Unit 1: Introduction to IT", image: "/numbers1/1.png" },
  { id: 2, title: "Unit 2: Computing Devices", image: "/numbers1/2.png" },
  { id: 3, title: "Unit 3: Word Processing", image: "/numbers1/3.png" },
  { id: 4, title: "Unit 4: Networking", image: "/numbers1/4.png" },
  { id: 5, title: "Unit 5: Web Browsing", image: "/numbers1/5.png" },
  { id: 6, title: "Unit 6: Databases", image: "/numbers1/6.png" },
  { id: 7, title: "Unit 7: Desktop Publishing", image: "/numbers1/7.png" },
  { id: 8, title: "Unit 8: E-commerce", image: "/numbers1/8.png" },
  { id: 9, title: "Unit 9: Memory & Storage", image: "/numbers1/9.png" },
];

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center px-6 py-12 text-center">
      {/* Header */}
      <h1 className="text-5xl font-extrabold text-blue-700 dark:text-yellow-400 mb-6 drop-shadow-lg">
        💻 IT Presentations
      </h1>
      <p className="text-gray-700 dark:text-gray-300 max-w-2xl mb-12 text-lg leading-relaxed">
        Explore interactive Google Slides presentations for each IT topic below.  
        Click any unit to view it in fullscreen mode.
      </p>

      {/* Grid */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-6xl w-full">
        {pptList.map((ppt) => (
          <Link
            key={ppt.id}
            to={`/ppt/${ppt.id}`}
            className="group bg-white dark:bg-gray-800 rounded-2xl shadow-md overflow-hidden border border-gray-200 dark:border-gray-700 transform hover:-translate-y-2 hover:shadow-2xl transition-all duration-300"
          >
            {/* Image */}
            <div className="relative">
              <img
                src={ppt.image}
                alt={ppt.title}
                className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
            </div>

            {/* Text */}
            <div className="p-6">
              <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-100 group-hover:text-blue-600 dark:group-hover:text-yellow-400 transition-colors">
                {ppt.title}
              </h2>
              <p className="text-gray-500 dark:text-gray-400 mt-2 italic">
                📑 View Presentation
              </p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
