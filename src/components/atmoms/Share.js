import React from 'react';
import styled from 'styled-components';
import ShareRadar from '../../assets/share.png';

const ShareBtnWrap = styled.div`
  min-width: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 2rem;
`;

const ShareImg = styled.img`
  width: 2rem;
`;

function Share() {
  return (
    <ShareBtnWrap>
      <ShareImg src={ShareRadar} />
    </ShareBtnWrap>
  );
}

export default Share;
