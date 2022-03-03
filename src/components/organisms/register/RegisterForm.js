import React from 'react';
import styled from 'styled-components';
import { AiOutlineCamera } from 'react-icons/ai';
import { FaStar } from 'react-icons/fa';
import ImagePreview from '../../molecules/register/ImagePreview';
import ReviewInput from '../../atmoms/register/ReviewInput';

function RegisterForm() {
  return (
    <Container>
      <ImagePreview />
      <form action="/" className="review-form">
        <Wrapper>
          <StyledCamera />
          <input id="inputFile" type="file" className="review-file" />
          {Array.from({ length: 5 }, (_, idx) => idx + 1).map((el) => (
            <StyledStar key={el} />
          ))}
        </Wrapper>
        <ReviewInput />
        <SubmitBtn type="submit">저장하기</SubmitBtn>
      </form>
    </Container>
  );
}

export default RegisterForm;

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

const Wrapper = styled.div`
  display: flex;
  input[type='file'] {
    display: none;
  }
`;

const StyledCamera = styled(AiOutlineCamera)`
  font-size: 1.5rem;
  margin-right: 1.2rem;
`;

const StyledStar = styled(FaStar)`
  font-size: 1.5rem;
  color: #fcc419;
`;

const SubmitBtn = styled.button`
  width: 100%;
  height: 60px;
  margin: 10px 0px;
  border: 1px solid #000;
  border-radius: 5px;
  background-color: white;
  font-size: 20px;
  font-weight: 500;
  letter-spacing: 5px;
`;
