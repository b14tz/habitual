import React from 'react'
import { auth } from "../../lib/firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import { deleteUser } from 'firebase/auth';
import { deleteUserData } from '../../interfaces/userInterface';

export default function DeleteAccountModal({ open, setOpen }) {
    const [user] = useAuthState(auth);

    async function handleDeleteAccount() {
        await deleteUserData(user.uid)
        try {
            await deleteUser(user)
        }
        catch (e) {
            console.error('There was a problem deleting the user from firebase auth')
        }
    }

    return (
        <>
        {
            open?
                <div className="z-[20] fixed flex left-0 top-0 bg-black/50 justify-center items-center w-full h-screen">
                    <div className="flex flex-col max-w-[500px] bg-b-secondary dark:bg-db-secondary p-10 rounded-lg drop-shadow-md w-fit">
                        <h2 className='mb-4'>Delete Account</h2>
                        <p className='mb-4'>Are you sure you want to delete your account? All habit tracking data will be lost.</p>
                        <div className="flex flex-row justify-end">
                            <button onClick={() => setOpen(prev => !prev)} type="button">
                                <p>Cancel</p>
                            </button>
                            <button onClick={handleDeleteAccount} className="ml-4 bg-red-1 text-white drop-shadow-md py-2 px-4 rounded-md">
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