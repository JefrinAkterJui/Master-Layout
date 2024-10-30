import React from 'react'
import { Link } from 'react-router-dom'

const Navbar2 = () => {
  return (
    <nav className='py-4  bg-slate-500'>
       <div className="container">
       <div className="nav_row  flex items-center justify-between">
            <div className="head text-lg text-slate-200 font-popins">Layout Three Navbar</div>
            
            <div className="main_manue">

            <ul className='flex gap-4 text-lg text-black font-popins '>
                <li><Link className='hover:text-slate-300 duration-200' to="/">Home</Link></li>
                <li><Link className='hover:text-slate-300 duration-200' to="/About">About</Link></li>
                <li><Link className='hover:text-slate-300 duration-200' to="/LayOutTow/help">help</Link></li>
                <li><Link className='hover:text-slate-300 duration-200' to="/Contact">Contact</Link></li>
            </ul>
            </div>
        </div>
       </div>
    </nav>
)
}

export default Navbar2