import React, {useState} from 'react';
import * as Yup from 'yup';
import {userSchema} from'./SignInSchema';
import {Container,Grid} from '@material-ui/core';
import './style.css'
function Feedback (){
   const createUser = async (e) =>{
    e.preventDefault();
    let formData = {
       firstname: e.target[0].value,
         lastname: e.target[1].value,
         address: e.target[2].value,  
         country: e.target[3].value,
             email: e.target[4].value,
           phone:e.target[5].value
    };
    const isValid = await userSchema.isValid(formData);
    console.log(isValid); 
  
     }
     return(
          <>
          <Container className="feedback-form">
          <form onSubmit={createUser} className="feedback-form">
        <div>
          <label>First Name</label><br/>
            <input type="text" placeholder="Enter Your FirstName" required/>
          </div>
          <div className="form-group">
          <label>Last Name</label><br/>
            <input
              type="text"
              placeholder="Enter Your Lastname"
              required/>
          </div><br/>
          
          <div >
            <label>Address</label><br/>
            <textarea className="address"
              
              placeholder="Enter Your full portal Address"
              required/>
          </div>
          
          <div className="form-group">
            <label>Country</label><br/>
            <input
              type="text"
              placeholder="Enter Your Country"
              required/>
          </div>

          <div className="form-group">
            <label>Email</label><br/>
            <input
              type="text"
              placeholder="Enter Your Email"
              required/>
          </div>

          <div className="form-group">
            <label>Phone</label><br/>
            <input
              type="number"
              placeholder="Enter Your Phone Number"
              required/>
          </div><br/>
          <button className="btn">Submit Feedback</button>
        </form>
        </Container>
          </>
     )
}
export default Feedback;