import React from 'react'


export default function Score({score,index}) {
  return (
    <div className='w-50 mx-auto my-5  p-5 rounded-2' style={{backgroundColor:'#3D3D3D',color:'#fff'}}>
        <h1>Score: <span className='fw-normal'>{score}</span> </h1>
        {score < 50? <span>try again</span> : <span>good job</span>}
         <span className='badge bg-success float-end cursor-pointer' onClick={()=>{index(0)}} >to exam</span> 
    </div>
  )
}
