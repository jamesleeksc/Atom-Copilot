import React from "react";
import logo from "/public/atom-logo.svg";
import folder from "/public/folder.svg";

export type FileUploadprops = {
  title: string;
  filetype: string;
  description: string;
};
const FileUpload: React.FC<FileUploadprops> = ({
  title,
  filetype,
  description,
}: FileUploadprops) => {
  return (
    <>
      <div className="flex items-start items-center justify-start w-full mt-4 mb-4 border border-gray-400 title">
        <img
          src={folder}
          alt="user"
          style={{ width: "17%" }}
          className="p-4 border input_back"
        />
        <div
          className="pl-3 align-middle text-md text-wrap"
          style={{ width: "96%" }}
        >
          <span className="text-white">{title}</span>
          <br />
          <span className="text-slate-50 ">{filetype}</span>
        </div>
      </div>
      <div className="flex items-start justify-start w-full title ">
        <img
          src={logo}
          alt="user"
          style={{ width: "4%" }}
          className="border rounded-xl"
        />
        <div
          className="pl-3 text-white align-top text-md text-wrap"
          style={{ width: "96%" }}
        >
          {description}
        </div>
      </div>
    </>
  );
};

export default FileUpload;
