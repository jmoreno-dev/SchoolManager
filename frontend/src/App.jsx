import './App.css'
import Welcome from './components/Welcome/Welcome.jsx'
import Login from './components/Login/Login.jsx'
import Register from './components/Register/Register.jsx'
import ForgotPassword from './components/ForgotPassword/ForgotPassword.jsx'
import Home from './components/Home/Home.jsx'
import Students from './components/Students/Students.jsx'
import Teachers from './components/Teachers/Teachers.jsx'
import Classes from './components/Classes/Classes.jsx'
import { Routes, Route } from 'react-router-dom'

function App() {
  return (
    <Routes>
      <Route path='/' element={<Welcome />} />
      <Route path='/login' element={<Login />} />
      <Route path='/register' element={<Register />} />
      <Route path='/forgot-password' element={<ForgotPassword />} />
      <Route path='/home' element={<Home />} />
      <Route path='/students' element={<Students />} />
      <Route path='/teachers' element={<Teachers />} />
      <Route path='/classes' element={<Classes />} />
    </Routes>
  )
}

export default App
