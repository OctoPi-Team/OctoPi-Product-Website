import React from "react";

function Hero(props) {
  return (
    <div
      className={
        "w-full h-[600px] flex justify-between items-center gap-5 p-5 text-center md:px-32"
      }
    >
      <img
        className={
          "w-60 h-60 object-cover rounded-full drop-shadow-2xl md:h-96 md:w-96"
        }
        src={"/Placeholder.png"}
        alt={"First Gameplay Scene"}
      />
      <p className={"text-2xl md:text-4xl"}>
        {props.text}
        <br />
        <span className={"text-3xl md:text-7xl"}>Operation : </span>
        <span className={"text-logo-blue text-3xl md:text-7xl"}>
          Innovation
        </span>
      </p>
    </div>
  );
}

export default Hero;
