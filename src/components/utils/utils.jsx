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
  {
    title: "Bali Ayu Shop",
    src: "https://i.ibb.co.com/Nymq0Fc/Screenshot-2024-05-25-at-20-16-25.png",
    url: "https://baliayushop.id/",
  },
];

export const resumeData = [
  {
    time: "2021 - presents",
    job: "Front End Developer",
    company: "PT Ruang Nyaman Abadi",
    task: [
      "Develop user-facing features for websites and web applications using ReactJs",
      "Collaborate with designers to translate wireframes and mockups into interactive and responsive web interfaces.",
      "Collaborate with back end developers to integrate front end code with server-side logic.",
      "Perform through testing and debugging of front end code to identify and fix any issues or bugs.",
    ],
  },
  {
    time: "2019 - 2020",
    job: "IT Manager",
    company: "PT Backup And Cloud",
    task: [
      "Manage and maintain our clients backup systems, and provide solutions for them. Protect their data from Ransomware and Malware",
    ],
  },
  {
    time: "2018 - 2019",
    job: "IT Support Assistance",
    company: "PT Backup And Cloud",
    task: [
      "Manage and maintain our clients backup systems, and provide solutions for them. Protect their data from Ransomware and Malware",
    ],
  },
];
