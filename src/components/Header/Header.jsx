import React from "react";
import logo from "../../image/coronavirus.svg";
const Header = () => {
  return (
    <div className="text-center bg-indigo-500 text-white p-4 mb-10">
      <h1 className="text-3xl md:text-5xl font-bold mb-3">
        <img src={logo} alt="logo" className="w-8 inline-block mr-3" />
        Covid-19 Tracker
      </h1>
      <p>
        <a
          className="text-indigo-300"
          href="https://covid19api.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          covid19api.com
        </a>
      </p>
    </div>
  );
};

export default Header;
