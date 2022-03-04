import React from 'react';
import PropTypes from 'prop-types';
// import styled from 'styled-components';
// import { FaStar } from 'react-icons/fa';
import Star from '../atmoms/Star';

function Rating({ active, num, setRating }) {
  const onClick = () => {
    setRating(num);
  };

  return (
    <button type="button" onClick={onClick}>
      <Star active={active} />
    </button>
  );
}

export default Rating;

// const StyledStar = styled(FaStar)`
//   font-size: 1.5rem;
//   color: ${({ active }) => {
//     return active === 'true' ? `#fcc419` : 'gray';
//   }};
//   cursor: pointer;
// `;

Rating.propTypes = {
  active: PropTypes.string.isRequired,
  num: PropTypes.number.isRequired,
  setRating: PropTypes.func.isRequired,
};
