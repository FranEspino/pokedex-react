import React from "react";
import "./Pokedex.css";


function Pokedex({pokemon, onClickPokedex}) {
 //   console.log(pokemon.sprites.front_default)
  return (
    <div className="container">
      <div className="containerHeader">
        <div className="roundBlue"></div>
        <div className="containerRoundItem">
          <div className="roundItem1"></div>
          <div className="roundItem2"></div>
          <div className="roundItem3"></div>
        </div>
      </div>
      <div className="led">
        <img
          width={200}
          height={200}
          src={pokemon.sprites.front_default}
        />
        <div>
          <div className="itemInfo">
            <p className="textItemInfo">Nombre: </p>
            <p className="textItemInfo2">{pokemon.name}</p>
          </div>

          <div className="itemInfo">
            <p className="textItemInfo">Experiencia: </p>
            <p className="textItemInfo2">{pokemon.height}</p>
          </div>
          <div className="itemInfo">
            <p className="textItemInfo">Tamanio: </p>
            <p className="textItemInfo2">{pokemon.height}</p>
          </div>
        </div>
      </div>

      <div className="controlsContainer">
        <div className="control1" onClick={onClickPokedex}></div>
        <div className="control2"></div>
        <div className="control3"></div>

      </div>
    </div>
  );
}

export default Pokedex;
