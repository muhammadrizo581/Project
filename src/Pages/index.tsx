import { memo } from "react";
import { Routes, Route } from "react-router-dom";

import Layout from "./mainlayout/MainLayout";
import Home from "./home/Home";
import Part1 from "../Pages/PartOne/PartOne";
import Viewer from "./viewers/Viewers";

import JeopardyGame1 from "./jeopardy-game/JeopardyGame";
import JeopardyGame2 from "./jeopardy-game/JeopardyGame2";
import JeopardyGame3 from "./jeopardy-game/JeopardyGame3";
// import Part2 from "@/pages/Part2";
// import Part3 from "@/pages/Part3";
// import Jeopardy from "@/pages/Jeopardy";

const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="part1" element={<Part1 />} />
        <Route path="/viewer" element={<Viewer />} />
        {/* <Route path="part2" element={<Part2 />} />
        <Route path="part3" element={<Part3 />} />*/}
        <Route path="jeopardy1" element={<JeopardyGame1 />} />
        <Route path="jeopardy2" element={<JeopardyGame2 />} />
        <Route path="jeopardy3" element={<JeopardyGame3 />} />
      </Route>
    </Routes>
  );
};

export default memo(AppRouter);
