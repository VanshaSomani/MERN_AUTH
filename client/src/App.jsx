import { Route, Routes } from 'react-router-dom'
// import './App.css'
import { Home } from './pages/Home'
import { About } from './pages/About'
import { SignIn } from './pages/SignIn'
import { SignUp } from './pages/SignUp'
import { Profile } from './pages/Profile'

function App() {
  return (
    <>
    {/* <h1>APP</h1> */}
    <Routes>
      <Route path='/' element={<Home/>}></Route>
      <Route path="/about" element={<About/>}></Route>
      <Route path="/sign-in" element={<SignIn/>}></Route>
      <Route path="/sign-up" element={<SignUp/>}></Route>
      <Route path="/profile" element={<Profile/>}></Route>
    </Routes>
    </>
  )
}

export default App
