import React, {  useState } from 'react'
import logo from '../../src/img/logo.png'
import {  NavLink } from 'react-router-dom'

export default function Menu() {

 

let links = [{name:'Geners',link:'/'},
{name:'Upcoming',link:'/upcoming'},
{name:'Favourite',link:'/favourite'},
{name:'Trending',link:'/trending'},
]
let [ind,setInd] =  useState(null) 



  return (
    <>
      
       <div  >
       <img src={logo} className='logo' alt="" />
        <h3 className='text-white my-2'>BlueBird Movies</h3>
        <ul className='list-unstyled lh-lg '>
         {links.map((ele,index)=>  
             <li style={index===ind?{border:'3px solid #fff',transition:'border .2s'}:{border:'3px solid transparent'}} onClick={()=>setInd(index)}  key={index} className='bg-info my-4 cursor-pointer'><NavLink to={`${ele.link}`} className=' text-center text-white text-decoration-none'>{ele.name}</NavLink></li>)} 
        </ul>
       </div>
     
    </>
  )
}
