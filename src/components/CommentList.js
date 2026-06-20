import React from "react";
import Comment from "./Comment";

const CommentList = ({ commentList }) => {
  return (
    <div className="flex flex-col gap-3">
      {commentList.map((comment, index) => {
        return (
          // pls pls do not ever pass index into the key its very bad practice
          // i have use it cus i do not have any id
          <div key={index} className="flex flex-col">
            <div>
              <Comment data={comment} />
            </div>
            <div className="ml-3 border-l-2 border-indigo-50 pl-4 sm:ml-6 sm:pl-6 mt-1.5 gap-2 flex flex-col">
              {/*
                 //! Applying recursion  
                 //* in the last we have replies as a comment list so we can use this component recursively
              */}
              {comment.replies && <CommentList commentList={comment.replies} />}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default CommentList;
