import React from "react";
import Comment from "./Comment";
const CommentList = ({ commentList }) => {
  return (
    <div>
      {commentList.map((comment, index) => {
        return (
          //pls pls do not ever pass index into the key its very bad practice
          //i have use it cus i do not have any id
          <div key={index}>
            <div >
              <Comment  data={comment} />
            </div>
            <div className="pl-5 border border-l-black ml-5 ">
            {/*
               //! Applying recursion  
               //* in the last we have repleis as a comment list so we can use this component as recuesily
            */}
              {comment.replies &&   <CommentList commentList={comment.replies} />}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default CommentList;
