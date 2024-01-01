import React, { useEffect, useState } from "react"
import Slider from "react-slick"
import { lifestyle } from "../../../../dummyData"
import Heading from "../../../common/heading/Heading"
import axios from "axios"


import "../Ppost/ppost.css"
import { Link } from "react-router-dom"
//copy ppost code
const Life = () => {
  const [news,setNews]=useState([])

  useEffect(()=>{
    fetchNews()
   },[])

  const fetchNews=async()=>{
    try {
      const newss=await axios.get('http://localhost:4000/user/news'); 
    
     
      setNews(newss.data)
    } catch (error) {
      
    }
   }

const serverPublic="https://res.cloudinary.com/dkeb469sv/image/upload/v1703658754/"


  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
    ],
  }
  return (
    <>
      <section className='popularPost life'>
        <Heading title='other news' />
        <div className='content'>
          <Slider {...settings}>
            {news.map((val) => {
              return (
                <div className='items'>
      <Link to={`/detailnews/${val._id}`}>

                  <div className='box shadow'>
                    <div className='images'>
                      <div className='img'>
                        {/* <img src={val.cover} alt='' /> */}
                        <img src={serverPublic+val.images[0]} alt='image' style={{height:"150px",objectFit:"cover",marginTop:"20px"}} />
                      </div>
                      <div class='category category1'>
                        <span>{val.catgeory}</span>
                      </div>
                    </div>
                    <div className='text'>
                      <h1 className='title'>{val.title.slice(0, 40)}...</h1>
                      <div className='date'>
                        <i class='fas fa-calendar-days'></i>
                        <label>{val.date}</label>
                      </div>
                    </div>
                  </div>
          </Link>

                </div>
              )
            })}
          </Slider>
        </div>
      </section>
    </>
  )
}

export default Life