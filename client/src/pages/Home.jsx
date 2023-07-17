import React from 'react'
import HabitGrid from '../components/chart/HabitGrid'
import CheckList from '../components/dailyProgress/CheckList';
import ProgressCircle from '../components/dailyProgress/ProgressCircle';

export default function Home({loginStatus, setSetUpModal}) {
  return (
    <div className="flex w-full h-full justify-center items-center mt-[100px]">
        <section className="flex flex-col items-center w-full">
          {
            //props.loginStatus?
            true?
            <div className="flex flex-col m-auto w-[80%] h-full justify-center items-center">
                <div className="flex flex-row w-full">
                  <CheckList/>
                  <ProgressCircle/>
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
                onClick={() => setSetUpModal(true)}
              >
                <p>Click Here To Start</p>
              </button>
            </>
          }
        </section>
    </div>
  )
}