import { useParams, Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

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

export default function LessonDetail() {
  const { id } = useParams();
  const lesson = lessons.find((l) => l.id === Number(id));

  if (!lesson) {
    return (
      <div className="min-h-screen flex items-center justify-center text-gray-600 dark:text-gray-300">
        <p>Lesson not found 😕</p>
      </div>
    );
  }

  return (
    <div className="mt-[90px] flex flex-col items-center min-h-screen bg-gradient-to-b from-blue-50 via-white to-blue-100 dark:from-gray-900 dark:via-gray-950 dark:to-gray-900 px-4 py-10 transition-colors duration-500">
      <div className="w-full max-w-5xl mx-auto text-center">
        {/* 🔙 Back link */}
        <Link
          to="/lessons"
          className="inline-flex items-center gap-2 text-blue-600 dark:text-yellow-400 hover:text-blue-800 dark:hover:text-yellow-300 transition mb-6"
        >
          <ArrowLeft size={20} />
          <span>Back to Lessons</span>
        </Link>

        {/* 🧠 Title */}
        <h1 className="text-3xl sm:text-4xl font-bold text-blue-700 dark:text-yellow-400 mb-8 tracking-tight">
          {lesson.title}
        </h1>

        {/* 🎬 Video */}
        <div
          className="
            relative w-full mx-auto rounded-2xl overflow-hidden
            shadow-2xl border border-gray-200 dark:border-gray-700
            bg-black max-w-4xl transition-transform duration-500
          "
        >
          <iframe
            src={`https://drive.google.com/file/d/${lesson.videoId}/preview`}
            allow="autoplay; fullscreen"
            allowFullScreen
            className="w-full h-[60vh] sm:h-[70vh] border-0"
          ></iframe>
        </div>

        {/* 📘 Description (optional, clean look) */}
        <p className="text-gray-600 dark:text-gray-300 mt-8 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
          Watch this lesson to learn key IT concepts. You can pause, resume, or
          switch back anytime from the lessons page.
        </p>
      </div>
    </div>
  );
}
