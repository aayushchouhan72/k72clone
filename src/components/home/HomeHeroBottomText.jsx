import React from "react";
import { Link } from "react-router-dom";

export default function HomeHeroBottomText() {
  return (
    <div className="font-[font2] flex iteam-center justify-center gap-2 m-4">
      <Link
        to="/projects"
        className="text-[7vw] md:text-[3vw] border-3 border-white rounded-full px-10 py-1 pt-1 uppercase "
      >
        projects
      </Link>
      <Link
        to="/agence"
        className="text-[7vw] md:text-[3vw] border-3 border-white rounded-full px-10 py-1 pt-1 uppercase "
      >
        Agence
      </Link>
    </div>
  );
}
