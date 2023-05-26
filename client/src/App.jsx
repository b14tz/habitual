import { useEffect, useState } from 'react'
import {Routes, Route, Navigate } from 'react-router-dom'
import Nav from './components/Nav'
import Home from './pages/Home'

export default function App() {
  const [darkMode, setDarkMode] = useState(true)
  
  useEffect(() => {
    console.log("test")
    if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
      document.documentElement.classList.add('dark')
    } else {
      setDarkMode(false)
      document.documentElement.classList.remove('dark')
    }
  },[darkMode])

  function toggleDarkMode() {
    setDarkMode(!darkMode)
    localStorage.theme = !darkMode ? 'dark' : ''
  }

  return (
    <>
      <div className={`h-screen w-screen dark:text-white dark:bg-black`}>
        <Nav
          darkMode={darkMode} 
          toggleDarkMode={toggleDarkMode} 
        />

        <Routes>
          <Route path="/" element={<Navigate to="home"/>}/>
          <Route path="home" element={<Home/>}/>
        </Routes>

      </div>
    </>
  )
}