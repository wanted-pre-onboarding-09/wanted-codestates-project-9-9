import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { useSelector, useDispatch } from 'react-redux';
import { latestOrder } from '../../store/review/reviewSlice';
import Filter from '../atmoms/Filter';
import ListPage from '../molecules/ListPage';
import ListBtn from '../atmoms/ListBtn';
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

const WholeContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

function Home() {
  const [page, setPage] = useState(true);
  const detailPageData = useSelector((state) => state.review.data);
  const modalValue = useSelector((state) => state.isOpenModal.openValue);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(latestOrder());
  }, []);
  if (page) {
    return (
      <WholeContainer>
        <Filter />
        <ListBtn page={page} setPage={setPage} />
        <ListPage />
        &times;
      </WholeContainer>
    );
  }
  return (
    <WholeContainer>
      <Filter />
      <ListBtn page={page} setPage={setPage} />
      <OneClickTop />
      {modalValue ? <ShareItems /> : ''}
      {detailPageData.map((dataset) => (
        <div key={dataset.postNumber}>
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
        </div>
      ))}
    </WholeContainer>
  );
}
export default Home;

// const DetailWrap = styled.div`
//   position: relative;
//   max-width: 500px;
//   min-height: 100vh;
//   display: flex;
//   flex-direction: column;
//   justify-content: flex-start;
//   align-items: center;
//   overflow-y: scroll;
//   ::-webkit-scrollbar {
//     /* Chrome, Safari, Opera*/
//     display: none;
//   }
//   -ms-overflow-style: none; /* IE and Edge */
// `;
const CommentWrapper = styled.div`
  width: 100%;
  padding: 18px 25px;
  background-color: #f9f9f9;
`;
