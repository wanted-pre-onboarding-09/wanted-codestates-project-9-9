import React from 'react';
import { AiOutlineArrowLeft, AiOutlineClose } from 'react-icons/ai';
import styled from 'styled-components';

function RegisterHeader() {
  return (
    <Container>
      <StyledArrow />
      <h2 className="title">리뷰 작성하기</h2>
      <StyledClose />
    </Container>
  );
}

export default RegisterHeader;

const Container = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  .title {
    font-size: 1.5rem;
    font-weight: 700;
  }
`;

const StyledArrow = styled(AiOutlineArrowLeft)`
  font-size: 1.5rem;
  cursor: pointer;
`;

const StyledClose = styled(AiOutlineClose)`
  font-size: 1.5rem;
  cursor: pointer;
`;
