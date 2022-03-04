import React from 'react';
import styled from 'styled-components';
// import InfiniteList from './InfiniteList';
import ReviewList from '../atmoms/ReviewList';
import ListBtn from '../atmoms/ListBtn';

const ListBox = styled.div`
  width: 100%;
  margin: 0 auto;
`;

const ViewBox = styled.div`
  & div {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-auto-rows: 8rem;
    gap: 2px;
  }
  & div img {
    width: 100%;
    height: 100%;
  }
`;

function ListPage() {
  return (
    <ListBox>
      <ListBtn />
      <ViewBox>
        <ReviewList />
        {/* <InfiniteList /> */}
      </ViewBox>
    </ListBox>
  );
}

export default ListPage;
