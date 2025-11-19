import React from "react";
import { Link, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Projects from "./pages/projects";
import Agence from "./pages/Agence";
const App = () => {
  return (
    <div className="text-white m-0 p-0 h-screen w-screen">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/agence" element={<Agence />} />
        <Route path="/projects" element={<Projects />} />
      </Routes>
    </div>
  );
};
export default App;
