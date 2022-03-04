import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import styled from 'styled-components';
import DetailPage from './components/pages/DetailPage';
import Home from './components/pages/Home';
import Register from './components/pages/Register';

function App() {
  return (
    <BrowserRouter>
      <WholeContainer>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/register" element={<Register />} />
          <Route path="/detail" element={<DetailPage />} />
        </Routes>
      </WholeContainer>
    </BrowserRouter>
  );
}

export default App;

const WholeContainer = styled.div`
  width: 500px;
  height: 100vh;
  margin: 0 auto;
`;
