import React, { useEffect, useState } from "react"
import { Helmet } from "react-helmet";
import "./Popular.css"
import axios from "axios"
import { format } from "timeago.js"
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShare, faWhatsapp } from '@fortawesome/free-solid-svg-icons';



import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import { popular } from "../../../../dummyData"
import Heading from "../../../common/heading/Heading"
import Pagination from "../../../admin/pagination/Pagination"
import { Link } from "react-router-dom"

const Popular = () => {
  const API= axios.create({baseURL:process.env.REACT_APP_API_CALL})
 

  const [currentPage,setCurrentPage]=useState(1)
  const [news,setNews]=useState([])
  const [newsPerPage,setNewsPage]=useState(2)
  const [article, setArticle] = useState(null);

const serverPublic="https://res.cloudinary.com/dkeb469sv/image/upload/v1703658754/"



  const indexOfLastNews=currentPage*newsPerPage
  const indexOfFirstNews=indexOfLastNews-newsPerPage
  const currentNews=news.slice(indexOfFirstNews,indexOfLastNews)

  //change page
  const paginate=(pageNumber)=>setCurrentPage(pageNumber)
  // const settings = {
  //   className: "center",
  //   centerMode: false,
  //   infinite: true,
  //   centerPadding: "0",
  //   slidesToShow: 2,
  //   speed: 500,
  //   rows: 4,
  //   slidesPerRow: 1,
  //   responsive: [
  //     {
  //       breakpoint: 800,
  //       settings: {
  //         slidesToShow: 1,
  //         slidesToScroll: 1,
  //         rows: 4,
  //       },
  //     },
  //   ],
  // }
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
   

   const maxChars = 150;
  // Function to truncate the text
  const truncateText = (text, maxChars) => {
    if (text.length <= maxChars) {
      return text;
    }
    return text.slice(0, maxChars) + '...';
  };
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

  // const shareOnWhatsapp = (id) => {
  //   const shareLink = getShareableLink(id);
  //   // Implement logic to open WhatsApp share dialog with shareLink
  //   window.open(`https://wa.me/?text=${encodeURIComponent(shareLink)}`, '_blank');
  // };

  const handleLinkClick = async(articleId) => {
  

    const shareLink = getShareableLink(articleId);
    // Implement logic to open WhatsApp share dialog with shareLink
    window.open(`https://wa.me/?text=${encodeURIComponent(shareLink)}`, '_blank');
  };

  return (
    <>
     
      <section className='popular'>
   
     
      <div>
      {/* <Helmet>
                <meta property="og:title" content="Updated!!" />
            </Helmet> */}
      {currentNews.map((article) => (
        <div className="news-article" key={article._id}>
      {/* {document.head.querySelector('meta[property="og:title"]').setAttribute('content', article.title)}
              {document.head.querySelector('meta[property="og:description"]').setAttribute('content', article.body.slice(0,150))}
              {document.head.querySelector('meta[property="og:image"]').setAttribute('content', serverPublic + article.images[0])} */}
          <Link to={`/detailnews/${article._id}`}  >
          <h1>{article.title}</h1>
          <div className="news-content">
            <p>{truncateText(article.body,maxChars)}</p>
           
            <img
              src={serverPublic+article.images[0]} // Use the image URL from your news data
              alt="News Image"
              style={{width:"80%",height:"300px",objectFit:"cover",marginTop:"20px"}}
            />
        
           
            {/* Add additional content as needed */}
          </div>
          <div className="news-date">
            <p>Published on: <span>{ new Date(article.date).toLocaleDateString(undefined,{ weekday: 'short', month: 'short', day: 'numeric', year: 'numeric' })}</span> {format(article.createdAt)}</p>
           
          </div>
          </Link>
          {/* <FontAwesomeIcon icon={faShare} onClick={() => getShareableLink()} />
        <FontAwesomeIcon icon={faFacebook} onClick={shareOnFacebook} /> */}
        <i class="fa-solid fa-share-from-square" style={{fontSize: '1.5em'}}></i><span>Share</span>


        <i class="fa-brands fa-whatsapp" style={{ color: 'green', fontSize: '2em', marginLeft:"10px" }} onClick={()=>{
          // shareOnWhatsapp(article._id)
          handleLinkClick(article._id)
          }} ></i><span className="wname">whatsapp</span>
        <i class="fa-brands fa-facebook" style={{  fontSize: '2em', marginLeft:"10px" }} onClick={()=>{
          
          shareOnFacebook(article._id)
        }}></i><span>Facebook</span>
        
        </div>
        

        
      ))}
     
    </div>
    <Pagination currentPage={currentPage} newsPerPage={newsPerPage} totalNews={news.length} paginate={paginate} />
      </section>
    </>
  )
}

export default Popular