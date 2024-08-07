import React, { useState } from 'react'
import { accordionData } from '../data'

export default function Accordion() {

    let [data] = useState(accordionData)
    let [enable, setEnable] = useState(false)
    let [selected, setSelected] = useState(null)

    function toggleEnable() {
        setEnable(!enable)
    }

    function getId(id) {
        setSelected(id === selected ? null : id) 
    }

    return (
        <div className='w-2/3 mx-auto'>
            <h1 className='my-4 text-center'><span>Accordion</span> 
            <span className={` text-blue-400 ml-2 ${enable?'hidden':'inline'}`}>always open </span> </h1>
            <button onClick={toggleEnable} className='my-2 bg-sky-400'>Toggle Enable</button>
            {data.map((ele, id) => enable ? <div key={id} className='item text-white'>
                <div className='p-4 bg-blue-500 flex justify-between items-center'>
                    <span>{ele.questoion}</span>
                    <i className='fas fa-plus cursor-pointer' onClick={() => { getId(id) }}></i>
                </div>
                <div className={`p-4 bg-blue-700 
                    ${selected == id ? 'block' : 'hidden'}`}>{ele.answer}
                </div>

            </div>
                : <Accitem key={id} ele={ele}></Accitem>

            )}
        </div>
    )
}




function Accitem({ ele }) {
    let { questoion, answer, id } = ele
    let [open, setOpen] = useState(false)

    function toggleOpen() {
        setOpen(open => !open)
    }

    return <div className='item text-white'>
        <div className='p-4 bg-blue-500 flex justify-between items-center'>
            <span>{questoion}</span>
            <i className='fas fa-plus cursor-pointer' onClick={toggleOpen}></i>
        </div>
        <div className={`p-4 bg-blue-700 ${open ? 'block' : 'hidden'}`}>{answer}</div>
    </div>
}




