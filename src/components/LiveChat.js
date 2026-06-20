import React, { useCallback, useEffect, useState } from "react";
import ChatMessage from "./ChatMessage";
import { useDispatch, useSelector } from "react-redux";
import { addMessage } from "../utils/liveChatSlice";
import {
  generateRandomName,
  generateEmoji,
  makeRandomMessage,
} from "../utils/helper";
const LiveChat = () => {
  const liveChatMessages = useSelector((store) => store.liveChat.messages);
  const dispatch = useDispatch();

  const [liveChatMsg, setLivechatMsg] = useState("");
  const dispatchLiveMessage = useCallback(
    (message) => {
      dispatch(addMessage(message));
    },
    [dispatch],
  );

  useEffect(() => {
    //API polling
    const timer = setInterval(() => {
      dispatchLiveMessage({
        name: generateRandomName(),
        msg: makeRandomMessage(20) + " " + generateEmoji(),
      });
    }, 1500);

    return () => {
      clearInterval(timer);
    };
  }, [dispatchLiveMessage]);

  const handleClick = () => {
    dispatchLiveMessage({
      name: "Aryan",
      msg: liveChatMsg,
    });
    setLivechatMsg("");
  };

  return (
    <div className="flex flex-col h-[350px] sm:h-[400px] xl:h-[450px] w-full rounded-2xl border border-slate-200 bg-white shadow-sm overflow-hidden">
      {/* Top Header Status bar */}
      <div className="flex items-center justify-between border-b border-slate-100 px-4 py-3 bg-slate-50">
        <div className="flex items-center gap-2">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
          </span>
          <span className="text-xs font-bold text-slate-700 tracking-wide uppercase">Live Chat Feed</span>
        </div>
        <span className="text-[10px] font-semibold text-slate-400 bg-slate-200/50 px-1.5 py-0.5 rounded">
          Max Buffer: 100 Messages
        </span>
      </div>

      {/* Messages Viewport */}
      <div className="custom-scrollbar flex-1 overflow-y-auto p-3 flex flex-col-reverse gap-1 bg-slate-50/10">
        {liveChatMessages.map((c, i) => (
          <ChatMessage key={i} data={c} />
        ))}
      </div>

      {/* Bottom Submit Form */}
      <form
        className="border-t border-slate-100 p-3 bg-white flex items-center gap-2"
        onSubmit={(e)=>{
          e.preventDefault();
          handleClick();
        }}
      >
        <input
          type="text"
          className="h-9 min-w-0 flex-1 rounded-full border border-slate-200 bg-slate-50 px-4 py-1.5 text-xs sm:text-sm text-slate-800 placeholder-slate-400 outline-none focus:border-indigo-500 focus:bg-white transition-all shadow-inner"
          placeholder="Say something..."
          value={liveChatMsg}
          onChange={(e) => {
            setLivechatMsg(e.target.value);
          }}
        />
        <button className="shrink-0 rounded-full bg-indigo-600 hover:bg-indigo-700 px-4 py-2 text-xs font-bold text-white shadow-sm hover:shadow active:scale-95 transition-all">
          Send
        </button>
      </form>
    </div>
  );
};

export default LiveChat;
