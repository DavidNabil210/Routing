import React from 'react'
import Nav from '../Nav/Nav'
import Footer from '../Footer/Footer'
import {Outlet} from 'react-router-dom'
import Home from '../Contact/Contact'
import About from '../About/About'


export default function Layout() {
  return (
    <>
      <Nav/>
<Outlet></Outlet>
    <Footer/>
   
    </>
  
  )
}
