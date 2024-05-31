import React from "react";
import Title from "/public/atom-logotype-full-color.svg";

import IntroCard from "./IntroCard";

import type { IntroCardprops as IntroCardType } from "./IntroCard";
export const Introduction: Array<IntroCardType> = [
  {
    style: "introCard1",
    descrprtion:
      "Get the pull of the latest AI technology in the in the industry",
  },
  {
    style: "introCard2",
    descrprtion:
      "Atom can help you improve your productivity,make it your personal assistant",
  },
  {
    style: "introCard3",
    descrprtion:
      "Upload documents and get accurate summaries and improvements tips",
  },
];

const Instruction: React.FC = () => {
  return (
    <>
      <div
        className="w-full title"
        style={{ marginTop: "25%", marginBottom: "2%" }}
      >
        <div className="flex justify-center">
          <img src={Title} alt="ATOM" width={"35%"} />
        </div>
        <h3 className="text-center text-white text-md">
          What can Atom Copilot do
        </h3>
      </div>
      {Introduction.map((intro: IntroCardType, item) => (
        <IntroCard
          key={item}
          style={intro.style}
          descrprtion={intro.descrprtion}
        ></IntroCard>
      ))}
      <div className="w-full">
        <div
          className="pl-8 pr-8 text-white text-pretty text-md "
          style={{ marginBottom: "16vh" }}
        >
          If you wish to provide feedback or need any help please{" "}
          <span className="text-yellow-500 cursor-pointer introCard-font">
            click here
          </span>{" "}
          to send us an email.
        </div>
      </div>
    </>
  );
};

export default Instruction;
