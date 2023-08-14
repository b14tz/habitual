import React, { useState, useContext } from 'react'
import SetHabits from '../components/setUp/SetHabits'
import SetName from '../components/setUp/SetName';
import SetSpecifics from '../components/setUp/SetSpecifics';
import { SetupContext } from '../contexts/SetupContext';
//import { ArrowRightCircleIcon, ArrowLeftCircleIcon } from "@heroicons/react/20/solid";
import { ArrowRightCircleIcon, ArrowLeftCircleIcon } from "@heroicons/react/24/outline";
import { useNavigate } from 'react-router-dom';


export default function Setup() {
  const [name, setName] = useState("")
  const [habits, setHabits] = useState([])
  const [page, setPage] = useState(0)
  const { setup, setSetup } = useContext(SetupContext);
  const navigate = useNavigate();

  const pages = [ 
    <SetName name={name} setName={setName} page={page} setPage={setPage}/>,
    <SetHabits habits={habits} setHabits={setHabits}/>, 
    <SetSpecifics habits={habits} setHabits={setHabits}/>
  ]

  const handleFinishSetup = () => {
    setSetup(false)
    navigate("/")
    console.log(setup)
  }

  return (
    <div className="flex w-full h-full justify-center items-center min-h-[100vh] bg-black-1/40 dark:bg-black-1">
        <section className="flex flex-col items-center rounded-xl bg-white-1 dark:bg-black-1 py-4 px-8">
            {pages[page]}

            <div className="flex flex-row w-full justify-between mt-4">
              <button onClick={() => {(page == 0) ? '' : setPage(page - 1)}}>
                  <ArrowLeftCircleIcon className="h-14 w-14 text-black-1 dark:text-white-1" />
              </button>
              {
                page == pages.length - 1 ? 
                <button onClick={() => handleFinishSetup()} className="border-black-1 dark:border-white-1 border-4 rounded-full px-4 my-1">
                  <h3>Finish Setup</h3>
                </button>
                :
                <button onClick={() => {(page == pages.length - 1) ? '' : setPage(page + 1)}}>
                  <ArrowRightCircleIcon className="h-14 w-14 text-black-1 dark:text-white-1" />
                </button>
                
              }
            </div>
        </section>
    </div>
  )
}
