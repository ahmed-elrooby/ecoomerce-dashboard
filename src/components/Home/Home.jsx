"use client"
import axiosInstance from '@/_utils/axiosInstance';
import React, { useEffect, useState } from 'react'

const Home = () => {
    const [category, setCategory] = useState([]);
    const getCategory = async ()=>{
        const {data} = await axiosInstance.get("/api/Category");
    }

    useEffect(() => {
     getCategory()
    }, [])
    
  return <>
  <div>

  </div>
  </>
}

export default Home