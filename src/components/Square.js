import React from 'react'

const Square = ({selectSquare, index, space, key, playGame}) => {

  const handleClick = () => {
    if(playGame){
      selectSquare(index)
    }
    
  } 

  return (
    <div className="square" onClick={()=>handleClick()}>
      {space}
    </div>
  )
}
export default Square
