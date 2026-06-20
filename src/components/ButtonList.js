import React from "react";
import Button from "./Button";

const buttonList = ["All" , "Comedy clubs" , "KSI" , "Gaming" , "Blind Dates" , "Roasts" , "Live" , "Couple" , "Podcasts" , "Valentine"]

const ButtonList = () => {
  return (
    <div className="-mx-2 mb-4 flex gap-2 overflow-x-auto bg-transparent py-2.5 scrollbar-none sm:-mx-4 sm:px-4 lg:-mx-6 lg:px-6">
     {
      buttonList.map((buttonText)=>{
        return <Button key={buttonText}  name={buttonText} />
      })
     }
    </div>
  );
};

export default ButtonList;
