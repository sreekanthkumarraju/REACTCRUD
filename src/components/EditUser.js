import React, { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';

export default function EditUser({getUserById}){
    const {id}=useParams()
    const[userdata,setUserdata]=useState(()=>{
        return getUserById(id)
    })
   
    const [selectedId,setId]=useState(id)
    const user=getUserById(id)
    const navigate=useNavigate()
     const handleChange=(event)=>{
        let name=event.target.name
          let value=event.target.value
          console.log(`name:${name},
                    value:${value}`)

         setUserdata((prevState)=>({
             ...prevState,
             [name]:value
         })  )         

     }
    const handleUpdate=(id)=>{
       
         console.log(id)

           axios.put(`https://629ef6b78b939d3dc28b227c.mockapi.io/usersapi/${id}`,userdata)
               .then((res)=>{
                     console.log(res)
                     navigate('/users')
               })
                 .catch((err)=>{
                  console.log(err)
                 })
     }
    return(
        <div>
             <form onSubmit={(event)=>event.preventDefault()}  className='d-flex flex-column align-items-center' style={{"paddingTop":"50px"}}>
                 <p className='edituser' >Edit User</p>
                 <label>FirstName</label>
                <input type="text" placeholder='firstName' name='firstName' id='firstName' value={userdata.firstName} onChange={handleChange}/>
                <label>LastName</label>
                <input type="text" placeholder='lastName' name='lastName' id='lastName' value={userdata.lastName} onChange={handleChange} />
                <label>Email</label>
                <input type="text" placeholder='Email' name='Email' id='Email' value={userdata.Email} onChange={handleChange}/>
                <label>phoneNumber</label>
                <input type="text" placeholder='phoneNumber' name='phoneNumber' id='phoneNumber' value={userdata.phoneNumber} onChange={handleChange}/>
                <label>City</label>
                <input type="text" placeholder='city' name='city' id='city' value={userdata.city} onChange={handleChange} />
                <label>State</label>
                <input type="text" placeholder='state'name='state' id='state' value={userdata.state} onChange={handleChange}/>
                
                <button type='button'id='editbutton' onClick={()=> handleUpdate(selectedId)}>Update</button>
            </form>
        </div>
    )
}