import React from 'react'
import HabitList from '../components/HabitList'

export default function Home(props) {
  return (
    <div className="flex w-full h-full justify-center items-center min-h-[70vh]">
        <section className="flex flex-col items-center">
            <h1 className="text-6xl mb-1">Daily Habit Tracker</h1>
            <p className="mb-4">An easy-to-use system to keep you on track</p>
            <HabitList habits={props.habits} setHabits={props.setHabits} toggleCompletion={props.toggleCompletion}/>
        </section>
    </div>
  )
}