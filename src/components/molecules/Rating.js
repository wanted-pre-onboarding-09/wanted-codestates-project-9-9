import React from 'react';
import PropTypes from 'prop-types';
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

Rating.propTypes = {
  active: PropTypes.string.isRequired,
  num: PropTypes.number.isRequired,
  setRating: PropTypes.func.isRequired,
};
