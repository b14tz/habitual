import { useEffect, useState } from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import Nav from './components/Nav'
import Home from './pages/Home'
import AuthModal from './components/AuthModal'
import { getUserData, getUserCurrentHabits } from './interfaces/userInterface'
import { auth } from './lib/firebase'
import HabitSelect from './pages/HabitSelect'
import Account from './pages/Account'

let data = [
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
]

export default function App() {
  const [darkMode, setDarkMode] = useState(true)
  const [loginStatus, setLoginStatus] = useState(false)
  const [name, setName] = useState("")
  const [habits, setHabits] = useState([])
  const [setUpModal, setSetUpModal] = useState(false)
  
  useEffect(() => {
    if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
      document.documentElement.classList.add('dark')
    } else {
      setDarkMode(false)
      document.documentElement.classList.remove('dark')
    }

    if(auth.currentUser){
      setLoginStatus(true)
      getUserData(auth.currentUser.uid).then(data => {
        setName(data.name.charAt(0).toUpperCase() + data.name.slice(1))
      })

      getUserCurrentHabits(auth.currentUser.uid).then(data => {
        setHabits(data)
      })
    }

  }, [darkMode])

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
        <Nav
          darkMode={darkMode} 
          toggleDarkMode={toggleDarkMode} 
          habits={habits}
          loginStatus={loginStatus}
          name={name}
          setName={setName}
          setUpModal={setUpModal}
          setSetUpModal={setSetUpModal}
        />
        
        <Routes>
          <Route 
            path="/" 
            element={
              <Home 
                loginStatus={loginStatus}
                setSetUpModal={setSetUpModal}
              />
            }
          />
          <Route
            path="/account"
            element={
              <Account/>
            }
          />
        </Routes>

      </div>
    </>
  )
}