import React from "react";
import user from "../../assets/user.svg";
import logo from "../../assets/atom-logo.svg";
import clipboard from "../../assets/clipboard.svg";
import refresh from "../../assets/refresh-circle.3.svg";
import bookmark from "../../assets/bookmark.svg";
export type NormalChatprops = {
  question: string;
  preface: string;
  details: [
    {
      category: string;
      content: string;
    }
  ];
};

const NormalChat: React.FC<NormalChatprops> = ({
  question,
  preface,
  details,
}: NormalChatprops) => {
  return (
    <>
      <div className="w-full title flex justify-start items-start mb-4 mt-4">
        <img
          src={user}
          alt="user"
          style={{ width: "4%" }}
          className="border rounded-xl"
        />
        <div
          className="pl-3 text-white text-md  align-top"
          style={{ width: "96%" }}
        >
          {question}
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
          {preface}

          {details.map((detail, item) => (
            <div key={`detail${item}`}>
              <ul style={{ listStyleType: "disc" }}>
                <li>
                  <b>{detail.category}</b>
                </li>
              </ul>
              <span>{detail.content}</span>
              <br />
            </div>
          ))}
        </div>
      </div>
      <div className="flex justify-start pl-4 pt-2">
        <img
          src={clipboard}
          alt="clipboard"
          className="cursor-pointer pl-1 pr-1"
        />
        <img
          src={refresh}
          alt="clipboard"
          className="cursor-pointer pl-1 pr-1"
        />
        <img
          src={bookmark}
          alt="clipboard"
          className="cursor-pointer pl-1 pr-1"
        />
      </div>
    </>
  );
};

export default NormalChat;
