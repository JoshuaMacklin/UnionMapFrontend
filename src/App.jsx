import { Routes, Route } from "react-router-dom"
import HomePage from "./pages/HomePage"
import NotFound from "./pages/NotFound"
import Navbar from "./components/Navbar/Navbar"
import ChatsPage from "./pages/ChatsPage"
import SignUp from "./pages/SignUp"
import LogIn from "./pages/LogIn"


import './App.css'

export default function App() {

  return (
    <>
      <Navbar/>

      <Routes>
        <Route path='/' element={<HomePage/>}/>
        <Route path='/chat' element={<ChatsPage/>}/>
        <Route path='/signup' element={<SignUp/>}/>
        <Route path='/login' element={<LogIn/>}/>
        <Route path='/*' element={<NotFound/>}/>
      </Routes>
    </>
  )
}
