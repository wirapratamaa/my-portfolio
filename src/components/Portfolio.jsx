import React from "react";
import { ProjectCard } from "./common/ProjectCard";

const Portfolio = () => {
  return (
    <div
      className="container flex flex-col justify-center items-center py-4"
      id="portfolio"
    >
      <div className="text-zinc-200 text-2xl font-bold border-b-4 py-2 border-zinc-200">
        Projects
      </div>
      <div className="grid grid-cols-2 gap-y-12 gap-x-32 w-full mt-8">
        <ProjectCard
          title="Hotel Management System (HMS) by ruangnyaman"
          src="https://i.ibb.co/HhWC8fk/Screenshot-2023-06-08-at-14-52-52.png"
        />
        <ProjectCard
          title="RuangNyaman"
          src="https://i.ibb.co/YT3bJR4/Screenshot-2023-06-08-at-14-54-19.png"
        />
        <ProjectCard
          title="Extranet Admin by ruangnyaman"
          src="https://i.ibb.co/6BbZ7MZ/Screenshot-2023-06-08-at-14-55-59.png"
        />
      </div>
    </div>
  );
};

export default Portfolio;
