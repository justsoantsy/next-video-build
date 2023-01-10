import React from 'react'
import Navbar from '../components/navbar/Navbar';
import {   LivepeerConfig, createReactClient, studioProvider, Player } from '@livepeer/react';
import './WatcherView.css'
import {HiBadgeCheck} from 'react-icons/hi'
import pfp from '../assets/saltiuseravatar.png'
import Footer from '../components/footer/Footer';



const client = createReactClient({
    provider: studioProvider({ apiKey: "a4947a51-7a2a-42c1-80d9-38471741c5f1" }),
  });

  const theme = {
    borderStyles: {
      containerBorderStyle: 'hidden',
    },
    colors: {
      accent: '#E748E6',
    },
    fonts: {
      display: 'Syne',
    },
    space: {
      controlsBottomMarginX: '10px',
      controlsBottomMarginY: '5px',
      controlsTopMarginX: '15px',
      controlsTopMarginY: '10px',
    },
    radii: {
      slider: '4px',
    },
  };

function WatcherView() {
  return (
    
    <div className='hero'>
        <Navbar />
        <div className='herogrids'>
            <div className='rightgrid'>

             <div className='videoplayer'>
             <LivepeerConfig client={client} theme={theme}>
             <Player
             title="Next Video Build"
             playbackId="c410ysidtuajn2cf"
             showPipButton
             objectFit="contain"
             />
             </LivepeerConfig>
             </div>

             <div className='userinformation'>
              <img className='avatar' src={pfp} alt="DRAGVERSE"/>

              <div className='user'>
                <p>salti</p> <HiBadgeCheck className='verified' />
                <p>salti.lens</p>
             </div>

             <div className='stream'>
              <h1> Livestream Name </h1>
              <p> Details bout this livestream goes here for the user.</p>
             </div>

             </div>

            </div>

            <div className='leftgrid'>
             <h3> JOIN THE CONVERSATION </h3>
            </div>
        </div>
        <Footer />
    </div>
    
  )
}

export default WatcherView