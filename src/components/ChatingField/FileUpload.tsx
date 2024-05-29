import React from "react";
import logo from "../../assets/atom-logo.svg";
import folder from "../../assets/folder.svg";

export type FileUploadprops = {
  title: string;
  filetype: string;
  cotent: string;
};
const FileUpload: React.FC<FileUploadprops> = ({
  title,
  filetype,
  content,
}: FileUploadprops) => {
  return (
    <>
      <div className="w-full title flex justify-start items-start items-center border  border-gray-400 mb-4 mt-4">
        <img
          src={folder}
          alt="user"
          style={{ width: "17%" }}
          className="border input_back p-4"
        />
        <div
          className="pl-3 text-md  align-middle text-wrap"
          style={{ width: "96%" }}
        >
          <span className="text-white">{title}</span>
          <br />
          <span className="text-slate-50 ">{filetype}</span>
        </div>
      </div>
      <div className="w-full title flex justify-start items-start ">
        <img
          src={logo}
          alt="user"
          style={{ width: "4%" }}
          className="border rounded-xl"
        />
        <div
          className="pl-3 text-white text-md  align-top text-wrap"
          style={{ width: "96%" }}
        >
          {content}
        </div>
      </div>
    </>
  );
};

export default FileUpload;
