import React, { useContext } from 'react'
import { GameContext } from './Game'
import ResetButton from './ResetButton';

export default function Modal() {
  const { winningMessage } = useContext(GameContext);

  return (
    <div className="modal__screen">
      <div className="modal">
        <p className="modal__text">{winningMessage.charAt(0).toUpperCase() + winningMessage.substr(1)}</p>
        <ResetButton text="Play Again!" />
      </div>
    </div>
  )
}