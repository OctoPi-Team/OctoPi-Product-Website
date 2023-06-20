import React from "react";
function Video(props) {
  return (
    <div
      className={`${props.backgroundColor} ${props.textColor} w-full h-96 flex justify-center items-center text-2xl flex-col`}
    >
      {props.text}
      <video
        width={600}
        className={"p-5 rounded-3xl drop-shadow-2xl"}
        src={props.video}
        autoPlay={true}
        loop={true}
        muted
      ></video>
    </div>
  );
}

export default Video;
