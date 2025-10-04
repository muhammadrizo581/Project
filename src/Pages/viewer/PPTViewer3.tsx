import { useParams, Link } from "react-router-dom";
import { useEffect } from "react";
import { useDarkMode } from "../../context/DarkModeContext";

const pptLinks: string[] = [
  "https://docs.google.com/presentation/d/1ib7sGDs27qZQJ6EgcL1Bi2OQELKqKeLe/preview?slide=id.p1",
  "https://docs.google.com/presentation/d/1XBPRhDnmj3195it34ndBrnWClnTnw8Y4/preview?slide=id.p1",
  "https://docs.google.com/presentation/d/1Ig3XyYwBaIAqNHCLM8c-wzB0IMnf6vV9/preview?slide=id.p1",
  "https://docs.google.com/presentation/d/13qSBJ-PzpS3l8eHdNdc1oH79eR27pHtR/preview?slide=id.p1",
  "https://docs.google.com/presentation/d/1vKsOInDQcHvEEUGOMqe8lCmDH7P3Cx4b/preview?slide=id.p1",
];

export default function PPTViewer3() {
  const { id } = useParams<{ id: string }>();
  const { darkMode } = useDarkMode();
  const index = parseInt(id || "0", 10) - 1;

  // 🔝 Har safar yangi slaydga o‘tganda scroll tepaga chiqsin
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [id]);

  // ❌ Agar ID noto‘g‘ri bo‘lsa
  if (index < 0 || index >= pptLinks.length) {
    return (
      <div
        className={`text-center mt-20 ${
          darkMode ? "text-gray-200" : "text-gray-800"
        }`}
      >
        <p className="text-red-500 text-lg mb-4">❌ Invalid presentation link.</p>
        <Link
          to="/part3"
          className={`px-5 py-3 rounded-lg shadow-md transition ${
            darkMode
              ? "bg-yellow-400 hover:bg-yellow-500 text-gray-900"
              : "bg-blue-600 hover:bg-blue-700 text-white"
          }`}
        >
          ⬅ Go Back to Part 3
        </Link>
      </div>
    );
  }

  // 🔁 Navigatsiya uchun indexlar
  const prevId = index > 0 ? index : pptLinks.length - 1;
  const nextId = index + 1 < pptLinks.length ? index + 2 : 1;

  return (
    <div
      className={`w-full h-screen flex flex-col transition-colors duration-500 ${
        darkMode ? "bg-gray-900" : "bg-gray-100"
      }`}
    >
      {/* 🎞 Presentation */}
      <iframe
        src={pptLinks[index]}
        allowFullScreen
        className="flex-1 w-full border-0"
        title={`IT Presentation ${index + 1}`}
      ></iframe>

      {/* 🧭 Navigation bar */}
      <div
        className={`flex justify-between flex-wrap gap-4 p-4 text-center transition-all duration-300 ${
          darkMode ? "bg-gray-800 text-white" : "bg-blue-600 text-white"
        }`}
      >
        {/* Home (Back) button */}
        <Link
          to="/part3"
          className={`px-5 py-2 rounded-lg font-medium shadow-md transition ${
            darkMode
              ? "bg-gray-700 hover:bg-gray-600 text-yellow-300"
              : "bg-white text-blue-700 hover:bg-gray-100"
          }`}
        >
          🏠 Back to Part 3
        </Link>

        {/* Prev / Next controls */}
        <div className="flex gap-3 justify-center mx-auto sm:mx-0">
          <Link
            to={`/ppt3/${prevId}`}
            className={`px-5 py-2 rounded-lg shadow-md font-medium transition ${
              darkMode
                ? "bg-gray-700 hover:bg-gray-600 text-white"
                : "bg-white text-blue-700 hover:bg-gray-100"
            }`}
          >
            ⬅ Previous
          </Link>

          <Link
            to={`/ppt3/${nextId}`}
            className={`px-5 py-2 rounded-lg shadow-md font-medium transition ${
              darkMode
                ? "bg-yellow-400 hover:bg-yellow-500 text-gray-900"
                : "bg-yellow-500 hover:bg-yellow-600 text-gray-900"
            }`}
          >
            ➡ Next
          </Link>
        </div>
      </div>
    </div>
  );
}
