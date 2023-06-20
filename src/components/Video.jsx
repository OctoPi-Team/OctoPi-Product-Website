import React from "react";
function Video(props) {
  return (
    <div
      className={
        "w-full h-96 flex justify-center items-center text-2xl flex-col lg:text-4xl lg:mt-10 lg:flex-row lg:gap-10"
      }
    >
      <video
        width={600}
        className={"p-5 rounded-3xl drop-shadow-2xl"}
        src={props.video}
        autoPlay={true}
        loop={true}
        muted
      ></video>
      <div className="flex flex-col items-center">
        {props.text}
        <p className="text-gray text-lg">{props.description}</p>
      </div>
    </div>
  );
}

export default Video;
