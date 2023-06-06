import React, { useState } from 'react'
import HabitListItem from './HabitListItem';
import { addHabit } from '../interfaces/userInterface';
import { auth } from '../lib/firebase';

export default function HabitList(props) {
    const [editorOpen, setEditorOpen] = useState(false)
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
            let temp = props.habits
            temp.push(newItem)
            addHabit(auth.currentUser.uid, newItem)
            event.target.value = ""
            setNewItem({
                title: "",
                status: false,
                color: "",
            })
            props.setHabits([...temp])
        }
    }

    function renderList() {
        return Object.keys(props.habits).map((obj) => (
            <li key={obj}><HabitListItem {...props.habits[obj]} id={obj} toggleCompletion={props.toggleCompletion}/></li>
        ))  
    }

    return (
        <>
            <input 
                id="text-input"
                className='text-center focus:outline-none border-b-2 bg-transparent border-black-1 dark:border-white-1 placeholder:text-black-3 mb-2'
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
            {
                editorOpen?
                <div className="flex items-center justify-center rounded-md bg-white-2 dark:bg-black-2 shadow-xl w-96 h-44 my-4">
                    [Put options for habit tracking here]
                </div>
                :
                null
            }
            <ul>{renderList()}</ul>
        </> 
    )
}
