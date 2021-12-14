import React, { useState, useEffect } from 'react';
import GameTile from './GameTile';
import Modal from './Modal';
import ResetButton from './ResetButton';

export const GameContext = React.createContext();

export default function Game() {
  const [player, setPlayer] = useState("x");
  const [gameState, setGameState] = useState([" ", " ", " ", " ", " ", " ", " ", " ", " "]);
  const [winningMessage, setWinningMessage] = useState(null);
  const [reset, setReset] = useState(false);

  const gameContextValue = {
    gameState,
    handlePlayerChange,
    handleReset,
    player,
    reset,
    winningMessage
  }

  useEffect(() => {
    if (reset) {
      setReset(false);
    }

    const winningStates = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6]
    ]

    const checkForWin = () => {
      winningStates.forEach(stateArray => {
        if (gameState[stateArray[0]] === " ") { return }
        else if (
          gameState[stateArray[0]] === gameState[stateArray[1]] &&
          gameState[stateArray[0]] === gameState[stateArray[2]]
        ) {
          setWinningMessage(`${gameState[stateArray[0]]} has won!`);
        }
        else if (!gameState.includes(" ") && !winningMessage) { setWinningMessage("Draw!"); }
      })
    };
    checkForWin();
  }, [gameState, player, reset, winningMessage]);

  function handleReset() {
    setReset(true);
    setWinningMessage(null);
    setGameState([" ", " ", " ", " ", " ", " ", " ", " ", " "]);
    setPlayer("x");
  }

  function handlePlayerChange(index, currentPlayer) {
    let newArray = [...gameState]
    newArray[index] = currentPlayer;
    setGameState(newArray);
    if (player === "x") {
      setPlayer("circle");
    } else {
      setPlayer("x");
    }
  };

  return (
    <GameContext.Provider value={gameContextValue}>
      <div className="game">
        {winningMessage && <Modal message />}
        <div className="game__canvas">
          {gameState.map((state, index) => {
            return <GameTile key={index} id={index.toString()} />
          })}
        </div>
        <ResetButton text="Restart" />
      </div>
    </GameContext.Provider>
  )
}
