import React, { useContext } from 'react'
import { GameContext } from './Game'

export default function Modal() {
  const { handleReset, winningMessage } = useContext(GameContext);

  return (
    <div className="modal__screen">
      <div className="modal">
        <p className="modal__text">{winningMessage.charAt(0).toUpperCase() + winningMessage.substr(1)}</p>
        <button className="modal__button" onClick={handleReset}>Play again!</button>
      </div>
    </div>
  )
}