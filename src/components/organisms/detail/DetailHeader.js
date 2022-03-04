import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import LeftBtn from '../../../assets/ic_left_btn.png';
import CloseBtn from '../../../assets/ic_can_btn.png';

const DetailHeaderWrap = styled.div`
  width: 100%;
  height: 78px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  /* background: #bdbdbd; */
  padding: 10px 10px;
`;

const LeftBtnWrap = styled.div`
  width: 3.5rem;
  > img {
    width: 50%;
  }
`;

const HeaderTitle = styled.div`
  font-size: 1.5rem;
  font-weight: 600;
`;

const CloseBtnWrap = styled.div`
  width: 3.5rem;
  display: flex;
  justify-content: flex-end;
  > img {
    width: 50%;
  }
`;

function DetailHaeder() {
  return (
    <DetailHeaderWrap>
      <Link to="/">
        <LeftBtnWrap>
          <img src={LeftBtn} alt="없음" />
        </LeftBtnWrap>
      </Link>
      <HeaderTitle>리뷰 상세보기</HeaderTitle>
      <Link to="/">
        <CloseBtnWrap>
          <img src={CloseBtn} alt="없음" />
        </CloseBtnWrap>
      </Link>
    </DetailHeaderWrap>
  );
}

export default DetailHaeder;
