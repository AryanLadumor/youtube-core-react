import React from "react";

const VideoCard = ({ info }) => {
  // console.log(info);
  const { snippet, statistics } = info;
  const { title, thumbnails, channelTitle } = snippet;

  return (
    <article className="group h-full flex flex-col justify-between rounded-2xl border border-slate-200/60 bg-white p-2.5 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-300">
      <div>
        <div className="overflow-hidden rounded-xl bg-slate-100">
          <img
            className="aspect-video w-full rounded-xl object-cover group-hover:scale-102 group-hover:brightness-95 transition-all duration-300"
            src={thumbnails?.medium?.url}
            alt="NoImage"
          />
        </div>
        <p className="line-clamp-2 mt-2 px-1 text-sm font-semibold leading-5 text-slate-800 group-hover:text-indigo-600 transition-colors">{title}</p>
      </div>
      <div className="mt-2 px-1">
        <p className="truncate text-xs font-semibold text-slate-500">{channelTitle}</p>
        <div className="flex flex-wrap gap-x-1.5 mt-1 text-[11px] font-medium text-slate-400">
          <span>{statistics.viewCount} views</span>
          <span>•</span>
          <span>{statistics.likeCount} likes</span>
          <span>•</span>
          <span>
            {new Date(snippet.publishedAt).toLocaleString("en-IN").split(",")[0]}
          </span>
        </div>
      </div>
    </article>
  );
};

//suppose we have to create an add card from an simple card 
export const HOCBorderedVideoCard = (VideoCard) => {
  return ({ info }) => {
    return (
      <div className="rounded-2xl border border-rose-200 bg-rose-50/10 p-0.5 relative shadow-sm">
        <div className="absolute top-4 right-4 z-10 rounded bg-rose-500 px-1.5 py-0.5 text-[9px] font-bold text-white uppercase tracking-wider shadow-sm">
          Ad
        </div>
        <VideoCard info={info} />
        <p className="px-3.5 pb-2 text-[10px] font-bold text-rose-500 uppercase tracking-wider">Sponsored By xyz</p>
      </div>
    );
  };
};
export default VideoCard;
