import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
// import styled from 'styled-components';
// import DetailPage from './components/pages/DetailPage';

// const WholeContainer = styled.div`
//   display: flex;
//   justify-content: center;
//   background: rgb(248 248 248);
// `;

function App() {
  return (
    <BrowserRouter>
      <WholeContainer>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/register" element={<Register />} />
          <Route path="/detail/:id" element={<DetailPage />} />
        </Routes>
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
