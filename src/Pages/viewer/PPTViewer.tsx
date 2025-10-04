import { useParams, Link } from "react-router-dom";

const pptLinks: string[] = [
  "https://docs.google.com/presentation/d/1cnfxe1lzfuguUE_NKC1Jk099r3_2hWMl/preview?slide=id.p1",
  "https://docs.google.com/presentation/d/1kNp4_JyipI-RnAfdy_uVKmZimwOiVXET/preview?slide=id.p1",
  "https://docs.google.com/presentation/d/16lwDwBzQBQuTDGTd14i1wj-b1WMcPFVy/preview?slide=id.p1",
  "https://docs.google.com/presentation/d/1Gy46TWxyZeGZn0vAiNqjhzMwCEMvcehV/preview?slide=id.p1",
  "https://docs.google.com/presentation/d/1oiXPGwrMWqNNUf98Eiu0yGuiDGFC9Vz1/preview?slide=id.p1",
  "https://docs.google.com/presentation/d/1BToU2oRpQjpN-DCCs9RgYEZJwCCF8UwW/preview?slide=id.p1",
  "https://docs.google.com/presentation/d/1vknvTrkAoAg7FJGbhzL7eGibKlo9Uf1a/preview?slide=id.p1",
  "https://docs.google.com/presentation/d/1Mo6WrbJnLPIB6vviwDOB7urzddlEDwAj/preview?slide=id.p1",
  "https://docs.google.com/presentation/d/1yjgbJ24wDIK_HmNPgYhGYtWoXWXhr-CK/preview?slide=id.p1"
];

export default function PPTViewer() {
  const { id } = useParams<{ id: string }>();
  const index = parseInt(id || "0", 10) - 1;

  if (index < 0 || index >= pptLinks.length) {
    return (
      <div className="text-center text-red-500 mt-20">
        <p>❌ Invalid presentation link.</p>
        <Link to="/" className="text-blue-600 underline">Go Home</Link>
      </div>
    );
  }

  // Tugmalar uchun indekslarni aniqlash
  const prevId = index > 0 ? index : pptLinks.length - 1;
  const nextId = index + 1 < pptLinks.length ? index + 2 : 1;

  return (
    <div className="w-full h-screen flex flex-col bg-gray-900">
      {/* Presentation oynasi */}
      <iframe
        src={pptLinks[index]}
        allowFullScreen
        className="flex-1 w-full border-0"
      ></iframe>

      {/* Navigatsiya paneli */}
      <div className="flex justify-between flex-wrap gap-4 p-4 bg-gray-800 text-white text-center">
        {/* Asosiy sahifaga qaytish */}
        <Link
          to="/"
          className="bg-blue-600 px-4 py-2 rounded-lg hover:bg-blue-700 transition"
        >
          🏠 Back to Home
        </Link>

        {/* Oldingi va keyingi tugmalar */}
        <div className="flex gap-3">
          <Link
            to={`/ppt/${prevId}`}
            className="bg-gray-500 px-4 py-2 rounded-lg hover:bg-gray-600 transition"
          >
            ⬅ Previous
          </Link>

          <Link
            to={`/ppt/${nextId}`}
            className="bg-yellow-500 text-black px-4 py-2 rounded-lg hover:bg-yellow-400 transition"
          >
            ➡ Next
          </Link>
        </div>
      </div>
    </div>
  );
}
