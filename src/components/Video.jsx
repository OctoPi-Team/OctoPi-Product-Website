import React from "react";

function Video(props) {
  return (
    <div
      className={`${props.backgroundColor} w-full h-[500px] flex justify-center items-center text-2xl flex-col lg:text-4xl lg:mt-10 lg:flex-row lg:gap-10`}
    >
      <video
        width={600}
        className={"p-5 rounded-3xl drop-shadow-2xl"}
        autoPlay={true}
        loop={true}
        muted
      >
        <source src={props.video} type="video/mp4" />
      </video>
      <div className={`flex flex-col items-center`}>
        <p className={`${props.textColor}`}>{props.text}</p>
        <p
          className={`${props.descriptionColor} text-lg w-96 text-center lg:w-[550px] lg:mt-5`}
        >
          {props.description}
        </p>
      </div>
    </div>
  );
}

export default Video;
