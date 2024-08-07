import React from 'react'

export default function Item({ prod ,upFun,index,delFun}) {
    
  
    let { code, price, onSale, counter,id } = prod
    return (
        <div className='w-1/3 p-3 '>
            <div className="product bg-gray-200 p-3 shadow-lg rounded relative">
                <h3 className='text-xl'>code:{code}</h3>
                <p>price:{price}</p>
                <p>counter:{counter}</p>
                <div className='flex justify-between my-4'>
                    <button className='p-1'onClick={()=>{delFun(id)} }>Delete <i className='fas fa-trash text-rose-500'></i></button>
                    <button className='p-1' onClick={()=>{upFun(index)}}>update counter <i className='fas fa-edit text-blue-500'></i></button>
                </div>
                {onSale && <span className='bg-red-600 p-2 text-white absolute top-0 right-0 rounded-tr'>sale</span>}

            </div>
        </div>
    )
}

