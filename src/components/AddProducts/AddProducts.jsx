"use client"
import axios from 'axios'
import React, { useState } from 'react'

const AddProducts = () => {
  const [product, setProduct] = useState({
    name:"",
    description:"",
    shortdescription:"",
    price:"",
    compareAtPrice:"",
    costPrice:"",
    
  })

  //  get datat from user 
  const handleChange = (e)=>{
    const productName = e.target.name;
    const productValue = e.target.value;
    const data = {... product};
    data[productName] = productValue;
    setProduct(data)
  }

  // send data to bakend 

  const sendData = async()=>{
    try{
      const {data} = await axios.post("http://e-commerce-api.runasp.net/api/Product",product)
      console.log(data)
    }catch(err){
      console.log(err)
    }
   
  }

  //handle submit function
  const handleSubmit = (e)=>{
    e.preventDefault();
    sendData();
  }
  return <>
    <div className='h-screen'>
      <form onSubmit={handleSubmit} className='flex  bg-white w-full md:w-[80%] mx-auto px-6 py-4 rounded-lg flex-col gap-4'>
        <h1 className='mb-3 capitalize text-[--secondary-color] font-bold relative after:absolute after:content-[""] before:content-[""] before:absolute before:bottom-[-4px] before:h-[4px] before:bg-[--main-color] before:w-full before:left-0 after:bottom-[-4px] after:left-0 pb-1 after:rounded-md after:bg-[--secondary-color] before:rounded-md after:w-1/2 after:h-[4px] w-fit  '>new product </h1>
        <input required onChange={handleChange} type="text" name="name" id="productname" placeholder='product name' />
        <input onChange={handleChange} type="text" id='description' name='description' placeholder='description' />
        <textarea required onChange={handleChange} name="shortdescription" id="shortdescription" placeholder='short description'></textarea>
        <input required onChange={handleChange} type="number" name="price" id="price" placeholder='price' />
        <input required onChange={handleChange} type="number" name="compareAtPrice" id="compareAtPrice" placeholder='compareAtPrice' />
        <input type="number"  onChange={handleChange} name="costPrice" id="costPrice" placeholder='costPrice' />
        <button className='mr-auto px-6 font-bold text-[20px] py-1 rounded-md hover:bg-white hover:text-[--secondary-color] bg-[--secondary-color] border-2 text-white hover:border-2 hover:border-[--secondary-color]' type='submit'>save</button>
      </form>

    </div>
  </>
}

export default AddProducts