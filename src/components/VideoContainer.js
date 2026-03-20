import React ,{useEffect, useState} from 'react'
import { MY_VIDEOS_API } from '../utils/constants'
import VideoCard ,{HOCBorderedVideoCard} from './VideoCard'
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
    // console.log(jsonData.items)
    setVideos(jsonData?.items)
  }

  //TODO==> Show Shimmer UI
  if(videos===null){
    return <div>Loding...</div>
  }

  const BorderedVideoCard = HOCBorderedVideoCard(VideoCard)

  return (
    <div className='grid grid-cols-3 ' >
      {videos.map((video,index)=>{
        return (
          <Link key={video.id} to={"/watch?v=" + video.id }>
            <VideoCard info={videos[index]}/>
          </Link>
      )
    })}
    { videos[0] &&  <BorderedVideoCard info={videos[0]}/>}
    </div>
  )
}

export default VideoContainer