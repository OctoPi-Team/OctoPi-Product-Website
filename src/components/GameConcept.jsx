import React from "react";
import GameConceptCards from "./GameConceptCards";
import storyImage from "/Story.png";
import playGameImage from "/Spiel starten.png";
import innovationFactoryImage from "/InnovationFactory.png";

function GameConcept() {
  return (
    <div className="bg-logo-blue w-full h-[1400px] flex justify-center items-center flex-col p-5 lg:h-[700px]">
      <p className="text-5xl text-white mb-10 lg:mb-0" id="click">
        Unser Spielkonzept
      </p>
      <div className="md:flex-row md:gap-10 md:mt-10 lg:flex">
        <GameConceptCards
          header={"Einstieg"}
          text={
            "Spieler wird von dem Kunden beauftragt, ihre SAP BTP Fabrik zu renovieren. Die Plattformen sind kaputt und unser Sovanta Mitarbeiter eilt um Rettung anzubieten"
          }
          image={storyImage}
        />
        <br />
        <GameConceptCards
          header={"Spiel spielen"}
          text={
            "Spieler erkundet die Spielwelt und repariert die Fabrik, indem er Minispiele spielt. Wenn er das Spiel erfolgreich fertig gespielt hat, ist die Plattform wiederhergestellt."
          }
          image={playGameImage}
        />
        <br />
        <GameConceptCards
          header={"Innovation Factory"}
          text={
            "Wenn du alle Minispiele absolviert hat, entsteht als Endprodukt die Innovation Factory for SAP BTP. Also nicht wie los!"
          }
          image={innovationFactoryImage}
        />
      </div>
    </div>
  );
}

export default GameConcept;
