import React from 'react'
import "./CounterBtn.css"

const CounterBtn = ({label, handle}) => {
  return (
    <button className='counter-btn' onClick={handle}>{label}</button>
  )
}

export default CounterBtn