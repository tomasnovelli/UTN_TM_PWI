import React from 'react'

const ColorsPalletList = (props) => {

  return (
        <>
          {props.colors.map((color, index) => {
            return <div className='colors-block' key={color + index} style={{ backgroundColor: color }}><span className='color-text'>{color}</span></div>
          })}
        </>
  )
}

export default ColorsPalletList