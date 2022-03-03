import React from 'react';
import styled from 'styled-components';
import MoreBtn from '../../../assets/icon-more.png';
import dummyData from '../../../dummy/dummyData';

const DetailTopWrap = styled.div`
  width: 100%;
  height: 78px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  /* background: #e6e6e6; */
  padding: 20px 20px;

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
  font-size: 1.5rem;
  font-weight: bold;
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
    width: 2rem;
  }
`;

function DetailTop() {
  const { userId, date } = dummyData[0];
  return (
    <DetailTopWrap>
      <DetailUserId>{userId}</DetailUserId>
      <div className="DateBtnWrap">
        <DetailDate>{date.slice(0, 10)}</DetailDate>
        <MoreBtnWrap>
          <img src={MoreBtn} alt="없음" />
        </MoreBtnWrap>
      </div>
    </DetailTopWrap>
  );
}

export default DetailTop;
