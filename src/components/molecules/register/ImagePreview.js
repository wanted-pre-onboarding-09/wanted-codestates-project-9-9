import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

function ImagePreview({ image, setImage }) {
  return (
    <ImgPreview image={image}>
      {image?.map((el) => (
        <div key={el} className="image-wrapper">
          <img src={el} alt="image-preview" />
          <button
            type="button"
            onClick={() =>
              setImage((prev) => prev.filter((item) => item !== el))
            }
          >
            X
          </button>
        </div>
      ))}
    </ImgPreview>
  );
}

ImagePreview.propTypes = {
  image: PropTypes.arrayOf(PropTypes.string),
  setImage: PropTypes.func.isRequired,
};

ImagePreview.defaultProps = {
  image: null,
};

export default ImagePreview;

const ImgPreview = styled.div`
  width: 100%;
  min-height: 400px;
  height: auto;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 1rem;
  border: 1px solid #000;
  border-radius: 15px;
  margin: 0 auto;
  padding: 1rem;
  .image-wrapper {
    width: 50%;
    position: relative;
  }
  img {
    width: 100%;
    height: 150px;
  }
  button {
    position: absolute;
    top: 0;
    right: 0;
  }
`;
