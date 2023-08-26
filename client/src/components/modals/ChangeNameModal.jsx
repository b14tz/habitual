import React, { useEffect, useState } from 'react'
import ColorPicker from '../ColorPicker';
import { addHabit, editHabit, editUserData } from '../../interfaces/userInterface';
import { auth } from "../../lib/firebase";
import { useAuthState } from "react-firebase-hooks/auth";

export default function ChangeNameModal({ open, setOpen, name, setName }) {
    const [user] = useAuthState(auth)
    const [newName, setNewName] = useState('')

    async function handleSubmit(e) {
        e.preventDefault()
        await editUserData(user.uid, { name: newName })
        setName(newName)
        setOpen(false)
    }

    useEffect(() => {
        setNewName(name)
    }, [name])

    return (
        <>
        {
            open?
                <div className="z-[20] fixed flex left-0 top-0 bg-black/50 justify-center items-center w-full h-screen">
                    <div className="flex flex-col bg-b-secondary dark:bg-db-secondary p-10 rounded-lg drop-shadow-md w-fit">
                        <form onSubmit={handleSubmit}>
                            <h2 className='mb-4'>Change Display Name</h2>
                            <input
                            autoFocus
                            type="Display Name"
                            className="p-2 mb-4 rounded-md shadow-inner bg-b-tertiary dark:bg-db-tertiary w-full"
                            value={newName}
                            onChange={(e) => setNewName(e.target.value)}
                            placeholder="Title"
                            />
                            <div className="flex flex-row justify-end">
                                <button onClick={() => setOpen(prev => !prev)} type="button">
                                    <p>Cancel</p>
                                </button>
                                <button className="ml-4 bg-purple-1 text-white drop-shadow-md py-2 px-4 rounded-md">
                                    <p>Change</p>
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