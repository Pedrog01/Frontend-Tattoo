import React from "react";

const Header = () => {
  return (
    <header className="w-[100%] color-header-footer">
      <div className="max-w-[515px] pr-5 pt-3 md:pt-20 m-auto pb-12">
        <div className="flex space-x-12">
          <a className="letter-color-header-footer" href="/">
            HOME
          </a>
          <a className="letter-color-header-footer" href="/about">
            ABOUT US
          </a>
          <a className="letter-color-header-footer" href="/contact">
            CONTACT
          </a>
          <a className="letter-color-header-footer" href="/services">
            SERVICES
          </a>
        </div>
      </div>
      <div className="flex justify-end  p-14 py-2 text-md text-white dark:text-white font-medium">
        LOGIN
      </div>
    </header>
  );
};

export default Header;
