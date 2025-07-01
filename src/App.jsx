import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './Components/Home/Home'
import Portfolio from './Components/Protfolio/Protfolio'
import OurServices from './Components/OurServices/OurServices'
import About from './Components/About/About'
import ClientTestimonials from './Components/ClientTestimonials/ClientTestimonials'
import ConectUs from './Components/ConectUs/ConectUs'
import AllProjects from './Components/AllProjects/AllProjects'
import AdminDashboard from './Components/AdminDashboard/AdminDashboard'
let x = createBrowserRouter([
   {index: true , element : <Home />},
   {path:"conectus" , element : <ConectUs />},
   {path:"allproject", element : <AllProjects/>},
  { path:"/admin", element:<AdminDashboard />} 

])

function App() {


  return (
    <>
     <RouterProvider router={x}></RouterProvider>
    </>
  )
}

export default App
