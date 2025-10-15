import { useParams, Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

const lessons = [
  {
    id: 1,
    title: "Lesson 1: Introduction to IT",
    youtubeId: "wZfQEEO1UJc", // YouTube video ID
    thumbnail: "/videos/01.png",
  },
  {
    id: 2,
    title: "Lesson 2: Computer Basics",
    youtubeId: "jLpQvErG3nA",
    thumbnail: "/videos/02.png",
  },
];

export default function LessonDetail() {
  const { id } = useParams();
  const lesson = lessons.find((l) => l.id === Number(id));

  if (!lesson) {
    return (
      <div className="min-h-screen flex items-center justify-center text-gray-300 bg-gray-800">
        <p>Lesson not found 😕</p>
      </div>
    );
  }

  return (
    <div className="mt-[90px] flex flex-col items-center min-h-screen bg-gray-800 text-white px-4 py-10">
      <div className="w-full max-w-5xl mx-auto text-center">
        {/* 🔙 Back link */}
        <Link
          to="/lessons"
          className="inline-flex items-center gap-2 text-gray-300 hover:text-white transition mb-6"
        >
          <ArrowLeft size={20} />
          <span>Back to Lessons</span>
        </Link>

        {/* 🧠 Title */}
        <h1 className="text-3xl sm:text-4xl font-bold text-yellow-400 mb-8 tracking-tight">
          {lesson.title}
        </h1>

        {/* 🎬 YouTube Video */}
        <div
          className="
            relative w-full mx-auto rounded-2xl overflow-hidden
            shadow-2xl border border-gray-700
            bg-black max-w-4xl
          "
        >
          <iframe
            src={`https://www.youtube.com/embed/${lesson.youtubeId}`}
            title={lesson.title}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="w-full h-[60vh] sm:h-[70vh] border-0"
          ></iframe>
        </div>

        {/* 📘 Optional description */}
        <p className="text-gray-400 mt-8 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
          Watch this lesson on YouTube in high quality. You can pause, resume, or switch back anytime.
        </p>
      </div>
    </div>
  );
}
