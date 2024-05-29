import React from "react";

import CredLogo from "../../assets/atom-logo.svg";

const LazyLoad: React.FC = () => {
  return (
    <div className="bg-white flex items-center flex-col absolute top-1/2 translate-y-[-50%] left-1/2 translate-x-[-50%]">
      <img className="" src={CredLogo} alt="credentials loading icon" />
      <h3 className="text-black leading-9 font-extrabold text-[22px] mt-8">
        Atom-Copilot
      </h3>
    </div>
  );
};

export default LazyLoad;
