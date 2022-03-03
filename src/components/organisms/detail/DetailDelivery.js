/* eslint-disable react/prop-types */
import React from 'react';
import styled from 'styled-components';
import DeliveryBox from '../../../assets/icon-box-20.webp';

const DetailDeliveryWrap = styled.div`
  width: 100%;
  min-height: 100px;
  display: flex;
  align-items: center;
  padding: 20px 20px;
  /* background: #bdbdbd; */

  > .delivery-text {
    color: #020202;
    font-size: 1.2rem;
    font-weight: 500;
  }
`;

const DeliveryImg = styled.img`
  width: 1.5rem;
  margin-right: 0.3rem;
`;

function DetailDelivery({ data }) {
  return (
    <DetailDeliveryWrap>
      <DeliveryImg src={DeliveryBox} />
      <div className="delivery-text">
        배송도착까지 {data.deliveryDay}일 소요
      </div>
    </DetailDeliveryWrap>
  );
}

export default DetailDelivery;
