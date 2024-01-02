import React, { useState } from 'react'
import "./AddCategory.css"
import axios from 'axios';
import { Link } from 'react-router-dom';

const AddCategory = () => {
  const API= axios.create({baseURL:process.env.REACT_APP_API_CALL})

    const [category, setCategory] = useState('');

    const handleAddCategory = async (e) => {
      e.preventDefault();
      console.log(category, 'category');
      
      // Assuming you have an endpoint for adding categories (adjust the URL accordingly)
      const response = await API.post('/user/categories',  {category });
      
    
  
      // You may add additional logic or update the UI based on the response
      
      // Clear the form
      setCategory('');
    };
  return (
    <div>
          <div className="sidebar">
        <h2>Admin Panel</h2>
        <ul>
       
        
          <li><Link to='/admin'>home</Link></li>
          <li><Link to='/addnews'>Add News</Link></li>
          <li> <Link to='/addcategory'>Add category</Link></li>
          <li> <Link to='/addarticles'>Add articles</Link></li>

        </ul>
      </div>
       <h2>Add Category</h2>
      <form onSubmit={handleAddCategory}>
        <div>
          <label htmlFor="category">Category:</label>
          <input
            type="text"
            id="category"
            name="category"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          />
        </div>
        <button type="submit">Add Category</button>
      </form>
    </div>
  )
}

export default AddCategory
