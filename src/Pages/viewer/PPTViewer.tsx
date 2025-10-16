import { useParams, Link } from "react-router-dom";
import { useDarkMode } from "../../context/DarkModeContext";
import { useEffect } from "react";

const pptLinks: string[] = [
  "https://docs.google.com/presentation/d/117WOPoJGYWvgsQVfWV5xtUcBZKsWcf5S/preview?slide=id.p1",
  "https://docs.google.com/presentation/d/1cnfxe1lzfuguUE_NKC1Jk099r3_2hWMl/preview?slide=id.p1",
  "https://docs.google.com/presentation/d/1kNp4_JyipI-RnAfdy_uVKmZimwOiVXET/preview?slide=id.p1",
  "https://docs.google.com/presentation/d/16lwDwBzQBQuTDGTd14i1wj-b1WMcPFVy/preview?slide=id.p1",
  "https://docs.google.com/presentation/d/1Gy46TWxyZeGZn0vAiNqjhzMwCEMvcehV/preview?slide=id.p1",
  "https://docs.google.com/presentation/d/1oiXPGwrMWqNNUf98Eiu0yGuiDGFC9Vz1/preview?slide=id.p1",
  "https://docs.google.com/presentation/d/1BToU2oRpQjpN-DCCs9RgYEZJwCCF8UwW/preview?slide=id.p1",
  "https://docs.google.com/presentation/d/1vknvTrkAoAg7FJGbhzL7eGibKlo9Uf1a/preview?slide=id.p1",
  "https://docs.google.com/presentation/d/1Mo6WrbJnLPIB6vviwDOB7urzddlEDwAj/preview?slide=id.p1",
  "https://docs.google.com/presentation/d/1yjgbJ24wDIK_HmNPgYhGYtWoXWXhr-CK/preview?slide=id.p1",
];

export default function PPTViewer() {
  const { darkMode } = useDarkMode();
  const { id } = useParams<{ id: string }>();
  const index = parseInt(id || "0", 10) - 1;

  // Har safar page o‘zgarganda scroll tepaga chiqadi
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [id]);

  // Noto‘g‘ri link bo‘lsa
  if (index < 0 || index >= pptLinks.length) {
    return (
      <div className="text-center mt-20">
        <p className="text-red-500 text-lg mb-4">❌ Invalid presentation link.</p>
        <Link
          to="/"
          className={`px-5 py-3 rounded-lg text-white ${
            darkMode
              ? "bg-yellow-500 hover:bg-yellow-400 text-gray-900"
              : "bg-blue-600 hover:bg-blue-700"
          } transition`}
        >
          ⬅ Go Back Home
        </Link>
      </div>
    );
  }

  const prevId = index > 0 ? index : pptLinks.length - 1;
  const nextId = index + 1 < pptLinks.length ? index + 2 : 1;

  return (
    <div
      className={`w-full h-screen flex flex-col transition-colors duration-500 ${
        darkMode ? "bg-gray-900" : "bg-gray-100"
      }`}
    >
      {/* Google Slides Iframe */}
      <iframe
        src={pptLinks[index]}
        allowFullScreen
        className="flex-1 w-full border-0"
        title={`Presentation ${index + 1}`}
      ></iframe>

      {/* Navigation Bar */}
      <div
        className={`flex justify-between flex-wrap gap-4 p-4 text-center transition-all duration-300 ${
          darkMode ? "bg-gray-800 text-white" : "bg-blue-600 text-white"
        }`}
      >
        {/* Home */}
        <Link
          to="/"
          className={`px-5 py-2 rounded-lg font-medium shadow-md transition ${
            darkMode
              ? "bg-gray-700 hover:bg-gray-600 text-yellow-300"
              : "bg-white text-blue-700 hover:bg-gray-100"
          }`}
        >
          🏠 Back to Home
        </Link>

        {/* Navigation Buttons */}
        <div className="flex gap-3 justify-center mx-auto sm:mx-0">
          <Link
            to={`/ppt/${prevId}`}
            className={`px-5 py-2 rounded-lg shadow-md transition font-medium ${
              darkMode
                ? "bg-gray-700 hover:bg-gray-600 text-white"
                : "bg-white text-blue-700 hover:bg-gray-100"
            }`}
          >
            ⬅ Previous
          </Link>

          <Link
            to={`/ppt/${nextId}`}
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
