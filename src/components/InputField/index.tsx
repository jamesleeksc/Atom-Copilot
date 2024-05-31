import React from "react";
import send from "/public/send.svg";
import upload from "/public/document-upload.svg";
const InputField: React.FC = () => {
  return (
    <>
      <div className="w-full pl-8 pr-8 pt-4">
        <div className="flex  justify-between flex-row input_question input_back rounded-xl">
          <input
            type="text"
            className="text-white pl-4  pr-4 text-xl pt-2 pb-2  rounded-xl size-full h-9 outline-none input_back"
          />
          <img src={send} className="mr-2 cursor-pointer" alt="send button" />
        </div>
      </div>
      <div className=" mt-4 flex  justify-center ">
        <div className="input_back flex  justify-center w-1/3 rounded-xl pl-3 pr-3">
          <div className="bg-yellow-500 flex  justify-center w-2/4 rounded-xl pl-3 pr-3 pt-1 pb-1">
            <img src={upload} className="rounded cursor-pointer"></img>
          </div>
        </div>
      </div>
    </>
  );
};
export default InputField;
