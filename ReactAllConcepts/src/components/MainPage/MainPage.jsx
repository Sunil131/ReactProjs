import React, { useState } from 'react'
import { Outlet } from 'react-router-dom'
import Footer from '../Footer/Footer'
import Header from '../Header/Header'
import Container from '@mui/material/Container';
import { UserContext } from '../../UserContext';


function MainPage()
{

  const currentUser = {
    First: "SunilTest",
    Last: "MehtaTest",
    Email: "tes@test.com",
    Password: "123456oo"
  };

  const [user, setUser] = useState(currentUser)

  console.log(user.First)

  return (
    <>

      <Header />
      <br />
      <br />
      <UserContext.Provider value={{ user, setUser }}>
        <Outlet />
      </UserContext.Provider>
      <br />
      <br />
      <Footer />

    </>
  )
}

export default MainPage