import React from "react";
import send from "../../assets/send.svg";
import upload from "../../assets/document-upload.svg";

const InputField: React.FC = () => {
  return (
    <>
      <div className="w-full pt-4 pl-8 pr-8">
        <div className="flex flex-row justify-between input_question input_back rounded-xl">
          <input
            type="text"
            className="pt-2 pb-2 pl-4 pr-4 text-xl text-white outline-none rounded-xl size-full h-9 input_back"
          />
          <img src={send} className="mr-2 cursor-pointer" alt="send button" />
        </div>
      </div>
      <div className="flex justify-center mt-4 ">
        <div className="flex justify-center w-1/3 pl-3 pr-3 input_back rounded-xl">
          <div className="flex justify-center w-2/4 pt-1 pb-1 pl-3 pr-3 bg-yellow-500 rounded-xl">
            <img src={upload} className="rounded cursor-pointer"></img>
          </div>
        </div>
      </div>
    </>
  );
};
export default InputField;
