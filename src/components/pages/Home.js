import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { useSelector, useDispatch } from 'react-redux';
import { RotatingLines } from 'react-loader-spinner';
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
import RegisterButton from '../atmoms/register/RegisterButton';

function Home() {
  const [page, setPage] = useState(true);
  const detailPageData = useSelector((state) => state.review.data);
  const modalValue = useSelector((state) => state.isOpenModal.openValue);
  const dispatch = useDispatch();

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loader = setTimeout(() => setLoading(!loading), 3000);
    dispatch(latestOrder());

    return () => clearTimeout(loader);
  }, []);

  if (page) {
    return (
      <WholeContainer>
        <Wrapper>
          <Filter />
          <Link to="/register">
            <RegisterButton />
          </Link>
        </Wrapper>
        <ListBtn page={page} setPage={setPage} />
        {loading ? (
          <div className="loading-spinner__wrapper">
            <RotatingLines />
          </div>
        ) : (
          <ListPage />
        )}
      </WholeContainer>
    );
  }
  return (
    <WholeContainer>
      <Wrapper>
        <Filter />
        <Link to="/register">
          <RegisterButton />
        </Link>
      </Wrapper>
      <ListBtn page={page} setPage={setPage} />
      <DetailWrap>
        <OneClickTop />
        {modalValue ? <ShareItems /> : ''}
        {loading ? (
          <div className="loading-spinner__wrapper">
            <RotatingLines />
          </div>
        ) : (
          detailPageData.map((dataset) => (
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
          ))
        )}
      </DetailWrap>
    </WholeContainer>
  );
}
export default React.memo(Home);

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

const WholeContainer = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;

  .loading-spinner__wrapper {
    position: absolute;
    top: 400px;
    left: 200px;
  }
`;
const CommentWrapper = styled.div`
  width: 100%;
  padding: 18px 25px;
  background-color: #f9f9f9;
`;
const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
