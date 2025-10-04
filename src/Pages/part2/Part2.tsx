import { Link } from "react-router-dom";

interface PPTItem {
  id: number;
  title: string;
  image: string;
}

const pptList: PPTItem[] = [
  {
    id: 1,
    title: "Unit 1: Software Development",
    image: "/numbers2/1.png",
  },
  {
    id: 2,
    title: "Unit 2: Computer Security",
    image: "/numbers2/2.png",
  },
  {
    id: 3,
    title: "Unit 3: Data Structures",
    image: "/numbers2/3.png",
  },
  {
    id: 4,
    title: "Unit 4: Artificial Intelligence",
    image: "/numbers2/4.png",
  },
  {
    id: 5,
    title: "Unit 5: Cloud Computing",
    image: "/numbers2/5.png",
  },
  {
    id: 6,
    title: "Unit 6: IoT & Smart Devices",
    image: "/numbers2/6.png",
  },
  {
    id: 7,
    title: "Unit 7: Machine Learning",
    image: "/numbers2/7.png",
  },
  {
    id: 8,
    title: "Unit 8: Cyber Ethics",
    image: "/numbers2/8.png",
  },
];

export default function Part2() {
  return (
    <div className="min-h-screen flex flex-col items-center px-6 py-10 text-center">
      <h1 className="text-5xl font-bold text-blue-700 dark:text-yellow-400 mb-8">
        📘 IT Presentations – Part 2
      </h1>
      <p className="text-gray-700 dark:text-gray-300 max-w-2xl mb-12 text-lg">
        Explore the second part of our IT presentations. Click a unit below to view it in fullscreen.
      </p>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl w-full">
        {pptList.map((ppt) => (
          <Link
            key={ppt.id}
            to={`/ppt2/${ppt.id}`}
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
