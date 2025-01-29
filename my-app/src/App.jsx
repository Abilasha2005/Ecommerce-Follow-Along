import { Route, Routes } from 'react-router-dom'
import { Login } from './Components/Login'
import {Home} from './Components/Home'
import { Signup } from './Components/Signup'

function App() {

  return (
    <>
    <Routes>
      <Route path="/Login" element={<Login/>} />
      <Route path="/Signup" element={<Signup/>} />
      <Route path="/Home" element={<Home/>} />
    </Routes>
    </>
  )
}

export default App