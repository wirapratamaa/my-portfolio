import React from "react";
import { TypeAnimation } from "react-type-animation";
import { scrollView } from "./utils/utils";

const Header = () => {
  return (
    <div className="bg-home bg-no-repeat bg-cover" id="home">
      <div className="flex flex-col justify-center items-center h-screen">
        <div className="w-full flex flex-col">
          <div className="text-xl font-bold flex justify-center">
            <span className="text-white uppercase mb-2">
              Hi there, my name is
            </span>
          </div>
          <div className="text-5xl font-extrabold flex justify-center">
            <span className="text-zinc-200">WIRA</span>
            <span className="text-gray-400">PRATAMA</span>
          </div>
          <div className="text-2xl flex justify-center mt-2">
            <TypeAnimation
              sequence={[
                "Welcome to my Website",
                2000,
                "I'm a Web Developer",
                2000,
              ]}
              speed={200}
              wrapper="div"
              cursor={true}
              repeat={Infinity}
              style={{ display: "inline-block" }}
              className="text-zinc-200 font-bold"
            />
          </div>
        </div>
        <div className="mt-16">
          <button
            className="py-2 bg-blue-600 px-6 rounded-md text-lg text-white font-semibold animate-bounce"
            onClick={() => scrollView("about")}
          >
            MORE
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;
