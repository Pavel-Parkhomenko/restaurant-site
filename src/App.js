import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import './App.css';

const App = () => (
  <Router>
    <Routes>
      <Route path='/' element={<h1>Hi</h1>} />
  </Routes>
</Router>
);

export default App;