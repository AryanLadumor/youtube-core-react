import React, { useMemo, useState } from 'react'
import { findPrime } from '../../utils/helper'
const Demo = () => {
  const [num , setNum] = useState(0)
  const [isDarkTheme , setIsDarkTheme] = useState(false)

  console.log("Rendering")
  
  //heavy task after  writting 199999 in num
  // const prime = () =>{
    //   const pn =  findPrime(num)
    //   console.log(`Prime Number Of ${num}` , pn)
    //   return pn
    // } 

    //this will store cache of it and next time it will not use fn but the cache 
    const prime =  useMemo(()=>findPrime(num) , [num])  //this will memoise this operation and then on re-render will use it next time instead of heacy calcualtion
    return (
      
    <div className={"m-4 p-2 w-96 h-96 border border-gray-900 rounded-2xl shadow-xl " + (isDarkTheme && "bg-black text-white")  }>
      <div>
      <input type="number" className={'p-1 m-1 border rounded-lg w-3/4' + ( isDarkTheme ? "bg-white text-black border-white" : "bg-black  border-black")} id=""  value={num} onChange={(e)=>setNum(e.target.value)}/>
      <div className='text-xl font-bold'>Prime Number : {prime}</div>
      </div>
      <div>
        <button onClick={()=>setIsDarkTheme(!isDarkTheme)} className={"m-2 p-1 w-20 rounded-full " +( isDarkTheme ? "bg-white text-black " : "bg-black text-white border-black")}>{isDarkTheme? "light" : "Dark"}</button>
      </div>
    </div>
  )
}

export default Demo