import React from 'react'
import HabitGrid from '../components/chart/HabitGrid'
import CheckList from '../components/dailyProgress/CheckList';
import ProgressCircle from '../components/dailyProgress/ProgressCircle';

export default function Home() {
  return (
    <div className="flex w-full h-screen items-center mt-[100px]">
        <div className="flex flex-col m-auto w-[80%] h-full items-center">
          <div className="flex flex-row w-full">
            <CheckList/>
            <ProgressCircle/>
          </div>
          <div className="px-6 py-4 mt-6 w-full rounded drop-shadow bg-white-2 dark:bg-black-2">
              <p className="ml-1 mb-2">Chart</p>
              <HabitGrid/>
          </div>
        </div>
    </div>
  )
}