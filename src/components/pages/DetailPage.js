import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import DetailHeader from '../organisms/DetailHeader';
import DetailTop from '../organisms/DetailTop';
import DetailImg from '../organisms/DetailImg';
import DetailButton from '../organisms/DetailButton';
import CommentContainer from '../organisms/CommentContainer';

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

const CommentWrapper = styled.div`
  width: 100%;
  padding: 18px 25px;
  background-color: #f9f9f9;
`;

function DetailPage({ review }) {
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
      <CommentWrapper>
        <CommentContainer review={review} />
      </CommentWrapper>
    </DetailWrap>
  );
}
DetailPage.propTypes = {
  review: PropTypes.shape({
    postNumber: PropTypes.number,
    nickName: PropTypes.string,
    contents: PropTypes.string,
    date: PropTypes.string,
    reviewSize: PropTypes.arrayOf(
      PropTypes.shape({
        txt: PropTypes.string,
        title: PropTypes.string,
      }),
    ),
    img: PropTypes.arrayOf(PropTypes.string),
    like: PropTypes.number,
    rating: PropTypes.string,
    deliveryDay: PropTypes.number,
    comments: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number,
        nickname: PropTypes.string,
        date: PropTypes.string,
        contents: PropTypes.string,
        recomment: PropTypes.arrayOf(
          PropTypes.shape({
            id: PropTypes.number,
            nickname: PropTypes.string,
            date: PropTypes.string,
            contents: PropTypes.string,
          }),
        ),
      }),
    ),
  }).isRequired,
};

export default DetailPage;
