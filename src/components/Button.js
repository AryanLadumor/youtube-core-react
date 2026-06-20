import React from 'react'

const Button = ({name}) => {
  const isActive = name === "All";
  return (
    <div className="shrink-0">
        <button className={`whitespace-nowrap rounded-xl px-4 py-1.5 text-xs font-semibold sm:text-sm active:scale-95 transition-all shadow-sm ${
          isActive 
            ? "bg-indigo-600 text-white hover:bg-indigo-700 shadow-indigo-100" 
            : "bg-white text-slate-600 hover:bg-slate-100 hover:text-slate-900 border border-slate-200"
        }`} >{name}</button>
    </div>
  )
}

export default Button
