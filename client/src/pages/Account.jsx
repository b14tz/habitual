import React from 'react'
import HabitGrid from '../components/chart/HabitGrid'
import { logout } from '../lib/firebase'

export default function Account() {
    return (
        <div className="flex flex-col m-auto w-[80%] h-screen items-center mt-[100px]">
            <div className="flex flex-row w-full min-h-[50px]">
                <div className="mr-3 px-6 py-4 w-[50%] min-w-[300px] rounded drop-shadow bg-b-secondary dark:bg-db-secondary">
                    <div className="mb-4 flex flex-row items-center">
                        <p>Habit History</p>
                        <select className='px-2 py-1 ml-8 rounded-lg bg-b-tertiary dark:bg-db-tertiary'>
                            <option>
                                Workout
                            </option>
                            <option>
                                Read
                            </option>
                            <option>
                                Stretch
                            </option>
                        </select>
                    </div>
                    <p>Start Date: </p>
                    <p>Made Progress: </p>
                    <p>Reached Goal: </p>
                    <p>End Date: </p>
                </div>
                <div className="ml-3 pb-4 w-[50%] min-w-[300px] rounded drop-shadow bg-b-secondary dark:bg-db-secondary">
                    <div className='flex flex-col pt-4 px-6'>
                        <p className="mb-4">Settings</p>
                        <p>Main Chart Color:</p>
                        <p>Change Display Name</p>
                        <p>Delete Account History</p>
                        <button 
                            className="w-fit"
                            onClick={() => {logout()}}
                        >
                            <p>Logout</p>
                        </button>
                    </div>
                </div>
            </div>

            <div className="px-6 py-4 mt-6 w-full rounded drop-shadow bg-b-secondary dark:bg-db-secondary">
                <p className="ml-1 mb-2">Workout Chart</p>
                <HabitGrid/>
            </div>
        </div>
    )
}
