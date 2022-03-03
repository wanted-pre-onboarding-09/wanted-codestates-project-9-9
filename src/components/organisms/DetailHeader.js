import React from 'react';
import styled from 'styled-components';
import LeftBtn from '../../asset/ic_left_btn.png';
import CloseBtn from '../../asset/ic_can_btn.png';

const DetailHeaderWrap = styled.div`
  width: 100%;
  height: 78px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  background: #bdbdbd;
  padding: 10px 10px;
`;

const LeftBtnWrap = styled.div`
  width: 10%;
  > img {
    width: 50%;
  }
`;

const HeaderTitle = styled.div`
  font-size: 1.5rem;
  font-weight: 600;
`;

const CloseBtnWrap = styled.div`
  width: 10%;
  display: flex;
  justify-content: flex-end;
  > img {
    width: 50%;
  }
`;

function DetailHaeder() {
  return (
    <DetailHeaderWrap>
      <LeftBtnWrap>
        <img src={LeftBtn} alt="없음" />
      </LeftBtnWrap>
      <HeaderTitle>리뷰 상세보기</HeaderTitle>
      <CloseBtnWrap>
        <img src={CloseBtn} alt="없음" />
      </CloseBtnWrap>
    </DetailHeaderWrap>
  );
}

export default DetailHaeder;
