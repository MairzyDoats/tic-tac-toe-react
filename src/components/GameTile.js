import React, { useState, useEffect, useRef, useContext } from 'react'
import { GameContext } from './Game'

export default function GameTile({ id }) {
  const tileRef = useRef({ clicked: false, playerClicked: "" });
  const { player, handlePlayerChange } = useContext(GameContext);

  useEffect(() => {
    tileRef.current.classList.remove("game-tile--unclicked-x");
    tileRef.current.classList.remove("game-tile--unclicked-circle");
    if (tileRef.current.clicked) {
      tileRef.current.classList.add(`game-tile--clicked-${tileRef.current.playerClicked}`);
    } else {
      tileRef.current.classList.add(`game-tile--unclicked-${player}`)
    }
  }, [player])

  function handleClick() {
    tileRef.current.playerClicked = player;
    tileRef.current.clicked = true;
    handlePlayerChange();
  }

  return (
    <div onClick={tileRef.current.clicked ? undefined : handleClick} ref={tileRef} className={`game-tile game-tile-${id}`} id={id}></div>
  )
}