import React from "react";
import { TypeAnimation } from "react-type-animation";

const Header = () => {
  return (
    <div
      className="container flex justify-center items-center h-screen"
      id="home"
    >
      <div className="w-full flex flex-col">
        <div className="text-xl font-bold flex justify-center">
          <span className="text-gray-600 uppercase">Hi there, my name is</span>
        </div>
        <div className="text-5xl font-extrabold flex justify-center">
          <span className="text-zinc-200">WIRA</span>
          <span className="text-gray-400 opacity-75">PRATAMA</span>
        </div>
        <div className="text-2xl flex justify-center mt-2">
          <TypeAnimation
            sequence={[
              "Welcome to my Portfolio",
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
      {/* <div className="w-1/3 flex justify-center">
        <img
          src="https://i.ibb.co/Nm4XxBg/Picture-013.jpg"
          alt=""
          loading="lazy"
          className="rounded-full w-40 h-40 object-cover border-2 border-gray-200"
        />
      </div> */}
    </div>
  );
};

export default Header;
