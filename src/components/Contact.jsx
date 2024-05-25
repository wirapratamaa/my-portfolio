import EMAIL_SRC from "./../assets/gmail.png";
import GITHUB_SRC from "./../assets/github.svg";
import LINKEDIN_SRC from "./../assets/linkedin.png";

const Contact = () => {
  return (
    <div className="pt-16" id="contact">
      <div className="bg-contact">
        <div className="w-full h-[50vh] flex flex-col justify-center items-center space-y-3 bg-[#6c757d]/95">
          <span className="text-zinc-200 text-4xl font-bold">
            Want to talk about a Project?
          </span>
          <span className="text-zinc-200 text-4xl font-bold">
            Let&apos;s get in touch
          </span>
          <div className="flex justify-center space-x-6 items-center w-1/3 mt-2">
            <a
              className="cursor-pointer rounded-full overflow-hidden transition transform hover:scale-125"
              href="https://github.com/wirapratamaa/"
              target="_blank"
              rel="noreferrer"
            >
              <span>
                <img
                  src={GITHUB_SRC}
                  alt="github"
                  className="bg-white h-12 w-12 p-2"
                />
              </span>
            </a>
            <a
              className="cursor-pointer rounded-full overflow-hidden transition transform hover:scale-125"
              href="mailto:wirapratama758@gmail.com?subject=Hi Wira, I want to talk about a project!"
              target="_blank"
              rel="noreferrer"
            >
              <span>
                <img
                  src={EMAIL_SRC}
                  alt="email"
                  className="bg-white h-12 w-12 p-2"
                />
              </span>
            </a>
            <a
              className="cursor-pointer rounded-full overflow-hidden transition transform hover:scale-125"
              href="https://www.linkedin.com/in/i-wayan-gede-wira-pratama-a8b403105/"
              target="_blank"
              rel="noreferrer"
            >
              <span>
                <img
                  src={LINKEDIN_SRC}
                  alt="linkedin"
                  className="bg-white h-12 w-12 p-2"
                />
              </span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
