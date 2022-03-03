import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

function ImagePreview({ image }) {
  console.log(image);
  return <ImgPreview image={image} />;
}

ImagePreview.propTypes = {
  image: PropTypes.string,
};

ImagePreview.defaultProps = {
  image: '',
};

export default ImagePreview;

const ImgPreview = styled.div`
  width: 100%;
  height: 400px;
  background: ${(props) =>
    props.image === '' ? `#fff` : `url(${props.image})`};
  border: 1px solid #000;
  border-radius: 15px;
  background-size: cover;
  margin: 10px auto;
`;
