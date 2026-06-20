import Demo from "./Demo";
import Demo2 from "./Demo2";

import React from 'react'

const MainDemo = () => {
  return (
    <div className="mx-auto flex w-full max-w-6xl flex-col gap-4 p-3 sm:p-4 lg:flex-row lg:items-start lg:justify-center">
        <Demo></Demo>
        <Demo2></Demo2>
    </div>
  )
}

export default MainDemo
