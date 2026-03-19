import React ,{useEffect, useState} from 'react'
import { MY_VIDEOS_API } from '../utils/constants'
import VideoCard from './VideoCard'
import { Link } from 'react-router-dom'
const VideoContainer = () => {

  const [videos , setVideos] = useState(null)

  //To fetch youtube api data
  useEffect(()=>{
    getVideos()
  },[])

  //Account To fetch Api of youtube 
  const getVideos = async ()=>{
    const data = await fetch(MY_VIDEOS_API)
    const jsonData = await data.json()
    console.log(jsonData.items)
    setVideos(jsonData?.items)
  }

  //TODO==> Show Shimmer UI
  if(videos===null){
    return <div>Loding...</div>
  }

  return (
    <div className='grid grid-cols-4 ' >

      {videos.map((video,index)=>{
        return (
          <Link key={video.id} to={"/watch?v=" + video.id }>
            <VideoCard info={videos[index]}/>
          </Link>
      )
      })}
    </div>
  )
}

export default VideoContainer