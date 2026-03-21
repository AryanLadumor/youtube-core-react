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
    <div className="m-5 ">
      <h1 className="text-xl font-bold">Comments</h1>
      <CommentList commentList = {commentData} />
    </div>
  );
};

export default CommentContainer;
