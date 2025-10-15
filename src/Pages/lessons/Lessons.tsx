import { Link } from "react-router-dom";

const lessons = [
  {
    id: 1,
    title: "Lesson 1: Introduction to IT",
    youtubeId: "wZfQEEO1UJc",
  },
  {
    id: 2,
    title: "Lesson 2: Computer Basics",
    youtubeId: "jLpQvErG3nA",
  },
];

export default function Lessons() {
  return (
    <div className="mt-[90px]  flex flex-col items-center px-4 sm:px-6 py-12 text-white">
      <h1 className="text-4xl sm:text-5xl font-extrabold text-yellow-400 mb-8 tracking-tight">
        🎓 IT Video Lessons
      </h1>

      <p className="text-gray-400 max-w-2xl mb-12 text-center text-base sm:text-lg leading-relaxed">
        Watch these YouTube lessons to learn IT concepts step by step.
      </p>

      {/* 🔹 Video Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2  px-[150px] gap-10 max-w-6xl w-full">
        {lessons.map((lesson) => (
          <Link
            key={lesson.id}
            to={`/lesson/${lesson.id}`}
            className="group bg-gray-900 rounded-2xl overflow-hidden shadow-lg border border-gray-700 hover:scale-[1.03] transition-transform duration-300"
          >
            {/* 📺 Thumbnail */}
            <div className="relative overflow-hidden">
              <img
                src={`https://img.youtube.com/vi/${lesson.youtubeId}/hqdefault.jpg`}
                alt={lesson.title}
                className="w-full h-48 object-cover transition-transform duration-500 "
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
            </div>

            {/* 📘 Title */}
            <div className="p-5 text-center">
              <h2 className="text-lg sm:text-xl font-semibold text-yellow-400 mb-1">
                {lesson.title}
              </h2>
              <p className="text-gray-400 text-sm">▶ Watch on YouTube</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
