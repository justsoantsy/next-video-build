import React from 'react'
import Navbar from '../components/navbar/Navbar';
import './Home.css'
import Footer from '../components/footer/Footer';

const Home = () => {
  return (
    <div>
        <Navbar />

        <div className='hero'>
            <div className="title">
                <p> DRAGVERSE</p>
            </div>
            < div className='subtitle'>    
                <p> Decentralized Drag Network </p>
            </div>
            <div className= 'connect'>
            <button  className='button'> Connect with Lens </button>
            </div>
        </div>
        <Footer />
    </div>
    
  )
}

export default Home