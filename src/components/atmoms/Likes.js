import React, { useState } from 'react';
import styled from 'styled-components';
import EmptyHand from '../../asset/like_hand.png';
import FillHand from '../../asset/like-hand-fill.png';

const LikesBtnWrap = styled.div`
  min-width: 30px;
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
    </LikesBtnWrap>
  );
}

export default Likes;
