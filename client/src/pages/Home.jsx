import React from 'react'
import HabitGrid from '../components/HabitGrid'

export default function Home(props) {
  return (
    <div className="flex w-full h-full justify-center items-center min-h-[100vh]">
        <section className="flex flex-col items-center">
            <h1 className="text-6xl mb-1">Daily Habit Tracker</h1>
            <p className="mb-4">An easy-to-use system to keep you on track</p>
            <button 
              className="mb-4 py-1 px-4 rounded-md bg-white-2 dark:bg-black-2 drop-shadow"
              onClick={() => props.setAuthModal(true)}
            >
              <p>Click Here To Start</p>
            </button>
            <HabitGrid/>
        </section>
    </div>
  )
}