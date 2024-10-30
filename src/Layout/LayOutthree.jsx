import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar2 from '../Components/Sidenavbar/Navbar2'

const LayOutthree = () => {
  return (
    <>
      <Navbar2/>
      <Outlet/>
    </>
  )
}

export default LayOutthree