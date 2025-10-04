import { Link } from "react-router-dom";

interface PPTItem {
  id: number;
  title: string;
  image: string;
}

const pptList: PPTItem[] = [
  { id: 1, title: "Unit 1: Something 1", image: "/numbers3/1.png" },
  { id: 2, title: "Unit 2: Something 2", image: "/numbers3/2.png" },
  { id: 3, title: "Unit 3: Something 3", image: "/numbers3/3.png" },
  { id: 4, title: "Unit 4: Something 4", image: "/numbers3/4.png" },
  { id: 5, title: "Unit 5: Something 5", image: "/numbers3/5.png" },
];

export default function Part3() {
  return (
    <div className="min-h-screen flex flex-col items-center px-6 py-10 text-center">
      <h1 className="text-5xl font-bold text-blue-700 dark:text-yellow-400 mb-8">
        📗 IT Presentations – Part 3
      </h1>
      <p className="text-gray-700 dark:text-gray-300 max-w-2xl mb-12 text-lg">
        Here are more IT presentations for Part 3. Click to open in fullscreen mode.
      </p>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl w-full">
        {pptList.map((ppt) => (
          <Link
            key={ppt.id}
            to={`/ppt3/${ppt.id}`}
            className="group bg-white dark:bg-gray-800 rounded-2xl shadow-md overflow-hidden border border-gray-200 dark:border-gray-700 hover:-translate-y-2 hover:shadow-2xl transition duration-300"
          >
            <img
              src={ppt.image}
              alt={ppt.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-100 group-hover:text-blue-600 dark:group-hover:text-yellow-400 transition">
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
