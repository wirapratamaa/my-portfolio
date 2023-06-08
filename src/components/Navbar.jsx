import { useScrollspy } from "../hook/UseScrollspy";
import { id_menu } from "./utils/utils";

const Navbar = () => {
  const activeId = useScrollspy(id_menu, 54);
  console.log(activeId);
  return (
    <header
      className={` transition-all duration-500 w-screen ${
        activeId !== "home" ? "bg-gray-900 fixed" : "bg-black absolute"
      } z-10 `}
    >
      <div className="container mx-auto p-4 flex items-center justify-between">
        <h1 className="text-2xl font-bold">
          <span className="text-zinc-200 ">WIRA</span>
          <span className="text-gray-400 opacity-75">PRATAMA</span>
        </h1>
        <nav>
          <ul className="flex space-x-6">
            {id_menu?.map((id) => (
              <li
                className={`text-lg ${
                  activeId === id
                    ? "border-b-2 border-white"
                    : "border-b-2 border-transparent"
                }`}
                key={id}
              >
                <a
                  href={`#${id}`}
                  className="text-zinc-200 font-bold transition duration-300 capitalize"
                >
                  {id}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
