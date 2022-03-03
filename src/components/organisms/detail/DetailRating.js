/* eslint-disable react/prop-types */
/* eslint-disable array-callback-return */
import React from 'react';
import styled from 'styled-components';
import BlackStar from '../../../assets/icon-star-black.webp';
import WhiteStar from '../../../assets/icon-star-gray.webp';

const RatingStarWrap = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  height: 22px;
  /* background: #bdbdbd; */
  padding: 20px 20px;
`;

const StarImg = styled.img`
  width: 1.5rem;
`;

const starArrayFunc = (xTrue, yFasle) => {
  /* 별 모양 구하는 함수 */
  let starArray = [];
  for (let i = 0; i < xTrue; i += 1) {
    starArray = [...starArray, { id: `srb${i}`, label: BlackStar }];
  }
  for (let i = 0; i < yFasle; i += 1) {
    starArray = [...starArray, { id: `srw${i}`, label: WhiteStar }];
  }
  return starArray;
};

function DetailRating({ data }) {
  const starArray = starArrayFunc(data.rating, 5 - data.rating);
  return (
    <RatingStarWrap>
      {starArray.map((star) => {
        return <StarImg src={star.label} alt="없음" key={star.id} />;
      })}
    </RatingStarWrap>
  );
}

export default DetailRating;
