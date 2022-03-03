import React from 'react';
import { AiOutlineArrowLeft, AiOutlineClose } from 'react-icons/ai';
import styled from 'styled-components';

function RegisterHeader() {
  return (
    <Container>
      <AiOutlineArrowLeft size={30} />
      <h2 className="title">리뷰 작성하기</h2>
      <AiOutlineClose size={30} />
    </Container>
  );
}

export default RegisterHeader;

const Container = styled.header`
  display: flex;
  justify-content: space-between;
  .title {
    font-size: 1.5rem;
    font-weight: 700;
  }
`;
