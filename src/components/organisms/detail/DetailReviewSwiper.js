/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react';
import styled from 'styled-components';

const DetailReviewSwiperWrap = styled.div`
  width: 100%;
  min-height: 33px;
  display: flex;
  align-items: center;
  flex-direction: row;
  padding: 20px 20px;
  /* background: #e6e6e6; */
  min-width: 100%;
  overflow-x: scroll;
  ::-webkit-scrollbar {
    /* Chrome, Safari, Opera*/
    display: none;
  }
  -ms-overflow-style: none; /* IE and Edge */

  > .content-title {
    border: 1px solid #999;
    border-radius: 1.1rem;
    padding: 7px;
    min-height: 1rem;
    line-height: 1rem;
    margin-right: 1rem;
    min-width: 14rem;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;

    > .content-que {
      color: #666;
      font-size: 0.9rem;
      margin-right: 0.5rem;
    }
    > .content-ans {
      color: #122f5c;
      font-size: 0.9rem;
    }
  }
`;

function DetailReviewSwiper({ data }) {
  return (
    <DetailReviewSwiperWrap>
      {data.reviewSize.map((review, idx) => {
        return (
          <div
            className="content-title"
            id={`swiperId${idx}`}
            key={idx.toString()}
          >
            <span className="content-que">{review.title}</span>
            <span className="content-ans">{review.txt}</span>
          </div>
        );
      })}
    </DetailReviewSwiperWrap>
  );
}

export default DetailReviewSwiper;
