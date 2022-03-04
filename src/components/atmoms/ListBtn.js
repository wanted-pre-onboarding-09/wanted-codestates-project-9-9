import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import gridIcon from '../../assets/gridIcon.png';
import detailIcon from '../../assets/detailIcon.png';

const BtnBox = styled.button`
  display: flex;
  width: 100%;
  font-size: 2rem;
`;

const ChangeBtn = styled.button`
  display: flex;
  justify-content: center;
  width: 50%;
  height: 4rem;
  align-items: center;
  opacity: ${({ tab }) => {
    return tab ? '1' : '0.5';
  }};
  border-bottom: ${({ tab }) => {
    return tab ? '3px solid #000' : 'none';
  }};
  cursor: pointer;
  img {
    width: 2rem;
    height: 2rem;
  }
`;

function ListBtn({ setPage }) {
  const [grid, setGrid] = useState(true);
  const [detail, setDetail] = useState(false);
  const detailBtn = () => {
    setDetail(true);
    setGrid(false);
    setPage(false);
  };
  const gridBtn = () => {
    setGrid(true);
    setDetail(false);
    setPage(true);
  };
  return (
    <BtnBox>
      <ChangeBtn tab={grid} onClick={gridBtn}>
        <img alt='"grid"' src={gridIcon} />
      </ChangeBtn>
      <ChangeBtn tab={detail} onClick={detailBtn}>
        <img alt='"detail"' src={detailIcon} />
      </ChangeBtn>
    </BtnBox>
  );
}

ListBtn.propTypes = {
  setPage: PropTypes.func.isRequired,
};

export default ListBtn;
