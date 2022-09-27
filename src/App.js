import React, { useState } from 'react'
import Square from './components/Square'
import './App.css'
import Choices from './components/Choices'

const App = () => {
  const [squares, setSquares] = useState(Array(9).fill(null))
  const [playerOneTurn, setPlayerOneTurn] = useState(true)
  const [playGame, setPlayGame] = useState(true)
  const [message, setMessage] = useState("")
  const [playerMessage, setPlayerMessage] = useState(<h3>player one's turn</h3>)
  const [marker, setMarker] = useState(["X", "O", "❌", "⭕️"])


const selectMarker = (index) => {
alert("marker test")

}

  // every click triggers onclick which triggers the block of code below that 
  // extends to line 23
  const selectSquare = (index) => {
    // ... is spread operator
    if (squares[index] === null) {
      const updateSquare = [...squares]
      if (playerOneTurn) {
        updateSquare[index] = "X"
        setPlayerMessage(<h3>player two's turn</h3>)
        setPlayerOneTurn(false)
      } else {
        updateSquare[index] = "O"
        setPlayerOneTurn(true)
        setPlayerMessage(<h3>player one's turn</h3>)
      }
      setSquares(updateSquare)
    }
    
  }

  function calculateWinner(squares) {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
        return squares[a];
      }
    }
    return null;
  }

if(playGame){
  if(calculateWinner(squares) === "X") {
    setMessage(<h1 className="message" >player one won</h1>)
    setPlayGame(false)
  }  else if(calculateWinner(squares) === "O"){
  setMessage(<h1 className="message" >player two won</h1>)
  setPlayGame(false)
  // if indexOf cant find null (its value its looking for) then it will just trigger the message
  } else if (squares.indexOf(null) === -1 ) {
    setMessage(<h1 className="message" >ran out of turns</h1>)
    setPlayGame(false)  
  }
} 

const reset = () => {
setSquares(Array(9).fill(null))
setPlayerOneTurn(true)
setPlayGame(true)
setMessage("")

}

  return (
    <div className="app">
      {/* app surrounds all the return so basically all the content that is shown */}
      <h1>Tic Tac Toe</h1>
      

      {playerMessage}
    <div className="choiceContainer">
      {marker.map((space, index) => {
          return (
            <Choices marker={selectMarker} index={index} space={space} key={index}  />
          )
        })}
        </div>
      <div className="board" >
      {message}
        {squares.map((space, index) => {
          return (
            <Square selectSquare={selectSquare} index={index} space={space} key={index} playGame={playGame} />
          )
        })}
      </div>
      

      <button className="btn" onClick={reset}> restart game </button>

    </div>
  )
}


export default App