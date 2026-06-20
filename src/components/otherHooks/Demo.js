import React, { useMemo, useState } from 'react';
import { findPrime } from '../../utils/helper';

const Demo = () => {
  const [num, setNum] = useState(0);
  const [isDarkTheme, setIsDarkTheme] = useState(false);

  console.log("Rendering");

  const prime = useMemo(() => findPrime(num), [num]);

  return (
    <div className={"w-full rounded-2xl border p-6 shadow-sm transition-all duration-300 sm:max-w-md lg:min-h-[24rem] flex flex-col justify-between " + (isDarkTheme ? "bg-slate-900 border-slate-800 text-white" : "bg-white border-slate-200 text-slate-800")}>
      <div>
        <h2 className="text-sm font-bold uppercase tracking-wider text-indigo-500 mb-2">🧪 useMemo Hook Demo</h2>
        <p className="text-xs text-slate-450 mb-4 font-medium">Calculates N-th prime number on number inputs (heavy operation demo).</p>
        <input 
          type="number" 
          className={'my-2 w-full rounded-xl border px-4 py-2.5 outline-none focus:ring-2 focus:ring-indigo-100 transition-all ' + (isDarkTheme ? "bg-slate-800 border-slate-700 text-white focus:border-indigo-500" : "bg-slate-50 border-slate-200 text-slate-800 focus:border-indigo-500 focus:bg-white")} 
          value={num} 
          onChange={(e) => setNum(e.target.value)}
        />
        <div className='break-words text-base font-bold sm:text-lg mt-3'>
          Prime Number : <span className="text-indigo-650">{prime}</span>
        </div>
      </div>
      <div>
        <button 
          onClick={() => setIsDarkTheme(!isDarkTheme)} 
          className={"mt-4 rounded-xl px-4 py-2 text-xs font-bold transition-all duration-150 active:scale-95 shadow-sm " + (isDarkTheme ? "bg-white text-slate-900 hover:bg-slate-100" : "bg-slate-900 text-white hover:bg-slate-800")}
        >
          {isDarkTheme ? "Light Theme" : "Dark Theme"}
        </button>
      </div>
    </div>
  );
};

export default Demo;
