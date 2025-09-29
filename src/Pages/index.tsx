import { memo } from "react";
import { Routes, Route } from "react-router-dom";

import Layout from "./mainlayout/MainLayout";
import Home from "./home/Home";
import JeopardyGame1 from "./jeopardy-game/JeopardyGame";
import JeopardyGame2 from "./jeopardy-game/JeopardyGame2";
import JeopardyGame3 from "./jeopardy-game/JeopardyGame3";
import About from "./about/About";
import PdfFiles from "./pdf-files/PdfFiles";
// import Part2 from "@/pages/Part2";
// import Part3 from "@/pages/Part3";
// import Jeopardy from "@/pages/Jeopardy";

const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="jeopardy1" element={<JeopardyGame1 />} />
        <Route path="jeopardy2" element={<JeopardyGame2 />} />
        <Route path="jeopardy3" element={<JeopardyGame3 />} />
        <Route path="pdf" element={<PdfFiles />} />
      </Route>
    </Routes>
  );
};

export default memo(AppRouter);
