import React, { useEffect, useState } from "react"
import Header from "./components/common/header/Header"
import "./App.css"

import Footer from "./components/common/footer/Footer"
import { BrowserRouter, Route, Routes } from "react-router-dom";
import SinglePage from "./components/singlePage/SinglePage"
import Culture from "./components/culture/Culture"
// import Homepages from "./components/home/Homes/Homepages";
import Mainpage from "./components/mainpage/Mainpage";
import Admin from "./components/admin/adminaddnews/Admin";
import AdminHome from "./components/admin/Adminhome";
import AdminList from "./components/admin/adminnewList/AdminList";
import AddCategory from "./components/admin/category/AddCategory";
import Detail from "./components/detailnews/Detail";
import Newsdetail from "./components/detailnews/detailbody/Newsdetail";
import Addarticle from "./components/admin/addarticles/Addarticle";
import Auth from "./components/auth/Auth";
import Login from "./components/auth/Login";


const App = () => {

  const [ntoken,setNtoken]=useState("")
  useEffect(()=>{
    const istoken=localStorage.getItem("token")
    console.log(istoken,"trt")
    setNtoken(istoken)

  },[])
  return (
    <>

    
       <BrowserRouter>
      <Routes>
        <Route path="/*" element={
          <>
        <Header />
        <Routes>
       
    
    
          <Route  path='/' element={<Mainpage/>} />
          <Route path="/detailnews/:id" element={<Newsdetail/>}/>
          <Route path='/singlepage/:id' element={<SinglePage/>} />
          <Route  path='/culture' element={<Culture/>} />
          {/* <Route path="/admin" element={<Admin/>}/> */}
          <Route path="/admin" element={ntoken?<AdminHome/>:<Login/>}/>
          <Route path="/addnews" element={ntoken?<Admin/>:<Login/> }/>
          <Route path="/addarticles" element={ntoken?<Addarticle/>:<Login/> }/>
        
          <Route path="/addcategory" element={<AddCategory/>}/>
          {/* <Route path="/register" element={<Auth/>}/> */}
          <Route path="/login" element={<Login/>}/>
          
        </Routes>
      
        <Footer />
          </>
        }/>
        
      </Routes>
       </BrowserRouter>
    </>
  )
}

export default App