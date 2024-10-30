import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../Components/Navbar/Navbar'
import Sidenavbar from '../Components/Sidenavbar/Sidenavbar'

const LayOutTow = () => {
  return (
    <>
    <Navbar/>
    <div className='flex'>

    <Sidenavbar/>
    <Outlet/>
    </div>
    </>
  )
}

export default LayOutTow