import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import DetailPage from './components/pages/DetailPage';
import Home from './components/pages/Home';
import Register from './components/pages/Register';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/detail/:id" element={<DetailPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
