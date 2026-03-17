import React from "react";

const Header = () => {
  return (
    <div className="grid grid-flow-col p-1 m-2 shadow-sm">
      <div className="flex col-span-1 items-center">
        <img
          className="h-8  hover:scale-125 transition duration-75 "
          src="https://tse3.mm.bing.net/th/id/OIP.F7reOP_-iZbvvQMHFXwECwHaHa?pid=Api&P=0&h=180"
          alt=""
        />
        <img
          className="h-11 mx-3"
          src="https://tse1.mm.bing.net/th/id/OIP.sCtdNjphAin-gugu0MNptAHaEK?pid=Api&P=0&h=180"
          alt=""
        />
      </div>
      <div className="flex justify-center items-center  text-center col-span-10">
        <input
          className="rounded-l-full w-1/2  h-9 border border-slate-900 px-4"
          placeholder="Search"
          type="text"
        />
        <button className="border  h-9 w-12  border-slate-900 rounded-r-full">
          <img
            src="https://tse2.mm.bing.net/th/id/OIP.vyhkMafwzVBCCSsgGJfI4wHaHa?pid=Api&P=0&h=180"
            className="w-8 p-1 hover:scale-125 ml-2  transition duration-100"
            alt=""
          />
        </button>
      </div>
      <div className="flex col-span-1 justify-end">
        <img
          className="h-8 "
          src="https://tse2.mm.bing.net/th/id/OIP.mb-TeazydHy54flygpdclwHaHa?pid=Api&P=0&h=180"
          alt=""
        />
      </div>
    </div>
  );
};

export default Header;
