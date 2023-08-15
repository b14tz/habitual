import React from 'react'
import HabitGrid from '../components/chart/HabitGrid'
import CheckList from '../components/dailyProgress/CheckList';
import ProgressCircle from '../components/dailyProgress/ProgressCircle';

export default function Home() {
  return (
    <div className="flex flex-col m-auto w-[80%] items-center mt-[100px] mb-20">
      <h1>Dashboard</h1>
      <div className="flex flex-row w-full">
        <CheckList/>
        <ProgressCircle/>
      </div>
      <div className="px-6 py-4 mt-6 w-full rounded drop-shadow bg-b-secondary dark:bg-db-secondary">
          <h3 className="ml-1 mb-2">Chart</h3>
          <HabitGrid/>
      </div>
    </div>

  )
}