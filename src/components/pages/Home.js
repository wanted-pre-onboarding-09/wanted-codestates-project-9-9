import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { useSelector } from 'react-redux';
import ListPage from '../molecules/ListPage';
import DetailPage from './DetailPage';

function Home() {
  const reviews = useSelector(({ review }) => review.data);
  return (
    <WholeContainer>
      <Link to="/">
        <ListPage />
        {/* <div>ss</div> */}
      </Link>
      &times;
      <Link to="/detail">
        <WholeContainer>
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            {reviews.map((review) => (
              <DetailPage review={review} key={review.postNumber} />
            ))}
          </div>
        </WholeContainer>
      </Link>
    </WholeContainer>
  );
}

export default Home;

const WholeContainer = styled.div``;
