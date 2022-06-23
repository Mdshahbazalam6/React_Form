import React from 'react'
import { useState,useEffect } from 'react'
import './form.css'

const Form = () => {
    const [data,setData]=useState({
      Name:``,
      Age:``,
      Adress:``,
      select:``,
      Number:``,
      checkBox:`No`
    })

    const[array,setArray]=useState([])

    const get = async() =>{
       try {
        let res=await fetch(`http://localhost:3001/form`)
        let data=await res.json()
        setArray(data)
       } catch (error) {
        console.log(error)
       }
    }
    console.log(array)
    useEffect(()=>{
       get()
    },[])


    const[arr,setArr]=useState([])
    const handleInput = (e) =>{
      let name=e.target.name
      let value=e.target.value
      if(value === 'on'){
        value='Yes'
      }
      // else if(value === 'off'){
      //   value='No'
      // }
      console.log(name,value)
      setData({...data,[name]:value})
    }
    const handleSubmit = (event) =>{
      event.preventDefault()
      console.log(data)
      arr.push(data)
      setArr(arr)
      fetch(` http://localhost:3001/form`,{
         method:"POST",
            body:JSON.stringify(data),
            headers :{
                "content-Type":"application/json"
            }
      })
      .then((res)=>{
        res.json().then((res)=>{
          console.log(res)
        })
      }).catch((error)=>{
        console.log(error)
      })
  //  setArr([...arr,data])
  setData({
    Name:``,
    Age:``,
    Adress:``,
    select:``,
    Number:``,
    checkBox:`No`
  })
   console.log(arr)
    }
  return (
    <>
    <form onSubmit={handleSubmit}>
        <input type="text" name="Name" id=""  placeholder='Enter Name' onChange={handleInput} value={data.Name}/>
        <br />
        <input type="text" name="Age" id=""  placeholder='Enter Age' onChange={handleInput} value={data.Age}/>
        <br />
        <input type="text" name="Adress" id=""  placeholder='Enter Address' onChange={handleInput} value={data.Adress}/>
        <br />
       <select name="select" id="" onChange={handleInput} value={data.select}>
        <option value="SDE1">SDE1</option>
        <option value="SDE2">SDE2</option>
       </select>
       <br />
       <input type="number" name="Number" id=""  placeholder='Enter Salary' onChange={handleInput} value={data.Number}/>
       <br />
      <label >Marital Status : 
      <input type="checkbox" name='checkBox' onChange={handleInput} />
      </label>
    
      <input type="submit" value='Submit form'onSubmit={handleSubmit} />
    </form>

    <h1>Employee List</h1>
    <div className='formBox'>
      <h2>Name</h2>
      <h2>Age</h2>
      <h2>Address</h2>
      <h2>Post</h2>
      <h2>Salary</h2>
      <h2>Maital Status</h2>
    </div>
   <div >
   {
      array.map(({Name,Age,Adress,select,Number,checkBox,id})=>{
       return(
        <div className='formBoxChild'>
        <h3>{Name}</h3>
        <h3>{Age}</h3>
        <h3>{Adress}</h3>
        <h3>{select}</h3>
        <h3>{Number}</h3>
        <h3>{checkBox}</h3>
    </div>
       )
      })
    }
   </div>
    </>
  )
}

export default Form