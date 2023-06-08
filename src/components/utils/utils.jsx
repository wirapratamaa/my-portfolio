export const id_menu = ["home", "about", "resume", "portfolio", "contact"];

export const scrollView = (id) => {
  console.log("run");
  const section = document.querySelector(`#${id}`);
  section.scrollIntoView({
    behavior: "smooth",
    block: "start",
  });
};

export const projectData = [
  {
    title: "Hotel Management System (HMS) by ruangnyaman",
    src: "https://i.ibb.co/HhWC8fk/Screenshot-2023-06-08-at-14-52-52.png",
    url: "https://hms.ruangnyaman.id/login",
  },
  {
    title: "RuangNyaman",
    src: "https://i.ibb.co/YT3bJR4/Screenshot-2023-06-08-at-14-54-19.png",
    url: "https://ruangnyaman.id/",
  },
  {
    title: "Extranet Admin by ruangnyaman",
    src: "https://i.ibb.co/6BbZ7MZ/Screenshot-2023-06-08-at-14-55-59.png",
    url: "https://extranet.ruangnyaman.id/",
  },
];
