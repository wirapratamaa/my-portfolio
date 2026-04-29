import React from "react";

export const About = () => {
  return (
    <div
      className="flex md:flex-row flex-col md:justify-center items-center py-4 h-screen"
      id="about"
    >
      <div className="text-zinc-200 text-4xl font-bold mb-4 text-center md:hidden">
        ABOUT
      </div>
      <div className="flex md:flex-row flex-col items-center space-x-6">
        <div className="w-full md:w-1/3 flex justify-center md:justify-end mb-4 md:mb-0">
          <div className="p-[2px] rounded-xl bg-primary-gradient">
            <div className="bg-[#0B0F1A] rounded-xl p-4">
              <img
                src="https://i.ibb.co.com/dwgXx5tB/Gemini-Generated-Image-eiifoleiifoleiif.png"
                alt=""
                loading="lazy"
                className="w-60 h-60 object-top object-cover rounded "
              />
            </div>
          </div>
        </div>
        <div className="w-full md:w-1/2">
          <div className="text-zinc-200 text-4xl font-bold mb-4 text-center md:block hidden">
            ABOUT
          </div>
          <div className="flex ">
            <span className="text-zinc-200 px-5 md:px-0">
              Hi, I&apos;m Wira, I&apos;m a Frontend Developer with over 5 years
              of experience in the technology industry, specializing in building
              scalable, high-performance web applications. My core expertise
              lies in React and Tailwind CSS, where I focus on creating clean,
              responsive, and user-centric interfaces. Throughout my career,
              I&apos;ve consistently delivered impactful solutions by
              transforming complex requirements into intuitive digital
              experiences. I take pride in writing maintainable code, optimizing
              performance, and collaborating effectively with cross-functional
              teams to bring products to life. One of my key strengths is my
              ability to balance technical precision with user experience,
              ensuring that every product I work on is not only functional but
              also engaging and efficient. I&apos;m always eager to learn,
              improve, and contribute to meaningful projects that push
              boundaries and create real value.
            </span>
            {/* <span className="text-zinc-200 px-5 md:px-0">
              Hi, I&apos;m Wira, a passionate web developer with 3 years of
              experience. I love building beautiful and interactive websites
              that provide great user experiences. In my portfolio, you&apos;ll
              find a showcase of my projects, demonstrating my skills in
              front-end development using technologies like HTML, CSS,
              JavaScript, and React.
            </span> */}
          </div>
          <div className="mt-4 px-5 md:px-0">
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
