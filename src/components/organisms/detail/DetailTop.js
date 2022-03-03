/* eslint-disable react/prop-types */
import React from 'react';
import styled from 'styled-components';
import MoreBtn from '../../../assets/icon-more.png';

const DetailTopWrap = styled.div`
  width: 100%;
  height: 78px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  background: #e6e6e6;
  padding: 10px 10px;

  > .DateBtnWrap {
    min-width: 10rem;
    height: 2rem;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }
`;

const DetailUserId = styled.div`
  max-width: 30%;
  height: 2rem;
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const DetailDate = styled.div`
  font-size: 1rem;
  color: #999999;
  height: 2rem;
  display: flex;
  align-items: center;
`;

const MoreBtnWrap = styled.div`
  width: 10%;
  display: flex;
  justify-content: flex-end;
  > img {
    width: 1rem;
  }
`;

function DetailTop({ data }) {
  return (
    <DetailTopWrap>
      <DetailUserId>{data.nickName}</DetailUserId>
      <div className="DateBtnWrap">
        <DetailDate>{data.date}</DetailDate>
        <MoreBtnWrap>
          <img src={MoreBtn} alt="없음" />
        </MoreBtnWrap>
      </div>
    </DetailTopWrap>
  );
}

export default DetailTop;
