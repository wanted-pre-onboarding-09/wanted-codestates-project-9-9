import React from 'react';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';
import ShareRadar from '../../assets/share.png';
import { handleModalValue } from '../../store/modalValue';

const ShareBtnWrap = styled.div`
  min-width: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 2rem;
  margin-left: 1rem;
`;

const ShareImg = styled.img`
  width: 1.8rem;
`;

function Share() {
  const dispatch = useDispatch();

  const handleModal = () => {
    dispatch(handleModalValue());
    document.body.style.overflow = 'hidden';
  };
  return (
    <ShareBtnWrap onClick={handleModal}>
      <ShareImg src={ShareRadar} />
    </ShareBtnWrap>
  );
}
export default Share;
