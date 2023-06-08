import React from "react";
import { ProjectCard } from "./common/ProjectCard";
import { projectData } from "./utils/utils";

const Portfolio = () => {
  return (
    <div
      className="container flex flex-col justify-center items-center pt-16"
      id="portfolio"
    >
      <div className="text-zinc-200 text-2xl font-bold border-b-4 py-2 border-zinc-200">
        Projects
      </div>
      <div className="grid grid-cols-2 gap-y-12 gap-x-32 w-full mt-8">
        {projectData.map((item, i) => (
          <ProjectCard
            title={item.title}
            src={item.src}
            url={item.url}
            key={i}
          />
        ))}
      </div>
    </div>
  );
};

export default Portfolio;
