import React, { useState } from 'react'
import HabitListItem from './HabitListItem';
import { addHabit } from '../interfaces/userInterface';
import { auth } from '../lib/firebase';

export default function HabitList(props) {
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

    function renderList() {
        // return Object.keys(props.habits).map((obj) => (
        //     <li key={obj}><HabitListItem {...props.habits[obj]} id={obj} toggleCompletion={props.toggleCompletion}/></li>
        // ))  
        return Object.keys(habitList).map((obj) => (
            <li key={obj}>
                <p className="text-5xl font-semibold">
                    {habitList[obj].title}
                </p>
            </li>
        ))  
    }

    return (
        <>
            <input 
                id="text-input"
                className='placeholder:text-gray-1 text-5xl font-semibold input-text text-center focus:outline-none border-b-2 bg-transparent border-black-1 dark:border-white-1 placeholder:text-black-3 mb-2'
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
            <ul className="text-center">
                {renderList()}
            </ul>
        </> 
    )
}