import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../Components/Navbar/Navbar'


const LayOutOne = () => {
  return (
    <>
      
    <Navbar/>
    <Outlet/>
    </>
  )
}

export default LayOutOne