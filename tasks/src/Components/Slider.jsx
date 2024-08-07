import axios from 'axios'
import React, { useEffect, useState } from 'react'

export default function Slider() {

    let [arr, setArr] = useState([])
    let [Ind, setInd] = useState(0)

    async function getSlider(limit = 7) {
        try {
            let { data } = await axios.get(`https://picsum.photos/v2/list?page=2&limit=${limit}`)
            console.log(data);
            setArr(data)
        } catch (error) {

        }
    }

    useEffect(() => { getSlider() }, [])

    function handlePrev() {
        setInd(Ind === 0 ? arr.length - 1 : Ind - 1)
    }
    function handleNext() {
        setInd(Ind === arr.length - 1 ? 0 : Ind + 1)
        // 0 > 7
    }
    return (
        <div>
            <h2 className='text-blue-500'>Slider</h2>
            <div className="slider w-2/3 relative shadow-xl">
                <img src={arr.length ? `https://picsum.photos/id/${arr[Ind].id}/${arr[Ind].width}/${arr[Ind].height}` : ''} className='rounded'

                    alt={arr.length ? `https://picsum.photos/id/${arr[Ind].id}/${arr[Ind].width}/${arr[Ind].height}` : ''}
                />
                <div className='flex justify-center my-3 absolute bottom-3 z-30 left-[50%] translate-x-[-50%]'>
                    {arr.map((ele, index) => <i key={ele.id} onClick={() => setInd(index)} class={`${Ind == index ? 'fa-solid' : ' fa-regular'} text-white fa-circle mx-1 cursor-pointer `}></i>)}
                </div>
                <div className="text-white absolute left-0 right-0 w-full top-[50%] px-4 flex justify-between translate-y-[-50%] ">
                    <i className="fa-solid fa-left-long " onClick={handlePrev} ></i>
                    <i className="fa-solid fa-right-long" onClick={handleNext}></i>
                </div>
            </div>

        </div>
    )
}
