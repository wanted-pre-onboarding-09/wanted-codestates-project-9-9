import React from 'react';
import styled from 'styled-components';
import gridIcon from '../../assets/gridIcon.png';
import detailIcon from '../../assets/detailIcon.png';

const BtnBox = styled.div`
  display: flex;
  width: 100%;
  font-size: 2rem;
`;

const ChangeBtn = styled.div`
  display: flex;
  justify-content: center;
  width: 50%;
  height: 4rem;
  align-items: center;

  img {
    width: 2rem;
    height: 2rem;
  }
`;

function ListBtn() {
  return (
    <BtnBox>
      <ChangeBtn>
        <img alt='"grid"' src={gridIcon} />
      </ChangeBtn>
      <ChangeBtn>
        <img alt='"detail"' src={detailIcon} />
      </ChangeBtn>
    </BtnBox>
  );
}

export default ListBtn;
