import React, {useRef} from 'react'
import HabitGridCell from './HabitGridCell'
import { generateGridData } from '../../lib/grid'


export default function HabitGrid() {
  const scrollableRef = useRef(null);

  function scrollToRight() {
    if (scrollableRef.current) {
      const scrollableContainer = scrollableRef.current;
      scrollableContainer.scrollLeft = scrollableContainer.scrollWidth - scrollableContainer.clientWidth;
    }
  }

  // Call scrollToRight function whenever you want to scroll to the right.
  scrollToRight();
  
  function renderGrid() {
    let data = generateGridData()
    return data.map((item, index) => (
      <HabitGridCell key={index} {...item}/>
    ))
  }

  return (
    <>
      <div 
      ref={scrollableRef}
      className="flex flex-col flex-wrap h-[200px] overflow-x-scroll relative"
      >
        {renderGrid()}
      </div>
    </>
  )
}
