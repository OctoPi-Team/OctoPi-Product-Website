import React from "react";

function Platform(props) {
  return (
    <div
      className={
        "w-full h-96 flex justify-between items-center gap-5 p-5 text-center md:px-32"
      }
    >
      <p className={"text-xl md:text-4xl"}>{props.text}</p>
      <img
        className={
          "w-60 h-60 object-cover rounded-full drop-shadow-2xl md:w-80 md:h-80"
        }
        src={"/Placeholder.png"}
        alt={"Second Gameplay Scene"}
      />
    </div>
  );
}

export default Platform;
