import React, { useEffect, useRef, useState } from "react";

const Demo2 = () => {
  let x = 0;
  const [y, setY] = useState(0);
  const z = useRef(0);
  //z is object here not an variable
  //z = {current : 0}

  //use case of ref
  let ref = useRef();
  useEffect(() => {
    ref.current = setInterval(() => {
      console.log("Process" , Math.random());
    }, 800);

    //here it will be clear after unmounting but what if we want to clear it without unmounting i.e with button or etc
    //we have to use hook useRef
    //we can't here use the local variable also as it will be reset on each render
    return () => clearInterval(ref.current);
  });

  return (
    <div
      className={
        "m-4 p-2 w-96 h-96 border border-gray-900 rounded-2xl shadow-xl "
      }
    >
      <div className="flex  justify-start items-center">
        <button
          onClick={() => {
            x = x + 1;
            console.log("x=", x);
          }}
          className={"m-2 p-1 w-20 rounded-md bg-black text-white border-black"}
        >
          increase x
        </button>
        <div className="text-xl font-bold">Let Local x = {x}</div>
      </div>

      <div className="flex  justify-start items-center">
        <button
          onClick={() => {
            setY(y + 1);
            console.log("x is being  reset");
            console.log("z will not be reset instead it get updated in ui");
            console.log("Due to render Process will start again")
          }}
          className={"m-2 p-1 w-20 rounded-md bg-black text-white border-black"}
        >
          increase y
        </button>
        <div className="text-xl font-bold">Const State Y = {y}</div>
      </div>

      <div className="flex  justify-start items-center">
        <button
          onClick={() => {
            z.current = z.current + 1;
            console.log("z=", z);
          }}
          className={"m-2 p-1 w-20 rounded-md bg-black text-white border-black"}
        >
          increase z
        </button>
        <div className="text-xl font-bold">Const ref Z = {z.current}</div>
      </div>

      <div className="flex  justify-start items-center">
        <button
          onClick={() => {
            clearInterval(ref.current);
            console.log("Process is being stop")
          }}
          className={"m-3 p-4  rounded-2xl w-80 bg-red-500 text-white text-4xl font-semibold hover:scale-105 transition duration-75"}
        >
          Stop Process
        </button>
      </div>
    </div>
  );
};

export default Demo2;
