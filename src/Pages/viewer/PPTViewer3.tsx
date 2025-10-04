import { useParams, Link } from "react-router-dom";

const pptLinks: string[] = [
  "https://docs.google.com/presentation/d/1ib7sGDs27qZQJ6EgcL1Bi2OQELKqKeLe/preview?slide=id.p1",
  "https://docs.google.com/presentation/d/1XBPRhDnmj3195it34ndBrnWClnTnw8Y4/preview?slide=id.p1",
  "https://docs.google.com/presentation/d/1Ig3XyYwBaIAqNHCLM8c-wzB0IMnf6vV9/preview?slide=id.p1",
  "https://docs.google.com/presentation/d/13qSBJ-PzpS3l8eHdNdc1oH79eR27pHtR/preview?slide=id.p1",
  "https://docs.google.com/presentation/d/1vKsOInDQcHvEEUGOMqe8lCmDH7P3Cx4b/preview?slide=id.p1",
];

export default function PPTViewer3() {
  const { id } = useParams<{ id: string }>();
  const index = parseInt(id || "0", 10) - 1;

  if (index < 0 || index >= pptLinks.length) {
    return (
      <div className="text-center text-red-500 mt-20">
        <p>❌ Invalid presentation link.</p>
        <Link to="/part3" className="text-blue-600 underline">Go Back</Link>
      </div>
    );
  }

  const prevId = index > 0 ? index : pptLinks.length - 1;
  const nextId = index + 1 < pptLinks.length ? index + 2 : 1;

  return (
    <div className="w-full h-screen flex flex-col bg-gray-900">
      <iframe
        src={pptLinks[index]}
        allowFullScreen
        className="flex-1 w-full border-0"
      ></iframe>

      <div className="flex justify-between flex-wrap gap-4 p-4 bg-gray-800 text-white">
        <Link
          to="/part3"
          className="bg-blue-600 px-4 py-2 rounded-lg hover:bg-blue-700 transition"
        >
          🏠 Back to Part 3
        </Link>

        <div className="flex gap-3">
          <Link
            to={`/ppt3/${prevId}`}
            className="bg-gray-500 px-4 py-2 rounded-lg hover:bg-gray-600 transition"
          >
            ⬅ Previous
          </Link>
          <Link
            to={`/ppt3/${nextId}`}
            className="bg-yellow-500 text-black px-4 py-2 rounded-lg hover:bg-yellow-400 transition"
          >
            ➡ Next
          </Link>
        </div>
      </div>
    </div>
  );
}
