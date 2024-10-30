
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import './App.css'
import Home from './Pages/Home'
import About from './Pages/About'
import Support from './Pages/Support'
import Contact from './Pages/Contact'
import LayOutOne from './Layout/LayOutOne'
import LayOutTow from './Layout/LayOutTow'
import Help from './Pages/Help'
import LayOutthree from './Layout/LayOutthree'
import Services from './Pages/Services'


function App() {
  const myroute =createBrowserRouter(
    createRoutesFromElements(
      <Route>
        {/* ----------------layoutOne----------------- */}
        <Route path='/' element={<LayOutOne/>}>
          <Route index element={<Home/>} />
          <Route path='/About' element={<About/>} />
          <Route path='/Contact' element={<Contact/>} />
        </Route>
        {/* ---------------------layouttow-------------------- */}
        <Route path='/LayOutTow' element={<LayOutTow/>}>
          <Route index element={<Support/>}/>
          <Route path='/LayOutTow/help' element={<Help/>}/>
        </Route>
        {/* ----------------------LayoutThree----------------- */}
        <Route path='/LayOutThree' element={<LayOutthree/>}>
          <Route index element={<Services/>}/>
        </Route>
      </Route>
    )
  )
  return (
    <>
      <RouterProvider router={myroute}/>
    </>
  )
}

export default App
