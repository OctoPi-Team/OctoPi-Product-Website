import React from "react";
import Gameplay from "/Gameplay.png";

function Platform(props) {
  return (
    <div
      className={
        "bg-logo-blue text-white w-full h-96 flex justify-between items-center gap-5 p-5 text-center md:px-32"
      }
    >
      <div>
        <p className={"text-2xl md:text-4xl"}>{props.text}</p>
        <p className="text-lg text-center mt-5">{props.description}</p>
      </div>
      <img
        className={
          "w-60 h-60 object-cover rounded-full drop-shadow-2xl md:w-80 md:h-80"
        }
        src={Gameplay}
        alt={"Second Gameplay Scene"}
      />
    </div>
  );
}

export default Platform;
