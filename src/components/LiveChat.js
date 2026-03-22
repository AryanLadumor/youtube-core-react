import React, { useEffect, useState } from "react";
import ChatMessage from "./ChatMessage";
import { useDispatch, useSelector } from "react-redux";
import { addMessage } from "../utils/liveChatSlice";
import {
  generateRandomName,
  generateEmoji,
  makeRandomMessage,
} from "../utils/helper";
const LiveChat = () => {
  const liveChatMessages = useSelector((store) => store.liveChat.messages);
  const dispatch = useDispatch();

  const [liveChatMsg, setLivechatMsg] = useState("");
  useEffect(() => {
    //API polling
    const timer = setInterval(() => {
      dispatch(
        addMessage({
          name: generateRandomName(),
          msg: makeRandomMessage(20) + " " + generateEmoji(),
        }),
      );
    }, 1500);

    return () => {
      clearInterval(timer);
    };
  }, []);

  const handleClick = () => {
    dispatch(
      addMessage({
        name: "Aryan",
        msg: liveChatMsg,
      }),
    );
    setLivechatMsg("");
  };

  return (
    <>
      <div className=" mx-2 p-2 h-[31.25rem] w-full border border-black overflow-y-scroll flex flex-col-reverse">
        {/* //TODO knoe the mechanish how this works shift , unshift and flex-col-reverse */}
        {liveChatMessages.map((c, i) => (
          <ChatMessage key={i} data={c} />
        ))}
        {/* //again please dio not use index */}
      </div>
      <form
        className="border border-black w-full p-1 ml-2 flex justify-around items-center"
        onSubmit={(e)=>{
          e.preventDefault()
          handleClick()
        }}
      >
        <input
          type="text"
          className="w-3/5 p-1 border border-black"
          placeholder="say something"
          value={liveChatMsg}
          onChange={(e) => {
            setLivechatMsg(e.target.value);
          }}
        />
        <button className="w-1/5 rounded-lg p-1 border border-black bg-gray-200 ">
          Send
        </button>
      </form>
    </>
  );
};

export default LiveChat;
