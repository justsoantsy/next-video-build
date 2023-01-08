import React from 'react'
import './App.css';
import Navbar from './components/navbar/Navbar';
import {   LivepeerConfig, createReactClient, studioProvider, Player } from '@livepeer/react';

const client = createReactClient({
  provider: studioProvider({ apiKey: "a4947a51-7a2a-42c1-80d9-38471741c5f1" }),
});

function App() {
  return (
    <div>
      <Navbar />
      <LivepeerConfig client={client}>
      <Player
      title="Next Video Build"
      playbackId="c410ysidtuajn2cf"
      showPipButton
      objectFit="cover"
    />
      </LivepeerConfig>
    </div>
  );
}

export default App;