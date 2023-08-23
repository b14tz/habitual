import React from 'react'
import HabitGridCell from './HabitGridCell'
import { generateGridData } from '../../lib/grid'

export default function HabitGrid() {
  
  function renderGrid() {
    let data = generateGridData()
    return data.map((item, index) => (
      <HabitGridCell key={index} {...item} />
    ))
  }

  return (
    <>
      <div className="flex flex-row flex-wrap">
        {renderGrid()}
      </div>
    </>
  )
}
