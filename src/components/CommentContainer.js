import React from "react";
import CommentList from "./CommentList";

const commentData = [
  {
    name: "Aryan",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing.",
    replies: [],
  },
  {
    name: "Aryan",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing.",
    replies: [
      {
        name: "Aryan",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing.",
        replies: [
          {
            name: "Aryan",
            text: "Lorem ipsum dolor sit amet consectetur adipisicing.",
          },
          {
            name: "Aryan",
            text: "Lorem ipsum dolor sit amet consectetur adipisicing.",
          },
        ],
      },
      {
        name: "Aryan",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing.",
      },
    ],
  },
  {
    name: "Aryan",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing.",
  },
  {
    name: "Aryan",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing.",
    replies: [
      {
        name: "Aryan",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing.",
        replies: [
          {
            name: "Aryan",
            text: "Lorem ipsum dolor sit amet consectetur adipisicing.",
          },
          {
            name: "Aryan",
            text: "Lorem ipsum dolor sit amet consectetur adipisicing.",
          },
        ],
      },
    ],
  },
  {
    name: "Aryan",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing.",
  },
];

const CommentContainer = () => {
  return (
    <div className="mt-6 w-full max-w-5xl bg-white rounded-2xl border border-slate-200 p-5 shadow-sm">
      <div className="text-lg sm:text-xl font-bold text-slate-800 border-b border-slate-100 pb-3 mb-4 flex items-center justify-between">
        <span>Comments ({commentData.length})</span>
        <span className="text-[10px] text-indigo-600 font-bold uppercase tracking-wider bg-indigo-50 px-2.5 py-0.5 rounded shadow-inner border border-indigo-150 animate-pulse">
          🔄 Component Recursion Enabled
        </span>
      </div>
      <CommentList commentList = {commentData} />
    </div>
  );
};

export default CommentContainer;
