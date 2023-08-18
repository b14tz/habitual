import { useEffect, useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import { auth } from './lib/firebase'
import Nav from './components/Nav'
import { getUserData, getUserCurrentHabits } from './interfaces/userInterface'
import Home from './pages/Home'
import Account from './pages/Account'
import Register from './pages/Register'
import Login from './pages/Login'
import AuthWrapper from './components/auth/AuthWrapper'
import Setup from './pages/Setup'
import { useAuthState } from 'react-firebase-hooks/auth'

export default function App() {
  const [darkMode, setDarkMode] = useState(true)
  const [isLoggedIn, setIsLoggedIn] = useState(true)
  const [name, setName] = useState("")
  const [habits, setHabits] = useState([])
  const [user] = useAuthState(auth)
  
  useEffect(() => {
    if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
      document.documentElement.classList.add('dark')
    } else {
      setDarkMode(false)
      document.documentElement.classList.remove('dark')
    }

    if(user){
      setIsLoggedIn(true)
      async function getHabitData() {
        let data = await getUserData(auth.currentUser.uid)
        setName(data.name.charAt(0).toUpperCase() + data.name.slice(1))
        data = await getUserCurrentHabits(auth.currentUser.uid)
        setHabits(data)
      }
      getHabitData()
    }
  }, [darkMode, user])

  function toggleDarkMode() {
    setDarkMode(!darkMode)
    localStorage.theme = !darkMode ? 'dark' : ''
  }

  function toggleCompletion(id) {
    setHabits(prev => {
      const updatedHabits = [...prev]; // Create a copy of the habits array
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
              <AuthWrapper>
                <Home habits={habits} name={name} toggleCompletion={toggleCompletion}/>
              </AuthWrapper>
            }
          />
          <Route
            path="/account"
            element={
              <AuthWrapper>
                <Account/>
              </AuthWrapper>
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
          <Route
            path="/setup"
            element={
              <Setup />
            }
          />
        </Routes>
      </div>
    </>
  )
}