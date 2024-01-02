import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const API= axios.create({baseURL:process.env.REACT_APP_API_CALL})


  
    
  const [formData, setFormData] = useState({
    username: '',
    password: '',
  });
  const navigate = useNavigate()

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Make an API request to your backend for user login
      const response = await API.post('/user/login', formData);
    //   console.log(response.data,"token"); // You might want to redirect or manage user authentication state
      localStorage.setItem('token', response.data.token);
      navigate('/admin')
    } catch (error) {
      console.error('Login failed:', error.response.data.message);
    }

  };

  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="username">Username:</label>
        <input type="text" id="username" name="username" value={formData.username} onChange={handleChange} required />

        <label htmlFor="password">Password:</label>
        <input type="password" id="password" name="password" value={formData.password} onChange={handleChange} required />

        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;