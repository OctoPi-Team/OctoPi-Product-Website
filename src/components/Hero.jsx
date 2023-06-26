import React from "react";
import ImageMap from "/Map.png";

function Hero(props) {
  return (
    <div
      className={
        "w-full h-[500px] flex justify-between items-center gap-5 p-5 text-center flex-col md:px-32 md:h-[600px] md:flex-row"
      }
    >
      <img
        className={
          "w-60 h-60 object-cover rounded-full drop-shadow-2xl md:h-96 md:w-96"
        }
        src={ImageMap}
        alt={"First Gameplay Scene"}
      />
      <p className={"text-2xl md:text-4xl"}>
        {props.text}
        <br />
        <span className={"text-3xl md:text-7xl"}>Operation: </span>
        <span className={"text-logo-blue text-3xl md:text-7xl"}>
          Innovation
        </span>
        <br />
        <br />
        <button className="animate__animated animate__pulse animate__infinite infinite bg-logo-blue text-white rounded-full py-3 px-8">
          <a href="#click">Weitere Informationen</a>
        </button>
      </p>
    </div>
  );
}

export default Hero;
