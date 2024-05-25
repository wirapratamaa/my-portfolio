import React from "react";
import { GiGraduateCap } from "react-icons/gi";
import { MdWork } from "react-icons/md";
import { SlChemistry } from "react-icons/sl";

const Resume = () => {
  return (
    <div
      id="resume"
      className="container flex flex-col space-y-8 justify-center items-center pt-28"
    >
      <div className="flex flex-col w-full">
        <span className="text-zinc-200 text-2xl text-center font-bold">
          EXPERIENCE
        </span>
        <div className="flex justify-center">
          <div className="w-3/4 md:w-1/2  mt-4 grid grid-flow-row gap-4">
            <div className="flex space-x-6 bg-gray-800 rounded-md  px-4 py-6">
              <div className="mx-3">
                <div className="bg-zinc-200 rounded-full p-2">
                  <MdWork className="h-10 w-10" />
                </div>
              </div>
              <div className="flex flex-col">
                <span className="text-zinc-200 text-lg font-bold">
                  2021 - presents
                </span>
                <span className="text-zinc-200 text-2xl font-bold">
                  Front End Developer
                </span>
                <span className="text-zinc-200 text-lg">
                  PT Ruang Nyaman Abadi
                </span>
                <span className="text-zinc-200 text-sm mt-4">
                  - Develop user-facing features for websites and web
                  applications using ReactJs
                </span>
                <span className="text-zinc-200 text-sm mt-2">
                  - Collaborate with designers to translate wireframes and
                  mockups into interactive and responsive web interfaces.
                </span>
                <span className="text-zinc-200 text-sm mt-2">
                  - Collaborate with back end developers to integrate front end
                  code with server-side logic.
                </span>
                <span className="text-zinc-200 text-sm mt-2">
                  - Perform thorough testing and debugging of front end code to
                  identify and fix any issues or bugs.
                </span>
              </div>
            </div>
            <div className="flex space-x-6 bg-gray-800 rounded-md  px-4 py-6">
              <div className="mx-3">
                <div className="bg-zinc-200 rounded-full p-2">
                  <MdWork className="h-10 w-10" />
                </div>
              </div>
              <div className="flex flex-col">
                <span className="text-zinc-200 text-lg font-bold">
                  2019 - 2020
                </span>
                <span className="text-zinc-200 text-2xl font-bold">
                  IT Manager
                </span>
                <span className="text-zinc-200 text-lg">
                  PT Backup And Cloud
                </span>
                <span className="text-zinc-200 text-sm mt-4">
                  Manage and maintain our clients backup systems, and provide
                  solutions for them. Protect their data from Ransomware and
                  Malware
                </span>
              </div>
            </div>
            <div className="flex space-x-6 bg-gray-800 rounded-md  px-4 py-6">
              <div className="mx-3">
                <div className="bg-zinc-200 rounded-full p-2">
                  <MdWork className="h-10 w-10" />
                </div>
              </div>
              <div className="flex flex-col">
                <span className="text-zinc-200 text-lg font-bold">
                  2018 - 2019
                </span>
                <span className="text-zinc-200 text-2xl font-bold">
                  IT Support Assistance
                </span>
                <span className="text-zinc-200 text-lg">
                  PT Backup And Cloud
                </span>
                <span className="text-zinc-200 text-sm mt-4">
                  Manage and maintain our clients backup systems, and provide
                  solutions for them. Protect their data from Ransomware and
                  Malware
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col w-full">
        <span className="text-zinc-200 text-2xl text-center font-bold">
          SKILL
        </span>
        <div className="flex justify-center">
          <div className="w-3/4 md:w-1/2  mt-4 grid grid-flow-row gap-4">
            <div className="flex space-x-6 bg-gray-800 rounded-md  px-4 py-6">
              <div className="mx-3">
                <div className="bg-zinc-200 rounded-full p-2">
                  <SlChemistry className="h-10 w-10" />
                </div>
              </div>
              <div className="flex flex-col w-full">
                <span className="text-zinc-200 text-lg font-bold">
                  TECH STACK
                </span>
                <div className="flex flex-wrap gap-2 mt-4">
                  <div className="bg-white rounded px-3 py-1">
                    <span className="text-sm leading-none">ReactJs</span>
                  </div>
                  <div className="bg-white rounded px-3 py-1">
                    <span className="text-sm leading-none">NextJs</span>
                  </div>
                  <div className="bg-white rounded px-3 py-1">
                    <span className="text-sm leading-none">TailwindCSS</span>
                  </div>
                  <div className="bg-white rounded px-3 py-1">
                    <span className="text-sm leading-none">Bootstrap</span>
                  </div>
                  <div className="bg-white rounded px-3 py-1">
                    <span className="text-sm leading-none">CSS/SCSS</span>
                  </div>
                  <div className="bg-white rounded px-3 py-1">
                    <span className="text-sm leading-none">Javascript</span>
                  </div>
                  <div className="bg-white rounded px-3 py-1">
                    <span className="text-sm leading-none">Flutter</span>
                  </div>
                  <div className="bg-white rounded px-3 py-1">
                    <span className="text-sm leading-none">
                      Git (Version Control System)
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col w-full">
        <span className="text-zinc-200 text-2xl text-center font-bold">
          EDUCATION
        </span>
        <div className="flex justify-center">
          <div className="w-3/4 md:w-1/2 mt-4 grid grid-flow-row gap-4">
            <div className="flex space-x-6 bg-gray-800 rounded-md  px-4 py-6">
              <div className="mx-3">
                <div className="bg-zinc-200 rounded-full p-2">
                  <GiGraduateCap className="h-10 w-10" />
                </div>
              </div>
              <div className="flex flex-col">
                <span className="text-zinc-200 text-lg font-bold">
                  2011 - 2018
                </span>
                <span className="text-zinc-200 text-2xl font-bold">
                  Bachelor of Informatics Engineering
                </span>
                <span className="text-zinc-200 text-lg">
                  Telkom University, Bandung - West Java
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resume;
