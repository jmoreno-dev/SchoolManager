import './App.css'
import Welcome from './components/Welcome/Welcome.jsx'
import Login from './components/Login/Login.jsx'
import Register from './components/Register/Register.jsx'
import ForgotPassword from './components/ForgotPassword/ForgotPassword.jsx'
import Home from './components/Home/Home.jsx'
import { Routes, Route } from 'react-router-dom'

function App() {
  return (
    <Routes>
      <Route path='/' element={<Welcome />} />
      <Route path='/login' element={<Login />} />
      <Route path='/register' element={<Register />} />
      <Route path='/forgot-password' element={<ForgotPassword />} />
      <Route path='/home' element={<Home />} />
    </Routes>
  )
}

export default App
