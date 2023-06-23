import React from "react";
import iPad from "/iPad.png";
import Mac from "/Mac.png";

function Compatibility() {
  return (
    <>
      <div>
        <div className="text-3xl text-center pt-10 md:pt-10 md:text-5xl">
          Kompatibilität
        </div>
        <div className="h-96 w-full flex-col flex justify-center items-center my-10 md:flex-row md:justify-between xl:px-96 md:px-20">
          <div>
            <p className="font-bold text-center">PC / Laptop</p>
            <img className="w-72 md:w-96" src={Mac} />
          </div>
          <div>
            <p className="font-bold text-center">iPad</p>
            <img className="w-72 md:w-96" src={iPad} />
          </div>
        </div>
      </div>
    </>
  );
}

export default Compatibility;
