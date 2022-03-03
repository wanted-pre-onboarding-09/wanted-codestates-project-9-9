import React from 'react';
import styled from 'styled-components';

function ReviewForm() {
  return (
    <ReviewBox>
      <ReviewInput type="text" placeholder="홍길동(으)로 답글 달기" />
      <PostBtn type="button">게시</PostBtn>
    </ReviewBox>
  );
}

export default ReviewForm;

const ReviewBox = styled.div`
  display: flex;
  width: 450px;
  height: 66px;
  border-radius: 30px;
  border: 1px solid #d3d0d0;
  background-color: #fff;
`;

const ReviewInput = styled.input`
  width: 100%;
  padding: 15px 15px 15px 30px;
  border: none;
  font-size: 20px;
  font-weight: 500;
  background-color: transparent;
  &:focus {
    outline: none;
  }
`;

const PostBtn = styled.button`
  width: 90px;
  padding: 15px 30px 15px 15px;
  border: none;
  font-size: 20px;
  font-weight: 500;
  color: #333;
  background-color: transparent;
`;
