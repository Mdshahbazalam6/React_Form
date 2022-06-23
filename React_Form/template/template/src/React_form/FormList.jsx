import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import './form.css'

const FormList = () => {
    const[arr,setArr]=useState([])

    const get = async() =>{
       try {
        let res=await fetch(`http://localhost:3001/form`)
        let data=await res.json()
        setArr(data)
       } catch (error) {
        console.log(error)
       }
    }
    console.log(arr)
    useEffect(()=>{
       get()
    },[])
  return (
    <>
    <h1>Employee List</h1>
   <div className='formBox'>
   {
      arr.map(({Name,Age,Adress,select,Number,checkBox,id})=>{
       return(
        <div>
        <h3> Name : {Name}</h3>
        <h3>Age : {Age}</h3>
        <h3>Address : {Adress}</h3>
        <h3>Post : {select}</h3>
        <h3>Salary : {Number}</h3>
        <h3>Marital Status : {checkBox}</h3>
    </div>
       )
      })
    }
   </div>
    </>
  )
}

export default FormList