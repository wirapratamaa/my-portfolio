import { useScrollspy } from "../hook/UseScrollspy";
import { id_menu, scrollView } from "./utils/utils";

const Navbar = () => {
  const activeId = useScrollspy(id_menu, 64);

  return (
    <header
      className={` transition-all duration-500 w-screen flex items-center ${
        activeId !== "home" ? "bg-dark-bg fixed top-0" : "bg-dark-bg absolute"
      } z-10 `}
    >
      <div className="container mx-auto p-4 flex items-center justify-between">
        <h1 className="text-2xl font-bold">
          <span className="text-zinc-200 ">WIRA</span>
          <span
            className="bg-gradient-to-br from-[#00B4FF] via-[#8A2BE2] to-[#FF4DFF] 
           bg-clip-text text-transparent 
           drop-shadow-[0_0_10px_rgba(138,43,226,0.6)]"
          >
            PRATAMA
          </span>
        </h1>
        <nav className="md:block hidden">
          <ul className="flex space-x-6">
            {id_menu?.map((id) => (
              <li
                className={`text-lg cursor-pointer transition transform duration-200 ease-out  ${
                  activeId === id
                    ? "border-b-2 border-dark-border"
                    : "border-b-2 border-transparent"
                }`}
                key={id}
                onClick={() => scrollView(id)}
              >
                <div className="text-zinc-200 font-bold transition duration-300 capitalize">
                  {id}
                </div>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
