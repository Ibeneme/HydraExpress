import React from 'react'

const CategoriesForProps = (props) => {
  return (
    <div
    style={{
        display:'flex',
        justifyContent:'flex-start',
        alignItems:'centre'
    }}>
        <span
         style={{
            marginTop:'0.3em'
        }}>
            {props.icon}
        </span>
        <h6>{props.name}</h6>
        </div>
  )
}

export default CategoriesForProps