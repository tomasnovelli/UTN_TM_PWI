import React from 'react'

const ColorsPalletList = (props) => {
  return (
    <div>
      <span>{props.colors.map((color) => {
        return <div style={{backgroundColor: color}}>{color}</div>
      })}</span>
    </div>
  )
}

export default ColorsPalletList
