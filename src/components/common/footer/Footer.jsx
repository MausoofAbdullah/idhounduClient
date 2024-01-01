import React from "react"
import "./footer.css"

const Footer = () => {
  return (
    <>
      <footer>
        <div className='container'>
          <div className='box logo'>
            <img src='../images/tech-logo-footer.png' alt='' />
            <p>ಇದೊಂದು ಸುದ್ದಿ ಮಾಧ್ಯಮ ಜಗತ್ತಿನಲ್ಲಿ ಸಣ್ಣ ಪ್ರಯತ್ನ ಇದೊಂದು ಸುದ್ದಿಯ ಮೂಲಕ ಕೆಲವೊಂದು ಸುದ್ದಿಗಳನ್ನು ಓದಿರಿ</p>
            <i className='fa fa-envelope'></i>
            <span> idondusuddi@gmail.com </span> <br />
            <i className='fa fa-headphones'></i>
            <span> +91 __________</span>
          </div>
          <div className='box'>
            <h3>SPORT</h3>
            <div className='item'>
              <img src='../images/hero/hero1.jpg' alt='' />
              <p>Some facts are ready to come here</p>
            </div>
            <div className='item'>
              <img src='../images/hero/hero2.jpg' alt='' />
              <p>Some facts are ready to come here</p>
            </div>
          </div>
          <div className='box'>
            <h3>Politics</h3>
            <div className='item'>
              <img src='../images/hero/hero3.jpg' alt='' />
              <p>USome facts are ready to come here</p>
            </div>
            <div className='item'>
              <img src='../images/hero/hero1.jpg' alt='' />
              <p>ReSome facts are ready to come here</p>
            </div>
          </div>
          <div className='box'>
            <h3>LABELS</h3>
            {/*<i className='fa fa-chevron-right'></i>*/}
            <ul>
              <li>
                <span>Politics</span> <label>(5)</label>
              </li>
              <li>
                <span>Fashion</span> <label>(6)</label>
              </li>
              <li>
                <span>Health</span> <label>(7)</label>
              </li>
              <li>
                <span>Nature</span> <label>(9)</label>
              </li>
            </ul>
          </div>
        </div>
      </footer>
      <div className='legal  '>
        <div className='container flexSB'>
          <p>© all rights reserved</p>
          <p>
            made with <i className='fa fa-heart'></i> by idondusuddi
          </p>
        </div>
      </div>
    </>
  )
}

export default Footer