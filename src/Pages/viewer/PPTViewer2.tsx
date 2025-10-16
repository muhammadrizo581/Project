import { useParams, Link } from "react-router-dom";
import { useEffect } from "react";
import { useDarkMode } from "../../context/DarkModeContext";

const pptLinks: string[] = [
  "https://docs.google.com/presentation/d/1utCQxpF9v7yUmB7zTbntH1Nb5uu7uRKA/preview?slide=id.p1",
  "https://docs.google.com/presentation/d/1Rx6YGp7O6soomKeuXCihWA6-nxdmrrKp/preview?slide=id.p1",
  "https://docs.google.com/presentation/d/1e3hvKKE1TEbka3v73PsD3VDxWeWPDmLH/preview?slide=id.p1",
  "https://docs.google.com/presentation/d/1ESpKv1xpjzCabZYupSLlm6uAkXBeyasN/preview?slide=id.p1",
  "https://docs.google.com/presentation/d/1VOMveqtnSJxsMD6nxq_mNTNKnM1ZlDeJ/preview?slide=id.p1",
  "https://docs.google.com/presentation/d/1JiXldoKGq48Et0MPQ9XEoZ7sOagrt4fA/preview?slide=id.p1",
  "https://drive.google.com/file/d/1Ojaiw3Bl-St084xKKCc6nffdqHas14k7/preview",
  "https://docs.google.com/presentation/d/1zoi0i8JncuzLciLfiemWg3Q48jplKV0g/preview?slide=id.p1",
  "https://docs.google.com/presentation/d/1mVA3J3LVvFWjysJO_MRxpnfO0ljDbmH_/preview?slide=id.p1",
];

export default function PPTViewer2() {
  const { id } = useParams<{ id: string }>();
  const { darkMode } = useDarkMode();
  const index = parseInt(id || "0", 10) - 1;

  // Scroll to top har safar yangi slide ochilganda
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [id]);

  // Noto‘g‘ri ID uchun xabar
  if (index < 0 || index >= pptLinks.length) {
    return (
      <div
        className={`text-center mt-20 ${
          darkMode ? "text-gray-200" : "text-gray-800"
        }`}
      >
        <p className="text-red-500 text-lg mb-4">❌ Invalid presentation link.</p>
        <Link
          to="/part2"
          className={`px-5 py-3 rounded-lg shadow-md transition ${
            darkMode
              ? "bg-yellow-400 hover:bg-yellow-500 text-gray-900"
              : "bg-blue-600 hover:bg-blue-700 text-white"
          }`}
        >
          ⬅ Go Back to Part 2
        </Link>
      </div>
    );
  }

  // Navigatsiya uchun
  const prevId = index > 0 ? index : pptLinks.length - 1;
  const nextId = index + 1 < pptLinks.length ? index + 2 : 1;

  return (
    <div
      className={`w-full h-screen flex flex-col transition-colors duration-500 ${
        darkMode ? "bg-gray-900" : "bg-gray-100"
      }`}
    >
      {/* Presentation */}
      <iframe
        src={pptLinks[index]}
        allowFullScreen
        className="flex-1 w-full border-0"
        title={`IT Presentation ${index + 1}`}
      ></iframe>

      {/* Navigation Bar */}
      <div
        className={`flex justify-between flex-wrap gap-4 p-4 text-center transition-all duration-300 ${
          darkMode ? "bg-gray-800 text-white" : "bg-blue-600 text-white"
        }`}
      >
        {/* Back Button */}
        <Link
          to="/part2"
          className={`px-5 py-2 rounded-lg font-medium shadow-md transition ${
            darkMode
              ? "bg-gray-700 hover:bg-gray-600 text-yellow-300"
              : "bg-white text-blue-700 hover:bg-gray-100"
          }`}
        >
          🏠 Back to Part 2
        </Link>

        {/* Navigation Controls */}
        <div className="flex gap-3 justify-center mx-auto sm:mx-0">
          <Link
            to={`/ppt2/${prevId}`}
            className={`px-5 py-2 rounded-lg shadow-md transition font-medium ${
              darkMode
                ? "bg-gray-700 hover:bg-gray-600 text-white"
                : "bg-white text-blue-700 hover:bg-gray-100"
            }`}
          >
            ⬅ Previous
          </Link>

          <Link
            to={`/ppt2/${nextId}`}
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
