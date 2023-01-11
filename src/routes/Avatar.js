import './Avatar.css'
import React from 'react'
import Iframe from 'react-iframe'
import Navbar from '../components/navbar/Navbar';
import Footer from '../components/footer/Footer';


export const Avatar = () => {
  return (
    <div className="avatar-box">
                        <Navbar />
                        <Iframe url="https://dragverse.readyplayer.me/avatar?frameApi="
                        width="100%"
                        height="820px"
                        id=""
                        className="avatar-builder"
                        display="block"
                        position="relative"/>
                        <Footer />
    </div>
    
  )
}

export default Avatar