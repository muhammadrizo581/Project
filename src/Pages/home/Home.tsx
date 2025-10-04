import { Link } from "react-router-dom";

const PPTList = () => {
  const pptFiles = [
    { name: "Unit 1 – Introduction to IT", file: "/ppt/items_IT.pptx" },
    { name: "Units 2 & 3 – Book 1", file: "/ppt/Units2-3-Book1.pptx" },
    { name: "Unit 4 – Book 1", file: "/ppt/Units4-Book1.pptx" },
    { name: "Units 5 & 6 – Book 1", file: "/ppt/Units5-6-Book1.pptx" },
    { name: "Units 7 & 8 – Part 1", file: "/ppt/Units7and8_Part1.pptx" },
    { name: "Units 9 & 10 – Book 1", file: "/ppt/Units9-10-Book1.pptx" },
    { name: "Units 11 & 12 – Book 1", file: "/ppt/Units11-12-Book1.pptx" },
    { name: "Units 13 & 14 – Book 1", file: "/ppt/Units13-14-Book1.pptx" },
    { name: "Units 15 & 16 – Book 1", file: "/ppt/Units15-16-Book1.pptx" },
  ];

  return (
    <div className="min-h-screen flex flex-col items-center text-center mt-10 px-6">
      <h1 className="text-4xl font-extrabold text-blue-700 dark:text-yellow-400 mb-8">
        🎓 PowerPoint Dars Materiallari
      </h1>
      <p className="text-gray-600 dark:text-gray-300 mb-12 max-w-2xl">
        Quyida barcha IT bo‘limlari uchun tayyorlangan PowerPoint slaydlar
        jamlangan. Har bir faylni ochib, onlayn ko‘rishingiz mumkin.
      </p>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl w-full">
        {pptFiles.map((ppt, i) => (
          <Link
            key={i}
            to={`/ppt-viewer?file=${encodeURIComponent(ppt.file)}`}
            className="group bg-white dark:bg-gray-800 rounded-2xl shadow-md border border-gray-100 dark:border-gray-700 hover:shadow-2xl transform hover:-translate-y-2 transition duration-300 p-6 flex flex-col items-center"
          >
            <img
              src="/icons/ppt-icon.png"
              alt={ppt.name}
              className="w-16 h-16 mb-4 group-hover:scale-110 transition-transform"
            />
            <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200 group-hover:text-blue-600 dark:group-hover:text-yellow-400 text-center">
              {ppt.name}
            </h3>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default PPTList;
