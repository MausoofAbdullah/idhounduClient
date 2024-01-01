import React from 'react';
import "./Adminhome.css"
import { Link } from 'react-router-dom';
import AdminList from './adminnewList/AdminList';
import Admin from './adminaddnews/Admin';
import AddCategory from './category/AddCategory';

const AdminHome = () => {
  // Dummy data for news list
 

  return (
    <>
    <div className="admin-home-container">
      {/* Sidebar */}
      <div className="sidebar">
        <h2>Admin Panel</h2>
        <ul>
       
        
          <li><Link to='/admin'>home</Link></li>
          <li><Link to='/addnews'>Add News</Link></li>
          <li> <Link to='/addcategory'>Add category</Link></li>
          <li> <Link to='/addarticles'>Add articles</Link></li>
        </ul>
      </div>

      {/* Main Body */}
    
    </div>
     <AdminList/>
     
    

    </>
  );
};

export default AdminHome;