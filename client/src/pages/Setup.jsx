import React, { useState } from 'react'
import { ArrowLongRightIcon, ArrowLongLeftIcon } from "@heroicons/react/20/solid";
import SetHabits from '../components/setUp/SetHabits'
import SetName from '../components/setUp/SetName';
import SetSpecifics from '../components/setUp/SetSpecifics';

export default function Setup() {
  const [name, setName] = useState("")
  const [habits, setHabits] = useState([])
  const [pageCount, setPageCount] = useState(0)

  const pages = [ 
    <SetName name={name} setName={setName} pageCount={pageCount} setPageCount={setPageCount}/>,
    <SetHabits habits={habits} setHabits={setHabits}/>, 
    <SetSpecifics habits={habits}/>
  ]

  return (
    <div className="flex w-full h-full justify-center items-center min-h-[100vh]">
        <section className="flex flex-col items-center">
            {pages[pageCount]}

            <div className="flex flex-row">
              <button onClick={() => {(pageCount == 0) ? '' : setPageCount(pageCount - 1)}}>
                  <ArrowLongLeftIcon className="h-14 w-14 text-black-1 dark:text-white-1" />
              </button>
              <button onClick={() => {(pageCount == pages.length - 1) ? '' : setPageCount(pageCount + 1)}}>
                  <ArrowLongRightIcon className="h-14 w-14 text-black-1 dark:text-white-1" />
              </button>
            </div>
        </section>
    </div>
  )
}
