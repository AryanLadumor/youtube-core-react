import React from "react";
import Button from "./Button";

const buttonList = ["All" , "Comedy clubs" , "KSI" , "Gaming" , "Blind Dates" , "Roasts" , "Live" , "Couple" , "Podcasts" , "Valentine"]

const ButtonList = () => {
  return (
    <div className="flex ">
     {
      buttonList.map((buttonText)=>{
        return <Button name={buttonText} />
      })
     }
    </div>
  );
};

export default ButtonList;
