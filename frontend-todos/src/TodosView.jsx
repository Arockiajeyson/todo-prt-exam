import React, { useContext } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { useEffect } from 'react'
import { useState } from 'react'
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';
import Auth from './Authoto'
export default function TodosView() {
    const {state1} =useContext(Auth)
    const [state, setState] = useState([])
    const [history,setHistory] =useState([{pro:'',time:''}])
    const nav = useNavigate()
    const logout = () => {
        localStorage.clear()
        nav('/', { replace: true })
    }
    const newAdd = () => {
        nav('/add')
    }
    useEffect(() => {
        const da = async () => {
            const headers = { 'authorization': localStorage.getItem('token') }
            const geting = await axios.post('http://localhost:3000/uploading/getingTodos', null, { headers })
            setState(geting.data)
            const geting2 = await axios.post('http://localhost:3000/uploading/time', null, { headers })
            setHistory(geting2.data)
        }
        da()
    }, [state])
    const actions =async(idx,action)=>{
        const headers = { 'authorization': localStorage.getItem('token') }
        const changeAction =await axios.post('http://localhost:3000/uploading/updatingAc',{idx,action},{headers})
    }
    const pushing =(e,time)=>{
        setHistory([{...history,pro:e,time:time}])
    }
    return (
        <div>
            <div className='use-div'>
                <h3 className='userName'>{state1}</h3>
            </div>
            <div className='his-view-todo'>
                <div className='history'>
                    <h3>ToDo List</h3>
                    <h5>History</h5>
                    {history.map((e)=>{
                        return(
                            <div className='hist'>
                                <div>{e.pro}</div>
                                <div style={{marginLeft:'50px'}}>{e.time}</div>
                            </div>
                        )
                    })}
                    <h4 onClick={logout} className='logout'>Logout</h4>
                </div>
                <div>
                    <div className='new-add'>
                        <button style={{ width: '150px' }} className='new-btn' onClick={newAdd}>Add New Activity</button>
                    </div>
                    {state.length == 0 ?
                        <div className='boxes'> <Box sx={{ display: 'flex' }}>
                            <CircularProgress />
                        </Box></div> :
                        <table>
                            <tr>
                                <th>Activity</th>
                                <th>Status</th>
                                <th>Time Taken</th>
                                <th>Action</th>
                            </tr>
                            {state.map((e)=>{
                                return(
                                    <tr>
                                        <td>{e.activity}</td>
                                        <td>{e.status}</td>
                                        <td>{ e.status =='Completed' ?e.time:''}</td>
                                        <td  style={{cursor:'pointer'}}>{e.status =="Ongoing"?<div>
                                            <span onClick={()=>{actions(e._id,e.time)}} style={{color:'red'}}>End</span> <span style={{color:'yellow'}} onClick={()=>actions(e._id,'Pause')}>Pause</span>
                                        </div>:<span onClick={()=>actions(e._id,'start')}>{e.action}</span>}</td>
                                    </tr>
                                )
                            })}
                        </table>}
                </div>
            </div>
        </div>
    )
}
