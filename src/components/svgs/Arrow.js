import React from 'react'
import ArrowDown from './ArrowDown'
import ArrowUp from './ArrowUp'

const Arrow = ({directionSort}) => {
   return (
      directionSort ? <ArrowDown /> : <ArrowUp />
   )
}

export default Arrow