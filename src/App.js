import React from 'react';
import styled from 'styled-components';
import DetailPage from './components/pages/DetailPage';

const WholeContainer = styled.div`
  display: flex;
  justify-content: center;
  overflow-y: scroll;
`;

function App() {
  return (
    <WholeContainer>
      <DetailPage />
    </WholeContainer>
  );
}

export default App;
