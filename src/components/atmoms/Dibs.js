import React, { useState } from 'react';
import styled, { keyframes } from 'styled-components';
import { FiHeart } from 'react-icons/fi';
import { FaHeart } from 'react-icons/fa';
import PropTypes from 'prop-types';

const change1 = keyframes`
  0% {
    transform: scale(1.0);
  }
  75% {
    transform: scale(0.3);
  }
  100% {
    transform: scale(0);
  }
`;

const change2 = keyframes`
  0% {
    transform: scale(0);
  }
  75% {
    transform: scale(0.3);
  }
  100% {
    transform: scale(1.0);
  }
`;

const LikesContainer = styled.span`
  width: 30px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  visibility: visible;
`;

const LikesImg = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  width: 100%;
  height: 100%;
  cursor: pointer;
  > .heart-empty {
    position: absolute;
    z-index: 1;
    animation: ${change2} 0.7s forwards;
    &.clicked {
      animation: ${change1} 0.7s forwards;
      z-index: 0;
    }
  }

  > .heart-full {
    position: absolute;
    z-index: 0;
    animation: ${change1} 0.7s forwards;
    &.clicked {
      animation: ${change2} 0.7s forwards;
      z-index: 1;
    }
  }
`;

// eslint-disable-next-line react/prop-types
function Likes({ id, likeCnt }) {
  let newLikeCnt = likeCnt;
  let isLikesBoolean = false;

  if (localStorage.getItem(id)) {
    const moreLike = JSON.parse(localStorage.getItem(id))[0];
    newLikeCnt += moreLike;
    // eslint-disable-next-line prefer-destructuring
    isLikesBoolean = JSON.parse(localStorage.getItem(id))[1];
  }

  const [isLikes, setIsLikes] = useState(isLikesBoolean);
  const [likesNumber, setLikesNumber] = useState(newLikeCnt);

  const LikeHandler = () => {
    if (!isLikes) {
      /* 좋아요를 누르지 않은 경우 */
      setIsLikes(!isLikes);
      setLikesNumber(likesNumber + 1);
      if (localStorage.getItem(id)) {
        const moreLike = JSON.parse(localStorage.getItem(id))[0];
        localStorage.setItem(id, JSON.stringify([moreLike + 1, true]));
      } else {
        localStorage.setItem(id, JSON.stringify([1, true]));
      }
    } else {
      /* 좋아요를 누른 경우 */
      setIsLikes(!isLikes);
      setLikesNumber(likesNumber - 1);
      const moreLike = JSON.parse(localStorage.getItem(id))[0];
      localStorage.setItem(id, JSON.stringify([moreLike - 1, false]));
    }
  };

  return (
    <LikesContainer onClick={LikeHandler}>
      <LikesImg>
        <FaHeart
          className={`heart-full ${isLikes ? 'clicked' : ''}`}
          color="red"
          background="red"
          size="1rem"
          pull="left"
        />
        <FiHeart
          className={`heart-empty ${isLikes ? 'clicked' : ''}`}
          color="#848484"
          size="1rem"
          pull="left"
        />
      </LikesImg>
    </LikesContainer>
  );
}

Likes.propsTypes = {
  id: PropTypes.number,
  likeCnt: PropTypes.number,
  likesNumber: PropTypes.number,
};

export default Likes;
