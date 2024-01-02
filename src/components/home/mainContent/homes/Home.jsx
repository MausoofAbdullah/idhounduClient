import React, { useEffect, useState } from "react"
import Discover from "../../discover/Discover"
import Side from "../../sideContent/side/Side"
import Life from "../life/Life"
import Music from "../musics/Music"
import Popular from "../popular/Popular"
import Ppost from "../Ppost/Ppost"
import "./style.css"

const Homes = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
    <>
      <main>
        
        
            {isMobile ? (
            <div className='container'>
            <section className='mainContent'>
              <Popular className="popularPost" />
            
            <section className='sideContent'>
              <Side isHomepage={true} />
            </section>
              <Life />
              <Ppost />
              <Music />
            </section>
          </div>
            ) : (
               <div className='container'>
              <section className='mainContent'>
                <Popular className="popularPost" />
              
                <Life />
                <Ppost />
                <Music />
              </section>
              <section className='sideContent'>
                <Side isHomepage={true} />
              </section>
            </div>
            
            )}
          
        
      </main>
    </>
  )
}

export default Homes