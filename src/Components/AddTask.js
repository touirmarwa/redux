import React from 'react'
import {Button} from 'react-bootstrap'
import {useDispatch } from "react-redux"
import {useState} from "react"
import { handelAdd } from "../Redux/Action"
const AddTask=()=>{
    const dispatch = useDispatch()
    const [title,setTitle]=useState('')
    const [description,setDescription]=useState('')
    return(
        <div className='card'>
            <input onChange={(e)=>setTitle(e.target.value)} type='Text' placeholder="Add items..."/>
            <Button style={{width: '15%', alignSelf: 'center', margin: '10px', boxShadow: '0 8px 16px 0 rgba(0,0,0,0.2), 0 6px 20px 0 rgba(0,0,0,0.19)'}} onClick={()=>dispatch(handelAdd({title,id:Math.random(),description,isDone: false}))} variant="secondary">Add</Button>{' '}
        </div>
    )
}

export default AddTask