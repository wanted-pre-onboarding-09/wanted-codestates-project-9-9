import React from 'react';
import styled from 'styled-components';
import DetailHeader from '../organisms/DetailHeader';
import DetailTop from '../organisms/DetailTop';
import DetailImg from '../organisms/DetailImg';
import DetailButton from '../organisms/DetailButton';

const DetailWrap = styled.div`
  width: 500px;
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
  background: #bdbdbd;
`;

const DetailRatingWrap = styled.div`
  width: 100%;
  height: 22px;
  background: #bdbdbd;
`;

const DetailBuyOptionWrap = styled.div`
  width: 100%;
  height: 56px;
  background: #e6e6e6;
`;

const DetailCommentWrap = styled.div`
  width: 100%;
  min-height: 100px;
  background: #bdbdbd;
`;

const DetailReviewSwiperWrap = styled.div`
  width: 100%;
  height: 33px;
  background: #e6e6e6;
`;

const DetailDeliveryWrap = styled.div`
  width: 100%;
  min-height: 33px;
  background: #bdbdbd;
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
      <DetailRatingWrap>별 다섯개</DetailRatingWrap>
      <DetailBuyOptionWrap>
        구매옵션명:화이트/화이트골드로고/36.5/몸무게
      </DetailBuyOptionWrap>
      <DetailCommentWrap>좋은 옷 좋은 가격</DetailCommentWrap>
      <DetailReviewSwiperWrap>
        사이즈는 어떤가요? 정사이즈예요
      </DetailReviewSwiperWrap>
      <DetailDeliveryWrap>배송도착까지 21일 소요</DetailDeliveryWrap>
      <DetailRecommendProductSwipeWrap>
        추천상품 슬라이더
      </DetailRecommendProductSwipeWrap>
    </DetailWrap>
  );
}

export default DetailPage;
