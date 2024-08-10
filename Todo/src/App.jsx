import React, {  useEffect, useState } from 'react'
import { AnimatePresence, motion } from "framer-motion"
import { AddNote, DeleteNotes, GetNotes, updateNotes } from './addnote'

export default function App() {
  let [txt,setTxt] = useState('')
  let [title, setTitle] = useState('')

  function changeTitle(e)
  {
    setTitle(e.target.value)
 
  }
  let [notesArr, setNotesArr] = useState([])

  useEffect(() => {
    getdata()
  }, [notesArr])


  function getdata() {
    GetNotes().then(data => setNotesArr(data))
  }



  return (

    <motion.section   exit={{ opacity: 0 }}
      animate={{ opacity: 1,y:'-10%' ,x:"-50%"}}
      initial={{ opacity: 0,y:"0%" ,x:0}}
    className="vh-100  position-absolute todoapp">
   
      <div className="container   py-5 h-100">
        <div className="row   d-flex justify-content-center align-items-center h-100">
          <div className="col ">
            <div className="card" id="list1" style={{ borderRadius: '.75rem', backgroundColor: '#eff1f2' }}>
              <div className="card-body py-4 px-4 px-md-5">
                <p className="h1 text-center mt-3 mb-4 pb-3 text-primary">
                  <i className="fas fa-check-square me-1" />
                  <u>My Todo-s</u>
                </p>
                <div className="pb-2">
                  <div className="card">
                    <div className="card-body">
                      <div className="d-flex flex-row align-items-center">
                        <input value={title} onChange={changeTitle} type="text" className="form-control form-control-lg me-2" id="exampleFormControlInput1" placeholder="Add new..." />
                        <a href="#!" data-mdb-tooltip-init title="Set due date"></a>
                        <div>
                          <button type="button" data-mdb-button-init data-mdb-ripple-init className="btn btn-primary" onClick={() => { 
                            AddNote(title);
                            setTitle('') 
                           }} >Add</button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <hr className="my-4" />
                <div className="d-flex justify-content-end align-items-center mb-4 pt-2 pb-3">

                  <a href="#!" style={{ color: '#23af89' }} data-mdb-tooltip-init title="Ascending"><i className="fas fa-sort-amount-down-alt ms-2" /></a>
                </div>
                <AnimatePresence>
                <ul className="list-unstyled  rounded-0 bg-transparent">
                  {notesArr?.map((ele) => 
                   <motion.li   initial={{ x: -200, opacity: 0 }}
                   animate={{ x: 0, opacity: 1 }}
                   exit={{ opacity: 0 }}  key={ele._id}
                    className="d-flex justify-content-between mb-3 align-items-center bg-light p-2 shadow-sm rounded">
                    <div className='d-flex align-items-center'>
                    <span className={`${ele.completed?'text-success':'text-danger'}`} >{ele.title}</span>
                    <input type="checkbox" onChange={()=>{updateNotes(ele?._id)}} className=' mt-1 ms-2 cursor-pointer' />
                    </div>
                    <i className='fas fa-trash text-danger cursor-pointer'
                     onClick={()=>DeleteNotes(ele._id)}></i>
                  </motion.li>)

                  }
                </ul>
                </AnimatePresence>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.section>


  )
}
