import React, { useState } from 'react'
import { EllipsisHorizontalIcon } from "@heroicons/react/24/outline";
import { useOutsideClick } from '../hooks/useOutsideClick';


export default function HabitListItem(props) {
  const [completionStatus, setCompletionStatus] = useState(props.status);
  const [popup, setPopup] = useState(false)

  const divStyle = {
    backgroundColor: props.color
  }

  const toggleCompleteTask = (event) => {
    props.toggleCompletion(props.id)
    setCompletionStatus(!completionStatus)
    let classes = `rounded-full h-4 w-4 mr-2 `
    event.target.className = completionStatus ? classes + `bg-white-1 dark:bg-black-1 border-2 border-black-1 dark:border-white-1` : classes + `bg-black-1 dark:bg-white-1`
  }

  const handleClickOutside = () => {
    console.log("is the menu open? ", popup)

    // if the button or the popup wasn't hit, close it
    setPopup(false)
  }

  const ref = useOutsideClick(handleClickOutside);

  return (
    <>

        <div className="flex flex-row relative justify-between w-full drop-shadow px-2 rounded-md my-2" style={divStyle}>
          <div className="flex flex-row items-center py-1">
            <button
              id="button" 
              className={'rounded-full h-4 w-4 mr-2' + (completionStatus ? 'bg-black-1 dark:bg-white-1 ' : 'bg-white-2 border-2 border-black-1 dark:border-white-1')}
              onClick={toggleCompleteTask}
            />
            <p className='ml-2 mr-4'>{props.title}</p> 
          </div>

          <button onClick={() => setPopup(true)}>
            <EllipsisHorizontalIcon className="h-6 w-6 text-black-1 dark:text-white-1" />
          </button>
          {
            popup?
            <div 
              ref={ref}
              className="absolute left-[101%] px-2 bg-white-2 drop-shadow dark:bg-black-2 rounded-md"
            >
              <p className="text-black-1 dark:text-white-1">Edit</p>
              <p className="text-black-1 dark:text-white-1">Delete</p>
            </div>
            :
            null
          }
        </div>


    </>
  )
}