import React from 'react'
import ImageNumero from '../Images/ImageNumero.png'


 const Assignment = () => {
  return (
    <div className='main'>
      <div class="section">
        <div class="content">
          <div class="HeroSection">
            <h1 class="heading">FOUNDER’S STYLE SINCE</h1>
            <h1 class="large">1973</h1>
            <p>A lascivious wardrobe statement that can never lose its power.</p>
            <button>Book an appointment</button>
          </div>
          <div class="SideImage">
            {/* <img src={TopLogo} className="TopLogo" alt="logo" /> */}
            <img src={ImageNumero} width="662" height="616" alt="3 Mans"/>
          </div>
        </div>

      </div>
    </div>
  )
}
export default Assignment