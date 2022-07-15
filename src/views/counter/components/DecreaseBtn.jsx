import React from 'react'
import CounterBtn from './CounterBtn'

const DecreaseBtn = () => {
  return (
    <CounterBtn label="-" handle={() => {console.log('Decrease')}} />
  )
}

export default DecreaseBtn