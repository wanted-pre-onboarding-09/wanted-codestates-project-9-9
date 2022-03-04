import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { useSelector } from 'react-redux';
import { RotatingLines } from 'react-loader-spinner';

import Filter from '../atmoms/Filter';
import ListBtn from '../atmoms/ListBtn';
import ShareItems from '../atmoms/ShareItems';
import OneClickTop from '../atmoms/OneClickTop';
import RegisterButton from '../atmoms/register/RegisterButton';

import DetailTop from '../organisms/detail/DetailTop';
import DetailImg from '../organisms/detail/DetailImg';
import DetailButton from '../organisms/detail/DetailButton';
import DetailRating from '../organisms/detail/DetailRating';
import DetailBuyOption from '../organisms/detail/DetailBuyOption';
import DetailContent from '../organisms/detail/DetailContent';
import DetailReviewSwiper from '../organisms/detail/DetailReviewSwiper';
import DetailDelivery from '../organisms/detail/DetailDelivery';
import CommentContainer from '../organisms/CommentContainer';

import ListPage from '../molecules/ListPage';

function Home() {
  const [page, setPage] = useState(true);
  const detailPageData = useSelector((state) => state.review.data);
  const modalValue = useSelector((state) => state.isOpenModal.openValue);
  const [arr, setArr] = useState([...detailPageData]);

  const [loading, setLoading] = useState(true);

  const clickLatestOrder = () => {
    setArr([...arr.sort((a, b) => b.postNumber - a.postNumber)]);
  };
  const clickReviewOrder = () => {
    setArr([...arr.sort((a, b) => b.comments.length - a.comments.length)]);
  };
  const clickRandomOrder = () => {
    setArr([...arr.sort(() => Math.random() - Math.random())]);
  };

  useEffect(() => {
    const loader = setTimeout(() => setLoading(!loading), 3000);
    clickLatestOrder();

    return () => clearTimeout(loader);
  }, []);

  if (page) {
    return (
      <WholeContainer>
        <Wrapper>
          <Filter
            clickLatestOrder={clickLatestOrder}
            clickReviewOrder={clickReviewOrder}
            clickRandomOrder={clickRandomOrder}
          />
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
          <ListPage arr={arr} />
        )}
      </WholeContainer>
    );
  }
  return (
    <WholeContainer>
      <Wrapper>
        <Filter
          clickLatestOrder={clickLatestOrder}
          clickReviewOrder={clickReviewOrder}
          clickRandomOrder={clickRandomOrder}
        />
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
          arr.map((dataset) => (
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
