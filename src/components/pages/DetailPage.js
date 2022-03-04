/* eslint-disable no-undef */
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
import OneClickTop from '../atmoms/OneClickTop';
import CommentContainer from '../organisms/CommentContainer';

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

const CommentWrapper = styled.div`
  width: 100%;
  padding: 18px 25px;
  background-color: #f9f9f9;
`;

function DetailPage() {
  const detailPageData = useSelector((state) => state.review.data);
  const modalValue = useSelector((state) => state.isOpenModal.openValue);

  return (
    <DetailWrap>
      <OneClickTop />
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
          <DetailReviewSwiper data={dataset} />
          <DetailDelivery data={dataset} />
          <CommentWrapper>
            <CommentContainer review={dataset} />
          </CommentWrapper>
        </>
      ))}
    </DetailWrap>
  );
}
export default DetailPage;
