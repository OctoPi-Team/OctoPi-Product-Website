import React from "react";
import GameConceptCards from "./GameConceptCards";
import storyImage from "/Story.png";
import playGameImage from "/Spiel starten.png";
import innovationFactoryImage from "/InnovationFactory.png";

function GameConcept() {
  return (
    <div className="bg-logo-blue w-full h-[1400px] flex justify-center items-center flex-col p-5 lg:h-[700px]">
      <p className="text-5xl text-white mb-10 lg:mb-0">Unser Spielkonzept</p>
      <div className="md:flex-row md:gap-10 md:mt-10 lg:flex">
        <GameConceptCards
          header={"Story"}
          text={
            "Spieler wird von dem Kunden beauftragt, ihre SAP BTP Fabrik zu renovieren. [...]"
          }
          image={storyImage}
        />
        <br />
        <GameConceptCards
          header={"Spiel starten"}
          text={
            "Spieler läuft auf der Overworld herum und repariert die Fabrik, indem er Minispiele spielt. [...]"
          }
          image={playGameImage}
        />
        <br />
        <GameConceptCards
          header={"Innovation Factory"}
          text={
            "Wenn der Spieler alle Spiele absolviert hat, entsteht als Endprodukt die Innovation Factory. [...]"
          }
          image={innovationFactoryImage}
        />
      </div>
    </div>
  );
}

export default GameConcept;
