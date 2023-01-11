import React from 'react'
import Iframe from 'react-iframe'
import Navbar from '../components/navbar/Navbar';
import Footer from '../components/footer/Footer';
import './Home.css'

export const Avatar = () => {
  return (
    <div className="avatar-box">
                        <Navbar />
                        <Iframe url="https://dragverse.readyplayer.me/avatar?frameApi="
                        width="100%"
                        height="1020px"
                        id=""
                        className="avatar-builder"
                        display="block"
                        position="relative"/>
                        <Footer />
    </div>
    
  )
}

export default Avatar