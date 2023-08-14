import { useEffect, useState } from 'react'
import { Routes, Route } from 'react-router-dom'

import { auth } from './lib/firebase'
import Nav from './components/Nav'
import { getUserData, getUserCurrentHabits } from './interfaces/userInterface'
import Home from './pages/Home'
import Account from './pages/Account'
import Register from './pages/Register'
import Login from './pages/Login'
import Setup from './pages/Setup'
import Protected from './components/auth/Protected'

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
  const [isLoggedIn, setIsLoggedIn] = useState(true)
  const [name, setName] = useState("")
  const [habits, setHabits] = useState([])
  
  useEffect(() => {
    if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
      document.documentElement.classList.add('dark')
    } else {
      setDarkMode(false)
      document.documentElement.classList.remove('dark')
    }

    if(auth.currentUser){
      setIsLoggedIn(true)
      // getUserData(auth.currentUser.uid).then(data => {
      //   setName(data.name.charAt(0).toUpperCase() + data.name.slice(1))
      // })

      // getUserCurrentHabits(auth.currentUser.uid).then(data => {
      //   setHabits(data)
      // })
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
      <div className={`h-full w-full text-t-primary bg-b-primary dark:text-dt-primary dark:bg-db-primary`}>
        <Nav
          darkMode={darkMode} 
          toggleDarkMode={toggleDarkMode} 
          habits={habits}
          isLoggedIn={isLoggedIn}
          name={name}
          setName={setName}
        />
        
        <Routes>
          <Route 
            path="/" 
            element={
              <Protected>
                <Home habits={habits} setHabits={setHabits}/>
              </Protected>
            }
          />
          <Route
            path="/account"
            element={
              <Protected>
                <Account/>
              </Protected>
            }
          />
          <Route
            path="/setup"
            element={
                <Setup habits={habits} setHabits={setHabits}/>
            }
          />
          <Route
            path="/login"
            element={
              <Login />
            }
          />
          <Route
            path="/register"
            element={
              <Register />
            }
          />
        </Routes>
      </div>
    </>
  )
}