import React from 'react'
import { Routes, Route} from "react-router-dom";
import Login from "./Login";
import SignUp from "./SignUp";
import  Profile  from "./Profile";
import App from './App';

const App_index = () => {
  return (
    <>
    <div>
      <Routes>
        <Route path='/' element={<App/>}/>
        <Route path="Login" element={<Login />} />
        <Route path="Signup" element={<SignUp />} />
        <Route path="Profile" element={<Profile/>}/>
      </Routes>
    </div>
    </>
  )
}

export default App_index;
