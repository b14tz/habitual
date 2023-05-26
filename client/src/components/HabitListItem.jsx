import React, { useEffect, useState } from 'react'

export default function HabitListItem(props) {
  const [completionStatus, setCompletionStatus] = useState(props.status);

  const toggleCompleteTask = (event) => {
    props.toggleCompletion(props.id)
    setCompletionStatus(!completionStatus)
    let classes = `rounded-full h-4 w-4 mr-2 `
    event.target.className = completionStatus ? classes + `bg-white-1 dark:bg-black-1 border-2 border-black-1 dark:border-white-1` : classes + `bg-black-1 dark:bg-white-1`
  }

  return (
    <>
      <div className="flex flex-row items-center">
        <button 
          className={'rounded-full h-4 w-4 mr-2 ' + (completionStatus ? 'bg-black-1 dark:bg-white-1 ': 'bg-white-1 dark:bg-black-1 border-2 border-black-1 dark:border-white-1')}
          onClick={toggleCompleteTask}
        />
        <p>{props.title}</p> 
      </div>
    </>
  )
}
