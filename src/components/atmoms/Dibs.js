import React, { useState } from 'react';
import styled from 'styled-components';
import BlackHeart from '../../assets/icons8-heart-96.png';
import WhiteHeart from '../../assets/ic-new-heart-normal.png';

const DibsBtnWrap = styled.div`
  min-width: 30px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  min-height: 2rem;
`;

const WhitesDibsImg = styled.img`
  width: 2rem;
`;

const BlackDibsImg = styled.img`
  width: 2rem;
`;

function Dibs() {
  const [isDibs, setIsDibs] = useState(false);
  const DibsHandler = () => {
    setIsDibs(!isDibs);
  };
  return (
    <DibsBtnWrap onClick={DibsHandler}>
      {isDibs ? (
        <BlackDibsImg src={BlackHeart} />
      ) : (
        <WhitesDibsImg src={WhiteHeart} />
      )}
    </DibsBtnWrap>
  );
}
export default Dibs;
