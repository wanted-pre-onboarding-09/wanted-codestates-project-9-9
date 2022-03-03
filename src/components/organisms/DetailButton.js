import React from 'react';
import styled from 'styled-components';
import Likes from '../atmoms/Likes';
import Share from '../atmoms/Share';
import Dibs from '../atmoms/Dibs';

const DetailButtonWrap = styled.div`
  width: 100%;
  height: 86px;
  /* background: #e6e6e6; */
  display: flex;
  justify-content: center;
  align-items: center;

  > .DetailImg {
    width: 100%;

    > img {
      width: 100%;
    }
  }
`;

function DetailImg() {
  return (
    <DetailButtonWrap>
      <Likes />
      <Share />
      <Dibs />
    </DetailButtonWrap>
  );
}

export default DetailImg;
