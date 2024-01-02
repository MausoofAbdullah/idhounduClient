import React, { useEffect, useState } from 'react'
import axios from "axios"
import "./Admin.css"
import { Link } from 'react-router-dom';

const Admin = () => {

  const API= axios.create({baseURL:process.env.REACT_APP_API_CALL})

    const [data, setData] = useState({
        title: "",
        category: "",
        date: "",
        body: "",
        images:[],
        imagetitle:"",
        secondparagraph:''
      });
      const [categories, setCategories] = useState([]);
      const [token,setToken]=useState("")

      useEffect(() => {
      
        fetchCategories();
    const istoken=localStorage.getItem("token")
    setToken(istoken)
        
    
      }, []);

      const fetchCategories = async () => {
        
        try {
            console.log("be")
            
            const response = await API.get('/user/categories');  // Adjust the URL accordingly
            console.log(response,'get')
            setCategories(response.data);
          } catch (error) {
            console.log(error,"err")
          }
       
      };
      console.log(token,"tokeniinadminpage")
      

      const handleChange = (e) => {
        if (e.target.name === 'images') {
          // Handle images separately since it's a file input
          setData({ ...data, images: e.target.files });
        } else {
          setData({ ...data, [e.target.name]: e.target.value });
        }
      };
  
    const handleAddNews =async (e) => {
        e.preventDefault()
        console.log(data,"some")
        const formData = new FormData();

        // Append the data fields
        formData.append('title', data.title);
        formData.append('category', data.category);
        formData.append('date', data.date);
        formData.append('body', data.body);
        formData.append('imagetitle',data.imagetitle)
        formData.append('secondparagraph',data.secondparagraph)
    
        // Append each selected image
        for (let i = 0; i < data.images.length; i++) {
          formData.append('images', data.images[i]);
        }
        const response= await API.post("/user", formData,{

          headers:{
            'Content-Type': 'multipart/form-data',
            'authorization':token
          }
        })
        console.log(response,'res')
        setData({title: "",
        category: "",
        date: "",
        body: "",
        imagetitle:"",
        secondparagraph:"",
      images:[]})
      // You can implement the logic to handle the addition of news here
      // For simplicity, let's just log the values to the console for now
     
      // You can also reset the form fields after handling the news addition
    
    }
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
      <h2>Add News</h2>
      <form onSubmit={handleAddNews}>
        <div>
          <label htmlFor="newsTitle">News Title:</label>
          <input
            type="text"
            id="newsTitle"
            name='title'
            value={data.title}
            onChange={handleChange}
          />
        </div>
        <div>
        <label htmlFor="category">Category:</label>
        <select
          id="category"
          name="category"
          value={data.category}
          onChange={handleChange}
        >
          <option value="" disabled>Select a category</option>
          {categories.map((category) => (
            <option key={category._id} value={category.category}>
              {category.category}
            </option>
          ))}
        </select>
      </div>
        <div>
          <label htmlFor="date">Date:</label>
          <input
            type="date"
            id="date"
            name='date'
            value={data.date}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="newsBody">News Body:</label>
          <textarea
            id="newsBody"
            name='body'
            value={data.body}
            onChange={handleChange}
          />
        </div>
        <div style={{ marginBottom: '5px' }}>
  <label htmlFor="images">Images:</label>
  <input
    type="file"
    id="images"
    name="images"
    multiple
    onChange={handleChange}
  />
  {/* Additional input for image title */}
  <label htmlFor="imageTitle">Image Title:</label>
  <input
    type="text"
    id="imageTitle"
    name="imagetitle"
    value={data.imagetitle}
    onChange={handleChange}
  />
</div>
        <div >
          {data.images.length > 0 && (
            <div >
              <h4>Selected Images:</h4>
              <ul>
                {Array.from(data.images).map((image, index) => (
                  <li key={index}>  <img style={{width:"50px",height:"50px"}}
                  src={URL.createObjectURL(image)}
                  alt={`Preview-${index}`}
                  className="image-preview"
                /></li>
                ))}
              </ul>
            </div>
          )}
        </div>
        <div>
          <label htmlFor="newsBody">Second Paragraph</label>
          <textarea
            id="newsBody"
            name='secondparagraph'
            value={data.secondparagraph}
            onChange={handleChange}
          />
        </div>
        <button type="submit" >
          Add News
        </button>
      </form>
    </div>
  )
}

export default Admin
