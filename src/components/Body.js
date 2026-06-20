import React  from 'react'
import Sidebar from './Sidebar'
import { Outlet } from 'react-router-dom'

const Body = () => {

  return (
    <div className="flex min-h-[calc(100vh-61px)] overflow-x-hidden bg-slate-50/50">
        <Sidebar  />
        <main className="min-w-0 flex-1">
          <Outlet/>
        </main>
       
    </div>
  )
}

export default Body
