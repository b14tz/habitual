import React from 'react'
import HabitGridCell from './HabitGridCell'

export default function HabitGrid() {
  
  function renderGrid() {
    let loopItems = [ 0.2, 0.4, 0.5, 0.8, 1.0, 0.6, 1.0, 0.2, 0.4, 0.5, 0.8, 0.8, 1.0, 1.0, 0.2, 0.4, 0.5, 0.8, 1.0, 0.1, 1.0, 0.2, 0.4, 0.5, 0.8, 1.0, 1.0, 1.0, 0.2, 0.4, 
                      0.2, 0.4, 0.5, 0.8, 0.4, 0.5, 1.0, 0.2, 0.4, 0.5, 0.8, 1.0, 1.0, 1.0, 0.2, 0.4, 0.5, 0.8, 1.0, 1.0, 1.0, 0.2, 0.9, 0.5, 0.8, 1.0, 1.0, 1.0, 0.2, 0.4, 1.0, 0.2, 0.4  ]
    return loopItems.map((item, index) => (
      <HabitGridCell key={index} progress={item}/>
    ))
  }

  return (
    <>
      <div className="mt-8 mx-10 max-w-[600px] flex flex-row flex-wrap">
        {renderGrid()}
      </div>
    </>
  )
}
