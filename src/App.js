import React, { useState } from 'react'
import Square from './components/Square'
import './App.css'

const App = () => {
  const [squares, setSquares] = useState(Array(9).fill(null))
  const selectSquare = (index) => {
    const updateSquare = [...squares]
    updateSquare[index] = "x"
    setSquares(updateSquare)
  }
  return (
    <>
      <h1>Tic Tac Toe</h1>
      <div className="board" >
        {squares.map((space, index) => {
          return (
            <Square selectSquare={selectSquare} index={index} space={space} key={index} />
          )
        })}
      </div>

    </>
  )
}


export default App