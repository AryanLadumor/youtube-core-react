import React, { useEffect } from "react";
import ChatMessage from "./ChatMessage";
import { useDispatch, useSelector } from "react-redux";
import { addMessage } from "../utils/liveChatSlice";
import { generateRandomName,generateEmoji ,makeRandomMessage } from "../utils/helper";
const LiveChat = () => {
    const liveChatMessages = useSelector(store=>store.liveChat.messages)
  const dispatch = useDispatch();
  useEffect(() => {
      //API polling
    const timer = setInterval(() => {
      dispatch(
        addMessage({
          name: generateRandomName(),
          msg: makeRandomMessage(20) +" "+generateEmoji(),
        }),
      );
    }, 1500);

    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <div className= " mx-2 p-2 h-[31.25rem] w-full border border-black overflow-y-scroll flex flex-col-reverse"> 
    {/* //TODO knoe the mechanish how this works shift , unshift and flex-col-reverse */}
      {liveChatMessages.map((c,i)=><ChatMessage  key={i} data={c} />)}
      {/* //again please dio not use index */}
    </div>
  );
};

export default LiveChat;
