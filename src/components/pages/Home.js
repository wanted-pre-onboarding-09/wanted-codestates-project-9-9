import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import ListPage from '../molecules/ListPage';

const WholeContainer = styled.div`
  /* display: flex;
  justify-content: center;
  padding: 100px; */
`;

function Home() {
  return (
    <WholeContainer>
      <Link to="/">
        <ListPage />
        {/* <div>ss</div> */}
      </Link>
      &times;
      <Link to="/detail">
        <div>Detail</div>
      </Link>
    </WholeContainer>
  );
}

export default Home;
