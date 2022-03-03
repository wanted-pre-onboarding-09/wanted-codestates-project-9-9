import React from 'react';
import styled from 'styled-components';
import DetailHeader from '../organisms/detail/DetailHeader';
import DetailTop from '../organisms/detail/DetailTop';
import DetailImg from '../organisms/detail/DetailImg';
import DetailButton from '../organisms/detail/DetailButton';
import DetailRating from '../organisms/detail/DetailRating';
import DetailBuyOption from '../organisms/detail/DetailBuyOption';
import DetailContent from '../organisms/detail/DetailContent';
import DetailReviewSwiper from '../organisms/detail/DetailReviewSwiper';
import DetailDelivery from '../organisms/detail/DetailDelivery';

const DetailWrap = styled.div`
  max-width: 500px;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  overflow-y: scroll;
  ::-webkit-scrollbar {
    /* Chrome, Safari, Opera*/
    display: none;
  }
  -ms-overflow-style: none; /* IE and Edge */
`;

const DetailRecommendProductSwipeWrap = styled.div`
  width: 100%;
  min-height: 315px;
  background: #e6e6e6;
`;

function DetailPage() {
  return (
    <DetailWrap>
      <DetailHeader />
      <DetailTop />
      <DetailImg />
      <DetailButton />
      <DetailRating />
      <DetailBuyOption />
      <DetailContent />
      <DetailReviewSwiper />
      <DetailDelivery />
      <DetailRecommendProductSwipeWrap>
        추천상품 슬라이더
      </DetailRecommendProductSwipeWrap>
    </DetailWrap>
  );
}

export default DetailPage;
