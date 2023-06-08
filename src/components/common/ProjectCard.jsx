import React from "react";

export const ProjectCard = ({
  title = "",
  src = "",
  bgHeader = "bg-white",
}) => {
  return (
    <div className="w-full rounded-md overflow-hidden transition duration-500 hover:scale-105 transform">
      <div className={`${bgHeader} w-full py-4`}>{title}</div>
      <div className="bg-yellow-400 w-full">
        <img src={src} alt="" className="w-full" />
      </div>
    </div>
  );
};
