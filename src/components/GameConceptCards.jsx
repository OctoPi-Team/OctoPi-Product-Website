import React from "react";

function GameConceptCards(props) {
  return (
    <div className="w-72 h-96 bg-white">
      <div className="w-full h-14 bg-logo-blue-dark text-center text-white text-2xl flex justify-center gap-5 items-center">
        <img className="rounded-full w-14 h-14 p-2" src={props.image} />
        <div>{props.header}</div>
      </div>
      <p className="text-xl text-gray text-center flex items-center h-60 md:h-72 md:text-1xl p-5">
        {props.text}
      </p>
    </div>
  );
}

export default GameConceptCards;
