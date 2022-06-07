import React from "react";
import { Link } from "react-router-dom";

export default function SideBar()
{
    return(

        <div className="float-start border  w-25 bg-primary text-white sidebar" style={{"minHeight": "800vh ","margin-right":"32px"}}>
            
            <ul className="navbar-nav flex-column">
            
                 <li className="nav-item " style={{"paddingTop":"10px"}}>
                    <i className="fa-regular fa-face-laugh-wink fa-2xl" data-fa-transform="flip-v"></i>
                    <span>CRUD</span>
                 </li>
              
              <hr/>
               
                  <li className="nav-item" style={{"textAlign":"left","paddingTop":"10px"}}>
                    <Link to='/dashboard' >
                     <button className='text-white' style={{"border":"none","background":"none"}}>Dashboard</button>
                    </Link>  
                  </li>

                  <li className="nav-item" style={{"textAlign":"left","paddingTop":"20px"}}>
                    <Link to='/users' >
                     <button className='text-white' style={{"border":"none","background":"none"}}>List Users</button>
                    </Link>  
                  </li>

                  <li className="nav-item" style={{"textAlign":"left","paddingTop":"20px"}}>
                    <Link to='/create-user' >
                     <button className='text-white' style={{"border":"none","background":"none"}}>Create User</button>
                    </Link>  
                  </li>

                           

              <hr/>
  </ul>
  </div>
    )
}