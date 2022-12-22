import React from 'react'
import { Routes,Route } from 'react-router'
import Login from './Login'
import Feed from './Feed'

const MainRoute = () => {
  return ( 
    <Routes>
    <Route path='/' element={<Login/>}/>
    <Route path='/feed' element={<Feed/>}/>
</Routes>
  )
}

export default MainRoute