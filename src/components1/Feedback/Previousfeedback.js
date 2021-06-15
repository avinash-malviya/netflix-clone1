import React, { useState } from "react";
import axios from 'axios'
import { useHistory } from "react-router-dom";

const AddUser = () => {
  let history = useHistory();
  const [user, setUser] = useState({
    firstname: "", 
    lastname: "",
    address: "",  
    country: "",
    email: "",
    phone:""
  });

  const[record,setRecord] = useState([]);

  const { firstname, lastname, address, country, email,phone } = user;
  const onInputChange = e => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const onSubmit = async e => {
    e.preventDefault();
    	if(user.email && user.phone){
    		    console.log(user);

      setUser({firstname : "",lastname : "",address : "",country : "",email:"",phone:""});

  }
   else{
	 	alert("please fill email and phone");
	     }
	 }

  return (
    <div className="container">
      <div className="w-75 mx-auto shadow p-5">
        <h4 className="text-center mb-4">Thank You so much for taking the time!</h4>
       <p className="text-center mb-4"> Please provide the below details</p>
        <form onSubmit={e => onSubmit(e)}>
          <div className="form-group">
  
            <label>First Name</label>
            <input
              type="text"
              className="form-control form-control-md"
              placeholder="Enter Your FirstName"
              name="firstname"
              value={firstname}
              onChange={e => onInputChange(e)}
            />
          </div>
          <div className="form-group">
          <label>Last Name</label>
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Enter Your Lastname"
              name="lastname"
              value={lastname}
              onChange={e => onInputChange(e)}
            />
          </div>
          
          <div className="form-group">
            <label>Address</label>
            <textarea
              className="form-control form-control-lg"
              placeholder="Enter Your Address"
              name="address"
              value={address}
              onChange={e => onInputChange(e)}
            />
          </div>
          
          <div className="form-group">
            <label>Country</label>
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Enter Your Country"
              name="country"
              value={country}
              onChange={e => onInputChange(e)}
            />
          </div>

          <div className="form-group">
            <label>Email</label>
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Enter Your Email"
              name="email"
              value={email}
              onChange={e => onInputChange(e)}
            />
          </div>

          <div className="form-group">
            <label>Phone</label>
            <input
              type="number"
              className="form-control form-control-lg"
              placeholder="Enter Your Phone Number"
              name="phone"
              value={phone}
              onChange={e => onInputChange(e)}
            />
          </div>
          <button className="btn btn-danger btn-block">Submit Feedback</button>
        </form>
      </div>
    </div>
  );
};

export default AddUser;