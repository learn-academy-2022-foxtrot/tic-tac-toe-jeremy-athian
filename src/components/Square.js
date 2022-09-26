import React from 'react'

const Square = ({selectSquare, index, space, key}) => {
  const handleClick = () => {
    selectSquare(index)
  } 
  return (
    <div className="square" onClick={()=>handleClick()}>
      {space}
    </div>
  )
}
export default Square
