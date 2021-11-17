import React, { useState } from 'react'
import GameTile from './GameTile'

export const GameContext = React.createContext()

export default function Game() {
  const [player, setPlayer] = useState("x")

  const gameContextValue = {
    player,
    handlePlayerChange
  }

  function handlePlayerChange() {
    if (player === "x") {
      setPlayer("circle")
    } else {
      setPlayer("x")
    }
  }

  return (
    <GameContext.Provider value={gameContextValue}>
      <div className="game">
        <GameTile id="0" />
        <GameTile id="1" />
        <GameTile id="2" />
        <GameTile id="3" />
        <GameTile id="4" />
        <GameTile id="5" />
        <GameTile id="6" />
        <GameTile id="7" />
        <GameTile id="8" />
      </div>
    </GameContext.Provider>
  )
}
