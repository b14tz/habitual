import React, { useState } from 'react'
import ColorPicker from '../ColorPicker';
import { addHabit } from '../../interfaces/userInterface';
import { auth } from "../../lib/firebase";
import { useAuthState } from "react-firebase-hooks/auth";

export default function AddHabitModal({ open, setOpen }) {
    const [title, setTitle] = useState('')
    const [goalNumber, setGoalNumber] = useState('')
    const [goalUnit, setGoalUnit] = useState('')
    const [color, setColor] = useState('bg-red-1')
    const [user] = useAuthState(auth);

    function handleColorChange(index, event) {
        setColor(event.target.value)
    }

    async function handleSubmit(e) {
        e.preventDefault()
        console.log(title, goalUnit, goalNumber, color)
        await addHabit(user.uid, title, goalUnit, goalNumber, color)
    }

    return (
        <>
        {
            open?
                <div className="z-[20] fixed flex left-0 top-0 bg-black/50 justify-center items-center w-full h-screen">
                    <div className="flex flex-col bg-b-secondary dark:bg-db-secondary p-10 rounded-lg drop-shadow-md w-fit">
                        <form onSubmit={handleSubmit}>
                            <h2 className='mb-4'>Add Habit</h2>
                            <input
                            autoFocus
                            type="text"
                            className="p-2 mb-4 rounded-md shadow-inner bg-b-tertiary dark:bg-db-tertiary w-full"
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                            placeholder="Title"
                            />

                            <div className="flex flex-row items-center mb-4">
                                <input
                                type="number"
                                className="p-2 rounded-md shadow-inner bg-b-tertiary dark:bg-db-tertiary w-[5ch] mr-4"
                                value={goalNumber}
                                onChange={(e) => setGoalNumber(e.target.value)}
                                placeholder="45"
                                />

                                <input
                                type="text"
                                className="p-2 rounded-md shadow-inner bg-b-tertiary dark:bg-db-tertiary w-[10ch]"
                                value={goalUnit}
                                onChange={(e) => setGoalUnit(e.target.value)}
                                placeholder="minutes"
                                />

                                <ColorPicker color={color} handleColorChange={handleColorChange}/>
                            </div>
                            <div className="flex flex-row justify-end">
                                <button onClick={() => setOpen(prev => !prev)} type="button">
                                    <p>Cancel</p>
                                </button>
                                <button className="ml-4 bg-purple-1 text-white drop-shadow-md py-2 px-4 rounded-md">
                                    <p>Add</p>
                                </button>
                            </div>
                        </form>
                    </div>
                
                </div>
                :
                null
        }
        </>
    )
    }