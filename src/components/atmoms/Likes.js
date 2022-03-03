import React, { useState } from 'react';
import styled from 'styled-components';
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
  font-size: 1.6rem;
`;

const EmptyHandImg = styled.img`
  width: 3rem;
`;

const FillHandImg = styled.img`
  width: 3rem;
`;

function Likes() {
  const [isLikes, setIsLikes] = useState(false);

  const LikeHandler = () => {
    setIsLikes(!isLikes);
  };

  return (
    <LikesBtnWrap onClick={LikeHandler}>
      {isLikes ? (
        <FillHandImg src={FillHand} />
      ) : (
        <EmptyHandImg src={EmptyHand} />
      )}
      <LikesNumberWrap>3</LikesNumberWrap>
    </LikesBtnWrap>
  );
}

export default Likes;
