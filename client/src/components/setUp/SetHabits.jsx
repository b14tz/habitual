import React, { useState } from 'react'
import { BackspaceIcon } from "@heroicons/react/24/solid";

export default function SetHabits({ habits, setHabits }) {
  const [newItem, setNewItem] = useState({
      title: "",
      status: false,
      color: "",
      goalUnits: "",
      goalNumber: ""
  });

  const handleKeyPress = (event) => {
      if (event.key === 'Enter') {
        handleAddNewItem(event);
      }
  };

  const handleAddNewItem = (event) => {
      if(newItem.title !== ""){
          let temp = habits
          temp.push(newItem)
          setHabits(temp)
          //addHabit(auth.currentUser.uid, newItem)
          event.target.value = ""
          setNewItem({
              title: "",
              status: false,
              color: "",
          })
      }
  }

  const handleRemoveItem = (index) => {
      let temp = habits
      if(index < 0 || index >= temp.length) {
        console.error('index is out of bounds')
      }

      for(let i = index; i < temp.length - 1; i++){
        temp[i] = temp[i + 1]
      }
      
      temp.length--
      setHabits([...temp])
  }

  function renderList() {
      if(habits.length >  0){
        return Object.keys(habits).map((index) => {
          if (habits[index]) {
            return (
              
              <div key={index} className="flex flex-row items-center">
                <h3 className="mr-2">•</h3>
                <li>
                  <h3 className="font-semibold">
                    {habits[index].title}
                  </h3>
                </li>
                {
                  true ?
                  <button key={index} onClick={() => handleRemoveItem(index)}>
                    <BackspaceIcon className="ml-2 h-8 w-8 text-red-2" />
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
            <h3 className="mr-2 text-gray-500">• test</h3>
          </>
        )
      }
      
    }

  return (
      <div className="flex flex-col">
          <h2>Set Habits</h2>
          <input 
              id="text-input"
              className='placeholder:text-gray-1 dark:placeholder:text-gray-500 font-semibold input-text focus:outline-none border-b-2 bg-transparent border-black-1 dark:border-white-1 placeholder:text-black-3 mb-2 w-[25ch]'
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
          <ul className="flex flex-col">
              {renderList()}
          </ul>
      </div> 
  )
}