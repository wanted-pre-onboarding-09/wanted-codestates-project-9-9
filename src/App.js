import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Sort from './components/atmoms/Sort';
import ListPage from './components/molecules/ListPage';
import styled from 'styled-components';
// const WholeContainer = styled.div`
//   display: flex;
//   justify-content: center;
//   overflow-y: scroll;
// `;



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
          <Route path="/detail/:id" element={<DetailPage />} />
        </Routes>
       <Sort />
      <ListPage />
      </WholeContainer>
    </BrowserRouter>
  );
}

export default App;

const WholeContainer = styled.div`
  width: 500px;
  margin: 0 auto;
  overflow-y: scroll;
`;
