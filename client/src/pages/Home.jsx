import React from 'react'
import HabitList from '../components/HabitList'

export default function Home() {
  return (
    <div className="flex w-screen h-screen justify-center items-center">
        <section className="flex flex-col items-center">
            <h1 className="text-6xl">Daily Habit Tracker</h1>
            <p>An easy-to-use system to keep you on track</p>
            <HabitList/>
        </section>
    </div>
  )
}
