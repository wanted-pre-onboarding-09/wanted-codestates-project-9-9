import React, { useRef, useState } from 'react';
import styled from 'styled-components';

import { AiOutlineCamera } from 'react-icons/ai';
import { FaStar } from 'react-icons/fa';
import ImagePreview from '../../molecules/register/ImagePreview';
import ReviewInput from '../../atmoms/register/ReviewInput';

function RegisterForm() {
  const [files, setFiles] = useState(null);
  const [image, setImage] = useState([]);
  const uploadRef = useRef();
  console.log(files);

  const imageUpload = () => {
    uploadRef.current.click();
  };
  const onLoadFile = (e) => {
    e.preventDefault();
    // [...e.target.files].forEach((item) => console.log(item));
    const { files } = e.target;

    function readAndPreview(file) {
      const reader = new FileReader();

      reader.onloadend = () => {
        const base64 = reader.result;
        if (base64) {
          setImage((prev) => [...prev, base64]);
        }
      };
      reader.onerror = (error) => {
        console.error('Error: ', error);
      };
      reader.readAsDataURL(file);
    }

    if (files) {
      [].forEach.call(files, readAndPreview);
      // [...file].forEach((item) => reader.readAsDataURL(item));
      setFiles(files);
    }
  };
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <Container>
      <ImagePreview image={image} setImage={setImage} />
      <form onSubmit={handleSubmit}>
        <Wrapper>
          <StyledCamera onClick={imageUpload} />
          <input
            type="file"
            multiple
            hidden
            ref={uploadRef}
            onChange={onLoadFile}
          />
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
`;

const StyledCamera = styled(AiOutlineCamera)`
  font-size: 1.5rem;
  margin-right: 1.2rem;
  cursor: pointer;
`;

const StyledStar = styled(FaStar)`
  font-size: 1.5rem;
  color: #e6e6e6;
  /* color: #fcc419; */
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
