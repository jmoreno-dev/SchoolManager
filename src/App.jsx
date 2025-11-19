import './App.css'
import Welcome from './components/Welcome/Welcome.jsx'
import Login from './components/Login/Login.jsx'
import { Routes, Route } from 'react-router-dom'

function App() {
  return (
    <Routes>
      <Route path='/' element={<Welcome />} />
      <Route path='/login' element={<Login />} />
    </Routes>
  )
}

export default App
