import React, { useState } from 'react'
import { BackspaceIcon } from "@heroicons/react/24/solid";



export default function HabitList() {
    const [habitList, setHabitList] = useState([])
    const [newItem, setNewItem] = useState({
        title: "",
        status: false,
        color: "",
    });

    const handleKeyPress = (event) => {
        if (event.key === 'Enter') {
          handleAddNewItem(event);
        }
    };

    const handleAddNewItem = (event) => {
        if(newItem.title !== ""){
            let temp = habitList
            temp.push(newItem)
            setHabitList(temp)
            //addHabit(auth.currentUser.uid, newItem)
            event.target.value = ""
            setNewItem({
                title: "",
                status: false,
                color: "",
            })
            //props.setHabits([...temp])
        }
    }

    const handleRemoveItem = (id) => {
        let temp = habitList
        delete temp[id]
        setHabitList([...temp])
    }


    // return Object.keys(props.habits).map((obj) => (
    //     <li key={obj}><HabitListItem {...props.habits[obj]} id={obj} toggleCompletion={props.toggleCompletion}/></li>
    // ))  
    function renderList() {
        return Object.keys(habitList).map((obj) => {
          if (habitList[obj]) {
            return (
              <div key={obj} className="flex flex-row items-center">
                <li>
                  <p className="text-5xl font-semibold">
                    {habitList[obj].title}
                  </p>
                </li>
                {
                  true ?
                  <button key={obj} onClick={() => handleRemoveItem(obj)}>
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

    return (
        <>
            <input 
                id="text-input"
                className='placeholder:text-gray-1 dark:placeholder:text-gray-500 text-5xl font-semibold input-text text-center focus:outline-none border-b-2 bg-transparent border-black-1 dark:border-white-1 placeholder:text-black-3 mb-2'
                type="text"
                placeholder='enter a habit here'
                onKeyDown={handleKeyPress}
                onInput={() => {
                    const input = document.getElementById('text-input');
                    const value = input.value;
                    if (input !== null && value !== undefined){
                        input.style.width = value.length * 0.6 + 1 > 12 ? (value.length * 0.75 + 3) + 'ch' : '16ch';
                    }
                }}      
                onChange={(event) => 
                    setNewItem({
                        title: event.target.value,
                        status: false,
                        color: newItem.color
                    })}
            />
            <ul className="flex flex-col items-center">
                {renderList()}
            </ul>
        </> 
    )
}