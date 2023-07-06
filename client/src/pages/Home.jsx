import React from 'react'
import HabitGrid from '../components/HabitGrid'
import HabitListItem from '../components/HabitListItem'

export default function Home(props) {
  return (
    <div className="flex w-full h-full justify-center items-center mt-[100px]">
        <section className="flex flex-col items-center w-full">
          {
            //props.loginStatus?
            true?
            <div className="flex flex-col m-auto w-[80%] h-full justify-center items-center">
                <div className="flex flex-row w-full">
                  <div className="flex flex-col mr-3 w-full">
                    <p className='ml-2 text-3xl'>Marshall's Tasks For Today, July 5th</p>
                    <HabitListItem title="Workout" color="#FF8989"/>
                    <HabitListItem title="Read" color='#8AD592'/>
                    <HabitListItem title="Stretch" color='#71A9FE'/>
                    <button>
                      <div className="flex justify-between w-full dark:bg-black-2 bg-white-2 drop-shadow px-2 rounded-md my-2">
                        <p className="m-auto py-1">+</p>
                      </div>
                    </button>
                  </div>

                  <div className="ml-3 p-6 min-w-[280px] rounded drop-shadow bg-white-2 dark:bg-black-2">
                    <div className="flex flex-col rounded-full h-full aspect-square bg-white-1 shadow-inner dark:bg-black-1 justify-center items-center">
                      <p className="text-7xl">1/3</p>
                      <p>Tasks Done</p>
                    </div>
                  </div>
              </div>

              <div className="px-6 py-4 mt-6 w-full rounded drop-shadow bg-white-2 dark:bg-black-2">
                  <p className="ml-1 mb-2">Chart</p>
                  <HabitGrid/>
              </div>
            </div>
            :
            <>
              <h1 className="text-6xl mb-2">Daily Habit Tracker</h1>
              <button 
                className="py-1 px-4 rounded-md bg-white-2 dark:bg-black-2 drop-shadow"
                onClick={() => props.setAuthModal(true)}
              >
                <p>Click Here To Start</p>
              </button>
            </>
          }
        </section>
    </div>
  )
}