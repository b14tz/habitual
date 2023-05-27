import { useEffect, useState } from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import Nav from './components/Nav'
import Home from './pages/Home'

export default function App() {
  const [darkMode, setDarkMode] = useState(true)
  const [habits, setHabits] = useState([
    {
        title:"leetcode",
        status:true,
        color:"blue-1"
    },
    {
        title:"workout",
        status:false,
        color:"green-1"
    },
    {
        title:"read",
        status:false,
        color:"yellow-1"
    }
  ])
  
  useEffect(() => {
    if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
      document.documentElement.classList.add('dark')
    } else {
      setDarkMode(false)
      document.documentElement.classList.remove('dark')
    }
  },[darkMode, habits])

  function toggleDarkMode() {
    setDarkMode(!darkMode)
    localStorage.theme = !darkMode ? 'dark' : ''
  }

  function toggleCompletion(id) {
    setHabits(prevHabits => {
      const updatedHabits = [...prevHabits]; // Create a copy of the habits array
      updatedHabits[id] = { ...updatedHabits[id] }; // Create a copy of the specific habit object
      updatedHabits[id].status = !updatedHabits[id].status; // Update the status of the task
      return updatedHabits; // Return the updated habits array
    });
  }

  return (
    <>
      <div className={`h-full w-full text-xl text-black-1 bg-white-1 dark:text-white-1 dark:bg-black-1`}>
      {console.log(habits)}
        <Nav
          darkMode={darkMode} 
          toggleDarkMode={toggleDarkMode} 
          habits={habits}
        />
        
        <Routes>
          <Route path="/" element={<Home habits={habits} setHabits={setHabits} toggleCompletion={toggleCompletion}/>}/>
        </Routes>

      </div>
    </>
  )
}