import React, { useEffect, useRef, useState } from "react";

const Demo2 = () => {
  let x = 0;
  const [y, setY] = useState(0);
  const z = useRef(0);

  // use case of ref
  let ref = useRef();
  useEffect(() => {
    ref.current = setInterval(() => {
      console.log("Process", Math.random());
    }, 800);

    return () => clearInterval(ref.current);
  }, []);

  return (
    <div className="w-full rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:max-w-md lg:min-h-[24rem] flex flex-col justify-between">
      <div>
        <h2 className="text-sm font-bold uppercase tracking-wider text-indigo-500 mb-2">🧪 useRef Hook Demo</h2>
        <p className="text-xs text-slate-450 mb-4 font-medium">Compares local variable (x), state variable (y), and ref object (z).</p>
        
        <div className="flex flex-col gap-3">
          {/* x row */}
          <div className="flex flex-col items-stretch gap-2 sm:flex-row sm:items-center">
            <button
              onClick={() => {
                x = x + 1;
                console.log("x=", x);
              }}
              className="w-28 shrink-0 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-semibold text-xs py-2 px-3 active:scale-95 transition-all shadow-sm"
            >
              increase x
            </button>
            <div className="break-words text-sm sm:text-base font-bold text-slate-700">Local x = {x}</div>
          </div>

          {/* y row */}
          <div className="flex flex-col items-stretch gap-2 sm:flex-row sm:items-center">
            <button
              onClick={() => {
                setY(y + 1);
                console.log("x is being reset");
                console.log("z will not be reset instead it get updated in ui");
                console.log("Due to render Process will start again");
              }}
              className="w-28 shrink-0 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-semibold text-xs py-2 px-3 active:scale-95 transition-all shadow-sm"
            >
              increase y
            </button>
            <div className="break-words text-sm sm:text-base font-bold text-slate-700">State Y = {y}</div>
          </div>

          {/* z row */}
          <div className="flex flex-col items-stretch gap-2 sm:flex-row sm:items-center">
            <button
              onClick={() => {
                z.current = z.current + 1;
                console.log("z=", z);
              }}
              className="w-28 shrink-0 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-semibold text-xs py-2 px-3 active:scale-95 transition-all shadow-sm"
            >
              increase z
            </button>
            <div className="break-words text-sm sm:text-base font-bold text-slate-700">Ref Z = {z.current}</div>
          </div>
        </div>
      </div>

      <div className="mt-6 pt-3 border-t border-slate-100">
        <button
          onClick={() => {
            clearInterval(ref.current);
            console.log("Process is being stopped");
          }}
          className="w-full rounded-xl bg-rose-500 hover:bg-rose-600 p-3 text-sm font-bold text-white transition-all duration-150 active:scale-95 shadow-sm"
        >
          Stop Running Process
        </button>
      </div>
    </div>
  );
};

export default Demo2;
