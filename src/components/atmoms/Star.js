import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { FaStar } from 'react-icons/fa';

function Star({ active }) {
  return <StyledStar className="star" active={active} />;
}

export default Star;

const StyledStar = styled(FaStar)`
  font-size: 1.5rem;
  color: ${({ active }) => {
    return active === 'true' ? `#fcc419` : 'gray';
  }};
  cursor: pointer;
`;

Star.propTypes = {
  active: PropTypes.string.isRequired,
};
