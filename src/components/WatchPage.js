import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { closeSidebar } from "../utils/appSlice";
import { useSearchParams } from "react-router-dom";
import CommentContainer from "./CommentContainer";

const WatchPage = () => {
  const [searchParams] = useSearchParams(); //they fect query params from url
  console.log(searchParams.get("v")); //TODO URLSearchParams research

  const dispatch = useDispatch();

  useEffect(() => {
    //as soon as user reach watch page then close the side bar first
    dispatch(closeSidebar());
  }, []);

  return (
    <div className="flex flex-col">
      <div className="px-2">
        <iframe
          width="950"
          height="500"
          src={"https://www.youtube.com/embed/" + searchParams.get("v")}
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture;"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe>
      </div>
      <CommentContainer />
    </div>
  );
};

export default WatchPage;
