/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import {
  increaseLikesNumber,
  decreaseLikesNumber,
} from '../../store/review/reviewSlice';
import EmptyHand from '../../assets/like_hand.png';
import FillHand from '../../assets/like-hand-fill.png';

const LikesBtnWrap = styled.div`
  min-width: 30px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  min-height: 2rem;
`;

const LikesNumberWrap = styled.div`
  min-width: 30px;
  /* background: #bdbdbd; */
  min-height: 2rem;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  font-size: 1.2rem;
  font-weight: bold;
  margin-left: 1rem;
`;

const EmptyHandImg = styled.img`
  width: 2rem;
`;

const FillHandImg = styled.img`
  width: 2rem;
`;

function Likes({ data }) {
  const dispatch = useDispatch();
  const [isLikes, setIsLikes] = useState(!!data.clicked);

  const LikeHandler = () => {
    setIsLikes(!isLikes);

    if (isLikes) {
      dispatch(decreaseLikesNumber(data.postNumber));
    } else {
      dispatch(increaseLikesNumber(data.postNumber));
    }
  };

  return (
    <LikesBtnWrap onClick={LikeHandler}>
      {isLikes ? (
        <FillHandImg src={FillHand} />
      ) : (
        <EmptyHandImg src={EmptyHand} />
      )}
      <LikesNumberWrap>{data.like}</LikesNumberWrap>
    </LikesBtnWrap>
  );
}

export default Likes;
