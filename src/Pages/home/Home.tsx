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
    <div className="mt-[100px] min-h-screen flex flex-col items-center px-4 sm:px-6 py-12 text-center transition-colors duration-500 bg-gradient-to-b from-blue-50 via-white to-blue-100 dark:from-gray-900 dark:via-gray-950 dark:to-gray-900">
      
      
      <h1 className="text-4xl sm:text-5xl font-extrabold text-blue-700 dark:text-yellow-400 mb-6 tracking-tight drop-shadow-sm">
        💻 IT Presentations
      </h1>

      <p className="text-gray-600 dark:text-gray-300 max-w-2xl mb-12 text-base sm:text-lg leading-relaxed">
        Explore interactive <span className="font-semibold text-blue-700 dark:text-yellow-400">Google Slides</span> presentations  
        for each IT topic below.  
        <br className="hidden sm:block" />
        Click any unit to view it in fullscreen mode.
      </p>

      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10 max-w-6xl w-full">
        {pptList.map((ppt) => (
          <Link
            key={ppt.id}
            to={`/ppt/${ppt.id}`}
            className="group bg-white dark:bg-gray-800 rounded-2xl shadow-md overflow-hidden border border-gray-100 dark:border-gray-700 hover:-translate-y-2 hover:shadow-2xl transition-transform duration-300"
          >
          
            <div className="relative overflow-hidden">
              <img
                src={ppt.image}
                alt={ppt.title}
                className="w-full h-44 sm:h-48 object-cover transform group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>

            {/* Text */}
            <div className="p-5 sm:p-6 text-left sm:text-center">
              <h2 className="text-lg sm:text-xl font-semibold text-gray-800 dark:text-gray-100 group-hover:text-blue-700 dark:group-hover:text-yellow-400 transition-colors duration-300">
                {ppt.title}
              </h2>
              <p className="text-gray-500 dark:text-gray-400 italic text-sm mt-1">
                📑 View Presentation
              </p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
