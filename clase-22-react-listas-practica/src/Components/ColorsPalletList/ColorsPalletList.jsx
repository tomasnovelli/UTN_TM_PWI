import React from 'react'
import './ColorsPalletStyle.css'


const ColorsPalletList = (props) => {

  return (
        <>
          {props.colors.map((color) => {
            return <div className='colors-block' style={{ backgroundColor: color }}><span className='color-text'>{color}</span></div>
          })}
        </>
  )
}

export default ColorsPalletList
