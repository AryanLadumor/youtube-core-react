import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { closeSidebar } from "../utils/appSlice";
import { useSearchParams } from "react-router-dom";
import CommentContainer from "./CommentContainer";
import LiveChat from "./LiveChat";

const WatchPage = () => {
  const [searchParams] = useSearchParams(); // they fetch query params from url
  console.log(searchParams.get("v")); // TODO URLSearchParams research

  const dispatch = useDispatch();

  useEffect(() => {
    // as soon as user reach watch page then close the side bar first
    dispatch(closeSidebar());
  }, [dispatch]);

  return (
    <div className="mx-auto flex w-full max-w-[1800px] flex-col px-4 pb-12 sm:px-6 lg:px-8">
      <div className="flex w-full flex-col gap-6 py-4 xl:flex-row">
        {/* Main Video Content */}
        <div className="min-w-0 flex-1 flex flex-col gap-4">
          <div className="overflow-hidden rounded-2xl border border-slate-200 bg-black shadow-md transition-all duration-300">
            <iframe
              className="aspect-video w-full"
              src={"https://www.youtube.com/embed/" + searchParams.get("v")}
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture;"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            ></iframe>
          </div>

          {/* Video Metadata Card */}
          <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
            <h1 className="text-lg font-bold text-slate-800 sm:text-xl md:text-2xl">
              React Component Optimization & Performance Showcase
            </h1>
            <div className="mt-4 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between border-t border-slate-100 pt-4">
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 overflow-hidden rounded-full bg-slate-100 ring-2 ring-indigo-50">
                  <img 
                    src="https://tse2.mm.bing.net/th/id/OIP.mb-TeazydHy54flygpdclwHaHa?pid=Api&P=0&h=180" 
                    alt="Channel Avatar"
                    className="h-full w-full object-cover"
                  />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-slate-800">Aryan Ladumor</h3>
                  <p className="text-xs font-semibold text-slate-400">100K subscribers</p>
                </div>
                <button className="ml-3 rounded-full bg-indigo-600 px-4 py-1.5 text-xs font-semibold text-white shadow-sm hover:bg-indigo-700 active:scale-95 transition-all">
                  Subscribe
                </button>
              </div>

              <div className="flex flex-wrap items-center gap-2">
                <div className="flex items-center rounded-full bg-slate-100 p-0.5 border border-slate-200">
                  <button className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-bold text-slate-700 hover:bg-slate-200 rounded-l-full transition-colors border-r border-slate-200">
                    👍 Like
                  </button>
                  <button className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-bold text-slate-700 hover:bg-slate-200 rounded-r-full transition-colors">
                    Dislike
                  </button>
                </div>
                <button className="rounded-full bg-slate-100 px-4 py-2 text-xs font-bold text-slate-700 hover:bg-slate-200 border border-slate-200 transition-colors">
                  ➡️ Share
                </button>
                <button className="rounded-full bg-slate-100 px-4 py-2 text-xs font-bold text-slate-700 hover:bg-slate-200 border border-slate-200 transition-colors">
                  •••
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Live Chat Panel */}
        <div id="live-chat-showcase" className="w-full shrink-0 xl:w-[24rem] 2xl:w-[28rem] transition-all duration-300">
          <LiveChat />
        </div>
      </div>

      {/* Recursive Comments Panel */}
      <div id="comments-showcase" className="mt-4 transition-all duration-300">
        <CommentContainer />
      </div>
    </div>
  );
};

export default WatchPage;
