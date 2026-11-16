import React from 'react'
import { Outlet } from 'react-router'
import Navbar from '../components/Navbar'

const RooutLayout = () => {
  return (
    <div>
        
        <Navbar/>
         <Outlet/>
       
    </div>
  )
}

export default RooutLayout