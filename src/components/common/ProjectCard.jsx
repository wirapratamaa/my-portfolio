import React from "react";

export const ProjectCard = ({ title = "", src = "", url }) => {
  return (
    <a
      className="w-full rounded-md overflow-hidden cursor-pointer group relative"
      href={url}
      target="_blank"
      rel="noreferrer"
    >
      <div
        className={`bg-gray-800/70 w-full py-4 text-lg absolute transition-transform duration-400 -translate-y-full group-hover:translate-y-0 text-center h-full text-white`}
      >
        <div className="font-bold flex justify-center items-center h-full">
          <div>{title}</div>
        </div>
      </div>
      <div className="w-full">
        <img src={src} alt="project" className="w-full" />
      </div>
    </a>
  );
};
