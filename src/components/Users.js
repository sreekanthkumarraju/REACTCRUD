import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate,Link } from "react-router-dom";


export default function Users(){
    const[users,setUsers]=useState([])

const getuserDetails=()=>{
    axios.get("https://629ef6b78b939d3dc28b227c.mockapi.io/usersapi")
    .then((res)=>{
        setUsers(res.data)

    })
    .catch((error)=>{
        console.log(error)
    })
}

useEffect( ()=>{
    getuserDetails()
},[]);

    return(
        
            <div className="container">
                 <p className="tablecaption">Users</p>
             <table className="userstable">
                  
                
                     <thead>
                       <tr id='tr'>
                           <th id='th'>Id</th>
                           <th id='th'>FirstName</th>
                           <th id='th'>LastName</th>
                           <th id='th'>Email</th>
                           <th id='th'>PhoneNumber</th>
                           <th id='th'>City</th>
                           <th id='th'>State</th>
                           <th id='th'>Actions</th>
                       </tr>
                     </thead>
                
              {  
                users.map((user)=>{
                    return(
                    
                    <tr key={user.id} id='tr'>    
                           <td id='td'>{user.id}</td>
                           <td id='td'>{user.firstName}</td>
                           <td id='td'>{user.lastName}</td>
                           <td id='td'>{user.Email}</td>
                           <td id='td'>{user.phoneNumber}</td>
                           <td id='td'>{user.city}</td>
                           <td id='td'>{user.state}</td>
                           <td id='td'>
                            <Link key={user.id} to={`/profile/${user.id}`}>
                             <span><i class="fa-solid fa-eye fa-fw"></i></span>
                             </Link> 
                           </td>
                   </tr>
                    )
                })
                
              }
              
              </table>
            </div>  
        
    )
}