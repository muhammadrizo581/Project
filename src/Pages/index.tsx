import { memo } from "react";
import { Routes, Route } from "react-router-dom";

import Layout from "./mainlayout/MainLayout";
import Home from "./home/Home";
import JeopardyGame1 from "./jeopardy-game/JeopardyGame";
import JeopardyGame2 from "./jeopardy-game/JeopardyGame2";
import JeopardyGame3 from "./jeopardy-game/JeopardyGame3";
import About from "./about/About";
import PdfFiles from "./pdf-files/PdfFiles";
import PPTList from "./viewer/PPtTList";
import PPTViewer from "./viewer/PPTViewer";

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

        {/* ✅ PowerPoint sahifalari */}
        <Route path="ppt" element={<PPTList />} />
        <Route path="ppt-viewer" element={<PPTViewer />} />
      </Route>
    </Routes>
  );
};

export default memo(AppRouter);
