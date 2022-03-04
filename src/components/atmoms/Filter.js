import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';

import {
  latestOrder,
  reviewOrder,
  randomOrder,
} from '../../store/review/reviewSlice';

const FilterBox = styled.div`
  display: flex;
  justify-content: flex-start;
`;

const FilterBtn = styled.button`
  margin: 1rem;
  padding: 0.5rem 1rem;
  border: 1px solid black;
  border-radius: 20px;
  text-decoration-line: none;
`;
function Filter() {
  const data = useSelector((state) => state.review.data);

  const dispatch = useDispatch();
  const clickLatestOrder = () => {
    dispatch(latestOrder());
    console.log(data);
  };
  const clickReviewOrder = () => {
    dispatch(reviewOrder());
    console.log(data);
  };
  const clickRandomOrder = () => {
    dispatch(randomOrder());
    console.log(data);
  };

  return (
    <FilterBox>
      <FilterBtn id="date" onClick={clickLatestOrder}>
        최신
      </FilterBtn>
      <FilterBtn id="review" onClick={clickReviewOrder}>
        리뷰카운트순
      </FilterBtn>
      <FilterBtn id="random" onClick={clickRandomOrder}>
        랜덤
      </FilterBtn>
    </FilterBox>
  );
}
export default Filter;
