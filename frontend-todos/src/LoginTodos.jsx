import React from 'react'
import { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import Toasters from './Toast'
import { useContext } from 'react'
import Auth from './Authoto'
export default function LoginTodos() {
    const {name} =useContext(Auth)
    const {toast} =useContext(Toasters)
    const navi =useNavigate()
    const [state,setState] =useState({
        email:'',
        password:''
    })
    const handler =async()=>{
        const {email,password} =state
        const checkingDb =await axios.post('http://localhost:3000/login',{email,password})
        if(checkingDb.data =='password Worng'){
            return toast.error(checkingDb.data)
        }else if(checkingDb.data =='Register first'){
            return toast.error(checkingDb.data)
        }else{
            localStorage.setItem('token',checkingDb.data[1])
            toast.success(checkingDb.data[0])
            navi('/view',{replace:false})
            name(email.split('@')[0])
        }
    }
    const regi =()=>{
        navi('/Register')
    }
    return (
        <div className='main-container'>
            <div>
                <div>
                    <h1>Email :</h1>
                    <input type="email" onChange={(e) => setState({ ...state, email: e.target.value })} />
                </div>
                <div>
                    <h1>Password :</h1>
                    <input type="password" onChange={(e) => setState({ ...state, password: e.target.value })} />
                </div>
                <div>
                    <button onClick={handler}>Register</button>
                </div>
                <div>
                    <h4>need an account? <span className='btn-reLg' style={{color:'blue'}} onClick={regi}>Register Page</span></h4>
                </div>
            </div>
        </div>
    )
}
