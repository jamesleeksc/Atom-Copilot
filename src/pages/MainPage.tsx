import React from "react";
import logo from "../assets/atom-logo.svg";
import setting from "../assets/setting.svg";

// import Introduction from "../components/Instruction";
import ChatingField from "../components/ChatingField";
import InputField from "../components/InputField";
const MainPage: React.FC = () => {
  return (
    <>
      <div className="w-full">
        <div className="flex justify-between p-4">
          <img src={logo} alt="credentials button" className="cursor-pointer" />
          <img src={setting} alt="setting button" className="cursor-pointer" />
        </div>
      </div>
      <div className="w-full ring "></div>
      <div
        style={{ height: "64vh", marginTop: "15vh" }}
        className="overflow-y-auto	"
      >
        <ChatingField />
      </div>
      {/* <Introduction /> */}
      <InputField />
    </>
  );
};
export default MainPage;
