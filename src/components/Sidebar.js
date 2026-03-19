import React from "react";
import { useSelector } from "react-redux";
import {
  HOME_ICON,
  MUSIC_ICON,
  SHORT_ICON,
  VIDEO_ICON,
} from "../utils/constants";

const Sidebar = () => {
  const isMenuopen = useSelector((store) => store.app.isSidebarOpen);

  return (
    <div className="h-full">
      {isMenuopen ? ( // If true only Show The Four [home,short,video,music] Icon else Show Whole SideBar
        <ul className="flex w-14 h-full my-2 p-3 flex-col items-center ml-1 shadow-md">
          <li className="my-3">
            <img className="w-7" src={HOME_ICON} alt="" />
          </li>
          <li className="my-3">
            <img className="w-10" src={SHORT_ICON} alt="" />
          </li>
          <li className="my-3">
            <img className="w-8" src={VIDEO_ICON} alt="" />
          </li>
          <li className="my-3">
            <img className="w-7" src={MUSIC_ICON} alt="" />
          </li>
        </ul>
      ) : (
        <div className="p-3 w-40 shadow-md h-full">
          <div className="my-1">
            <ul className=" my-2 flex flex-col items-start justify-center ">
              <li className="flex my-1 w-full">
                <span className="w-3/12">
                  <img className="w-7" src={HOME_ICON} alt="" />
                </span>
                <span className="ml-1 w-5/12 text-center">Home</span>
              </li>
              <li className="flex my-1  w-full ">
                <span className="w-3/12">
                  <img className="w-10" src={SHORT_ICON} alt="" />
                </span>
                <span className="ml-1 w-5/12 text-center">Shorts</span>
              </li>
              <li className="flex my-1   w-full">
                <span className="w-3/12">
                  <img className="w-8" src={VIDEO_ICON} alt="" />
                </span>
                <span className="ml-1 w-5/12 text-center">Video</span>
              </li>
              <li className="flex my-1  w-full ">
                <span className="w-3/12">
                  <img className="w-7" src={MUSIC_ICON} alt="" />
                </span>
                <span className="ml-1 w-5/12 text-center">Music</span>
              </li>
            </ul>
          </div>
          <div className="my-3">
            <hr />
            <h1 className=" font-bold text-md">Subscription</h1>
            <ul className="p-1 ml-1">
              <li>Subs-1</li>
              <li>Subs-2</li>
              <li>Subs-3</li>
              <li>Subs-4</li>
            </ul>
          </div>
          <hr />
          <div className="my-3">
            <h1 className=" font-bold text-md">You</h1>
            <ul className="p-1 ml-1">
              <li>History</li>
              <li>Playlists</li>
              <li>Watch later</li>
              <li>Liked videos</li>
            </ul>
          </div>
        </div>
      )}
    </div>
  );
};

export default Sidebar;
