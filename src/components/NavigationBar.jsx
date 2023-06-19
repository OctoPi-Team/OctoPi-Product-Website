import React from "react";
import Logo from "/Logo.png";

function NavigationBar(props) {
  return (
    <div className="bg-logo-blue w-full h-24 flex justify-center items-center text-white text-4xl">
      <div className={"flex items-center gap-5"}>
        <img className={"w-14"} src={Logo} alt={"Logo"} />
        <div>{props.text}</div>
      </div>
    </div>
  );
}

export default NavigationBar;
