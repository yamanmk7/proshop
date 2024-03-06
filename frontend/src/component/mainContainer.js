import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from './Header'

const MainContainer = () => {
  return (
    <div >
      <Header />
      <Outlet/>
      
    </div>
  )
}

export default MainContainer
