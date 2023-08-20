import React, {useState} from 'react'
import HabitGrid from '../components/chart/HabitGrid'
import { logout } from '../lib/firebase'
import ColorPicker from '../components/ColorPicker'

export default function Account() {
    const [mainChartColor, setMainChartColor] = useState('bg-red-1')

    function handleColorChange(index, event){
        setMainChartColor(event.target.value)
    }

    return (
        <div className="flex flex-col m-auto w-[80%] h-screen items-center mt-[100px]">
            <h1>Account</h1>
            <div className="flex flex-row w-full min-h-[50px]">
                <div className="mr-3 px-6 py-4 w-[50%] min-w-[300px] rounded drop-shadow bg-b-secondary dark:bg-db-secondary">
                    <div className="mb-4 flex flex-row items-center">
                        <h3>Habit History</h3>
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
                        <h3 className="mb-4">Settings</h3>
                        <div className="flex flex-row items-center">
                            <p>Main Chart Color:</p>
                            <ColorPicker color={mainChartColor} handleColorChange={handleColorChange}/>
                        </div>
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
                <h3 className="ml-1 mb-2">Workout Chart</h3>
                <HabitGrid/>
            </div>
        </div>
    )
}
