import React, { useState } from 'react'
import "../styles/home.css"

const data = [
    {
        title:"hello",
        color:"red"
    },
    {
        title:"test",
        color:"blue"
    },
    {
        title:"bing",
        color:"green"
    }
]

export default function HabitList() {
    const [list, setList] = useState(data);
    const [newItem, setNewItem] = useState({
        title: "",
        color: "",
    });

    const handleAddNewItem = () => {
        if(newItem.title !== ""){

        }
    }

    const renderList = () => {
        return Object.keys(list).map((obj) => {
            <li key={obj}>Testing</li>
            console.log(obj)
        })  
    }


    return (
        <>
            <ul>{renderList()}</ul>
            <input 
                id="text-input"
                className='text-center focus:outline-none border-b-2 bg-black'
                type="text"
                placeholder='enter a habit here'
                onInput={() => {
                    const input = document.getElementById('text-input');
                    const value = input.value;
                    if (input !== null && value !== undefined){
                        input.style.width = value.length * 0.6 + 1 > 12 ? (value.length * 0.7 + 3) + 'ch' : '15ch';
                    }
                }}      
                onChange={(e) => 
                    setNewItem({
                        title : e.target.value,
                        color: newItem.color
                    })}
            />
        </> 
    )
}
