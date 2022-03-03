import React from 'react';
import styled, { keyframes } from 'styled-components';
import PropTypes from 'prop-types';

const changeColor = keyframes`
  0% {
    color: #848484;
  }
  50% {
    color: #e6e6e6;
  }
  100% {
    color: #848484;
  }
`;

const ShareContainer = styled.span`
  cursor: pointer;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-left: 15px;

  .share-img {
    height: 100%;
    color: #848484;

    &.share-clicked {
      animation: ${changeColor} 4s none;
    }
  }

  .share-title {
    color: #848484;
    font-size: 1rem;
    margin-left: 0.2rem;
    height: 100%;
    padding-top: 2px;

    &.share-clicked {
      animation: ${changeColor} 4s none;
    }
  }
`;

// eslint-disable-next-line react/prop-types
function Share() {
  return <ShareContainer />;
}

Share.propsTypes = {
  url: PropTypes.string.isRequired,
};

export default Share;
