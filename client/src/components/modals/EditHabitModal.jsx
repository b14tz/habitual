import React, { useEffect, useState } from 'react'
import ColorPicker from '../ColorPicker';
import { addHabit, editHabit } from '../../interfaces/userInterface';
import { auth } from "../../lib/firebase";
import { useAuthState } from "react-firebase-hooks/auth";

export default function EditHabitModal({ open, setOpen, setHabits, title, color, goalNumber, goalUnit, i, id }) {
    const [newTitle, setNewTitle] = useState('')
    const [newGoalNumber, setNewGoalNumber] = useState('')
    const [newGoalUnit, setNewGoalUnit] = useState('')
    const [newColor, setNewColor] = useState('bg-red-1')
    const [user] = useAuthState(auth);
    const [newId, setNewId] = useState('')

    useEffect(() => {
        setNewTitle(title)
        setNewGoalNumber(goalNumber)
        setNewGoalUnit(goalUnit)
        setNewColor(color)
        setNewId(id)

    }, [title, color, goalNumber, goalUnit, id])

    function handleColorChange(index, event) {
        setNewColor(event.target.value)
    }

    async function handleSubmit(e) {
        e.preventDefault()
        let update = {
            title: newTitle,
            goalNumber: newGoalNumber,
            goalUnit: newGoalUnit,
            color: newColor
        }
        await editHabit(newId, update)
        setHabits(prev => {
            const updatedHabits = [...prev]
            updatedHabits[i] = { ...updatedHabits[i] }
            updatedHabits[i] = { ...updatedHabits[i], ...update }
            return updatedHabits
        })
        setOpen(false)
    }

    return (
        <>
        {
            open?
                <div className="z-[20] fixed flex left-0 top-0 bg-black/50 justify-center items-center w-full h-screen">
                    <div className="flex flex-col bg-b-secondary dark:bg-db-secondary p-10 rounded-lg drop-shadow-md w-fit">
                        <form onSubmit={handleSubmit}>
                            <h2 className='mb-4'>Edit Habit</h2>
                            <input
                            autoFocus
                            type="text"
                            className="p-2 mb-4 rounded-md shadow-inner bg-b-tertiary dark:bg-db-tertiary w-full"
                            value={newTitle}
                            onChange={(e) => setNewTitle(e.target.value)}
                            placeholder="Title"
                            />

                            <div className="flex flex-row items-center mb-4">
                                <input
                                type="number"
                                className="p-2 rounded-md shadow-inner bg-b-tertiary dark:bg-db-tertiary w-[5ch] mr-4"
                                value={newGoalNumber}
                                onChange={(e) => setNewGoalNumber(e.target.value)}
                                placeholder="45"
                                />

                                <input
                                type="text"
                                className="p-2 rounded-md shadow-inner bg-b-tertiary dark:bg-db-tertiary w-[10ch]"
                                value={newGoalUnit}
                                onChange={(e) => setNewGoalUnit(e.target.value)}
                                placeholder="minutes"
                                />

                                <ColorPicker color={newColor} handleColorChange={handleColorChange}/>
                            </div>
                            <div className="flex flex-row justify-end">
                                <button onClick={() => setOpen(prev => !prev)} type="button">
                                    <p>Cancel</p>
                                </button>
                                <button className="ml-4 bg-purple-1 text-white drop-shadow-md py-2 px-4 rounded-md">
                                    <p>Save</p>
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