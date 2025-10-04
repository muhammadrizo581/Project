import { Routes, Route } from "react-router-dom";
import Layout from "./mainlayout/MainLayout";
import Home from "./home/Home";
import About from "./about/About";
import PdfFiles from "./pdf-files/PdfFiles";
import PPTViewer from "./viewer/PPTViewer";
import Part2 from "./part2/Part2";
import PPTViewer2 from "./viewer/PPTViewer2";
import PPTViewer3 from "./viewer/PPTViewer3";
import Part3 from "./part3/Part3";

export default function AppRouter() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="pdf" element={<PdfFiles />} />
        <Route path="ppt/:id" element={<PPTViewer />} />
        <Route path="part2" element={<Part2 />} />
        <Route path="ppt2/:id" element={<PPTViewer2 />} />
        <Route path="part3" element={<Part3 />} />
        <Route path="ppt3/:id" element={<PPTViewer3 />} />
      </Route>
    </Routes>
  );
}
