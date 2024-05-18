import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter,createRoutesFromElements,Route,RouterProvider } from 'react-router-dom'
import Layout from './Layout.jsx'
import { Home,About,Pricing,Contact,Team} from './components/index.js'
import './index.css'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout/>}>
      <Route path = '' element={<Home/>}/>
      <Route path = 'about' element={<About/>}/>
      <Route path = 'team' element={<Team/>}/>
      <Route path = 'contact' element={<Contact/>}/>
      <Route path = 'pricing' element={<Pricing/>}/>
    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
