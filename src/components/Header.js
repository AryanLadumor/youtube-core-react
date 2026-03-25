import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toogleSidebar } from "../utils/appSlice";
import { Link } from "react-router";
import {
  DEFAULT_USER_ICON,
  HAMBURGER_MENU_ICON,
  SEARCH_ICON,
  YOUTUBE_LOGO,
  YOUTUBE_SEARCH_API,
} from "../utils/constants";
import {cacheResults} from "../utils/searchSlice"

const Header = () => {
  
  const [searchSuggestion, setSearchSuggestion] = useState([]); //2
  const [showSugessionOnFocus, setShowSugessionOnFocus] = useState(false); //3
  const [searchQuery, setSearchQuery] = useState(""); //1
  
  const searchCache = useSelector((store)=>store.search)
  const dispatch = useDispatch();
  

  //this effect will work every time the search state changes to suggestion every time
  useEffect(() => {
   

    //after every key press make an api call in 200ms
    const timer = setTimeout(() => {
      //Adding cacheing (to avoide repetative calls optimised)
      if(searchCache[searchQuery]){  // example 
        setSearchSuggestion(searchCache[searchQuery]);
      }else{
        getSearchSuggetion()
      }
    }, 200);


    //if the diff bet 2 api call is <200 decline the api call
    //i.e on unmouting clear the timer
    return () => {
      clearTimeout(timer);
    };
  }, [searchQuery ]);

   const getSearchSuggetion = async () => {
      const data = await fetch(YOUTUBE_SEARCH_API + searchQuery);
      const json = await data.json();
      console.log("API CALL ==>", searchQuery);
      setSearchSuggestion(json[1]);

      //dispatch action ==> updating cache
      dispatch(cacheResults({ [searchQuery] : json[1]}))
    };

  /*
    ------recolisation--------
    * press --> i
    *  render 
    *  call useeffect 
    *   api call ==> after 200ms
    * 
    * 
    * press --> ip if before 200ms then api prev api call will be decline else it will also show api call of based on previos letter
    * render
    * call useEffect
    * api call ==> after 200ms
    * 
    * every time render is being call so setimeout is new instance everytime created
    * 
    */
    
  const toggleMenuHandler = () => {
    dispatch(toogleSidebar());
  };

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
          <img className="h-11 mx-3" src={YOUTUBE_LOGO} alt="" />
        </a>
      </div>
      <div className="col-span-10">
        <div className="flex justify-center ">
          <input
            className="rounded-l-full w-2/5  h-9 border border-slate-900 px-4"
            placeholder="Search"
            type="text"
            value={searchQuery}
            onChange={(e) => {
              setSearchQuery(e.target.value);
            }}
            onFocus={() => {
              setShowSugessionOnFocus(true);
            }}
            onBlur={() => {
              setShowSugessionOnFocus(false);
            }}
          />
          <button className="border  h-9 w-12  border-slate-900 rounded-r-full">
            <img
              src={SEARCH_ICON}
              className="w-8 p-1 hover:scale-125 ml-2  transition duration-100"
              alt=""
            />
          </button>
        </div>
        {showSugessionOnFocus && (
          <div className="fixed  top-12 bg-white border rounded-lg right-[31.5rem]  shadow-2xl w-[28rem]  border-gray-500 z-10">
            <ul className=" h-full w-full ">
              {searchSuggestion.map((sug) => (
                <li key={sug} className="px-1 py-1 hover:bg-gray-100">🔍 {sug}</li>
              ))}
            </ul>
          </div>
        )}
      </div>
      <div className="flex col-span-1 justify-end items-center">
        
       
        
        <img className="h-8 " src={DEFAULT_USER_ICON} alt="" />
      </div>
    </div>
  );
};

export default Header;

//TODO fix scroll
