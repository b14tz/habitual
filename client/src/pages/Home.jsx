import React from 'react'
import HabitGrid from '../components/chart/HabitGrid'
import CheckList from '../components/daily-progress/CheckList';
import ProgressCircle from '../components/daily-progress/ProgressCircle';

export default function Home({habits, setHabits, name, toggleCompletion}) {
  return (
    <div className="flex flex-col m-auto w-[80%] items-center mt-[100px] mb-20">
      <h1>Dashboard</h1>
      <div className="flex flex-row w-full">
        <CheckList habits={habits} setHabits={setHabits} name={name} toggleCompletion={toggleCompletion}/>
        <ProgressCircle habits={habits}/>
      </div>
      <div className="px-6 py-4 mt-6 w-full rounded drop-shadow bg-b-secondary dark:bg-db-secondary">
          <h3 className="ml-1 mb-2">Chart</h3>
          <HabitGrid/>
      </div>
    </div>

  )
}