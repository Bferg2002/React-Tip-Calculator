import React from 'react'

const TipOption = ({percentage, onSelect}) => {
  return (
    <button onClick={() => onSelect(percentage)}>
        {percentage}%
        </button>
  )
}

export default TipOption
