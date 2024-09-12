import { useState } from 'react'
import Login from './component/Login'
import Profile from './context/UsercontextProvider'
import Usercontext from './context/Usercontext'
import UsercontextProvider from './context/UsercontextProvider'

function App(){

    return (

        <UsercontextProvider>
            <h1> React with coffee</h1>
            <Login />
            <Profile/>




        </UsercontextProvider>

        
     )
    }

    export default App