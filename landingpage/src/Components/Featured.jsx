import React, { forwardRef } from 'react'

 function Featured({text},ref) {
    return (
        <div  className='container' ref={ref}>
            <h2 className='text-xl my-4 text-center'>All the best technologies out there!</h2>
            <div className="row gap-y-5">
                <div className='md:w-1/2 md:px-0 px-4'>
                    <div className="box gap-2 my-4 flex items-start">
                        <i className="border-2 border-red-500 p-2 fa-brands fa-react fa-2x"></i>
                       <div>
                         <h3 className='text-lg'>React.js</h3>
                         <p className='text-sm text-gray-500'>React is a free and open-source front-end JavaScript library for building user interfaces or UI components.</p>
                       </div>
                    </div>
                </div>
             
                <div className='md:w-1/2 md:px-0 px-4'>
                    <div className="box flex  gap-2 my-4 items-start">
                        <i className="fa-brands fa-2x fa-angular border-2 border-red-500 p-2"></i>
                       <div>
                       <h3 className='text-lg'>React.js</h3>
                       <p className='text-sm text-gray-500'>React is a free and open-source front-end JavaScript library for building user interfaces or UI components.</p>
                       </div>
                    </div>
                </div>
             
                <div className='md:w-1/2 md:px-0 px-4'>
                    <div className="box gap-2 my-4 flex items-start">
                        <i className="border-2 border-red-500 p-2 fa-brands fa-react fa-2x"></i>
                       <div>
                       <h3 className='text-lg'>React.js</h3>
                       <p className='text-sm text-gray-500'>React is a free and open-source front-end JavaScript library for building user interfaces or UI components.</p>
                       </div>
                    </div>
                </div>
             
                <div className='md:w-1/2 md:px-0 px-4'>
                  
                    <div className="box flex  gap-2 my-4 items-start">
                        <i className="fa-brands fa-2x fa-angular border-2 border-red-500 p-2"></i>
                       <div>
                       <h3 className='text-lg'>React.js</h3>
                       <p className='text-sm text-gray-500'>React is a free and open-source front-end JavaScript library for building user interfaces or UI components.</p>
                       </div>
                    </div>
                </div>
             
            </div>
        </div>
    )
}

export default forwardRef(Featured)