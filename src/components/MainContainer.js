import React from 'react'
import ButtonList from './ButtonList'
import VideoContainer from './VideoContainer'

const MainContainer = () => {
  return (
    <div className="mx-auto w-full max-w-[1800px] px-2 pb-6 sm:px-4 lg:px-6">
        <ButtonList/>
        <VideoContainer/>
    </div>
  )
}

export default MainContainer
