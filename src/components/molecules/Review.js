import React, { useState } from 'react';
import styled from 'styled-components';
import ReviewForm from './ReviewForm';

function Review() {
  const [isInput, setIsInput] = useState(false);
  const handle = () => {
    setIsInput(!isInput);
  };
  return (
    <ReviewBox>
      <Reviewer>admin</Reviewer>
      <ReviewContent>금주의 베스트 리뷰로 선정되어 상품권 발급</ReviewContent>
      <BottomBox>
        <ReviewDate>52주</ReviewDate>
        <AddBtn type="button" onClick={handle}>
          답글 달기
        </AddBtn>
      </BottomBox>
      {isInput && <ReviewForm />}
    </ReviewBox>
  );
}

export default Review;

const ReviewBox = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 18px;
  background-color: #f9f9f9;
`;

const Reviewer = styled.span`
  font-size: 20px;
  font-weight: 500;
  margin-right: 10px;
`;

const ReviewContent = styled.span`
  font-size: 18px;
`;

const BottomBox = styled.div`
  display: flex;
  margin: 6px 0;
`;

const ReviewDate = styled.p`
  font-size: 15px;
  font-weight: 500;
  color: #999999;
`;

const AddBtn = styled.button`
  margin-left: 20px;
  font-size: 15px;
  font-weight: 500;
  color: #999999;
  background-color: transparent;
  border: none;
`;
