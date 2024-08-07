import React from 'react'
import Navbar from './Navbar';
import { Outlet } from 'react-router-dom';

export default function Layout() {
  return (
    <div>
      <Navbar></Navbar>
      <div className="container">
        <Outlet/>
      </div>
    </div>
  )
}
