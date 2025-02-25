import React from 'react';
import {Link} from 'react-router-dom';
import BannerImage from '../assets/homeimg.jpg'
import '../styles/Home.css'
function Home() {
  return (
    <div className='home' style={{ backgroundImage: `url(${BannerImage})` }}>
        <div className="headerContainer" >
          <h1>Classic Elegance</h1>
          <p>Open-toe heels with pearl embellishments on the straps</p>
          <Link to = "/shoes">
          <button>Order Now</button>
          </Link> 
        </div>
    </div>
  )
}

export default Home