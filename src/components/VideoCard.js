import React from "react";

const VideoCard = ({ info }) => {
  // console.log(info);
  const { snippet, statistics } = info;
  const { title, thumbnails, channelTitle } = snippet;

  return (
    <div className="p-2 m-2   w-auto  h-auto rounded-lg  hover:scale-[1.01] hover:bg-gray-200 hover:shadow-md transition duration-200">
      <img
        className="w-full h-full rounded-lg"
        src={thumbnails?.medium?.url}
        alt="NoImage"
      />
      <p className="p-1 text-sm  text-wrap font-semibold">{title}</p>
      <p className="text-xs">{channelTitle}</p>
      <div>
        <span className="text-xs text-slate-600">
          {statistics.viewCount} views •{" "}
        </span>
        <span className="text-xs text-slate-600">
          {statistics.likeCount} likes •{" "}
        </span>
        <span className="text-xs text-slate-600">
          {new Date(snippet.publishedAt).toLocaleString("en-IN").split(",")[0]}
        </span>
      </div>
    </div>
  );
};

//suppose we have to create an add card from an simple card 
export const HOCBorderedVideoCard = (VideoCard) => {
  return ({ info }) => {
    return (
      <div className="p-1 m-1 border border-red-300">
        <VideoCard info={info} />
        <p className=" text-xs text-slate-400">Sponsered By xyz</p>
      </div>
    );
  };
};
export default VideoCard;
