import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Filter from '../atmoms/Filter';
import ListPage from '../molecules/ListPage';
import RegisterButton from '../atmoms/register/RegisterButton';

function Home() {
  // const reviews = useSelector(({ review }) => review.data);
  return (
    <WholeContainer>
      <Link to="/">{/* <div>ss</div> */}</Link>
      <Wrapper>
        <Filter />
        <Link to="/register">
          <RegisterButton />
        </Link>
      </Wrapper>
      <ListPage />
      &times;
      <Link to="/detail">
        {/* <WholeContainer> */}
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          {/* {reviews.map((review) => (
            <DetailPage review={review} key={review.postNumber} />
          ))} */}
        </div>
        {/* </WholeContainer> */}
      </Link>
    </WholeContainer>
    // import InfiniteList from '../molecules/InfiniteList';
  );
}
export default Home;

const WholeContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
