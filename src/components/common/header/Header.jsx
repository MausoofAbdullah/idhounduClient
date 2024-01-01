import React, { useEffect, useState } from "react"
import Head from "./Head"
import "./header.css"
import axios from "axios"
import { Link } from "react-router-dom"

const Header = () => {
  // const API= axios.create({baseURL:"http://localhost:4000"})
  const API= axios.create({baseURL:"https://idondusuddi.onrender.com"})
  const [navbar, setNavbar] = useState(false)
  const [cat,setCat]=useState([])
 
useEffect(()=>{
  fetchcat()
},[])

const fetchcat=async()=>{
  try {
    const newss=await API.get('/user/categories'); 
   setCat(newss.data)
    console.log(newss,'new')
  } catch (error) {
    
  }
}
  return (
    <>
      <Head />
      <header>
        <div className='container paddingSmall'>
          <nav>
            <ul className={navbar ? "navbar" : "flex"} onClick={() => setNavbar(false)}>
            <li>
              <Link to='/'>Home</Link>
            </li>
            {cat.map((category) => (
              <li key={category._id}>
                <Link to={`/${category.category.toLowerCase()}`}>{category.category}</Link>
              </li>
            ))}
            </ul>
            <button className='barIcon' onClick={() => setNavbar(!navbar)}>
              {navbar ? <i className='fa fa-times'></i> : <i className='fa fa-bars'></i>}
            </button>
          </nav>
        </div>
      </header>
    </>
  )
}

export default Header