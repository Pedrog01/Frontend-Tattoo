import React from "react";

const Footer = () => {
  return (
    <div className="md:w-full">
      <div className="color-header-footer md:w-full pb-6">
        <div className="flex flex-col gap-3 md:gap-0 md:flex-row md:justify-around items-center pt-6 lg:max-w-[1270px] m-auto">
          <h1 className="text-[13px]  text-[#0a0a0a]">
            ©2023 Tatto | Todos os direitos reservados.
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Footer;
