import React from 'react'
import './App.css';
import Navbar from './components/navbar/Navbar';
import {   LivepeerConfig, createReactClient, studioProvider, Player } from '@livepeer/react';

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

function App() {
  return (
    <div>
      <Navbar />
      <LivepeerConfig client={client} theme={theme}>
      <Player
      title="Next Video Build"
      playbackId="c410ysidtuajn2cf"
      showPipButton
      objectFit="contain"
    />
      </LivepeerConfig>
    </div>
  );
}

export default App;