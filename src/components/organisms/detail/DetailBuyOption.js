import React from 'react';
import styled from 'styled-components';

const DetailBuyOptionWrap = styled.div`
  width: 100%;
  min-height: 56px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 20px;
  /* background: #e6e6e6; */

  > .buy-option-desc {
    color: #999;
    font-size: 1.1rem;
  }
`;

function DetailImg() {
  return (
    <DetailBuyOptionWrap>
      <div className="buy-option-desc">
        구매 옵션명 : 245(EU38) / 사이즈 / 몸무게 : 70 ~ 74kg / 키 : 165 ~ 169cm
        / 평소 신발 사이즈 : 240
      </div>
    </DetailBuyOptionWrap>
  );
}

export default DetailImg;
