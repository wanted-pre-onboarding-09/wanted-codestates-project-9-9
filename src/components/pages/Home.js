import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const WholeContainer = styled.div`
  display: flex;
  justify-content: center;
  padding: 100px;
`;

function Home() {
  return (
    <WholeContainer>
      <Link to="/">
        <div>Home</div>
      </Link>
      &times;
      <Link to="/detail">
        <div>Detail</div>
      </Link>
    </WholeContainer>
  );
}

export default Home;
