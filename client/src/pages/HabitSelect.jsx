import React from 'react'
import HabitList from '../components/HabitList'

export default function HabitSelect(props) {
  return (
    <div className="flex w-full h-full justify-center items-center min-h-[100vh]">
        <section className="flex flex-col items-center">
            <h1 className='text-6xl text-center '>What do you want to track?</h1>
            <HabitList habits={props.habits} setHabits={props.setHabits} toggleCompletion={props.toggleCompletion}/>
        </section>
    </div>
  )
}
