import React from 'react';
import styled from 'styled-components';
import { useSelector } from 'react-redux';
import DetailHeader from '../organisms/detail/DetailHeader';
import DetailTop from '../organisms/detail/DetailTop';
import DetailImg from '../organisms/detail/DetailImg';
import DetailButton from '../organisms/detail/DetailButton';
import DetailRating from '../organisms/detail/DetailRating';
import DetailBuyOption from '../organisms/detail/DetailBuyOption';
import DetailContent from '../organisms/detail/DetailContent';
import DetailReviewSwiper from '../organisms/detail/DetailReviewSwiper';
import DetailDelivery from '../organisms/detail/DetailDelivery';
import ShareItems from '../atmoms/ShareItems';

const DetailWrap = styled.div`
  position: relative;
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
  const detailPageData = useSelector((state) => state.detailData.data);
  const modalValue = useSelector((state) => state.isOpenModal.openValue);

  return (
    <DetailWrap>
      {modalValue ? <ShareItems /> : ''}
      <DetailHeader />
      {detailPageData.map((dataset) => (
        <>
          <DetailTop data={dataset} />
          <DetailImg data={dataset} />
          <DetailButton data={dataset} />
          <DetailRating data={dataset} />
          <DetailBuyOption />
          <DetailContent data={dataset} />
          <DetailReviewSwiper />
          <DetailDelivery data={dataset} />
        </>
      ))}
      <DetailRecommendProductSwipeWrap>
        추천상품 슬라이더
      </DetailRecommendProductSwipeWrap>
    </DetailWrap>
  );
}
export default DetailPage;
