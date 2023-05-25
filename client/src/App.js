import { Routes, Route, Navigate } from 'react-router-dom'
import Home from './pages/Home';
export default function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Navigate to="/home"/>}/>
        <Route path="home" element={<Home/>}/>
      </Routes>
    </>
  );
}