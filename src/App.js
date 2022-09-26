import React, { useState } from 'react'
import Square from './components/Square'
import './App.css'

const App = () => {
  const [squares, setSquares] = useState(Array(9).fill(null))
  const [playerOneTurn, setPlayerOneTurn] = useState(true)
  const [playGame, setPlayGame] = useState(true)
  const [message, setMessage] = useState("")




  // every click triggers onclick which triggers the block of code below that 
  // extends to line 23
  const selectSquare = (index) => {
    // ... is spread operator
    if (squares[index] === null) {
      const updateSquare = [...squares]
      if (playerOneTurn) {
        updateSquare[index] = "X"
        checkScore(index)
        setPlayerOneTurn(false)
      } else {
        updateSquare[index] = "O"
        setPlayerOneTurn(true)
        checkScore()
      }
      setSquares(updateSquare)
    }
    
  }

  const checkScore = (index) => {
    alert(squares[index])
    if (squares[0] === "X" && squares[1] === "X" && squares[2] === "X") {
      setMessage(<h1> you won</h1>)
      alert("top")
      setPlayGame(false)
    } else if (squares[3] === "X" && squares[4] === "X" && squares[5] === "X") {
      setMessage(<h1>you won</h1>)
      setPlayGame(false)
    } else if (squares[6] === "X" && squares[7] === "X" && squares[8] === "X") {
      setMessage(<h1>you won</h1>)
      setPlayGame(false)
    } else if (squares[6] === "X" && squares[4] === "X" && squares[2] === "X") {
      setMessage(<h1>you won</h1>)
      setPlayGame(false)
    } else if (squares[0] === "X" && squares[4] === "X" && squares[8] === "X") {
      setMessage(<h1>you won</h1>)
      setPlayGame(false)
    } else if (squares[0] === "X" && squares[3] === "X" && squares[6] === "X") {
      setMessage(<h1>you won</h1>)
      setPlayGame(false)
    } else if (squares[1] === "X" && squares[4] === "X" && squares[7] === "X") {
      setMessage(<h1>you won</h1>)
      setPlayGame(false)
    } else if (squares[2] === "X" && squares[5] === "X" && squares[8] === "X") {
      setMessage(<h1>you won</h1>)
      setPlayGame(false)
    }

    if (squares[0] === "O" && squares[1] === "O" && squares[2] === "O") {
      setMessage(<h1>you won</h1>)
      setPlayGame(false)
    } else if (squares[3] === "O" && squares[4] === "O" && squares[5] === "O") {
      setMessage(<h1>you won</h1>)
      setPlayGame(false)
    } else if (squares[6] === "O" && squares[7] === "O" && squares[8] === "O") {
      setMessage(<h1>you won</h1>)
      setPlayGame(false)
    } else if (squares[6] === "O" && squares[4] === "O" && squares[2] === "O") {
      setMessage(<h1>you won</h1>)
      setPlayGame(false)
    } else if (squares[0] === "O" && squares[4] === "O" && squares[8] === "O") {
      setMessage(<h1>you won</h1>)
      setPlayGame(false)
    } else if (squares[0] === "O" && squares[3] === "O" && squares[6] === "O") {
      setMessage(<h1>you won</h1>)
      setPlayGame(false)
    } else if (squares[1] === "O" && squares[4] === "O" && squares[7] === "O") {
      setMessage(<h1>you won</h1>)
      setPlayGame(false)
    } else if (squares[2] === "O" && squares[5] === "O" && squares[8] === "O") {
      setMessage(<h1>you won</h1>)
      setPlayGame(false)
    }
  }



  return (
    <>
      <h1>Tic Tac Toe</h1>
      {message}
      <div className="board" >
        {squares.map((space, index) => {
          return (
            <Square selectSquare={selectSquare} index={index} space={space} key={index} playGame={playGame} />
          )
        })}
      </div>

    </>
  )
}


export default App