import React from 'react'
import CounterBtn from './CounterBtn'

const IncreaseBtn = () => {
  return (
    <CounterBtn label="+" handle={() => {console.log("Increase")}} />
  )
}

export default IncreaseBtn