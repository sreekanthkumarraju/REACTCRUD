import React, { useEffect, useState } from "react";
import { Link, useParams,useNavigate } from "react-router-dom";
import axios from 'axios'

export default function Profile(){
   
    const {id}=useParams()
    const navigate=useNavigate()
    const[user,setUsers]=useState({})

    const getUsers=()=>{
     axios.get(`https://629ef6b78b939d3dc28b227c.mockapi.io/usersapi/${id}`)
     .then((res)=>{
         setUsers(res.data)
         console.log(res.data)
         console.log(user)
     })
     .catch((error)=>{
         console.log(error)
     })
     }
 
   useEffect(()=>{
        getUsers()
   },[])
        
    


    const deleteUser=(id)=>{
        axios.delete(`https://629ef6b78b939d3dc28b227c.mockapi.io/usersapi/${id}`)
        .then((response)=>{
            navigate('/users')
        })
        .catch((err)=>{
            console.log(err)
        })
    }
     

    
    return(
        <div>
               <h1 style={{"textAlign":"left"}}>{user.firstName}'s Profile</h1>
            
            <table className="profiletable">
                <tr id='collapse'>
                  <td id='border1'>
             <thead>
                <tr id='border'>
                    <th>First Name</th>
                </tr>
                <tr id='border'>
                    <th>Last Name </th>
                </tr>
                <tr id='border'>
                    <th>Email</th>
                </tr>
                <tr id='border'>
                    <th>Phone Number</th>
                </tr>
                <tr id='border'>
                    <th>City</th>
                </tr>
                <tr id='border'>
                    <th>State</th>
                </tr>
              </thead>
              </td>  
              <td id='border1'>
              <tbody>
                  <tr id='border'>
                      <td>{user.firstName}</td>
                  </tr>
                  <tr id='border'>
                      <td>{user.lastName}</td>
                  </tr>
                  <tr id='border'>
                      <td>{user.Email}</td>
                  </tr>
                  <tr id='border'>
                      <td>{user.phoneNumber}</td>
                  </tr>
                  <tr id='border'>
                      <td>{user.city}</td>
                  </tr>
                  <tr id='border'>
                      <td>{user.state}</td>
                  </tr>
                  
              </tbody>
              </td>

              </tr>
              <tr>
                  <td id='border1'>
                      <Link key={user.id} to={`/edit-user/${user.id}`}>
                        <button type='button' id='profilebtn'><i class="fa-solid fa-pen fa-fw"></i>Edit Profile</button>
                      </Link>
                  </td>
                  <td id='border1'>
                     <button type='button' id='deletebtn'onClick={()=>{deleteUser(user.id);}}><i class="fa-solid fa-trash-can fa-fw"  ></i>Delete Profile</button>
                  </td>
              </tr>
            
             
            </table> 
            
           
        </div>
    )
}