import { Route, Routes } from 'react-router-dom'
import { Login } from './Component/Login'
import { Signup } from './Component/Signup'
import { Home } from './page/Home'
import {Productform} from './component/Productform'
import {Navbar} from './component/Navbar'

function App() {

  return (
    <>
    
    <Routes>
      <Route path="/Login" element={<Login/>} />
      <Route path="/Signup" element={<Signup/>} />
      <Route path="/Home" element={<Home/>} />
      <Route path='/Productform' element={<Productform/>} />
      <Route path='/Navbar' element={<Navbar/>} />
    </Routes>
    
    </>
  )
}

 export default App;