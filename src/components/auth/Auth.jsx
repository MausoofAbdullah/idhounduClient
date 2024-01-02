import React, { useState } from 'react';
import axios from 'axios';

const Auth = () => {
  const API= axios.create({baseURL:process.env.REACT_APP_API_CALL})

  const [formData, setFormData] = useState({
    username: '',
    firstname: '',
    lastname: '',
    password: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Make an API request to your backend for user registration
      const response = await API.post('/user/register', formData);
      console.log(response.data); // You might want to redirect or show a success message
    } catch (error) {
      console.error('Signup failed:', error.response.data.message);
    }
  };

  return (
    <div>
      <h2>Signup</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="username">Username:</label>
        <input type="text" id="username" name="username" value={formData.username} onChange={handleChange} required />

        <label htmlFor="firstname">First Name:</label>
        <input type="text" id="firstname" name="firstname" value={formData.firstname} onChange={handleChange} required />

        <label htmlFor="lastname">Last Name:</label>
        <input type="text" id="lastname" name="lastname" value={formData.lastname} onChange={handleChange} required />

        <label htmlFor="password">Password:</label>
        <input type="password" id="password" name="password" value={formData.password} onChange={handleChange} required />

        <button type="submit">Signup</button>
      </form>
    </div>
  );
};

export default Auth;
