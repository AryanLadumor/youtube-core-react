import React from "react";
import { Link } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { closeSidebar } from "../utils/appSlice";
import {
  HOME_ICON,
  MUSIC_ICON,
  SHORT_ICON,
  VIDEO_ICON,
} from "../utils/constants";

const SidebarContent = ({ onNavigate }) => {
  return (
    <div className="h-full w-56 border-r border-slate-200 bg-white p-4 flex flex-col gap-4">
      <div>
        <ul className="flex flex-col gap-1">
          <li>
            <Link to="/" className="group flex items-center gap-3.5 rounded-xl px-3 py-2 text-sm font-semibold text-slate-600 hover:bg-indigo-50 hover:text-indigo-900 transition-all" onClick={onNavigate}>
              <span className="w-5 shrink-0 flex items-center justify-center">
                <img className="w-5 max-h-5 object-contain opacity-70 group-hover:opacity-100 transition-opacity" src={HOME_ICON} alt="" />
              </span>
              <span>Home</span>
            </Link>
          </li>
          <li className="group flex items-center gap-3.5 cursor-pointer rounded-xl px-3 py-2 text-sm font-semibold text-slate-600 hover:bg-indigo-50 hover:text-indigo-900 transition-all" onClick={onNavigate}>
            <span className="w-5 shrink-0 flex items-center justify-center">
              <img className="w-5 max-h-5 object-contain opacity-70 group-hover:opacity-100 transition-opacity" src={SHORT_ICON} alt="" />
            </span>
            <span>Shorts</span>
          </li>
          <li className="group flex items-center gap-3.5 cursor-pointer rounded-xl px-3 py-2 text-sm font-semibold text-slate-600 hover:bg-indigo-50 hover:text-indigo-900 transition-all" onClick={onNavigate}>
            <span className="w-5 shrink-0 flex items-center justify-center">
              <img className="w-5 max-h-5 object-contain opacity-70 group-hover:opacity-100 transition-opacity" src={VIDEO_ICON} alt="" />
            </span>
            <span>Video</span>
          </li>
          <li className="group flex items-center gap-3.5 cursor-pointer rounded-xl px-3 py-2 text-sm font-semibold text-slate-600 hover:bg-indigo-50 hover:text-indigo-900 transition-all" onClick={onNavigate}>
            <span className="w-5 shrink-0 flex items-center justify-center">
              <img className="w-5 max-h-5 object-contain opacity-70 group-hover:opacity-100 transition-opacity" src={MUSIC_ICON} alt="" />
            </span>
            <span>Music</span>
          </li>
          <li className="mt-2 px-1">
            <Link to="/demo" className="w-full block" onClick={onNavigate}>
              <button className="w-full rounded-xl bg-indigo-600 py-2 text-xs font-semibold text-white shadow-md shadow-indigo-100 hover:shadow hover:bg-indigo-700 active:scale-95 transition-all">
                🧪 Hooks Demo
              </button>
            </Link>
          </li>
        </ul>
      </div>

      <div className="border-t border-slate-100 pt-4">
        <h3 className="px-3 text-[10px] font-bold uppercase tracking-wider text-slate-400 mb-2">Subscription</h3>
        <ul className="flex flex-col gap-1">
          {["Subs-1", "Subs-2", "Subs-3", "Subs-4"].map((sub) => (
            <li 
              key={sub} 
              onClick={onNavigate}
              className="flex items-center gap-3 cursor-pointer rounded-xl px-3 py-1.5 text-sm font-medium text-slate-600 hover:bg-slate-50 transition-all"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-slate-300 shrink-0"></span>
              <span>{sub}</span>
            </li>
          ))}
        </ul>
      </div>

      <div className="border-t border-slate-100 pt-4">
        <h3 className="px-3 text-[10px] font-bold uppercase tracking-wider text-slate-400 mb-2">You</h3>
        <ul className="flex flex-col gap-1">
          {["History", "Playlists", "Watch later", "Liked videos"].map((item) => (
            <li 
              key={item} 
              className="flex items-center gap-3 cursor-pointer rounded-xl px-3 py-1.5 text-sm font-medium text-slate-600 hover:bg-slate-50 transition-all"
            >
              <span className="text-slate-300 font-bold text-xs">#</span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

const CompactSidebar = () => {
  return (
    <div className="h-full w-16 border-r border-slate-200 bg-white py-4 flex flex-col items-center gap-2">
      <Link to="/" className="group flex flex-col items-center gap-1 cursor-pointer rounded-xl p-2 text-[10px] font-semibold text-slate-500 hover:bg-indigo-50 hover:text-indigo-900 transition-all w-12 h-12 justify-center">
        <img className="w-5 h-5 object-contain opacity-70 group-hover:opacity-100 transition-opacity" src={HOME_ICON} alt="" />
      </Link>
      <div className="group flex flex-col items-center gap-1 cursor-pointer rounded-xl p-2 text-[10px] font-semibold text-slate-500 hover:bg-indigo-50 hover:text-indigo-900 transition-all w-12 h-12 justify-center">
        <img className="w-5 h-5 object-contain opacity-70 group-hover:opacity-100 transition-opacity" src={SHORT_ICON} alt="" />
      </div>
      <div className="group flex flex-col items-center gap-1 cursor-pointer rounded-xl p-2 text-[10px] font-semibold text-slate-500 hover:bg-indigo-50 hover:text-indigo-900 transition-all w-12 h-12 justify-center">
        <img className="w-5 h-5 object-contain opacity-70 group-hover:opacity-100 transition-opacity" src={VIDEO_ICON} alt="" />
      </div>
      <div className="group flex flex-col items-center gap-1 cursor-pointer rounded-xl p-2 text-[10px] font-semibold text-slate-500 hover:bg-indigo-50 hover:text-indigo-900 transition-all w-12 h-12 justify-center">
        <img className="w-5 h-5 object-contain opacity-70 group-hover:opacity-100 transition-opacity" src={MUSIC_ICON} alt="" />
      </div>
    </div>
  );
};

const Sidebar = () => {
  const isMenuopen = useSelector((store) => store.app.isSidebarOpen);
  const dispatch = useDispatch();

  return (
    <>
      <aside className="sticky top-[61px] hidden h-[calc(100vh-61px)] shrink-0 overflow-y-auto bg-white md:block z-20">
        {isMenuopen ? <SidebarContent /> : <CompactSidebar />}
      </aside>

      <div
        className={`fixed inset-0 top-[61px] z-40 md:hidden transition-all duration-300 ${
          isMenuopen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      >
        <button
          aria-label="Close menu"
          className="absolute inset-0 bg-black/40 backdrop-blur-xs"
          onClick={() => dispatch(closeSidebar())}
          type="button"
        />
        <aside
          className={`relative h-full w-56 overflow-y-auto bg-white transition-transform duration-300 ${
            isMenuopen ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          <SidebarContent onNavigate={() => dispatch(closeSidebar())} />
        </aside>
      </div>
    </>
  );
};

export default Sidebar;
