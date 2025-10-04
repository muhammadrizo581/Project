import { useLocation, Link } from "react-router-dom";

const PPTViewer = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const file = queryParams.get("file");

  if (!file) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen text-center text-gray-700 dark:text-gray-300">
        <h1 className="text-3xl font-bold mb-4">⚠️ Fayl topilmadi</h1>
        <Link
          to="/ppt"
          className="text-blue-600 dark:text-yellow-400 underline hover:opacity-80"
        >
          PowerPoint sahifasiga qaytish
        </Link>
      </div>
    );
  }

  const publicUrl = window.location.origin + file;
  const officeViewerUrl = `https://view.officeapps.live.com/op/embed.aspx?src=${encodeURIComponent(
    publicUrl
  )}`;

  return (
    <div className="min-h-screen flex flex-col bg-gray-100 dark:bg-gray-900">
      <div className="p-4 text-center bg-blue-600 dark:bg-gray-800 text-white font-semibold text-lg shadow-md">
        📊 PowerPoint Viewer
      </div>

      <iframe
        title="PowerPoint Viewer"
        src={officeViewerUrl}
        className="flex-1 w-full"
        style={{ minHeight: "90vh", border: "none" }}
      ></iframe>

      <div className="p-6 text-center">
        <Link
          to="/ppt"
          className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition"
        >
          ⬅️ Orqaga qaytish
        </Link>
      </div>
    </div>
  );
};

export default PPTViewer;
