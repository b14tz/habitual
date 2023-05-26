import { useEffect, useState } from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import Nav from './components/Nav'
import Home from './pages/Home'

export default function App() {
  const [darkMode, setDarkMode] = useState(true)
  const [tasks, setTasks] = useState([
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
  },[darkMode, tasks])

  function toggleDarkMode() {
    setDarkMode(!darkMode)
    localStorage.theme = !darkMode ? 'dark' : ''
  }

  function toggleCompletion(id) {
    setTasks(prevTasks => {
      const updatedTasks = [...prevTasks]; // Create a copy of the tasks array
      updatedTasks[id] = { ...updatedTasks[id] }; // Create a copy of the specific task object
      updatedTasks[id].status = !updatedTasks[id].status; // Update the status of the task
      return updatedTasks; // Return the updated tasks array
    });
  }

  return (
    <>
      <div className={`h-full w-full text-xl text-black-1 bg-white-1 dark:text-white-1 dark:bg-black-1`}>
        <Nav
          darkMode={darkMode} 
          toggleDarkMode={toggleDarkMode} 
          tasks={tasks}
        />
        
        <Routes>
          <Route path="/" element={<Navigate to="home"/>}/>
          <Route path="home" element={<Home tasks={tasks} setTasks={setTasks} toggleCompletion={toggleCompletion}/>}/>
        </Routes>

      </div>
    </>
  )
}