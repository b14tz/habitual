import React, { useState } from 'react'
import { BackspaceIcon } from "@heroicons/react/24/solid";

export default function SetHabits({ habits, setHabits, habitError, setHabitError }) {
  const [newItem, setNewItem] = useState({
    title: "",
    status: false,
    color: "bg-blue-1",
    goalUnits: "",
    goalNumber: ""
  });

  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      handleAddNewItem(event);
    }
  };

  const handleAddNewItem = (event) => {
    event.preventDefault()
    setHabitError("")
    if(newItem.title !== ""){
      let temp = habits
      temp.push(newItem)
      setHabits(temp)
      event.target.value = ""
      setNewItem({
          title: "",
          status: false,
          color: "bg-blue-1",
      })
    }
  }

  const handleRemoveItem = (index) => {
    let temp = habits
    temp.splice(index, 1);
    setHabits([...temp])
  }

  function renderList() {
      if(habits.length >  0){
        return Object.keys(habits).map((index) => {
          if (habits[index]) {
            return (
              
              <div key={index} className="flex flex-row items-center">
                <p className="mr-2">•</p>
                <li>
                  <p className="font-semibold">
                    {habits[index].title}
                  </p>
                </li>
                {
                  true ?
                  <button type="button" key={index} onClick={() => handleRemoveItem(index)}>
                    <BackspaceIcon className="ml-2 h-8 w-8 text-red-1" />
                  </button>
                  :
                  null
                }
              </div>
            );
          } else {
            return null;
          }
        });
      }
      else {
        return (
          <>
            <p className="mr-2 text-t-secondary dark:text-dt-secondary">• Run</p>
            <p className="mr-2 text-t-secondary dark:text-dt-secondary">• Lift</p>
            <p className="mr-2 text-t-secondary dark:text-dt-secondary">• Read</p>
          </>
        )
      }
      
    }

  return (
      <div className="flex flex-col">
          <h2 className="mb-4">Set Habits</h2>
          <input 
              autoFocus
              id="text-input"
              className='p-2 rounded-md shadow-inner bg-b-tertiary dark:bg-db-tertiary w-[30ch]'
              type="text"
              placeholder='Enter what you want to track here'
              onKeyDown={handleKeyPress}     
              onChange={(event) => 
                setNewItem({
                    title: event.target.value,
                    status: false,
                    color: newItem.color
                })
              }
          />
          {
            habitError?
            <p className="m-2 text-sm text-t-error">{habitError}</p>
            :
            null
          }
          <ul className="flex flex-col m-4">
              {renderList()}
          </ul>
      </div> 
  )
}