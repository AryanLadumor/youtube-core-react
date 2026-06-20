import React from 'react';
import { DEFAULT_USER_ICON } from '../utils/constants';

const Comment = ({ data }) => {
  const { name, text } = data;
  const isAuthor = name === "Aryan";

  return (
    <div className={`flex items-start gap-3 rounded-2xl border border-slate-100/80 p-3 shadow-xs transition-all duration-200 hover:bg-slate-50/60 ${
      isAuthor ? "bg-indigo-50/20 border-indigo-100" : "bg-slate-50/40"
    }`}>
      <img 
        src={DEFAULT_USER_ICON} 
        alt="" 
        className="h-8 w-8 rounded-full object-cover shrink-0 border border-slate-200 shadow-sm" 
      />
      <div className="min-w-0 flex-1">
        <h4 className={`text-xs font-bold ${isAuthor ? "text-indigo-600" : "text-slate-700"}`}>
          {name}
        </h4>
        <p className="break-words text-xs sm:text-sm text-slate-600 mt-1 leading-relaxed">
          {text}
        </p>
      </div>
    </div>
  );
};

export default Comment;
