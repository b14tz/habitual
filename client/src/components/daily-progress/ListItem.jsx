import React, { useState } from 'react'
import { EllipsisHorizontalIcon } from "@heroicons/react/24/outline";


export default function ListItem({ id, title, color, status, toggleCompletion }) {
  const [completionStatus, setCompletionStatus] = useState(status);
  const [popup, setPopup] = useState(false)

  const divStyle = {
    backgroundColor: color
  }

  const toggleCompleteTask = (event) => {
    toggleCompletion(id)
    setCompletionStatus(!completionStatus)
    let classes = `rounded-full h-4 w-4 mr-2 `
    event.target.className = completionStatus ? classes + `bg-b-primary dark:bg-db-primary border-2 border-t-primary dark:border-dt-primary` : classes + `bg-t-primary dark:bg-dt-primary`
  }

  const handleClickOutside = () => {
    console.log("is the menu open? ", popup)

    // if the button or the popup wasn't hit, close it
    setPopup(false)
  }

  return (
    <>

        <div className="flex flex-row relative justify-between w-full drop-shadow px-2 rounded-md my-2" style={divStyle}>
          <div className="flex flex-row items-center py-1">
            <button
              id="button" 
              className={'rounded-full h-4 w-4 mr-2' + (completionStatus ? 'bg-t-primary dark:bg-dt-primary ' : 'bg-t-secondary border-2 border-t-primary dark:border-dt-primary')}
              onClick={toggleCompleteTask}
            />
            <p className='ml-2 mr-4 text-t-primary dark:text-dt-primary'>{title}</p> 
          </div>

          <button onClick={() => setPopup(true)}>
            <EllipsisHorizontalIcon className="h-6 w-6 text-t-primary dark:text-dt-primary" />
          </button>
          {
            popup?
            <div className="absolute left-[101%] px-2 bg-b-secondary drop-shadow dark:bg-db-secondary rounded-md">
              <p className="text-t-primary dark:text-dt-primary">Edit</p>
              <p className="text-t-primary dark:text-dt-primary">Delete</p>
            </div>
            :
            null
          }
        </div>


    </>
  )
}