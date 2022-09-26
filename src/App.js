import React, { useState } from 'react'
import Square from './components/Square'
import './App.css'

const App = () => {
  const [squares, setSquares] = useState(Array(9).fill(null))
  const [playerOneTurn, setPlayerOneTurn] = useState(true)

  // every click triggers onclick which triggers the block of code below that 
  // extends to line 23
  const selectSquare = (index) => {
    // ... is spread operator
    const updateSquare = [...squares]
    if(squares[index] === null) {
      if(playerOneTurn){
        updateSquare[index] = "X"
        setPlayerOneTurn(false)
      } else {
        updateSquare[index] = "O"
        setPlayerOneTurn(true)
      }
    }
   
    
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