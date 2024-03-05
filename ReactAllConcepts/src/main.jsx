import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import MainPage from './components/MainPage/MainPage.jsx'
import About from './components/About/About.jsx'
import Register from './components/Register/Register.jsx'
import Account from './components/Account/Account.jsx'



const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<MainPage />} >
      <Route path='about' element={<About />} />
      <Route path='register' element={<Register />} />
      <Route path='account' element={<Account />} />
    </Route>
  )

)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
