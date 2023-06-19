import React from 'react'
import HabitGrid from '../components/HabitGrid'

export default function Account() {
  return (
    <div className="flex flex-col m-auto w-[80%] h-full justify-center items-center min-h-[100vh]">
        <div className="flex flex-row w-full min-h-[50px]">
            <div className="mr-3 px-6 py-4 w-[50%] min-w-[300px] rounded drop-shadow bg-white-2 dark:bg-black-2">
                <div className="mb-4 flex flex-row items-center">
                    <p>Habit History</p>
                    <select className='px-2 py-1 ml-8 rounded bg-white-1 dark:bg-black-1'>
                        <option>
                            <p>Option 1</p>
                        </option>
                        <option>
                            <p>Option 2</p>
                        </option>
                    </select>
                </div>
                <p>Start Date: </p>
                <p>Made Progress: </p>
                <p>Reached Goal: </p>
                <p>End Date: </p>
            </div>
            <div className="ml-3 pb-4 w-[50%] min-w-[300px] rounded drop-shadow bg-white-2 dark:bg-black-2">
                <div className='flex flex-col pt-4 px-6'>
                    <p className="mb-4">Settings</p>
                    <p>Main Chart Color:</p>
                    <p>Change Display Name</p>
                    <p>Delete Account History</p>
                </div>
            </div>
        </div>

        <div className="px-6 py-4 mt-6 w-full rounded drop-shadow bg-white-2 dark:bg-black-2">
            <p>Chart</p>
            <HabitGrid/>
        </div>
    </div>
  )
}
