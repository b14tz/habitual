import React, { useState } from 'react'
import ColorPicker from '../ColorPicker';
import { deleteHabit, editHabit } from '../../interfaces/userInterface';
import { auth } from "../../lib/firebase";
import { useAuthState } from "react-firebase-hooks/auth";

export default function DeleteHabitModal({ open, setOpen, i, id, setHabits }) {
    const [user] = useAuthState(auth);

    async function handleRetireHabit() {
        await editHabit(id, { active: false })
        setHabits(prev => {
            prev.splice(i, 1)
            return [...prev]   
        })
        setOpen(false)
    }

    async function handleDeleteHabit() {
        await deleteHabit(id)
        setHabits(prev => {
            prev.splice(i, 1)
            return [...prev]   
        })
        setOpen(false)
    }

    return (
        <>
        {
            open?
                <div className="z-[20] fixed flex left-0 top-0 bg-black/50 justify-center items-center w-full h-screen">
                    <div className="flex flex-col max-w-[500px] bg-b-secondary dark:bg-db-secondary p-10 rounded-lg drop-shadow-md w-fit">
                        <h2 className='mb-4'>Delete Habit</h2>
                        <p className='mb-4'>Are you sure you want to delete your habit? If so, select delete. If you only want to retire your habit, select retire. You will still be able to view retired habits in your accounts history.</p>
                        <div className="flex flex-row justify-end">
                            <button onClick={() => setOpen(prev => !prev)} type="button">
                                <p>Cancel</p>
                            </button>
                            <button onClick={handleRetireHabit} className="ml-4 bg-b-primary dark:bg-db-tertiary text-t-primary dark:text-dt-primary drop-shadow-md py-2 px-4 rounded-md">
                                <p>Retire</p>
                            </button>
                            <button onClick={handleDeleteHabit} className="ml-4 bg-red-1 text-white drop-shadow-md py-2 px-4 rounded-md">
                                <p>Delete</p>
                            </button>
                        </div>
                    </div>
                
                </div>
                :
                null
        }
        </>
    )
    }