import { useParams, Link } from "react-router-dom";

const pptLinks: string[] = [
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
  const index = parseInt(id || "0", 10) - 1;

  if (index < 0 || index >= pptLinks.length) {
    return (
      <div className="text-center text-red-500 mt-20">
        <p>❌ Invalid presentation link.</p>
        <Link to="/part2" className="text-blue-600 underline">Go Back</Link>
      </div>
    );
  }

  const prevId = index - 1 >= 0 ? index : pptLinks.length - 1;
  const nextId = index + 1 < pptLinks.length ? index + 2 : 1;

  return (
    <div className="w-full h-screen flex flex-col bg-gray-900">
      {/* Presentation */}
      <iframe
        src={pptLinks[index]}
        allowFullScreen
        className="flex-1 w-full border-0"
      ></iframe>

      {/* Navigation Bar */}
      <div className="flex justify-between flex-wrap gap-4 p-4 bg-gray-800 text-white text-center">
        
          <Link
            to="/part2"
            className="bg-blue-600 px-4 py-2 rounded-lg hover:bg-blue-700 transition"
          >
            🏠 Back to Part 2
          </Link>
          
        

              <div className="flex gap-3"> 
                  <Link
            to={`/ppt2/${prevId}`}
            className="bg-gray-500 px-4 py-2 rounded-lg hover:bg-gray-600 transition"
          >
            ⬅ Previous
          </Link>
                  <Link
          to={`/ppt2/${nextId}`}
          className="bg-yellow-500 text-black px-4 py-2 rounded-lg hover:bg-yellow-400 transition"
        >
          ➡ Next
        </Link>
            </div>
      </div>
    </div>
  );
}
