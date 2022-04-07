import React from "react";

const logo = require(`../assets/images/logo.png`);

const Logo: React.FC = () => {
  return (
    <div className={`flex items-center gap-2`}>
      <img src={logo} alt="DMS Logo" className={`w-16 h-16`}/>
      <div className={`text-11px md:text-15px lg:text-15px`}>
        <h2 className={`font-lobster tracking-wide text-normalBlue`}>KTTO</h2>
        <h1 className={`font-semibold text-normalBlue tracking-wider `}>Southern Leyte State University-MC</h1>
      </div>
    </div>
  );
};

export default Logo;
