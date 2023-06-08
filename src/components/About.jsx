import React from "react";

export const About = () => {
  return (
    <div
      className="container flex justify-center items-center py-4 h-screen"
      id="about"
    >
      <div className="flex items-center space-x-6">
        <div className="w-1/3 flex justify-end">
          <img
            src="https://i.ibb.co/Nm4XxBg/Picture-013.jpg"
            alt=""
            loading="lazy"
            className="rounded-full w-60 h-60 object-cover border-2 border-gray-200"
          />
        </div>
        <div className="w-1/2">
          <div className="text-zinc-200 text-4xl font-bold mb-4 text-center">
            ABOUT
          </div>
          <div className="flex">
            <span className="text-zinc-200">
              Hi, I&apos;m Wira, a passionate web developer with 3 years of
              experience. I love building beautiful and interactive websites
              that provide great user experiences. In my portfolio, you&apos;ll
              find a showcase of my projects, demonstrating my skills in
              front-end development using technologies like HTML, CSS,
              JavaScript, and React.
            </span>
          </div>
          <div className="mt-4">
            <div className="flex flex-row text-zinc-200">
              <div className="w-1/4">Name</div>
              <div className="w-2/3 font-light">
                : I Wayan Gede Wira Pratama
              </div>
            </div>
            <div className="flex flex-row text-zinc-200">
              <div className="w-1/4">Email</div>
              <div className="w-2/3 font-light">: wirapratama758@gmail.com</div>
            </div>
            <div className="flex flex-row text-zinc-200">
              <div className="w-1/4">Current Location</div>
              <div className="w-2/3 font-light">: Bali</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
