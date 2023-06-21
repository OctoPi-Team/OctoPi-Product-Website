import React from "react";
import iPad from "/iPad.png";
import Mac from "/Mac.png";

function Compatibility() {
  return (
    <div
      className={
        "w-full h-[500px] flex justify-between flex-col items-center gap-5 p-10 text-center md:px-32"
      }
    >
      <p className="text-4xl">Kompatibilität</p>
      <img
        className={"w-52 h-52 object-contain md:w-80 md:h-80"}
        src={Mac}
        alt={"Mac"}
      />
      <img
        className={"w-52 h-52 object-contain md:w-80 md:h-80"}
        src={iPad}
        alt={"iPad"}
      />
    </div>
  );
}

export default Compatibility;
