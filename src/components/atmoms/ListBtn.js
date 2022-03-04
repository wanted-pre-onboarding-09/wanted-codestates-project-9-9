import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
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

  img {
    width: 2rem;
    height: 2rem;
  }
`;

function ListBtn({ setPage }) {
  return (
    <BtnBox>
      <ChangeBtn onClick={() => setPage(true)}>
        <img alt='"grid"' src={gridIcon} />
      </ChangeBtn>
      <ChangeBtn onClick={() => setPage(false)}>
        <img alt='"detail"' src={detailIcon} />
      </ChangeBtn>
    </BtnBox>
  );
}

export default ListBtn;

ListBtn.propTypes = {
  setPage: PropTypes.func.isRequired,
};
