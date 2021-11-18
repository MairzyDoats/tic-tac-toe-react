import React, { useEffect, useRef, useContext } from 'react'
import { GameContext } from './Game'

export default function GameTile({ id }) {
  const tileRef = useRef({ clicked: false, playerClicked: "" });
  const { winningMessage, handlePlayerChange, player, reset } = useContext(GameContext);

  useEffect(() => {
    if (reset) {
      tileRef.current.classList.remove("game-tile--clicked-x");
      tileRef.current.classList.remove("game-tile--unclicked-x");
      tileRef.current.classList.remove("game-tile--clicked-circle");
      tileRef.current.classList.remove("game-tile--unclicked-circle");
    }
  }, [reset])

  useEffect(() => {
    tileRef.current.classList.remove("game-tile--unclicked-x");
    tileRef.current.classList.remove("game-tile--unclicked-circle");
    if (winningMessage) {
      tileRef.current.clicked = false;
      tileRef.current.playerClicked = "";
    } else if (tileRef.current.clicked) {
      tileRef.current.classList.add(`game-tile--clicked-${tileRef.current.playerClicked}`);
    } else {
      tileRef.current.classList.add(`game-tile--unclicked-${player}`)
    }
  }, [player, winningMessage])

  function handleClick() {
    handlePlayerChange(id, player);
    tileRef.current.playerClicked = player;
    tileRef.current.clicked = true;
  }

  return (
    <div onClick={tileRef.current.clicked || winningMessage ? undefined : handleClick} ref={tileRef} className={`game-tile game-tile-${id}`} id={id}></div>
  )
}