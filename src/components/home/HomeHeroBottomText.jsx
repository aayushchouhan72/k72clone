import React from "react";
import { Link } from "react-router-dom";

export default function HomeHeroBottomText() {
  return (
    <div className="font-[font2] flex iteam-center justify-center gap-2">
      <Link
        to="/projects"
        className="text-[6.5vw] border-2 border-white rounded-full p-10 uppercase "
      >
        projects
      </Link>
      <Link
        to="/agence"
        className="text-[6.5vw] border-2 border-white rounded-full p-10  uppercase "
      >
        Agence
      </Link>
    </div>
  );
}
