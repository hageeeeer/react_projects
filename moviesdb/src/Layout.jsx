import React, { useState,useRef } from 'react'
import { Outlet } from 'react-router-dom'
import Menu from './Components/Menu';

export default function Layout() {
  
  return (
    <div className='container-fluid'>
      <div className="row ">

        <i class="toggle-icon d-block d-sm-none fa-solid fa-bars fa-3x position-fixed bottom-0 end-0 z-3 text-white "></i>
        <div className={`toggle-menu col-xl-2 col-md-3  col-sm-5 text-center  p-4 position-fixed top-0 bottom-0 start-0`} style={{ backgroundColor: '#000' }}>
          <Menu />
        </div>
        <div className="col-xl-10 col-md-9 offset-md-3 offset-xl-2 col-sm-7 offset-sm-5" >
          <Outlet />
        </div>
      </div>
    </div>
  )
}
