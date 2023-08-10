import React from 'react'
import { ArrowLongRightIcon } from "@heroicons/react/20/solid";
import SetHabits from '../components/setUp/SetHabits'

export default function Setup() {
  return (
    <div className="flex w-full h-full justify-center items-center min-h-[100vh]">
        <section className="flex flex-col items-center">
            <h1 className='text-6xl text-center '>What do you want to track?</h1>
            <SetHabits/>
            <button>
                <ArrowLongRightIcon className="h-14 w-14 text-black-1 dark:text-white-1" />
            </button>
        </section>
    </div>
  )
}
