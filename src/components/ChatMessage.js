import React from 'react'
import { DEFAULT_USER_ICON } from '../utils/constants'
const ChatMessage = ({data}) => {
    const {name , msg} = data;
    const isOwner = name === "Aryan";
    return (
    <div className={`flex items-start gap-2 px-3 py-1.5 rounded-xl hover:bg-slate-50 transition-all ${isOwner ? "bg-indigo-50/30" : ""}`}>
        <img src={DEFAULT_USER_ICON} alt="" className="w-6 h-6 rounded-full object-cover shrink-0 shadow-sm border border-slate-100" />
        <div className="min-w-0 flex-1 leading-tight">
            <span className={`text-xs font-bold px-1.5 py-0.5 rounded mr-1.5 ${isOwner ? "text-indigo-600 bg-indigo-50 font-extrabold" : "text-slate-700"}`}>
                {name}
            </span>
            <span className="text-xs text-slate-600 break-words">{msg}</span>
        </div>
    </div>
  )
}

export default ChatMessage