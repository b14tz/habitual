import React from 'react'
import HabitList from '../components/setUp/SetHabits'
import { ArrowLongRightIcon } from "@heroicons/react/20/solid";


export default function HabitSelect(props) {
  return (
    <div className="flex w-full h-full justify-center items-center min-h-[100vh]">
        <section className="flex flex-col items-center">
            <h1 className='text-6xl text-center '>What do you want to track?</h1>
            {/* <HabitList habits={props.habits} setHabits={props.setHabits} toggleCompletion={props.toggleCompletion}/> */}
            <HabitList/>
            <button>
                <ArrowLongRightIcon className="h-14 w-14 text-black-1 dark:text-white-1" />
            </button>
        </section>
    </div>
  )
}
