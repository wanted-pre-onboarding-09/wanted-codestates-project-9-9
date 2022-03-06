import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

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
function Filter({ clickLatestOrder, clickReviewOrder, clickRandomOrder }) {
  return (
    <FilterBox>
      <FilterBtn type="button" id="date" onClick={clickLatestOrder}>
        최신
      </FilterBtn>
      <FilterBtn type="button" id="review" onClick={clickReviewOrder}>
        리뷰카운트순
      </FilterBtn>
      <FilterBtn type="button" id="random" onClick={clickRandomOrder}>
        랜덤
      </FilterBtn>
    </FilterBox>
  );
}

Filter.propTypes = {
  clickLatestOrder: PropTypes.func.isRequired,
  clickReviewOrder: PropTypes.func.isRequired,
  clickRandomOrder: PropTypes.func.isRequired,
};

export default Filter;
