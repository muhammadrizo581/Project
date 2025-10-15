import { Link } from "react-router-dom";

const lessons = [
  {
    id: 1,
    title: "Lesson 1: Introduction to IT",
    videoId: "1cx2xGjdFFvDNKMaoKMm4D5IsnYIbvH7JAdN47hAvASk",
    thumbnail: "/videos/01.png",
  },
  {
    id: 2,
    title: "Lesson 2: Computer Basics",
    videoId: "1HdhblvIMoB86yPW_BHF0ZPMajOkwcLH0GrBHb94Fl0U",
    thumbnail: "/videos/02.png",
  },
];

export default function Lessons() {
  return (
    <div className="mt-[100px] min-h-screen flex flex-col items-center px-6 py-12 bg-gradient-to-b from-blue-50 via-white to-blue-100 dark:from-gray-900 dark:via-gray-950 dark:to-gray-900 transition-colors duration-500">
      <h1 className="text-4xl sm:text-5xl font-extrabold text-blue-700 dark:text-yellow-400 mb-8">
        🎥 Video Lessons
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 max-w-5xl w-full">
        {lessons.map((lesson) => (
          <Link
            key={lesson.id}
            to={`/lessons/${lesson.id}`}
            className="bg-white dark:bg-gray-800 rounded-2xl shadow-md overflow-hidden border border-gray-100 dark:border-gray-700 hover:shadow-xl transition-transform duration-300 active:scale-[0.98]"
          >
            <img
              src={lesson.thumbnail}
              alt={lesson.title}
              className="w-full h-52 object-cover"
            />
            <div className="p-5 text-center">
              <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-100">
                {lesson.title}
              </h2>
              
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
