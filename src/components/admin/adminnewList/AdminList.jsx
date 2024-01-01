import React, { useEffect, useState } from 'react'
import axios from 'axios'
import "./AdminList.css"
import Pagination from '../pagination/Pagination'
const AdminList = () => {
  // const API= axios.create({baseURL:"http://localhost:4000"})
  const API= axios.create({baseURL:"https://idondusuddi.onrender.com"})

 const [news,setNews]=useState([])
 const [currentPage,setCurrentPage]=useState(1)
  const [newsPerPage,setNewsPage]=useState(6)

 useEffect(()=>{
  fetchNews()
 },[])

   //for pagination
   const indexOfLastNews=currentPage*newsPerPage
   const indexOfFirstNews=indexOfLastNews-newsPerPage
   const currentNews=news.slice(indexOfFirstNews,indexOfLastNews)
 
   //change page
   const paginate=(pageNumber)=>setCurrentPage(pageNumber)

 const fetchNews=async()=>{
  try {
    const newss=await API.get('/user/news'); 
    console.log(newss,"nwe")
    setNews(newss.data)
  } catch (error) {
    
  }
 }
    
      const handleDeleteNews=()=>{
        console.log('so')
      }
      const  handleEditNews=()=>{
        console.log("so")
      }
  return (
    <div>
        <div className="main-body">
        <h2>News List</h2>
        <table>
          <thead>
            <tr>
              <th>Title</th>
              <th>Date</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {currentNews.map(ne => (
              <tr key={ne.id}>
                <td>{ne.title}</td>
                <td>{ne.date}</td>
                <td>
                  <button onClick={() => handleEditNews(ne.id)}>Edit</button>
                  <button onClick={() => handleDeleteNews(ne.id)}>Delete</button>
                </td>
              </tr>
            ))}
            <Pagination newsPerPage={newsPerPage} totalNews={news.length} paginate={paginate} />
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default AdminList
