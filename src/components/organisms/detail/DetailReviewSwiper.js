import React from 'react';
import styled from 'styled-components';

const DetailReviewSwiperWrap = styled.div`
  width: 100%;
  min-height: 33px;
  display: flex;
  align-items: center;
  padding: 20px 20px;
  /* background: #e6e6e6; */

  > .content-title {
    border: 1px solid #999;
    border-radius: 1.1rem;
    padding: 7px;
    min-height: 1rem;
    line-height: 1rem;
    margin-right: 1rem;

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

function DetailReviewSwiper() {
  return (
    <DetailReviewSwiperWrap>
      <div className="content-title">
        <span className="content-que">사이즈는 어떤가요?</span>
        <span className="content-ans">정사이즈예요</span>
      </div>
      <div className="content-title">
        <span className="content-que">색상은 어떤가요?</span>
        <span className="content-ans">화면과 같아요</span>
      </div>
    </DetailReviewSwiperWrap>
  );
}

export default DetailReviewSwiper;
