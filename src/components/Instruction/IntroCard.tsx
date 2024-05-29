import React from "react";

export type IntroCardprops = {
  style: String;
  descrprtion: String;
};
const IntroCard: React.FC<IntroCardprops> = ({
  style,
  descrprtion,
}: IntroCardprops) => {
  return (
    <div className="grid grid-row-12 pl-8 pr-8 pt-1 pb-1 ">
      <div className={`p-1 text-wrap text-white  ${style} rounded-lg`}>
        <div className="p-2 black text-md rounded-lg">{descrprtion}</div>
      </div>
    </div>
  );
};
export default IntroCard;
