import React from 'react'
import { useState,useContext } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import Toasters from './Toast'
export default function Registertodos() {
    const {toast} =useContext(Toasters)
    const nav =useNavigate()
    const [state,setState] =useState({
        email:'',
        password:'',
        confirmPassword:''
    })
    const handler =async()=>{
        const {email,password,confirmPassword} =state
        if(password !== confirmPassword){
            return toast.error('password must match with confirmpassword')
        }else{
            const login =await axios.post('https://todos-back-prt.onrender.com/Register',{password,email})
            toast.success(login.data)
            nav('/')
        }
    }
    const login =()=>{
        nav('/')
    }
  return (
    <div className='main-container' style={{marginTop:'50px'}}>
        <h1 style={{textAlign:'center'}}>Register!!!!!!</h1>
        <div>
            <h1>Email :</h1>
            <input type="email" onChange={(e)=>setState({...state,email:e.target.value})}/>
        </div>
        <div>
            <h1>Password :</h1>
            <input type="password" onChange={(e)=>setState({...state,password:e.target.value})}/>
        </div>
        <div>
            <h1>Confirm Password :</h1>
            <input type="password" onChange={(e)=>setState({...state,confirmPassword:e.target.value})}/>
        </div>
        <div>
            <button onClick={handler}>Register</button>
        </div>
        <div>
            <h4 style={{textAlign:'center'}}><span className='btn-reLg' style={{color:'blue'}} onClick={login}>Login Page!!!</span></h4>
        </div>
    </div>
  )
}
