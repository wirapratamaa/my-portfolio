import React from "react";

const Footer = () => {
  const current_year = new Date().getFullYear();
  return (
    <div className="h-[calc(50vh_-_4rem)] flex flex-col justify-center items-center">
      <div className="text-white font-bold">
        WIRAPRATAMA.COM ©{current_year}
      </div>
    </div>
  );
};

export default Footer;
