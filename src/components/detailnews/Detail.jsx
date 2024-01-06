import React, { useEffect, useState } from 'react'

import axios from "axios"
import { format } from "timeago.js"
import "./Detail.css"
import { useParams } from 'react-router-dom'
import {
    FacebookShareButton,
  WhatsappShareButton,
} from "react-share"
import {
 
  FacebookIcon,
  
  WhatsappIcon,
} from "react-share";
import { Helmet } from 'react-helmet'


const Detail = () => {
  const API= axios.create({baseURL:process.env.REACT_APP_API_CALL})

  const [latestNews, setLatestNews] = useState(null);
    
    const [ogpTags,setOgpTags]=useState([])
    const [news,setNews]=useState([])
    const [item,setItem]=useState([])
    const { id } = useParams()
    console.log(id,"e")
   
  useEffect(() => {
    const fetchNews = async () => {
      try {
        const newss = await API.get(`/user/detailnews/${id}`);
        setLatestNews(newss.data);
      } catch (error) {
        console.log(error, 'err');
      }
    };

    fetchNews();
  }, [id]);

  useEffect(() => {
    if (latestNews) {
      setNews(latestNews);

      <Helmet>

      <meta property="og:title" content={news.title} />
         <meta property="og:description" content={news.body} />
         <meta property="og:image" content={serverPublic+news.images?.[0]} />
         <title>{news.title}</title>
       </Helmet>
         

    }
  }, [latestNews]);

    // useEffect(()=>{
      
    //    fetchNews();
    //    if (news) {
    //     document.head
    //       .querySelector('meta[property="og:title"]')
    //       .setAttribute('content', news.title);
    
    //     document.head
    //       .querySelector('meta[property="og:description"]')
    //       .setAttribute('content', news.body?.slice(0, 150));
    
    //     document.head
    //       .querySelector('meta[property="og:image"]')
    //       .setAttribute('content', serverPublic + news.images?.[0]);
    //       document.title = news.title
    //   }
     
      

        
    //    },[id])
    // // console.log(ogpTags,"outside")
      const fetchNews=async()=>{
        try {
          const newss=await API.get(`/user/detailnews/${id}`); 
        //   const item = newss.find((items) => items.id === parseInt(id))
        //  setItem(item)
        console.log(newss,'newss')
        setNews(newss.data)
        
      
       
        } catch (error) {
            console.log(error,'err')
        }
    }
    const getShareableLink = (id) => {
        // Replace this with your logic to generate the shareable link
        return `${process.env.REACT_APP_BASE_URL}/detailnews/${id}`;
      };
    
      // Function to handle sharing on different platforms
      const shareOnFacebook = (id) => {
        const shareLink = getShareableLink(id);
        // Implement logic to open Facebook share dialog with shareLink
        window.open(`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareLink)}`, '_blank');
      };
    
      const shareOnWhatsapp = (id) => {
        const shareLink = getShareableLink(id);
        // Implement logic to open WhatsApp share dialog with shareLink
        window.open(`https://wa.me/?text=${encodeURIComponent(shareLink)}`, '_blank');
      };
    

    
const serverPublic="https://res.cloudinary.com/dkeb469sv/image/upload/v1703658754/"
  return (
   <>
     <section className='popular'>
      <Helmet>

     <meta property="og:title" content={news.title} />
        <meta property="og:description" content={news.body} />
        <meta property="og:image" content={serverPublic+news.images?.[0]} />
        <title>{news.title}</title>
      </Helmet>
        

      <div className='main'>
     
        <div className="news-article" key={news._id}>
          <h1>{news.title}</h1>
          <div className="news-date">
            <p>Published on: <span>{ new Date(news.date).toLocaleDateString(undefined,{ weekday: 'short', month: 'short', day: 'numeric', year: 'numeric' })}</span> {format(news.createdAt)}</p>
           
          </div>
          <div className="news-content">
            <img style={{ maxWidth:"80%",height:"400px",objectFit:"cover" }}
              src={serverPublic+news.images?.[0]} // Use the image URL from your news data
              alt="News Image"
              className="news-image"
            /> 
            <p>{news.body}</p>
         
            <p>{news.secondparagraph}</p>
        
           
            {/* Add additional content as needed */}
          </div>
          
        <i class="fa-solid fa-share-from-square" style={{fontSize: '1.5em'}}></i><span>Share</span>
<FacebookShareButton url={`${process.env.REACT_APP_BASE_URL}/detailnews/${id}`}>
  <FacebookIcon round ={true}/>
</FacebookShareButton>
<WhatsappShareButton url={`${process.env.REACT_APP_BASE_URL}/detailnews/${id}`} title={news.title} imageUrl={serverPublic+news.images?.[0] }>
  <WhatsappIcon/>
</WhatsappShareButton>

{/* <i class="fa-brands fa-whatsapp" style={{ color: 'green', fontSize: '2em', marginLeft:"10px" }} onClick={()=>shareOnWhatsapp(news._id)} ></i><span className="wname">whatsapp</span>
<i class="fa-brands fa-facebook" style={{  fontSize: '2em', marginLeft:"10px" }} onClick={()=>shareOnFacebook(news._id)}></i><span>Facebook</span> */}
        </div>
     
    </div>
        
    
      </section>
   </>
  )
}

export default Detail
