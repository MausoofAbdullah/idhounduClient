import React, { useEffect, useState } from "react"
import { tpost } from "../../../../dummyData"
import Heading from "../../../common/heading/Heading"
import { format } from "timeago.js"
import axios from "axios"


import "./tpost.css"
import Pagination from "../../../admin/pagination/Pagination"
import { Link } from "react-router-dom"

const Tpost = () => {
  const API= axios.create({baseURL:process.env.REACT_APP_API_CALL})

  const [news,setNews]=useState([])
  const [currentPage,setCurrentPage]=useState(1)
  const [newsPerPage,setNewsPage]=useState(2)



const serverPublic="https://res.cloudinary.com/dkeb469sv/image/upload/v1703658754/"
useEffect(()=>{
  fetchNews()
 },[])

const fetchNews=async()=>{
  try {
    const newss=await API.get('/user/news'); 
  
   
    setNews(newss.data)
  } catch (error) {
    
  }
 }
 const handleItemClick = () => {
  // Scroll to the top of the page
  window.scrollTo({ top: 0, behavior: 'smooth' });
};

 const maxChars = 150;
 // Function to truncate the text
 const truncateText = (text, maxChars) => {
   if (text.length <= maxChars) {
     return text;
   }
   return text.slice(0, maxChars) + '...';
 };
 const indexOfLastNews=currentPage*newsPerPage
 const indexOfFirstNews=indexOfLastNews-newsPerPage
 const currentNews=news.slice(indexOfFirstNews,indexOfLastNews)

 //change page
 const paginate=(pageNumber)=>setCurrentPage(pageNumber)

  return (
    <>
      <section className='tpost'>
        <Heading title='Recent News' />
        {currentNews.map((val) => {
          return (
      <Link to={`/detailnews/${val._id}`} onClick={handleItemClick} >

            <div className='box flexSB'>
              <div className='img'>
                <img src={serverPublic+val.images[0]} alt='' />
              </div>
              <div className='text'>
                <h1 className='title'>{val.title.slice(0, 35)}...</h1>
                <span>{format(val.createdAt)}</span>
              </div>
            </div>
          </Link>

          )
        })}
      </section>
      <Pagination currentPage={currentPage} newsPerPage={newsPerPage} totalNews={news.length} paginate={paginate} />
    </>
  )
}

export default Tpost