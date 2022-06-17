
import React, { Profiler, useEffect,useState } from "react";
import {Routes,Route} from 'react-router-dom'
import CreateUser from "./CreateUser";
import Dashboard from "./Dashboard";
import Users from "./Users";
 import axios from 'axios';
 import Profile from "./Profile";
 import EditUser from "./EditUser";

export default function Body(){

      const [count,setCount]=useState(0)
 

    


    const updateCount=(value)=>{
        setCount(value)
    }

    return(
           <div>      
            <Routes>
                <Route path='/dashboard'element={<Users/>}></Route>   
                <Route path="/create-user"    element={<CreateUser updateCount={updateCount}/>}></Route>
                <Route path='/users' element={<Users count={count} />}></Route>
                <Route path='/profile/:id' element={<Profile />}></Route>
                <Route path='/edit-user/:id' element={<EditUser updateCount={updateCount}/>}></Route>
            </Routes>
            </div>
       
    )
}