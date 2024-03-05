import React from 'react'
import { Outlet } from 'react-router-dom'
import Footer from '../Footer/Footer'
import Header from '../Header/Header'
import Container from '@mui/material/Container';


function MainPage()
{
  return (
    <>

      <Header />
      <br />
      <br />
      <Outlet />
      <br />
      <br />
      <Footer />

    </>
  )
}

export default MainPage