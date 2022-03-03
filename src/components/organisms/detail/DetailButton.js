import React from 'react';
import styled from 'styled-components';
import Likes from '../../atmoms/Likes';
import Share from '../../atmoms/Share';
import Dibs from '../../atmoms/Dibs';

const DetailButtonWrap = styled.div`
  width: 100%;
  min-height: 86px;
  /* background: #e6e6e6; */
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 20px;
  cursor: pointer;

  > .LikesShareWrap {
    width: 9rem;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }
`;

function DetailImg() {
  return (
    <DetailButtonWrap>
      <div className="LikesShareWrap">
        <Likes />
        <Share />
      </div>
      <Dibs />
    </DetailButtonWrap>
  );
}

export default DetailImg;
