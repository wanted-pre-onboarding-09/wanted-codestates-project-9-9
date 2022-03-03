import React from 'react';
import styled from 'styled-components';
import DetailPage from './components/pages/DetailPage';

const WholeContainer = styled.div`
  display: flex;
  justify-content: center;
  background: rgb(248 248 248);
`;

function App() {
  return (
    <WholeContainer>
      <DetailPage />
    </WholeContainer>
  );
}

export default App;
