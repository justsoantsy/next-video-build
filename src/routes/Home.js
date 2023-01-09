import React from 'react'
import Navbar from '../components/navbar/Navbar';
import './Home.css'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div>
        <Navbar />

        <div className='hero'>
            <div className="intro">
                <p className='title'> DRAGVERSE</p>
                <p className='subtitle'> IS THIS WORKING?</p>
            </div>
            <div className= 'connect'>
            <Link to='/watcher' ><button className='button' >Login wirth Lens</button></Link>
            </div>
        </div>

    </div>
    
  )
}

export default Home