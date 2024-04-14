import React, { useState } from 'react'
import { AddUsersList } from '../../store';

const AddUsers = () => {
  const[user,setUser]=useState(
    {firstname: '',lastname: '',email: '',password: ''}
  );
  
  const {AddUser}= AddUsersList();
  const add =(e)=>{
    console.log(user,'user')
    e.preventDefault();
    if (!user.firstname || !user.lastname || !user.email || !user.password) {return}
    else{
      AddUser(user);
      setUser({
        firstname: '',
        lastname: '',
        email: '',
        password: ''
      });
    }
  }

  const handleInputChange=(e)=>{ 
    const { name, value } = e.target;
    setUser(prevUser => ({
      ...prevUser,
      [name]: value
    }));
  }
  return (
    <div>
    <form  onSubmit={(e)=>add(e)}>
      <div className="mb-3">
        <label htmlFor="firstname" className="form-label">First Name</label>
        <input 
          type="text" 
          className="form-control" 
          id="firstname" 
          name="firstname" 
          aria-label="First Name"
          value={user.firstname}
          onChange={handleInputChange}
          required
        />
      </div>
      <div className="mb-3">
        <label htmlFor="lastname" className="form-label">Last Name</label>
        <input 
          type="text" 
          className="form-control" 
          id="lastname" 
          name="lastname" 
          aria-label="Last Name"
          value={user.lastname}
          onChange={handleInputChange}
          required
        />
      </div>
      <div className="mb-3">
        <label htmlFor="email" className="form-label">Email Address</label>
        <input 
          type="email" 
          className="form-control" 
          id="email" 
          name="email" 
          aria-label="Email Address"
          value={user.email}
          onChange={handleInputChange}
          required
        />
        <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
      </div>
      <div className="mb-3">
        <label htmlFor="password" className="form-label">Password</label>
        <input 
          type="password" 
          className="form-control" 
          id="password" 
          name="password"  
          aria-label="Password"
          value={user.password}
          onChange={handleInputChange}
          required
        />
      </div>
      <div className="mb-3 form-check">
        <input type="checkbox" className="form-check-input" id="exampleCheck1" />
        <label className="form-check-label" htmlFor="exampleCheck1">Check me out to add</label>
      </div>
      <button type="submit" className="btn btn-primary">Add</button>
    </form>
  </div>
  )
}

export default AddUsers