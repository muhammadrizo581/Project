import { FaFilePdf } from "react-icons/fa";

const PdfFiles = () => {
  const pdfFiles = [
    {
      name: "Academic Information for Professors (2024–2025, 1st Semester)",
      url: "/pdf/academic-info.pdf",
    },
    {
      name: "English for IT and Computer Engineering – Part 1",
      url: "/pdf/english-it-part1.pdf",
    },
    {
      name: "English for IT and Computer Engineering – Part 2",
      url: "/pdf/english-it-part2.pdf",
    },
  ];

  return (
    <div className="mt-[100px]  max-w-4xl mx-auto mt-10 px-4">
      <h1 className="text-2xl font-bold text-blue-700 mb-6">
        📂 PDF Materiallar
      </h1>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {pdfFiles.map((file, i) => (
          <a
            key={i}
            href={file.url}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white border rounded-xl shadow hover:shadow-xl transition transform hover:-translate-y-1 p-6 flex flex-col items-center text-center"
          >
            {/* Icon */}
            <FaFilePdf className="text-red-500 text-5xl mb-4" />

            {/* Name */}
            <h3 className="font-semibold text-gray-800 text-lg mb-2 line-clamp-2">
              {file.name}
            </h3>

            {/* Badge */}
            <span className="inline-block bg-red-100 text-red-600 text-xs font-medium px-3 py-1 rounded-full">
              PDF File
            </span>
          </a>
        ))}
      </div>
    </div>
  );
};

export default PdfFiles;
