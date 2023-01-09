import React from 'react'
import { Routes, Route } from 'react-router-dom';

import Home from './routes/Home'
import WatcherView from './routes/WatcherView';

function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/watcher/' element={<WatcherView />} />
      </Routes>
    </div>
  );
}

export default App;