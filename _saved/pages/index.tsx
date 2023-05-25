import HabitList from '@/components/HabitList'
import React from 'react'
type Props = {}

export default function Index({}: Props) {
  return (
    <>
        <div className="flex w-screen h-screen justify-center items-center">
            <section className="flex flex-col items-center">
                <h1>Daily Habit Tracker</h1>
                <p>An easy-to-use system to keep you on track</p>
                <HabitList/>
            </section>
        </div>
    </>
  )
}