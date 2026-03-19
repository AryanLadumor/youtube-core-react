import React from "react";
import { useDispatch } from "react-redux";
import {toogleSidebar} from "../utils/appSlice"
import { DEFAULT_USER_ICON, HAMBURGER_MENU_ICON, SEARCH_ICON, YOUTUBE_LOGO } from "../utils/constants";

const Header = () => {

    const dispatch = useDispatch();

    const toggleMenuHandler = ()=>{
        dispatch(toogleSidebar()) 
    } 

  return (
    <div className="grid grid-flow-col p-1 m-2 ">
      <div className="flex col-span-1 items-center">
        <img
          className="h-8  hover:scale-125 transition duration-75 cursor-pointer "
          src={HAMBURGER_MENU_ICON}
          alt=""
          onClick={toggleMenuHandler}
        />

        <a href="/">
        <img
          className="h-11 mx-3"
          src={YOUTUBE_LOGO}
          alt=""
          />
          </a>
      </div>
      <div className="flex justify-center items-center  text-center col-span-10">
        <input
          className="rounded-l-full w-1/2  h-9 border border-slate-900 px-4"
          placeholder="Search"
          type="text"
        />
        <button className="border  h-9 w-12  border-slate-900 rounded-r-full">
          <img
            src={SEARCH_ICON}
            className="w-8 p-1 hover:scale-125 ml-2  transition duration-100"
            alt=""
          />
        </button>
      </div>
      <div className="flex col-span-1 justify-end">
        <img
          className="h-8 "
          src={DEFAULT_USER_ICON}  
          alt=""
        />
      </div>
    </div>
  );
};

export default Header;
