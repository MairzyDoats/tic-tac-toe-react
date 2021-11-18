import React, { useContext } from 'react'
import { GameContext } from './Game'

export default function ResetButton({ text }) {
  const { handleReset, reset } = useContext(GameContext)
  return (
    <button className="reset__button" onClick={handleReset}>{text}</button>
  )
}
