import { memo } from "react";
import { Routes, Route } from "react-router-dom";

import Layout from "./mainlayout/MainLayout";
import Home from "./home/Home";
import About from "./about/About";
import PdfFiles from "./pdf-files/PdfFiles";
import Part2 from "./part2/Part2";
import PPTViewer2 from "./viewer/PPTViewer2";
import Part3 from "./part3/Part3";
import PPTViewer3 from "./viewer/PPTViewer3";
import ScrollToTop from "../components/scroll-top/ScrollTop";
import PPTViewer from "./viewer/PPTViewer";
import Lessons from "./lessons/Lessons";
import LessonDetail from "./lesson-datail/LessonDatail";
import Presentations from "./presentations/Presentations";
import Part1 from "./part1/Part1";

const AppRouter = () => {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />          
          <Route path="about" element={<About />} />
          <Route path="pdf" element={<PdfFiles />} />
          <Route path="presentations" element={<Presentations />} />
          <Route path="lessons" element={<Lessons />} />
          <Route path="/lesson/:id" element={<LessonDetail />} />
          <Route path="part1" element={<Part1 />} />
          <Route path="part1/:id" element={<PPTViewer />} />
          <Route path="part2" element={<Part2 />} />
          <Route path="ppt2/:id" element={<PPTViewer2 />} />
          <Route path="part3" element={<Part3 />} />
          <Route path="ppt3/:id" element={<PPTViewer3 />} />
        </Route>
      </Routes>
    </>
  );
};

export default memo(AppRouter);
