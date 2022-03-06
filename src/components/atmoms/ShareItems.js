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
  position: fixed;
  top: 0%;
  width: 500px;
  height: 100%;
  background: rgba(0, 0, 0, 0.1); // 투명 회색 효과
  backdrop-filter: blur(2px); //blur 효과
  z-index: 997;
  padding-top: 10rem;
`;

const DeliveryImgWrap = styled.div`
  position: absolute;
  top: 30%;
  left: 43%;
  background: transparent;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100vh;
`;

const DeliveryImg = styled.img`
  width: 4rem;
  height: 4rem;
  border-radius: 0.6rem;
  z-index: 999;
  margin: 0.5rem;
  background: transparent;
`;

function ShareItems() {
  const dispatch = useDispatch();

  const handleModal = () => {
    dispatch(handleModalValue());
    document.body.style.overflow = 'unset';
  };
  return (
    <BackDropWrap onClick={handleModal}>
      <DeliveryImgWrap>
        <DeliveryImg src={shareFb} />
        <DeliveryImg src={shareKt} />
        <DeliveryImg src={shareTw} />
        <DeliveryImg src={shareKs} />
        <DeliveryImg src={shareUrl} />
      </DeliveryImgWrap>
    </BackDropWrap>
  );
}

export default ShareItems;
