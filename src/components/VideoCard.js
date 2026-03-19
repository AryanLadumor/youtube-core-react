import React from "react";

const VideoCard = ({ info }) => {
  // console.log(info);
  const { snippet, statistics } = info;
  const {title ,thumbnails , channelTitle} = snippet
  console.log(thumbnails)
  return (
  <div className="p-2 m-2   w-auto  h-auto rounded-lg  hover:scale-[1.01] hover:bg-gray-200 hover:shadow-md transition duration-200" >
      <img className="w-96 h-52 rounded-lg" src={thumbnails?.medium?.url} alt="NoImage" />
      <p className="p-1 text-sm  text-wrap font-semibold">{title}</p>
      <p className="text-xs" >{channelTitle}</p>
      <div>
        <span className="text-xs text-slate-600" >{statistics.viewCount} views • </span> 
        <span className="text-xs text-slate-600" >{statistics.likeCount} likes • </span> 
        <span className="text-xs text-slate-600" >{new Date(snippet.publishedAt).toLocaleString("en-IN").split(",")[0]}</span>
      </div>
  </div>
  )
};

export default VideoCard;
