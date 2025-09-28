import { useSearchParams } from "react-router-dom";

const Viewer = () => {
  const [searchParams] = useSearchParams();
  const fileUrl = searchParams.get("file");

  if (!fileUrl) {
    return <p className="text-center mt-10">❌ Fayl topilmadi</p>;
  }

  const isPptx = fileUrl.toLowerCase().endsWith(".pptx");

  const viewerUrl = isPptx
    ? `https://view.officeapps.live.com/op/embed.aspx?src=${encodeURIComponent(
        window.location.origin + fileUrl
      )}`
    : fileUrl;

  return (
    <div className="w-full h-screen">
      <iframe
        src={viewerUrl}
        width="100%"
        height="100%"
        frameBorder="0"
        title="File Viewer"
      />
    </div>
  );
};

export default Viewer;
