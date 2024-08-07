import React, {  useState } from 'react'
import Item from './Item'
import { v4 as uuidv4 } from 'uuid';
import { data } from '../db';
export default function Products() {


    let [products, setProducts] = useState(data)
    let [searchArr, setsearchArr] = useState([])
    //data form
    let [code, setCode] = useState('')
    let [price, setprice] = useState('')
    let [sale, setsale] = useState(false)



    function handle(e) {
        let key = e.target.name
        if (key == 'code')
            setCode(e.target.value)
        if (key == 'price')
            setprice(e.target.value)
        if (key == 'sale')
            setsale(e.target.value == "sale" ? true : false)
    }

    //update fun
    function updateCounter(ind) {
        let newProducts = structuredClone(products)
        newProducts[ind].counter++;
        setProducts(newProducts)
    }

    function deleteFun(id) {
        let newArr = products.filter(ele => ele.id !== id)
        setProducts(newArr)
    }

    function AddProduct(e) {
        e.preventDefault()
        setProducts([...products, { id: uuidv4(), code, price, onSale: sale, counter: 0 }])
    }


    function searchFun(e) {
        let term = e.target.value;
        setsearchArr(products.filter(ele => ele.code.toLowerCase().includes(term.trim().toLowerCase())))
    }


    return (
        <div>
            <h1 className='text-center my-4 '>Products</h1>
            <div className="row-tw">

                {searchArr.length ? searchArr.map((prod, index) => <Item key={prod.id} prod={prod} index={index} upFun={updateCounter} delFun={deleteFun}></Item>) : products.map((prod, index) => <Item key={prod.id} prod={prod} index={index} upFun={updateCounter} delFun={deleteFun}></Item>)}

            </div>
            <hr />
            <input type="text" className='my-4 w-1/2 block mx-auto border-b-2 border-red-400 focus:outline-none' onChange={searchFun} />
            <form  className='block w-1/2 mx-auto p-7 my-4 border-2 border-gray-100' onSubmit={AddProduct}>
                <select name="sale" id="" onChange={handle}>
                    <option value="nosale">nosale</option>
                    <option value="sale">sale</option>
                </select>
                <input name='code' type="text" value={code} onChange={handle} placeholder='code..' className='w-full border-b-2 border-gray-600 my-3 focus:outline-none' />
                <input name='price' type="text" onChange={handle} placeholder='price..' className='w-full border-b-2 border-gray-600 my-3 focus:outline-none' value={price} />
                <button className='block ml-auto my-2 bg-red-500 p-2 text-white'>Add Product</button>
            </form>
        </div>
    )
}


