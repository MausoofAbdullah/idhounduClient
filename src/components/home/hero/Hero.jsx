// import React, { useState } from "react"
// import { hero } from "../../../dummyData"
// import "./hero.css"
// import Card from "./Card"

// const Hero = () => {
//   const [items, setIems] = useState(hero)

//   return (
//     <>
//       <section className='hero'>
//         <div className='container'>
//           {items.map((item) => {
//             return (
//               <>
//                 <Card key={item.id} item={item} />
//               </>
//             )
//           })}
//         </div>
//       </section>
//     </>
//   )
// }

// export default Hero
import React, { useEffect, useState } from "react"
import { hero } from "../../../dummyData"
import "./hero.css"
import Card from "./Card"
import axios from "axios"


const Hero = () => {
  const API= axios.create({baseURL:process.env.REACT_APP_API_CALL})

  const [items, setIems] = useState(hero)
  const [news, setNews] = useState(hero)
  
  const serverPublic="https://res.cloudinary.com/dkeb469sv/image/upload/v1703658754/"

  useEffect(()=>{
    fetchNews()
   },[])

  const fetchNews=async()=>{
    try {
      const newss=await API.get('user/article'); 
    
     
      setNews(newss.data)
    } catch (error) {
      
    }
   }
   

  return (
    <>
      <section className='hero'>
        <div className='container'>
          {news.map((item) => {
            return (
              <>
                <Card key={item._id} item={item} images={serverPublic+item.images?.[0]} />
              </>
            )
          })}
        </div>
      </section>
    </>
  )
}

export default Hero