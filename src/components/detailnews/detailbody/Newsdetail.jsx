import React from 'react'
import Ppost from '../../home/mainContent/Ppost/Ppost'
import Life from '../../home/mainContent/life/Life'
import Music from '../../home/mainContent/musics/Music'
import Side from '../../home/sideContent/side/Side'
import "./Newdetail.css"
import Detail from '../Detail'

const Newsdetail = () => {
  return (
    <>
    <main>
      <div className='container'>
        <section className='mainContent'>
          <Detail />
        
          <Life />
          <Ppost />
          {/* <Music /> */}
        </section>
        <section className='sideContent'>
          <Side />
        </section>
      </div>
    </main>
  </>
  )
}

export default Newsdetail
