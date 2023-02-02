import React from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'
import Toasters from './Toast'
import { useContext } from 'react'
export default function TodosPost() {
    const {toast} =useContext(Toasters)
    const [state,setState] =useState({activity:''})
    const nav =useNavigate()
    const addAc =async()=>{
        // console.log(activity)
        const headers={'authorization':localStorage.getItem('token')}
        const addAct =await axios.post('http://localhost:3000/uploading/posting',state,{headers})
        console.log(addAct.data)
        toast.success('activity has been posted')
        nav('/view',{replace:true})
    }
  return (
    <div className='main-container'>
        <div>
            <h1>Add Activities :</h1>
            <input type="text" onChange={(e)=>setState({...state,activity:e.target.value})} />
            <button onClick={addAc}>Add Activity</button>
        </div>
    </div>
  )
}
