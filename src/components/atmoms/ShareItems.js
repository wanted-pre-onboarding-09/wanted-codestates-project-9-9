/* eslint-disable react/prop-types */
import React from 'react';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';
import { handleModalValue } from '../../store/modalValue';
import shareFb from '../../assets/btn_share_fb.png';
import shareKs from '../../assets/btn_share_ks.png';
import shareKt from '../../assets/btn_share_kt.png';
import shareTw from '../../assets/btn_share_tw.png';
import shareUrl from '../../assets/btn_share_url.png';

const BackDropWrap = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.1); // 투명 회색 효과
  backdrop-filter: blur(5px); //blur 효과
  z-index: 999;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 20rem;
`;

const DeliveryImg = styled.img`
  width: 4rem;
  margin-top: 2rem;
  border-radius: 0.9rem;
`;

function ShareItems() {
  const dispatch = useDispatch();

  const handleModal = () => {
    dispatch(handleModalValue());
    document.body.style.overflow = 'unset';
  };
  return (
    <BackDropWrap onClick={handleModal}>
      <DeliveryImg src={shareFb} />
      <DeliveryImg src={shareKt} />
      <DeliveryImg src={shareTw} />
      <DeliveryImg src={shareKs} />
      <DeliveryImg src={shareUrl} />
    </BackDropWrap>
  );
}

export default ShareItems;
