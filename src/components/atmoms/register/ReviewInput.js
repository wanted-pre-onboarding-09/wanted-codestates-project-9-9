import React from 'react';
import styled from 'styled-components';

function ReviewInput() {
  return <StyledTextInput placeholder="리뷰 내용을 입력해 주세요." />;
}

export default ReviewInput;

const StyledTextInput = styled.textarea`
  resize: none;
  width: 100%;
  padding: 20px;
  height: 130px;
  margin: 10px 0;
  border: 1px solid #000;
  border-radius: 5px;
`;
