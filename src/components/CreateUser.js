import React, { useEffect, useState } from 'react';
import {Formik,useFormik} from 'formik';
import axios from 'axios'
import {useNavigate} from 'react-router-dom'

export default function CreateUser({updateCount}){
    const[count,setCount]=useState(0)
    const navigate=useNavigate()

    const formik=useFormik({
        initialValues:{
            firstName:'',
            lastName:'',
            Email:'',
            phoneNumber:'',
            city:'',
            state:''
        },
        onSubmit:((values,{setSubmitting})=>{
          console.log(values)
             postData(values)
           setSubmitting(false)
           setCount(count+1)
           updateCount(count+1)
           
    
        })
    })

    const postData=(values)=>
    {
        axios.post("https://629ef6b78b939d3dc28b227c.mockapi.io/usersapi",formik.values)
        .then((response)=>{
             console.log(response)     
        })
        .catch((err)=>{
            console.log(err)
        }) 
        console.log(values)
         navigate('/users')
    }
   
    

    return(
        <div>
           <div>
               
             <form onSubmit={formik.handleSubmit} className='d-flex flex-column align-items-center' style={{"paddingTop":"50px"}}>
             <p className='createuser'>CreateUser</p>
                <label >FirstName</label>
                <input type="text" id='firstName' name='firstName' placeholder='firstName' onChange={formik.handleChange} value={formik.values.firstName} onBlur={formik.handleBlur}/>
                <label>LastName</label>
                <input type='text' id='lastName' name='lastName' placeholder='lastName' onChange={formik.handleChange} value={formik.values.lastName} onBlur={formik.handleBlur}/>
                <label>Email</label>
                <input type='email' id='Email' name='Email' placeholder='Email' onChange={formik.handleChange} value={formik.values.Email} onBlur={formik.handleBlur}/>
                <label>phone Number</label>
                <input type='number' id='phoneNumber' name='phoneNumber' placeholder='phoneNumber' onChange={formik.handleChange} value={formik.values.phoneNumber} onBlur={formik.handleBlur}/>
                <label>City</label>
                <input type='text' id='city' name='city'  placeholder='City'onChange={formik.handleChange} value={formik.values.city} onBlur={formik.handleBlur}/>
                <label>State</label>
                <input type='text' id='state' name='state' placeholder='State' onChange={formik.handleChange} value={formik.values.state} onBlur={formik.handleBlur}/>
                
                <button type='submit' id='button' disabled={formik.isSubmitting}>Submit</button>
             </form>
   
            </div>
        </div>
    )
}