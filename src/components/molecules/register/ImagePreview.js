import React from 'react';
import styled from 'styled-components';

function ImagePreview() {
  return <ImgPreview />;
}

export default ImagePreview;

const ImgPreview = styled.div`
  width: 100%;
  height: 400px;
  background: ${(props) =>
    props.imgBase64 === '' ? `#fff` : `url(${props.imgBase64})`};
  border: 1px solid #000;
  border-radius: 15px;
  background-size: cover;
  margin: 10px auto;
`;
