
import React, { Profiler, useEffect,useState } from "react";
import {Routes,Route} from 'react-router-dom'
import CreateUser from "./CreateUser";
import Dashboard from "./Dashboard";
import Users from "./Users";
 import axios from 'axios';
 import Profile from "./Profile";
 import EditUser from "./EditUser";

export default function Body(){
    const[users,setUsers]=useState({})

       const getUsers=()=>{
        axios.get("https://629ef6b78b939d3dc28b227c.mockapi.io/usersapi")
        .then((res)=>{
            setUsers(res.data)
            console.log(res.data)
            console.log(users)
        })
        .catch((error)=>{
            console.log(error)
        })
        }
    
      useEffect(()=>{
           getUsers()
      },[])
      const getUserById=(id)=>
      {
           return users.find(user=>user.id===id)
      }

    return(
       
            <Routes>
                <Route path='/dashboard'element={<Dashboard/>}></Route>   
                <Route path="/create-user"    element={<CreateUser/>}></Route>
                <Route path='/users' element={<Users/>}></Route>
                <Route path='/profile/:id' element={<Profile getUserById={getUserById}/>}></Route>
                <Route path='/edit-user/:id' element={<EditUser getUserById={getUserById}/>}></Route>
            </Routes>
       
    )
}