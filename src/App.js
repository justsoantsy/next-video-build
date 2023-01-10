import './index.css'
import React from 'react'
import { Routes, Route } from 'react-router-dom';

import Home from './routes/Home';
import WatcherView from './routes/WatcherView';
import Feed from './routes/Feed';

function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/watcher/' element={<WatcherView />} />
        <Route path='/feed/' element={<Feed />} />
      </Routes>
    </div>
  );
}

export default App;