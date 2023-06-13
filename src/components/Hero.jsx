import React from 'react';
import Second_Gameplay from "/Second_Gameplay.png";

function Hero(props) {
    return (
        <div className={"w-full h-96 flex justify-between items-center gap-5 p-5 text-center md:px-32"}>
            <img className={"w-60 h-60 object-cover rounded-full drop-shadow-2xl md:w-80 md:h-80"} src={Second_Gameplay} alt={"Gameplay"} />
            <p className={"text-xl md:text-4xl"}>{props.text} <span className={"text-green text-2xl md:text-6xl"}>Renovate : Innovate!</span></p>
        </div>
    );
}

export default Hero;