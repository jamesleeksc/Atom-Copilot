import React from "react";

import NormalChat from "./NormalChat";
import FileUpload from "./FileUpload";

export const Chats: Array<any> = [
  {
    type: true,
    questions: "How can AI assit me doing my day to day work as account?",
    answers: {
      preface:
        "AI can be powerful tool to assist you with your day-to-day work as an account, in a number of ways",
      details: [
        {
          category: "Automating repetitive tasks",
          content:
            "AI-powered accounting software can automate many of the time-consuming and tedious tasks you face",
        },
        {
          category: "Automating repetitive tasks",
          content:
            "AI-powered accounting software can automate many of the time-consuming and tedious tasks you face",
        },
        {
          category: "Automating repetitive tasks",
          content:
            "AI-powered accounting software can automate many of the time-consuming and tedious tasks you face",
        },
      ],
    },
  },
  {
    type: false,
    title: "Project Phoenix",
    filetype: "docx",
    description:
      "Project Phoenix -Social Media Engagement After Brand Controversies This resarch file exploeres how brands can rebuild social media engagement following a public controversy",
  },
];

const ChatingField: React.FC = () => {
  return (
    <div className="flex justify-center">
      <div style={{ width: "90%" }} className="justify-center">
        {Chats.map((chat: any, item) => (
          <div key={`chat${item}`}>
            {chat.type == true ? (
              <NormalChat
                question={chat.questions}
                preface={chat.answers.preface}
                details={chat.answers.details}
              ></NormalChat>
            ) : (
              <FileUpload
                title={chat.title}
                filetype={chat.filetype}
                description={chat.description}
              ></FileUpload>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ChatingField;
