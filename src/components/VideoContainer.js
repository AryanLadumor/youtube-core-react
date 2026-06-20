import React, { useEffect, useState } from 'react';
import { MY_VIDEOS_API } from '../utils/constants';
import VideoCard, { HOCBorderedVideoCard } from './VideoCard';
import { Link } from 'react-router-dom';

const VideoContainer = () => {
  const [videos, setVideos] = useState(null);

  // To fetch youtube api data
  useEffect(() => {
    getVideos();
  }, []);

  // Account To fetch Api of youtube 
  const getVideos = async () => {
    const data = await fetch(MY_VIDEOS_API);
    const jsonData = await data.json();
    setVideos(jsonData?.items);
  };

  // TODO==> Show Shimmer UI
  if (videos === null) {
    return (
      <div className="grid grid-cols-1 gap-6 pt-2 xs:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 3xl:grid-cols-5">
        {Array(12).fill("").map((_, index) => (
          <div key={index} className="rounded-2xl border border-slate-200 bg-white p-3 shadow-sm flex flex-col gap-3 animate-pulse">
            <div className="aspect-video w-full rounded-xl bg-slate-200"></div>
            <div className="h-4 w-5/6 rounded bg-slate-200 mt-1"></div>
            <div className="h-3 w-1/2 rounded bg-slate-200 mt-1"></div>
            <div className="flex gap-2 mt-1">
              <div className="h-3 w-1/4 rounded bg-slate-200"></div>
              <div className="h-3 w-1/4 rounded bg-slate-200"></div>
            </div>
          </div>
        ))}
      </div>
    );
  }

  const BorderedVideoCard = HOCBorderedVideoCard(VideoCard);

  return (
    <div className='grid grid-cols-1 gap-6 pt-2 xs:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 3xl:grid-cols-5'>
      {videos && videos.map((video, index) => {
        return (
          <Link key={video.id} to={"/watch?v=" + video.id} className="block">
            <VideoCard info={videos[index]} />
          </Link>
        );
      })}
      {videos && videos[0] && <BorderedVideoCard info={videos[0]} />}
    </div>
  );
};

export default VideoContainer;
