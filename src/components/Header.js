import React, { useCallback, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toogleSidebar } from "../utils/appSlice";
import {
  DEFAULT_USER_ICON,
  HAMBURGER_MENU_ICON,
  SEARCH_ICON,
  YOUTUBE_LOGO,
  YOUTUBE_SEARCH_API,
} from "../utils/constants";
import { cacheResults } from "../utils/searchSlice";

const Header = () => {
  const [searchSuggestion, setSearchSuggestion] = useState([]);
  const [showSugessionOnFocus, setShowSugessionOnFocus] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const searchCache = useSelector((store) => store.search);
  const dispatch = useDispatch();

  const getSearchSuggetion = useCallback(async () => {
    const data = await fetch(YOUTUBE_SEARCH_API + searchQuery);
    const json = await data.json();
    console.log("API CALL ==>", searchQuery);
    setSearchSuggestion(json[1]);

    dispatch(cacheResults({ [searchQuery]: json[1] }));
  }, [dispatch, searchQuery]);

  useEffect(() => {
    if (searchQuery.trim() === "") {
      setSearchSuggestion([]);
      return;
    }

    const timer = setTimeout(() => {
      if (searchCache[searchQuery]) {
        setSearchSuggestion(searchCache[searchQuery]);
      } else {
        getSearchSuggetion();
      }
    }, 200);

    return () => {
      clearTimeout(timer);
    };
  }, [getSearchSuggetion, searchCache, searchQuery]);

  const toggleMenuHandler = () => {
    dispatch(toogleSidebar());
  };

  return (
    <header className="sticky top-0 z-30 border-b border-slate-200 bg-white/95 backdrop-blur-md shadow-sm">
      <div className="mx-auto grid max-w-[1800px] grid-cols-[auto_1fr_auto] items-center gap-4 px-4 py-3 sm:px-6">
        {/* Left Section */}
        <div className="flex min-w-0 items-center gap-3">
          <button 
            onClick={toggleMenuHandler}
            className="rounded-full p-1.5 hover:bg-slate-100 active:scale-95 transition-all"
            aria-label="Toggle Menu"
          >
            <img
              className="h-5 w-5 shrink-0 object-contain opacity-75 hover:opacity-100 transition-opacity"
              src={HAMBURGER_MENU_ICON}
              alt="Toggle menu"
            />
          </button>

          <a href="/" className="shrink-0 flex items-center">
            <img
              className="h-6 sm:h-7 object-contain"
              src={YOUTUBE_LOGO}
              alt="YouTube"
            />
          </a>
        </div>

        {/* Center Search Section */}
        <div 
          id="search-container-showcase" 
          className="relative order-3 col-span-3 min-w-0 sm:order-none sm:col-span-1 transition-all duration-300"
        >
          <div className="mx-auto flex w-full max-w-2xl items-center shadow-sm rounded-full border border-slate-300 bg-slate-50 focus-within:border-indigo-500 focus-within:ring-2 focus-within:ring-indigo-100 focus-within:bg-white transition-all overflow-hidden">
            <input
              className="h-9 min-w-0 flex-1 bg-transparent px-4 py-1.5 text-sm text-slate-800 placeholder-slate-400 outline-none sm:text-base"
              placeholder="Search optimized components..."
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
            
            {searchCache[searchQuery] && searchQuery.trim() !== "" && (
              <span className="hidden xs:inline-flex items-center gap-1 rounded-full bg-emerald-50 px-2 py-0.5 text-xs font-semibold text-emerald-600 border border-emerald-200 mr-2 shrink-0 animate-pulse">
                ⚡ Cached
              </span>
            )}

            <button className="flex h-9 w-12 shrink-0 items-center justify-center border-l border-slate-200 bg-slate-100 hover:bg-slate-200 text-slate-600 transition-colors">
              <img
                src={SEARCH_ICON}
                className="w-5 h-5 opacity-70"
                alt="Search"
              />
            </button>
          </div>

          {showSugessionOnFocus && searchSuggestion.length > 0 && (
            <div className="custom-scrollbar absolute left-0 right-0 top-11 z-50 mx-auto max-h-[60vh] w-full max-w-2xl overflow-y-auto rounded-2xl border border-slate-200 bg-white/95 backdrop-blur-md p-2 shadow-xl ring-1 ring-black/5">
              <div className="px-3 py-1.5 text-[11px] font-semibold tracking-wider text-indigo-500 uppercase flex justify-between items-center border-b border-slate-100 mb-1">
                <span>Suggestions</span>
                {searchCache[searchQuery] && (
                  <span className="text-emerald-600 lowercase bg-emerald-50 px-1.5 py-0.5 rounded text-[10px]">
                    loaded from local redux cache (no API call)
                  </span>
                )}
              </div>
              <ul className="w-full">
                {searchSuggestion.map((sug) => (
                  <li
                    key={sug}
                    onMouseDown={(e) => {
                      // Prevent blur from firing before selecting suggestion
                      e.preventDefault();
                      setSearchQuery(sug);
                      setShowSugessionOnFocus(false);
                    }}
                    className="flex items-center gap-3 cursor-pointer rounded-lg px-3 py-2 text-sm text-slate-700 hover:bg-indigo-50 hover:text-indigo-900 transition-all font-medium"
                  >
                    <img src={SEARCH_ICON} className="w-3.5 h-3.5 opacity-40 shrink-0" alt="" />
                    <span className="truncate">{sug}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>

        {/* Right Section */}
        <div className="flex items-center justify-end gap-2">
          <div className="h-8 w-8 overflow-hidden rounded-full ring-2 ring-slate-100 shadow-sm">
            <img className="h-full w-full object-cover" src={DEFAULT_USER_ICON} alt="User" />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
