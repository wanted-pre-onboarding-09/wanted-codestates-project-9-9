import React from 'react';
import styled from 'styled-components';
import ReviewList from '../atmoms/ReviewList';

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
      <ViewBox>
        <ReviewList />
      </ViewBox>
    </ListBox>
  );
}

export default ListPage;
