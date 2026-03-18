import React from "react";
import { useSelector } from "react-redux";
import { HOME_ICON, MUSIC_ICON, SHORT_ICON, VIDEO_ICON } from "../utils/constants";

const Sidebar = () => {
  const isMenuopen = useSelector((store) => store.app.isSidebarOpen);

  return (
    <div className="h-full" >
      {isMenuopen ? (
        
          <ul className= "flex w-14 h-full my-1 p-3 flex-col items-center ml-1 shadow-md">
            <li className="my-3">
              <img className="w-5" 
                src={HOME_ICON}
                alt=""
              />
            </li>
            <li className="my-3">
              <img className="w-7"
                src={SHORT_ICON}
                alt=""
              />
            </li>
            <li className="my-3">
              <img className="w-6"
                src={VIDEO_ICON}
                alt=""
              />
            </li>
            <li className="my-3">
              <img className="w-6"
                src={MUSIC_ICON}
                alt=""
              />
            </li>
          </ul>
        
      ) : (
        <div className="p-3 w-40 shadow-md">
          <div className="my-1">
            <ul className=" my-2 flex flex-col items-start justify-center ">
              <li className="flex my-1    ">
                <span>
                  <img
                    className="w-5"
                    src={HOME_ICON}
                    alt=""
                  />
                </span>
                <span className="ml-1">Home</span>
              </li>
              <li className="flex my-1   ">
                <span>
                  <img
                    className="w-7"
                    src={SHORT_ICON}
                    alt=""
                  />
                </span>
                <span className="ml-1">Shorts</span>
              </li>
              <li className="flex my-1   ">
                <span>
                  <img
                    className="w-6"
                    src={VIDEO_ICON}
                    alt=""
                  />
                </span>
                <span className="ml-1">Video</span>
              </li>
              <li className="flex my-1   ">
                <span>
                  <img
                    className="w-6"
                    src={MUSIC_ICON}
                    alt=""
                  />
                </span>
                <span className="ml-1">Music</span>
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
