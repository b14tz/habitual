import React from 'react'
import HabitGridCell from './HabitGridCell'

export default function HabitGrid() {
  
  function renderGrid() {
    let loopItems = [0.2, 0.4, 0.5, 0.8, 1.0, 1.0, 1.0, 0.2, 0.4, 0.5, 0.8, 1.0, 1.0, 1.0, 0.2, 0.4, 0.5, 0.8, 1.0, 1.0, 1.0, 0.2, 0.4, 0.5, 0.8, 1.0, 1.0, 1.0]
    return loopItems.map((item, index) => (
      <HabitGridCell key={index} progress={item}/>
    ))
  }

  return (
    <>
      <div className="mt-8 max-w-[80%] flex flex-row flex-wrap">
        {renderGrid()}
      </div>
    </>
  )
}
